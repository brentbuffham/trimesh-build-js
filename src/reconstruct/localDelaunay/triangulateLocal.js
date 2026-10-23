// src/reconstruct/localDelaunay/triangulateLocal.js
//=============================================================
// TRIANGULATE ONE PATCH — keep only the source's umbrella
//=============================================================
// Delaunator on the projected patch; Constrainautor forces the
// break line segments when the patch has any. If Constrainautor
// throws (crossing or point-on-edge constraints in projection),
// fall back to the plain triangulation and say so.
//
// Only triangles touching patch index 0 (the source) are kept: the
// rest belong to other points' umbrellas and get their votes there.
// Winding is NOT fixed here; orientMesh does it on the whole mesh.
//=============================================================

import Delaunator from "delaunator";
import Constrainautor from "@kninnug/constrainautor";

var MIN_AREA_FACTOR = 1e-12;

/**
 * @param {Float64Array} coords2D - patch-local [u, v] pairs; index 0 is the source
 * @param {number[]} patchIds - vertex id of patch index j + 1
 * @param {number} sourceId - vertex id of patch index 0
 * @param {number} scale - median neighbour distance (for the area floor)
 * @param {Array<[number, number]>} edges2D - patch-local constraint pairs
 * @returns {{triangles: number[], constraintFailure: boolean}} global ids, 3 per triangle
 */
export function triangulateLocal(coords2D, patchIds, sourceId, scale, edges2D) {
	var del = new Delaunator(coords2D);
	var failed = false;
	if (edges2D && edges2D.length) {
		try {
			var con = new Constrainautor(del);
			for (var e = 0; e < edges2D.length; e++) con.constrainOne(edges2D[e][0], edges2D[e][1]);
		} catch (err) {
			failed = true;
			del = new Delaunator(coords2D);
		}
	}

	var T = del.triangles;
	var minArea2 = 2 * MIN_AREA_FACTOR * scale * scale;
	var out = [];
	for (var t = 0; t < T.length; t += 3) {
		var a = T[t], b = T[t + 1], c = T[t + 2];
		if (a !== 0 && b !== 0 && c !== 0) continue;
		var ax = coords2D[2 * a], ay = coords2D[2 * a + 1];
		var cross = (coords2D[2 * b] - ax) * (coords2D[2 * c + 1] - ay) - (coords2D[2 * b + 1] - ay) * (coords2D[2 * c] - ax);
		if (Math.abs(cross) < minArea2) continue;
		out.push(a === 0 ? sourceId : patchIds[a - 1], b === 0 ? sourceId : patchIds[b - 1], c === 0 ? sourceId : patchIds[c - 1]);
	}
	return { triangles: out, constraintFailure: failed };
}
