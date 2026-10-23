// src/post/closeHoles.js
//=============================================================
// CLOSE HOLES — opt-in centroid fan over boundary loops
//=============================================================
// For each loop up to maxLoopEdges: one Steiner PoolVertex at the
// loop centroid, fanned to every loop edge. Loops run each edge in
// its triangle's direction (validateMesh), so a fan triangle
// (b, a, c) on edge a -> b runs it the other way: winding stays
// consistent. A 3-edge loop gets one triangle and no Steiner.
//
// Never throws for a loop it cannot fill; it returns it:
//   - longer than maxLoopEdges,
//   - not simple (a vertex repeats) or not closed,
//   - runs along a break line edge (never crossed or capped),
//   - a fan edge would get a third face.
//=============================================================

import { buildEdgeMap, poolEdgeKey } from "../bms/edges.js";

/**
 * @param {{pool: Object, soup: Array<Object>, constraintPoolEdges?: Set<string>}} bms - soup is appended to
 * @param {import("../validate/validateMesh.js").MeshResult} mesh
 * @param {{maxLoopEdges?: number}} [options]
 * @returns {{added: number, unfilledLoops: number[][]}}
 */
export function closeHoles(bms, mesh, options) {
	var maxLoopEdges = options && options.maxLoopEdges !== undefined ? options.maxLoopEdges : 200;
	var cons = bms.constraintPoolEdges || new Set();
	var edges = buildEdgeMap(bms.soup);
	var byId = bms.pool.getAll();
	var added = 0, unfilled = [];

	function faces(a, b) {
		var l = edges.get(poolEdgeKey(a, b));
		return l ? l.length : 0;
	}
	function push(a, b, c) {
		var t = { v0: a, v1: b, v2: c, mesh: "A", origIdx: bms.soup.length };
		bms.soup.push(t);
		var vs = [a.id, b.id, c.id];
		for (var e = 0; e < 3; e++) {
			var k = poolEdgeKey(vs[e], vs[(e + 1) % 3]);
			if (!edges.has(k)) edges.set(k, []);
			edges.get(k).push(t.origIdx);
		}
		added++;
	}

	var loops = mesh.boundaryLoops || [];
	for (var i = 0; i < loops.length; i++) {
		var loop = loops[i];
		var n = loop.length;
		var ok = n >= 3 && n <= maxLoopEdges && new Set(loop).size === n;
		for (var e = 0; ok && e < n; e++) {
			var a = loop[e], b = loop[(e + 1) % n];
			if (faces(a, b) !== 1 || cons.has(poolEdgeKey(a, b))) ok = false;
		}
		if (!ok) { unfilled.push(loop); continue; }

		if (n === 3) {
			push(byId[loop[2]], byId[loop[1]], byId[loop[0]]);
			continue;
		}
		var cx = 0, cy = 0, cz = 0;
		for (var j = 0; j < n; j++) { var v = byId[loop[j]]; cx += v.x; cy += v.y; cz += v.z; }
		var c = bms.pool.getOrCreate(cx / n, cy / n, cz / n);
		var fanOk = loop.indexOf(c.id) < 0;
		for (var f = 0; fanOk && f < n; f++) if (faces(loop[f], c.id) > 0) fanOk = false;
		if (!fanOk) { unfilled.push(loop); continue; }
		for (var g = 0; g < n; g++) push(byId[loop[(g + 1) % n]], byId[loop[g]], c);
	}
	return { added: added, unfilledLoops: unfilled };
}
