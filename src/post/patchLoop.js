// src/post/patchLoop.js
//=============================================================
// PATCH LOOP — fill one chosen boundary loop (Kirra's "Fill")
//=============================================================
// Ported from Kirra's Mesh Edit loop fill (LocalVoidFill.js
// fillLoopWithTriangles): triangulate the loop on its own vertices
// with trimesh-boolean triangulateLoop, and turn each fill triangle
// to agree with the mesh triangle across a shared loop edge. Here
// edges are matched by PoolVertex id (exact) rather than rounded keys.
//
// method "fan"      - triangulateLoop: no new points (Kirra Fill).
// method "centroid" - one new point at the loop centroid, fanned to
//                     every loop edge; suits big, roughly round holes.
//
// A loop that cannot be patched is refused with a reason, never thrown:
// not simple, not all open edges, along a break line, or a patch that
// would give an edge a third face. closeHoles and fillGaps use the same
// per-loop core (patchLoopIds).
//=============================================================

import { triangulateLoop } from "trimesh-boolean";
import { buildEdgeMap, poolEdgeKey } from "../bms/edges.js";
import { orientMesh } from "../bms/orientMesh.js";
import { validateMesh } from "../validate/validateMesh.js";

// true when triangle t runs edge a -> b
function runs(t, a, b) {
	var i0 = t.v0.id, i1 = t.v1.id, i2 = t.v2.id;
	return (i0 === a && i1 === b) || (i1 === a && i2 === b) || (i2 === a && i0 === b);
}

/**
 * Patch one loop of PoolVertex ids into bms.soup. The caller re-orients
 * (orientMesh) and re-validates afterwards.
 * @param {{pool: Object, soup: Array<Object>, constraintPoolEdges?: Set<string>}} bms - soup is appended to
 * @param {Map<string, number[]>} edges - buildEdgeMap(bms.soup), kept up to date here
 * @param {number[]} loop - PoolVertex ids in order, not repeated at the end
 * @param {"fan"|"centroid"} method
 * @returns {{added: number, reason: string|null}}
 */
export function patchLoopIds(bms, edges, loop, method) {
	var cons = bms.constraintPoolEdges || new Set();
	var byId = bms.pool.getAll();
	var n = loop.length;
	function faces(a, b) {
		var l = edges.get(poolEdgeKey(a, b));
		return l ? l.length : 0;
	}

	if (n < 3) return { added: 0, reason: "a loop needs at least 3 vertices" };
	if (new Set(loop).size !== n) return { added: 0, reason: "not a simple loop (a vertex repeats)" };
	var onLoop = new Set();
	for (var e = 0; e < n; e++) {
		var a = loop[e], b = loop[(e + 1) % n], k = poolEdgeKey(a, b);
		if (cons.has(k)) return { added: 0, reason: "runs along a break line" };
		if (faces(a, b) !== 1) return { added: 0, reason: "edge " + a + "-" + b + " is not an open edge" };
		onLoop.add(k);
	}

	var tris = [];
	if (method === "centroid" && n > 3) {
		var cx = 0, cy = 0, cz = 0;
		for (var j = 0; j < n; j++) { var v = byId[loop[j]]; cx += v.x; cy += v.y; cz += v.z; }
		var before = bms.pool.size();
		var c = bms.pool.getOrCreate(cx / n, cy / n, cz / n);
		if (bms.pool.size() === before) return { added: 0, reason: "the centroid lands on an existing vertex; use method fan" };
		for (var g = 0; g < n; g++) tris.push({ v0: byId[loop[g]], v1: byId[loop[(g + 1) % n]], v2: c });
	} else {
		var tl = triangulateLoop(loop.map(function (id) { return byId[id]; }));
		if (tl.length !== n - 2) return { added: 0, reason: "the loop could not be triangulated on its own vertices" };
		for (var t = 0; t < tl.length; t++) {
			var ids = [tl[t].v0.id, tl[t].v1.id, tl[t].v2.id];
			if (ids[0] === ids[1] || ids[1] === ids[2] || ids[0] === ids[2]) return { added: 0, reason: "the triangulation is degenerate" };
			for (var d = 0; d < 3; d++) {
				var p = ids[d], q = ids[(d + 1) % 3];
				if (!onLoop.has(poolEdgeKey(p, q)) && faces(p, q) > 0) return { added: 0, reason: "the patch would give an edge a third face" };
			}
			tris.push({ v0: tl[t].v0, v1: tl[t].v1, v2: tl[t].v2 });
		}
	}

	// Kirra's orientation rule, on exact edges: a fill triangle that shares a
	// loop edge with the mesh runs it the opposite way to the mesh triangle.
	for (var f = 0; f < tris.length; f++) {
		var tri = tris[f], vs = [tri.v0.id, tri.v1.id, tri.v2.id];
		for (var s = 0; s < 3; s++) {
			var ea = vs[s], eb = vs[(s + 1) % 3];
			var list = onLoop.has(poolEdgeKey(ea, eb)) ? edges.get(poolEdgeKey(ea, eb)) : null;
			if (!list) continue;
			if (runs(bms.soup[list[0]], ea, eb)) { var x = tri.v1; tri.v1 = tri.v2; tri.v2 = x; }
			break;
		}
	}

	for (var w = 0; w < tris.length; w++) {
		var nt = { v0: tris[w].v0, v1: tris[w].v1, v2: tris[w].v2, mesh: "A", origIdx: bms.soup.length };
		bms.soup.push(nt);
		var nv = [nt.v0.id, nt.v1.id, nt.v2.id];
		for (var z = 0; z < 3; z++) {
			var key = poolEdgeKey(nv[z], nv[(z + 1) % 3]);
			if (!edges.has(key)) edges.set(key, []);
			edges.get(key).push(nt.origIdx);
		}
	}
	return { added: tris.length, reason: null };
}

