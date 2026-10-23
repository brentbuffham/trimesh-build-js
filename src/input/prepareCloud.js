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
//=============================================================

import { buildIndex, nearestPoints, pointNormals } from "las-laz-js";
import { TrimeshBuildError, ERROR_CODES } from "../errors.js";

var SPACING_SAMPLE = 10000;

/**
 * @typedef {Object} PreparedCloud
 * @property {Float64Array} coords - origin-shifted XYZ, 3 per point
 * @property {number} count
 * @property {{x: number, y: number, z: number}} origin
 * @property {{min: number[], max: number[]}} bounds - shifted
 * @property {Object} index - las-laz-js PointIndex over coords
 * @property {Float32Array} normals - 3 per point; sign not meaningful
 * @property {number} medianSpacing
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
 * Median nearest-neighbour distance over an even stride of up to 10,000 points.
 * @param {Object} index - las-laz-js PointIndex
 * @param {Float64Array} coords
 * @param {number} count
 * @returns {number}
 */
export function estimateMedianSpacing(index, coords, count) {
	var step = Math.max(1, Math.floor(count / SPACING_SAMPLE));
	var d = [];
	for (var i = 0; i < count; i += step) {
		var r = nearestPoints(index, [coords[3 * i], coords[3 * i + 1], coords[3 * i + 2]], 2);
		if (r.d.length === 2 && r.d[1] > 0) d.push(r.d[1]);
	}
	return median(d);
}

/**
 * @param {Object} cols - las-laz-js columns: { count, positions } or { count, x, y, z }
 * @param {{origin?: {x: number, y: number, z: number}, normals?: Float32Array, k?: number, maxRadiusMultiplier?: number}} [options]
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
	for (var i = 0; i < n; i++) {
		for (var a = 0; a < 3; a++) {
			if (!isFinite(rd.get(i, a))) throw bad(ERROR_CODES.INVALID_INPUT, "point " + i + " has a non-finite coordinate");
		}
	}

	var origin;
	if (opts.origin) {
		origin = { x: opts.origin.x, y: opts.origin.y, z: opts.origin.z };
	} else {
		// Mean relative to point 0, so the running sum stays small at UTM scale
		var bx = rd.get(0, 0), by = rd.get(0, 1), bz = rd.get(0, 2);
		var sx = 0, sy = 0, sz = 0;
		for (var m = 0; m < n; m++) { sx += rd.get(m, 0) - bx; sy += rd.get(m, 1) - by; sz += rd.get(m, 2) - bz; }
		origin = { x: bx + sx / n, y: by + sy / n, z: bz + sz / n };
	}

	var coords = new Float64Array(3 * n);
	var min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
	var o = [origin.x, origin.y, origin.z];
	for (var j = 0; j < n; j++) {
		for (var b = 0; b < 3; b++) {
			var v = rd.get(j, b) - o[b];
			coords[3 * j + b] = v;
			if (v < min[b]) min[b] = v;
			if (v > max[b]) max[b] = v;
		}
	}

	var shifted = { count: n, positions: coords };
	var index = buildIndex(shifted);
	var medianSpacing = estimateMedianSpacing(index, coords, n);

	var normals = opts.normals;
	if (!normals) {
		// k = 20 reaches about 2.5 spacings; 4x the cull multiple leaves room
		var k = opts.k || 20;
		var mult = opts.maxRadiusMultiplier || 3;
		normals = pointNormals(shifted, { k: k, maxDistance: mult * medianSpacing * 4 }).normal;
	} else if (normals.length !== 3 * n) {
		throw bad(ERROR_CODES.INVALID_INPUT, "options.normals must have 3 x count values");
	}

	return {
		coords: coords,
		count: n,
		origin: origin,
		bounds: { min: min, max: max },
		index: index,
		normals: normals,
		medianSpacing: medianSpacing
	};
}
