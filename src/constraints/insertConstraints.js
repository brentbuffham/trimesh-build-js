// src/constraints/insertConstraints.js
//=============================================================
// INSERT CONSTRAINTS — break lines into the global vertex ids
//=============================================================
// Break line vertices are inserted ONCE, globally, as ids
// count..count+m-1. Every segment is split to no longer than the
// median point spacing, so it always fits inside a patch and every
// patch that sees it sees the same ids (no patch-local Steiners).
//
// Rejected: two break lines that cross, or that touch where one is
// not at an endpoint (a T). Endpoint-to-endpoint junctions are fine.
// Cloud points within breaklineSnap of a line are dropped so they
// cannot form slivers against it.
//=============================================================

import { buildIndex, pointsInRadius } from "las-laz-js";
import { edgeKey } from "trimesh-boolean";
import { TrimeshBuildError, ERROR_CODES } from "../errors.js";

var ENDPOINT_EPS = 1e-9;

/**
 * @typedef {Object} ConstraintSet
 * @property {number} firstId - id of the first break line vertex (= cloud.count)
 * @property {number} count - break line vertices
 * @property {Float64Array} coords - origin-shifted XYZ of those vertices
 * @property {Uint32Array} segments - vertex id pairs
 * @property {Map<number, number[]>} segmentsByVertex
 * @property {Set<string>} edgeKeys - edgeKey of id strings
 * @property {Object|null} index - las-laz-js PointIndex over coords
 * @property {Uint8Array|null} dropped - 1 for cloud points too close to a line
 * @property {{dropped: number, nearTolerance: number}} snapReport
 */

/**
 * @param {import("../input/prepareCloud.js").PreparedCloud} cloud
 * @returns {ConstraintSet}
 */
export function EMPTY_CONSTRAINTS(cloud) {
	return {
		firstId: cloud.count,
		count: 0,
		coords: new Float64Array(0),
		segments: new Uint32Array(0),
		segmentsByVertex: new Map(),
		edgeKeys: new Set(),
		index: null,
		dropped: null,
		snapReport: { dropped: 0, nearTolerance: 0 }
	};
}

// Closest points of segments p0-p1 and q0-q1 (Ericson, RTCD 5.1.9).
// Returns { d, s, t } with s, t the clamped parameters.
function segSeg(p0, p1, q0, q1) {
	var d1 = [p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]];
	var d2 = [q1[0] - q0[0], q1[1] - q0[1], q1[2] - q0[2]];
	var r = [p0[0] - q0[0], p0[1] - q0[1], p0[2] - q0[2]];
	var a = dot(d1, d1), e = dot(d2, d2), f = dot(d2, r);
	var s, t;
	if (a <= 1e-30 && e <= 1e-30) { s = 0; t = 0; }
	else if (a <= 1e-30) { s = 0; t = clamp(f / e); }
	else {
		var c = dot(d1, r);
		if (e <= 1e-30) { t = 0; s = clamp(-c / a); }
		else {
			var b = dot(d1, d2), den = a * e - b * b;
			s = den > 1e-30 ? clamp((b * f - c * e) / den) : 0;
			t = (b * s + f) / e;
			if (t < 0) { t = 0; s = clamp(-c / a); }
			else if (t > 1) { t = 1; s = clamp((b - c) / a); }
		}
	}
	var dx = p0[0] + d1[0] * s - (q0[0] + d2[0] * t);
	var dy = p0[1] + d1[1] * s - (q0[1] + d2[1] * t);
	var dz = p0[2] + d1[2] * s - (q0[2] + d2[2] * t);
	return { d: Math.sqrt(dx * dx + dy * dy + dz * dz), s: s, t: t };
}

function dot(u, v) { return u[0] * v[0] + u[1] * v[1] + u[2] * v[2]; }
function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
function atEnd(x) { return x < ENDPOINT_EPS || x > 1 - ENDPOINT_EPS; }

function pointSegDist(px, py, pz, a, b) {
	var dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
	var L = dx * dx + dy * dy + dz * dz;
	var t = L > 0 ? clamp(((px - a[0]) * dx + (py - a[1]) * dy + (pz - a[2]) * dz) / L) : 0;
	var ex = a[0] + dx * t - px, ey = a[1] + dy * t - py, ez = a[2] + dz * t - pz;
	return Math.sqrt(ex * ex + ey * ey + ez * ez);
}

// Original (unsplit) segments, origin-shifted: { line, seg, a, b, lo, hi }
function originalSegments(cloud, breaklines) {
	var o = [cloud.origin.x, cloud.origin.y, cloud.origin.z];
	var out = [];
	for (var L = 0; L < breaklines.length; L++) {
		var bl = breaklines[L];
		if (!bl || !Array.isArray(bl.vertices)) throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "breakline " + L + " needs a vertices array");
		var vs = bl.vertices.map(function (v, i) {
			if (!v || !isFinite(v[0]) || !isFinite(v[1]) || !isFinite(v[2])) {
				throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "breakline " + L + " vertex " + i + " is not a finite [x, y, z]");
			}
			return [v[0] - o[0], v[1] - o[1], v[2] - o[2]];
		});
		var n = vs.length, segCount = bl.closedLoop ? n : n - 1;
		for (var s = 0; s < segCount; s++) {
			var a = vs[s], b = vs[(s + 1) % n];
			if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) continue;
			out.push({
				line: L, seg: s, a: a, b: b, closed: !!bl.closedLoop, segCount: segCount,
				lo: [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2])],
				hi: [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])]
			});
		}
	}
	return out;
}

function adjacent(x, y) {
	if (x.line !== y.line) return false;
	var d = Math.abs(x.seg - y.seg);
	return d === 1 || (x.closed && d === x.segCount - 1);
}

