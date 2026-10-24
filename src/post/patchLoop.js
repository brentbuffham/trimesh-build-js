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
// method "fan"       - triangulateLoop: no new points (Kirra Fill).
// method "centroid"  - one new point at the loop centroid, fanned to
//                      every loop edge; suits big, roughly round holes.
// method "vertexFan" - fan from one loop vertex, trying each in turn.
// method "auto"      - (default) fan, then centroid, then vertexFan:
//                      cave loops are rarely flat, so Kirra's fan alone
//                      refuses most of them.
// Figure-8 loops arrive already split (validateMesh), so each lobe is
// patched on its own.
//
// A loop that cannot be patched is refused with a reason, never thrown:
// not simple, not all open edges, along a break line, or a patch that
// would give an edge a third face. closeHoles and fillGaps use the same
// per-loop core (patchLoopIds).
//=============================================================

import { triangulateLoop } from "trimesh-boolean";
import { edgesOf, markCurrent, poolEdgeKey } from "../bms/edges.js";
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
 * @param {import("../bms/edges.js").EdgeTable} edges - edgesOf(bms), kept up to date here (call markCurrent after)
 * @param {number[]} loop - PoolVertex ids in order, not repeated at the end
 * @param {"auto"|"fan"|"centroid"|"vertexFan"} method - auto tries fan, centroid, vertexFan
 * @returns {{added: number, reason: string|null, method: string|null}} method actually used
 */
