// src/post/fillGaps.js
//=============================================================
// FILL GAPS — repair voting gaps, on by default
//=============================================================
// Neighbouring patches sometimes split their votes and leave a tiny
// hole of a few edges. A loop of <= maxGapEdges edges (default 6)
// spans about two point spacings: smaller than the sampling can
// resolve, so it is a reconstruction defect, not a hole in the data.
// Real holes (occlusion, the scan edge) are left for closeHoles.
//
// Triangulated with trimesh-boolean triangulateLoop on the loop's own
// PoolVertex objects: no Steiner points. Run orientMesh afterwards to
// make the new triangles' winding agree with their neighbours.
//=============================================================

import { triangulateLoop } from "trimesh-boolean";
import { buildEdgeMap, poolEdgeKey } from "../bms/edges.js";

/**
 * @param {{pool: Object, soup: Array<Object>, constraintPoolEdges?: Set<string>}} bms - soup is appended to
 * @param {import("../validate/validateMesh.js").MeshResult} mesh
 * @param {number} maxGapEdges - 0 disables
 * @returns {{filled: number, triangles: number}}
 */
export function fillGaps(bms, mesh, maxGapEdges) {
	if (!(maxGapEdges >= 3)) return { filled: 0, triangles: 0 };
	var cons = bms.constraintPoolEdges || new Set();
	var edges = buildEdgeMap(bms.soup);
	var byId = bms.pool.getAll();
	var filled = 0, added = 0;

	function faces(a, b) {
		var l = edges.get(poolEdgeKey(a, b));
		return l ? l.length : 0;
	}

	var loops = mesh.boundaryLoops || [];
	for (var i = 0; i < loops.length; i++) {
		var loop = loops[i], n = loop.length;
		if (n < 3 || n > maxGapEdges || new Set(loop).size !== n) continue;
		var onLoop = new Set();
		var ok = true;
		for (var e = 0; e < n && ok; e++) {
			var k = poolEdgeKey(loop[e], loop[(e + 1) % n]);
			onLoop.add(k);
			if (faces(loop[e], loop[(e + 1) % n]) !== 1 || cons.has(k)) ok = false;
		}
		if (!ok) continue;

		var tris = triangulateLoop(loop.map(function (id) { return byId[id]; }));
		if (tris.length !== n - 2) continue;
		// Diagonals must be new edges, or the fill would over-share one
		for (var t = 0; t < tris.length && ok; t++) {
			var vs = [tris[t].v0.id, tris[t].v1.id, tris[t].v2.id];
			if (vs[0] === vs[1] || vs[1] === vs[2] || vs[0] === vs[2]) ok = false;
			for (var d = 0; d < 3 && ok; d++) {
				var a = vs[d], b = vs[(d + 1) % 3];
				if (!onLoop.has(poolEdgeKey(a, b)) && faces(a, b) > 0) ok = false;
			}
		}
		if (!ok) continue;

		for (var s = 0; s < tris.length; s++) {
			var tri = { v0: tris[s].v0, v1: tris[s].v1, v2: tris[s].v2, mesh: "A", origIdx: bms.soup.length };
			bms.soup.push(tri);
			var ids = [tri.v0.id, tri.v1.id, tri.v2.id];
			for (var g = 0; g < 3; g++) {
				var key = poolEdgeKey(ids[g], ids[(g + 1) % 3]);
				if (!edges.has(key)) edges.set(key, []);
				edges.get(key).push(tri.origIdx);
			}
			added++;
		}
		filled++;
	}
	return { filled: filled, triangles: added };
}
