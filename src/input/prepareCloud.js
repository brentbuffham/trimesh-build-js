// src/input/prepareCloud.js
//=============================================================
// PREPARE CLOUD — las-laz-js columns in, origin-shifted Float64 out
//=============================================================
// Mine coordinates (e.g. 6,771,000 m north) lose ~0.5 m in Float32,
// so every stage works on coordinates shifted by an origin. A Float32
// cloud must already be shifted, so it must come with its origin.
//
// Builds the las-laz-js neighbour index on the shifted coordinates,
// estimates the median point spacing from a sample, and takes the
// caller's normals or computes them with las-laz-js pointNormals.
// Points closer than the weld tolerance are merged first (3D), so the
// pool never welds two ids that both voted.
//=============================================================

import { buildIndex, nearestPoints, pointNormals, dedupeSelection } from "las-laz-js";
import { TrimeshBuildError, ERROR_CODES } from "../errors.js";

var SPACING_SAMPLE = 10000;
var SPACING_LOOK = 8;        // neighbours searched past exact duplicates
var DISTINCT = 1e-9;        // closer than this is the same point
var MIN_TOLERANCE = 0.001;  // 1 mm floor on the default weld tolerance

/**
 * @typedef {Object} PreparedCloud
 * @property {Float64Array} coords - origin-shifted XYZ, 3 per point
 * @property {number} count
 * @property {{x: number, y: number, z: number}} origin
 * @property {{min: number[], max: number[]}} bounds - shifted
 * @property {Object} index - las-laz-js PointIndex over coords
 * @property {Float32Array|null} normals - 3 per point; sign not meaningful (null with deferNormals)
 * @property {{k: number, maxDistance: number}} normalOptions - the pointNormals options used (or to use)
 * @property {number} medianSpacing - of distinct points
 * @property {number} tolerance - weld distance (default max(1 mm, 0.25 x spacing))
 * @property {number} mergedAtTolerance - input points merged into a neighbour closer than tolerance
 */

function bad(code, message) {
	return new TrimeshBuildError(code, message);
}

// Column accessor: { get(i, axis), isFloat32 }
function readerOf(cols) {
	if (cols === null || typeof cols !== "object") throw bad(ERROR_CODES.INVALID_INPUT, "cols must be a las-laz-js columns object { count, positions } or { count, x, y, z }");
	var n = cols.count;
	if (typeof n !== "number" || !Number.isInteger(n) || n < 0) throw bad(ERROR_CODES.INVALID_INPUT, "cols.count must be a whole number, not " + String(n));
	if (cols.positions && cols.positions.length === 3 * n) {
		var p = cols.positions;
		return { isFloat32: p instanceof Float32Array, get: function (i, a) { return p[3 * i + a]; } };
	}
	if (cols.x && cols.y && cols.z && cols.x.length === n && cols.y.length === n && cols.z.length === n) {
		var axes = [cols.x, cols.y, cols.z];
		return { isFloat32: cols.x instanceof Float32Array, get: function (i, a) { return axes[a][i]; } };
	}
	throw bad(ERROR_CODES.INVALID_INPUT, "cols needs a positions column of length 3 x count, or x, y, z columns of length count");
}

function median(values) {
	if (values.length === 0) return NaN;
	var s = Float64Array.from(values).sort();
	return s[(s.length - 1) >> 1];
}

/**
 * Median distance to the nearest DISTINCT neighbour over an even stride of up
 * to 10,000 points. Exact duplicates are looked past (up to 8 neighbours), so a
 * cloud where every point has a twin still gets its real spacing.
 * @param {Object} index - las-laz-js PointIndex
 * @param {Float64Array} coords
 * @param {number} count
 * @returns {number} NaN when no sampled point has a distinct neighbour
 */