export function patchLoopIds(bms, edges, loop, method) {
	var cons = bms.constraintPoolEdges || new Set();
	var byId = bms.pool.getAll();
	var n = loop.length;
	function faces(a, b) {
		return edges.count(poolEdgeKey(a, b));
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

	// A new edge that is not on the loop must not exist in the mesh already
	function diagonalsFree(tl) {
		for (var t = 0; t < tl.length; t++) {
			var ids = [tl[t].v0.id, tl[t].v1.id, tl[t].v2.id];
			if (ids[0] === ids[1] || ids[1] === ids[2] || ids[0] === ids[2]) return false;
			for (var d = 0; d < 3; d++) {
				var p = ids[d], q = ids[(d + 1) % 3];
				if (!onLoop.has(poolEdgeKey(p, q)) && faces(p, q) > 0) return false;
			}
		}
		return true;
	}

	// fan: trimesh-boolean triangulateLoop on the loop's own vertices (Kirra Fill)
	function fanTris() {
		var tl = triangulateLoop(loop.map(function (id) { return byId[id]; }));
		if (tl.length !== n - 2) return { reason: "the loop could not be triangulated on its own vertices" };
		if (!diagonalsFree(tl)) return { reason: "the patch would give an edge a third face" };
		return { tris: tl.map(function (t) { return { v0: t.v0, v1: t.v1, v2: t.v2 }; }) };
	}

	// centroid: one new point at the loop centroid, fanned to every loop edge
	function centroidTris() {
		if (n === 3) return { tris: [{ v0: byId[loop[0]], v1: byId[loop[1]], v2: byId[loop[2]] }] };
		var cx = 0, cy = 0, cz = 0;
		for (var j = 0; j < n; j++) { var v = byId[loop[j]]; cx += v.x; cy += v.y; cz += v.z; }
		var before = bms.pool.size();
		var c = bms.pool.getOrCreate(cx / n, cy / n, cz / n);
		if (bms.pool.size() === before) return { reason: "the centroid lands on an existing vertex" };
		var out = [];
		for (var g = 0; g < n; g++) out.push({ v0: byId[loop[g]], v1: byId[loop[(g + 1) % n]], v2: c });
		return { tris: out };
	}

	// vertexFan: fan from one loop vertex to all the others (as trimesh-boolean
	// fillOpenEdgeLoops does from vertex 0), trying each vertex in turn until
	// none of the fan's diagonals already exists in the mesh
	function vertexFanTris() {
		for (var k = 0; k < n; k++) {
			var out = [];
			for (var j = 1; j < n - 1; j++) {
				out.push({ v0: byId[loop[k]], v1: byId[loop[(k + j) % n]], v2: byId[loop[(k + j + 1) % n]] });
			}
			if (diagonalsFree(out)) return { tris: out };
		}
		return { reason: "every vertex fan would give an edge a third face" };
	}

	// A patch must be a disc on the loop: every loop edge used once, every
	// edge of its own used twice. (triangulateLoop can overlap two triangles
	// on one loop edge, which made that edge non-manifold.)
	function isDisc(tl) {
		var use = new Map();
		for (var t = 0; t < tl.length; t++) {
			var ids = [tl[t].v0.id, tl[t].v1.id, tl[t].v2.id];
			for (var d = 0; d < 3; d++) {
				var k = poolEdgeKey(ids[d], ids[(d + 1) % 3]);
				use.set(k, (use.get(k) || 0) + 1);
			}
		}
		var ok = true;
		onLoop.forEach(function (k) { if (use.get(k) !== 1) ok = false; });
		use.forEach(function (c, k) { if (!onLoop.has(k) && c !== 2) ok = false; });
		return ok;
	}

	var order = method === "auto" ? ["fan", "centroid", "vertexFan"] : [method];
	var made = null, used = null, reasons = [];
	for (var o = 0; o < order.length && !made; o++) {
		var r = order[o] === "centroid" ? centroidTris() : order[o] === "vertexFan" ? vertexFanTris() : fanTris();
		if (r.tris && !isDisc(r.tris)) r = { reason: "the triangles overlap (not a disc on the loop)" };
		if (r.tris) { made = r.tris; used = order[o]; }
		else reasons.push(order[o] + ": " + r.reason);
	}
	if (!made) return { added: 0, reason: reasons.join("; "), method: null };
	var tris = made;

	// Kirra's orientation rule, on exact edges: a fill triangle that shares a
	// loop edge with the mesh runs it the opposite way to the mesh triangle.
	for (var f = 0; f < tris.length; f++) {
		var tri = tris[f], vs = [tri.v0.id, tri.v1.id, tri.v2.id];
		for (var s = 0; s < 3; s++) {
			var ea = vs[s], eb = vs[(s + 1) % 3];
			var ek = poolEdgeKey(ea, eb);
			if (!onLoop.has(ek) || edges.count(ek) === 0) continue;
			if (runs(bms.soup[edges.tri(ek, 0)], ea, eb)) { var x = tri.v1; tri.v1 = tri.v2; tri.v2 = x; }
			break;
		}
	}

	for (var w = 0; w < tris.length; w++) {
		var nt = { v0: tris[w].v0, v1: tris[w].v1, v2: tris[w].v2, mesh: "A", origIdx: bms.soup.length };
		bms.soup.push(nt);
		var nv = [nt.v0.id, nt.v1.id, nt.v2.id];
		for (var z = 0; z < 3; z++) {
			var key = poolEdgeKey(nv[z], nv[(z + 1) % 3]);
			edges.add(key, nt.origIdx);
		}
	}
	return { added: tris.length, reason: null, method: used };
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

var METHODS = { auto: 1, fan: 1, centroid: 1, vertexFan: 1 };

// Default auto: Kirra's fan first, then the fallbacks
function methodOf(options) {
	var m = options && options.method;
	return m && METHODS[m] ? m : "auto";
}

// A buildMesh result carries everything a bms needs (pool, soup, break
// line edges) and the cached edge map, so it is used as one directly.
function bmsOf(result) {
	return result;
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
 * @param {{method?: "auto"|"fan"|"centroid"|"vertexFan"}} [options] - method default "auto"
 * @returns {{added: number, method: string|null, refused: Array<{loop: *, reason: string}>}}
 */
export function patchLoop(result, loop, options) {
	var method = methodOf(options);
	var r = resolveLoop(result, loop);
	if (!r.ids) return { added: 0, method: null, refused: [{ loop: loop, reason: r.reason }] };
	var bms = bmsOf(result);
	var edges = edgesOf(bms);
	var p = patchLoopIds(bms, edges, r.ids, method);
	markCurrent(bms, edges);
	if (p.reason) return { added: 0, method: null, refused: [{ loop: loop, reason: p.reason }] };
	refresh(result, bms);
	return { added: p.added, method: p.method, refused: [] };
}

/**
 * Patch every boundary loop with at most maxEdges edges (or the loops given).
 * @param {Object} result - from buildMesh; changed in place
 * @param {{maxEdges?: number, loops?: Array, method?: "auto"|"fan"|"centroid"|"vertexFan"}} [options]
 * @returns {{added: number, patched: number, methods: {fan: number, centroid: number, vertexFan: number},
 *   refused: Array<{loop: *, reason: string}>}}
 */
export function patchLoops(result, options) {
	var opts = options || {};
	var method = methodOf(opts);
	var maxEdges = opts.maxEdges !== undefined ? opts.maxEdges : Infinity;
	var bms = bmsOf(result);
	var edges = edgesOf(bms);
	var added = 0, patched = 0, refused = [];
	var methods = { fan: 0, centroid: 0, vertexFan: 0 };
	var loops = opts.loops || result.mesh.boundaryLoops.filter(function (l) { return l.length <= maxEdges; });
	for (var i = 0; i < loops.length; i++) {
		var r = resolveLoop(result, loops[i]);
		if (!r.ids) { refused.push({ loop: loops[i], reason: r.reason }); continue; }
		var p = patchLoopIds(bms, edges, r.ids, method);
		if (p.reason) refused.push({ loop: loops[i], reason: p.reason });
		else { added += p.added; patched++; methods[p.method]++; }
	}
	markCurrent(bms, edges);
	if (patched > 0) refresh(result, bms);
	return { added: added, patched: patched, methods: methods, refused: refused };
}
