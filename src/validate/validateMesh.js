// src/validate/validateMesh.js
//=============================================================
// VALIDATE MESH — report what the mesh is, never fail on it
//=============================================================
// Edge use decides everything:
//   1 face  -> boundary (a hole, the scan edge, or a break line that
//              ends mid-surface)
//   2 faces -> interior
//   3+      -> non-manifold
// closed = no 1-face and no 3+ edges. A break line edge used once is
// left out of boundaryEdgeCount (it is intentional) but still stops
// closed being true.
//
// pointInside is a ray-parity test for closed meshes. Whether inside
// means void or rock is the caller's call, from the convention that
// normals point out of rock into the void.
//=============================================================

import { computeSignedVolume } from "trimesh-boolean";
import { buildEdgeMap, poolEdgeKey } from "../bms/edges.js";

/**
 * @typedef {Object} MeshResult
 * @property {boolean} closed
 * @property {number[][]} boundaryLoops - PoolVertex ids in loop order
 * @property {number} boundaryEdgeCount - 1-face edges that are not break line edges
 * @property {number} nonManifoldEdgeCount
 * @property {number|null} enclosedVolume - null unless closed
 * @property {Array<{a: number, b: number}>} constrainedEdges - break line edges present in the mesh
 * @property {string} orientation
 */

// Trace loops from directed boundary edges (each in its triangle's direction).
function traceLoops(soup, edges) {
	var next = new Map();
	var count = 0;
	edges.forEach(function (list) {
		if (list.length !== 1) return;
		var t = soup[list[0]];
		var vs = [t.v0.id, t.v1.id, t.v2.id];
		for (var e = 0; e < 3; e++) {
			var a = vs[e], b = vs[(e + 1) % 3];
			var l2 = edges.get(poolEdgeKey(a, b));
			if (l2 === list) {
				if (!next.has(a)) next.set(a, []);
				next.get(a).push(b);
				count++;
				break;
			}
		}
	});
	var loops = [];
	var starts = Array.from(next.keys()).sort(function (x, y) { return x - y; });
	for (var s = 0; s < starts.length; s++) {
		var start = starts[s];
		while (next.get(start) && next.get(start).length) {
			var loop = [start];
			var cur = next.get(start).shift();
			var guard = count + 1;
			while (cur !== start && guard-- > 0) {
				loop.push(cur);
				var outs = next.get(cur);
				if (!outs || outs.length === 0) break; // open chain (inconsistent winding)
				cur = outs.shift();
			}
			loops.push(loop);
		}
	}
	return loops;
}

/**
 * @param {{soup: Array<Object>, constraintPoolEdges?: Set<string>, constrainedPairs?: Array<{a: number, b: number}>}} bms
 * @param {string} orientation - from orientMesh
 * @returns {MeshResult}
 */
export function validateMesh(bms, orientation) {
	var soup = bms.soup;
	var edges = buildEdgeMap(soup);
	var cons = bms.constraintPoolEdges || new Set();
	var oneFace = 0, boundary = 0, nonManifold = 0;
	edges.forEach(function (list, key) {
		if (list.length === 1) {
			oneFace++;
			if (!cons.has(key)) boundary++;
		} else if (list.length > 2) nonManifold++;
	});
	var closed = soup.length > 0 && oneFace === 0 && nonManifold === 0;
	var constrainedEdges = (bms.constrainedPairs || []).filter(function (p) {
		return edges.has(poolEdgeKey(p.a, p.b));
	});
	return {
		closed: closed,
		boundaryLoops: oneFace ? traceLoops(soup, edges) : [],
		boundaryEdgeCount: boundary,
		nonManifoldEdgeCount: nonManifold,
		enclosedVolume: closed ? Math.abs(computeSignedVolume(soup)) : null,
		constrainedEdges: constrainedEdges,
		orientation: orientation
	};
}

// Fixed, slightly skewed direction so rays rarely graze an edge exactly
var RAY = (function () {
	var d = [1e-4, 2e-4, 1], l = Math.hypot(d[0], d[1], d[2]);
	return [d[0] / l, d[1] / l, d[2] / l];
})();

/**
 * Ray parity: odd crossings = inside the closed surface.
 * @param {{soup: Array<Object>}} bms
 * @param {number[]} p - origin-shifted [x, y, z]
 * @returns {boolean}
 */
export function pointInside(bms, p) {
	var hits = 0, d = RAY;
	var soup = bms.soup;
	for (var i = 0; i < soup.length; i++) {
		var t = soup[i];
		// Moller-Trumbore
		var e1x = t.v1.x - t.v0.x, e1y = t.v1.y - t.v0.y, e1z = t.v1.z - t.v0.z;
		var e2x = t.v2.x - t.v0.x, e2y = t.v2.y - t.v0.y, e2z = t.v2.z - t.v0.z;
		var px = d[1] * e2z - d[2] * e2y, py = d[2] * e2x - d[0] * e2z, pz = d[0] * e2y - d[1] * e2x;
		var det = e1x * px + e1y * py + e1z * pz;
		if (Math.abs(det) < 1e-15) continue;
		var inv = 1 / det;
		var sx = p[0] - t.v0.x, sy = p[1] - t.v0.y, sz = p[2] - t.v0.z;
		var u = (sx * px + sy * py + sz * pz) * inv;
		if (u < 0 || u > 1) continue;
		var qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x;
		var v = (d[0] * qx + d[1] * qy + d[2] * qz) * inv;
		if (v < 0 || u + v > 1) continue;
		var tt = (e2x * qx + e2y * qy + e2z * qz) * inv;
		if (tt > 0) hits++;
	}
	return (hits & 1) === 1;
}