export function estimateMedianSpacing(index, coords, count) {
	var step = Math.max(1, Math.floor(count / SPACING_SAMPLE));
	var d = [];
	for (var i = 0; i < count; i += step) {
		var r = nearestPoints(index, [coords[3 * i], coords[3 * i + 1], coords[3 * i + 2]], SPACING_LOOK);
		for (var j = 1; j < r.d.length; j++) {
			if (r.d[j] > DISTINCT) { d.push(r.d[j]); break; }
		}
	}
	return median(d);
}

// las-laz-js dedupe reads x, y, z columns
function xyzOf(coords, n) {
	var x = new Float64Array(n), y = new Float64Array(n), z = new Float64Array(n);
	for (var i = 0; i < n; i++) { x[i] = coords[3 * i]; y[i] = coords[3 * i + 1]; z[i] = coords[3 * i + 2]; }
	return { count: n, x: x, y: y, z: z };
}

// Keep only the selected points (and their caller normals)
function compact(coords, normals, sel) {
	if (sel.length === coords.length / 3) return { coords: coords, normals: normals, count: sel.length };
	var kc = new Float64Array(3 * sel.length);
	var kn = normals ? new Float32Array(3 * sel.length) : null;
	for (var s = 0; s < sel.length; s++) {
		var q = sel[s];
		for (var a = 0; a < 3; a++) {
			kc[3 * s + a] = coords[3 * q + a];
			if (kn) kn[3 * s + a] = normals[3 * q + a];
		}
	}
	return { coords: kc, normals: kn, count: sel.length };
}

function finiteOr(o, name) {
	if (!o || !isFinite(o.x) || !isFinite(o.y) || !isFinite(o.z)) {
		throw bad(ERROR_CODES.INVALID_INPUT, name + " must be { x, y, z } with finite numbers");
	}
	return { x: o.x, y: o.y, z: o.z };
}

/**
 * @param {Object} cols - las-laz-js columns: { count, positions } or { count, x, y, z }.
 *   Float64: world coordinates. Float32: already shifted by options.origin (required).
 * @param {{origin?: {x: number, y: number, z: number}, normals?: Float32Array, tolerance?: number,
 *   k?: number, maxRadiusMultiplier?: number, minSpacing?: number, deferNormals?: boolean}} [options] - minSpacing: no two
 *   points are closer than this (already thinned), so merge passes below it are skipped
 * @returns {PreparedCloud}
 */