function checkCrossings(segs, tol) {
	for (var i = 0; i < segs.length; i++) {
		var x = segs[i];
		for (var j = i + 1; j < segs.length; j++) {
			var y = segs[j];
			if (adjacent(x, y)) continue;
			if (x.lo[0] > y.hi[0] + tol || y.lo[0] > x.hi[0] + tol ||
				x.lo[1] > y.hi[1] + tol || y.lo[1] > x.hi[1] + tol ||
				x.lo[2] > y.hi[2] + tol || y.lo[2] > x.hi[2] + tol) continue;
			var r = segSeg(x.a, x.b, y.a, y.b);
			if (r.d >= tol) continue;
			if (atEnd(r.s) && atEnd(r.t)) continue; // endpoint junction
			throw new TrimeshBuildError(ERROR_CODES.CROSSING_BREAKLINES,
				"breakline " + x.line + " segment " + x.seg + " meets breakline " + y.line + " segment " + y.seg +
				" away from an endpoint (" + r.d.toExponential(2) + " apart); split or move one of them");
		}
	}
}

/**
 * @param {import("../input/prepareCloud.js").PreparedCloud} cloud
 * @param {Array<{vertices: Array<number[]>, closedLoop: boolean}>} breaklines - world coordinates
 * @param {{tolerance?: number, breaklineSnap?: number}} [options]
 * @returns {ConstraintSet}
 */
export function insertConstraints(cloud, breaklines, options) {
	if (!breaklines || breaklines.length === 0) return EMPTY_CONSTRAINTS(cloud);
	var opts = options || {};
	var tol = opts.tolerance !== undefined ? opts.tolerance : Math.max(0.001, 0.25 * cloud.medianSpacing);
	var snap = opts.breaklineSnap !== undefined ? opts.breaklineSnap : 0.001;
	var maxLen = cloud.medianSpacing;

	var segs = originalSegments(cloud, breaklines);
	checkCrossings(segs, tol);

	// Split into pieces no longer than the median spacing; shared vertices
	// between consecutive segments of a line get one id.
	var coords = [];
	var segOut = [];
	var firstId = cloud.count;
	function newVertex(p) {
		coords.push(p[0], p[1], p[2]);
		return firstId + coords.length / 3 - 1;
	}
	// Walk each line's segments in order; a segment starts where the last
	// one ended, and a closed loop's last segment ends on the first vertex.
	var byLine = new Map();
	segs.forEach(function (sg) {
		if (!byLine.has(sg.line)) byLine.set(sg.line, []);
		byLine.get(sg.line).push(sg);
	});
	byLine.forEach(function (list) {
		var firstVertex = -1, prevEnd = null, prevEndId = -1;
		for (var i = 0; i < list.length; i++) {
			var sg = list[i];
			var startId = prevEnd === sg.a ? prevEndId : newVertex(sg.a);
			if (firstVertex < 0) firstVertex = startId;
			var closesLoop = sg.closed && i === list.length - 1 && sg.b === list[0].a;
			var len = Math.hypot(sg.b[0] - sg.a[0], sg.b[1] - sg.a[1], sg.b[2] - sg.a[2]);
			var pieces = Math.max(1, Math.ceil(len / maxLen - 1e-9));
			var prev = startId;
			for (var p = 1; p <= pieces; p++) {
				var f = p / pieces;
				var id = p === pieces && closesLoop ? firstVertex
					: newVertex([sg.a[0] + (sg.b[0] - sg.a[0]) * f, sg.a[1] + (sg.b[1] - sg.a[1]) * f, sg.a[2] + (sg.b[2] - sg.a[2]) * f]);
				segOut.push(prev, id);
				prev = id;
			}
			prevEnd = sg.b;
			prevEndId = prev;
		}
	});

	var m = coords.length / 3;
	var coordArr = Float64Array.from(coords);
	var segments = Uint32Array.from(segOut);
	var byVertex = new Map();
	var keys = new Set();
	for (var s = 0; s < segments.length; s += 2) {
		var a = segments[s], b = segments[s + 1];
		if (!byVertex.has(a)) byVertex.set(a, []);
		if (!byVertex.has(b)) byVertex.set(b, []);
		byVertex.get(a).push(b);
		byVertex.get(b).push(a);
		keys.add(edgeKey(String(a), String(b)));
	}

	// Drop cloud points that sit on a line
	var dropped = new Uint8Array(cloud.count);
	var nDropped = 0, nNear = 0;
	var C = cloud.coords;
	for (var k = 0; k < segs.length; k++) {
		var g = segs[k];
		var mid = [(g.a[0] + g.b[0]) / 2, (g.a[1] + g.b[1]) / 2, (g.a[2] + g.b[2]) / 2];
		var half = Math.hypot(g.b[0] - g.a[0], g.b[1] - g.a[1], g.b[2] - g.a[2]) / 2;
		var near = pointsInRadius(cloud.index, mid, half + Math.max(tol, snap));
		for (var n = 0; n < near.length; n++) {
			var q = near[n];
			if (dropped[q] === 1) continue;
			var d = pointSegDist(C[3 * q], C[3 * q + 1], C[3 * q + 2], g.a, g.b);
			if (d < snap) { dropped[q] = 1; nDropped++; }
			else if (d < tol && dropped[q] !== 2) { dropped[q] = 2; nNear++; }
		}
	}
	for (var z = 0; z < dropped.length; z++) if (dropped[z] === 2) dropped[z] = 0;

	return {
		firstId: firstId,
		count: m,
		coords: coordArr,
		segments: segments,
		segmentsByVertex: byVertex,
		edgeKeys: keys,
		index: buildIndex({ count: m, positions: coordArr }),
		dropped: dropped,
		snapReport: { dropped: nDropped, nearTolerance: nNear }
	};
}