// A loop given as an index, PoolVertex ids, or world points [x, y, z] / {x, y, z}
function resolveLoop(result, loop) {
	if (typeof loop === "number") {
		var l = result.mesh.boundaryLoops[loop];
		return l ? { ids: l } : { reason: "no boundary loop " + loop };
	}
	if (!Array.isArray(loop)) return { reason: "a loop is an index, an array of vertex ids, or an array of points" };
	if (loop.every(function (v) { return typeof v === "number"; })) return { ids: loop };

	// World points: match each to a vertex on an open loop, within the weld tolerance
	var o = result.origin, byId = result.pool.getAll();
	var tol = Math.max(result.report && result.report.tolerance || 0, 1e-6);
	var candidates = new Set();
	result.mesh.boundaryLoops.forEach(function (bl) { bl.forEach(function (id) { candidates.add(id); }); });
	var ids = [];
	for (var i = 0; i < loop.length; i++) {
		var p = loop[i];
		var px = (Array.isArray(p) ? p[0] : p.x) - o.x, py = (Array.isArray(p) ? p[1] : p.y) - o.y, pz = (Array.isArray(p) ? p[2] : p.z) - o.z;
		var best = -1, bd = tol;
		candidates.forEach(function (id) {
			var v = byId[id], dd = Math.hypot(v.x - px, v.y - py, v.z - pz);
			if (dd <= bd) { bd = dd; best = id; }
		});
		if (best < 0) return { reason: "point " + i + " is not a mesh vertex on an open loop" };
		ids.push(best);
	}
	return { ids: ids };
}

function bmsOf(result) {
	return {
		pool: result.pool,
		soup: result.soup,
		constraintPoolEdges: result.constraintPoolEdges,
		constrainedPairs: result.constrainedPairs
	};
}

function refresh(result, bms) {
	var orient = orientMesh(bms, result.viewpoints || null);
	result.mesh = validateMesh(bms, orient.orientation);
	if (result.report) result.report.orientation = { perComponent: orient.perComponent };
}

/**
 * Patch one boundary loop of a buildMesh result, then re-orient and
 * re-validate it (result.mesh is replaced).
 * @param {Object} result - from buildMesh; changed in place
 * @param {number|number[]|Array<number[]|{x: number, y: number, z: number}>} loop -
 *   an index into result.mesh.boundaryLoops, PoolVertex ids, or world points
 * @param {{method?: "fan"|"centroid"}} [options] - method default "fan" (Kirra's Fill)
 * @returns {{added: number, refused: Array<{loop: *, reason: string}>}}
 */
export function patchLoop(result, loop, options) {
	var method = options && options.method === "centroid" ? "centroid" : "fan";
	var r = resolveLoop(result, loop);
	if (!r.ids) return { added: 0, refused: [{ loop: loop, reason: r.reason }] };
	var bms = bmsOf(result);
	var p = patchLoopIds(bms, buildEdgeMap(bms.soup), r.ids, method);
	if (p.reason) return { added: 0, refused: [{ loop: loop, reason: p.reason }] };
	refresh(result, bms);
	return { added: p.added, refused: [] };
}

/**
 * Patch every boundary loop with at most maxEdges edges (or the loops given).
 * @param {Object} result - from buildMesh; changed in place
 * @param {{maxEdges?: number, loops?: Array, method?: "fan"|"centroid"}} [options]
 * @returns {{added: number, patched: number, refused: Array<{loop: *, reason: string}>}}
 */
export function patchLoops(result, options) {
	var opts = options || {};
	var method = opts.method === "centroid" ? "centroid" : "fan";
	var maxEdges = opts.maxEdges !== undefined ? opts.maxEdges : Infinity;
	var bms = bmsOf(result);
	var edges = buildEdgeMap(bms.soup);
	var added = 0, patched = 0, refused = [];
	var loops = opts.loops || result.mesh.boundaryLoops.filter(function (l) { return l.length <= maxEdges; });
	for (var i = 0; i < loops.length; i++) {
		var r = resolveLoop(result, loops[i]);
		if (!r.ids) { refused.push({ loop: loops[i], reason: r.reason }); continue; }
		var p = patchLoopIds(bms, edges, r.ids, method);
		if (p.reason) refused.push({ loop: loops[i], reason: p.reason });
		else { added += p.added; patched++; }
	}
	if (patched > 0) refresh(result, bms);
	return { added: added, patched: patched, refused: refused };
}