export function prepareCloud(cols, options) {
	var opts = options || {};
	var rd = readerOf(cols);
	var n = cols.count;
	if (n < 3) throw bad(ERROR_CODES.TOO_FEW_POINTS, "need at least 3 points, got " + n);
	if (rd.isFloat32 && !opts.origin) {
		throw bad(ERROR_CODES.NEEDS_ORIGIN, "a Float32 cloud cannot hold mine coordinates; pass options.origin (the shift it was written with)");
	}
	if (opts.tolerance !== undefined && !(opts.tolerance > 0 && isFinite(opts.tolerance))) {
		throw bad(ERROR_CODES.INVALID_INPUT, "tolerance must be a finite distance > 0");
	}
	var k = opts.k === undefined ? 20 : opts.k;
	var radiusMultiplier = opts.maxRadiusMultiplier === undefined ? 3 : opts.maxRadiusMultiplier;
	if (!(Number.isInteger(k) && k >= 1)) throw bad(ERROR_CODES.INVALID_INPUT, "k must be a whole number >= 1, not " + String(k));
	if (!(radiusMultiplier > 0 && isFinite(radiusMultiplier))) {
		throw bad(ERROR_CODES.INVALID_INPUT, "maxRadiusMultiplier must be a finite number > 0, not " + String(radiusMultiplier));
	}
	if (opts.normals && opts.normals.length !== 3 * n) {
		throw bad(ERROR_CODES.INVALID_INPUT, "options.normals must have 3 x count values");
	}
	for (var i = 0; i < n; i++) {
		for (var a = 0; a < 3; a++) {
			if (!isFinite(rd.get(i, a))) throw bad(ERROR_CODES.INVALID_INPUT, "point " + i + " has a non-finite coordinate");
		}
	}

	var origin;
	if (opts.origin) {
		origin = finiteOr(opts.origin, "origin");
	} else {
		// Mean relative to point 0, so the running sum stays small at UTM scale
		var bx = rd.get(0, 0), by = rd.get(0, 1), bz = rd.get(0, 2);
		var sx = 0, sy = 0, sz = 0;
		for (var m = 0; m < n; m++) { sx += rd.get(m, 0) - bx; sy += rd.get(m, 1) - by; sz += rd.get(m, 2) - bz; }
		origin = { x: bx + sx / n, y: by + sy / n, z: bz + sz / n };
	}

	// Float32 values are already world - origin; Float64 values are world
	var o = rd.isFloat32 ? [0, 0, 0] : [origin.x, origin.y, origin.z];
	var coords = new Float64Array(3 * n);
	for (var j = 0; j < n; j++) {
		for (var b = 0; b < 3; b++) coords[3 * j + b] = rd.get(j, b) - o[b];
	}

	// Exact duplicates first (they hide the real spacing), then everything the
	// BMS pool would weld: two ids it merges must not both vote, nor fill each
	// other's kNN slots. Both merges are 3D and happen before the index and normals.
	var normals = opts.normals;
	var total = n;
	// minSpacing: the caller already thinned to this (buildMesh thin), so no
	// two points are closer and a merge pass below it would find nothing.
	var minSpacing = opts.minSpacing > 0 ? opts.minSpacing : 0;
	var c0 = minSpacing > 0 ? { coords: coords, normals: normals, count: n }
		: compact(coords, normals, dedupeSelection(xyzOf(coords, n), DISTINCT, { z: true }).keep);
	coords = c0.coords; normals = c0.normals; n = c0.count;
	var medianSpacing = estimateMedianSpacing(buildIndex({ count: n, positions: coords }), coords, n);
	if (n < 3 || !(medianSpacing > 0)) throw bad(ERROR_CODES.TOO_FEW_POINTS, "only " + n + " distinct points");
	var tolerance = opts.tolerance !== undefined ? opts.tolerance : Math.max(MIN_TOLERANCE, 0.25 * medianSpacing);
	var c1 = tolerance <= minSpacing ? { coords: coords, normals: normals, count: n }
		: compact(coords, normals, dedupeSelection(xyzOf(coords, n), tolerance, { z: true }).keep);
	var spacingChanged = c1.count !== n;
	coords = c1.coords; normals = c1.normals; n = c1.count;
	var merged = total - n;
	if (n < 3) throw bad(ERROR_CODES.TOO_FEW_POINTS, "only " + n + " points are further apart than the weld tolerance");
	var min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
	for (var p = 0; p < n; p++) {
		for (var c = 0; c < 3; c++) {
			var v = coords[3 * p + c];
			if (v < min[c]) min[c] = v;
			if (v > max[c]) max[c] = v;
		}
	}

	var shifted = { count: n, positions: coords };
	var index = buildIndex(shifted);
	if (spacingChanged) medianSpacing = estimateMedianSpacing(index, coords, n);

	// k = 20 reaches about 2.5 spacings; 4x the cull multiple leaves room
	var normalOptions = { k: k, maxDistance: radiusMultiplier * medianSpacing * 4 };
	// deferNormals: the caller fits them (buildMeshAsync splits the fit across workers)
	if (!normals && !opts.deferNormals) normals = pointNormals(shifted, normalOptions).normal;

	return {
		coords: coords,
		count: n,
		origin: origin,
		bounds: { min: min, max: max },
		index: index,
		normals: normals || null,
		medianSpacing: medianSpacing,
		tolerance: tolerance,
		mergedAtTolerance: merged,
		normalOptions: normalOptions
	};
}
