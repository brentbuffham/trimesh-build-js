// examples/buildWorker.js
//=============================================================
// Demo worker: owns the cloud and the buildMesh result, so a big
// build never freezes the page and Cancel can stop it outright.
// Sends back only what the page draws, as typed arrays.
//
// Page -> worker:
//   { type: "setCloud", cols }             (cols buffers transferred)
//   { type: "build", options }
//   { type: "patch", loop, method }
//   { type: "patchAll", maxEdges, method }
//   { type: "undo" }
//   { type: "export" }
// Worker -> page:
//   { type: "progress", stage, fraction }
//   { type: "built" | "patched" | "undone", data, ms?, info? }
//   { type: "exported", positions, index }
//   { type: "error", code, message }
//=============================================================

import { buildMesh, toIndexed, patchLoop, patchLoops } from "../src/index.js";

var cols = null;
var result = null;
var undoStack = [];

// Everything the page draws, origin-shifted, as transferable arrays
function renderData() {
	var soup = result.soup, slot = new Map(), pos = [];
	var index = new Uint32Array(3 * soup.length);
	for (var t = 0; t < soup.length; t++) {
		var vs = [soup[t].v0, soup[t].v1, soup[t].v2];
		for (var k = 0; k < 3; k++) {
			var v = vs[k], s = slot.get(v.id);
			if (s === undefined) { s = pos.length / 3; slot.set(v.id, s); pos.push(v.x, v.y, v.z); }
			index[3 * t + k] = s;
		}
	}
	var byId = result.pool.getAll();
	function segs(pairs) {
		var out = new Float32Array(6 * pairs.length);
		for (var i = 0; i < pairs.length; i++) {
			var a = byId[pairs[i][0]], b = byId[pairs[i][1]];
			out.set([a.x, a.y, a.z, b.x, b.y, b.z], 6 * i);
		}
		return out;
	}
	// non-manifold edges: used by more than two triangles
	var use = new Map();
	soup.forEach(function (tr) {
		var ids = [tr.v0.id, tr.v1.id, tr.v2.id];
		for (var e = 0; e < 3; e++) {
			var a = ids[e], b = ids[(e + 1) % 3], key = a < b ? a + "|" + b : b + "|" + a;
			var r = use.get(key);
			if (r) r.n++; else use.set(key, { n: 1, a: a, b: b });
		}
	});
	var nm = [];
	use.forEach(function (r) { if (r.n > 2) nm.push([r.a, r.b]); });

	var m = result.mesh, rep = Object.assign({}, result.report);
	rep.components = rep.orientation ? rep.orientation.perComponent.length : 0;
	delete rep.orientation;
	return {
		positions: Float32Array.from(pos),
		index: index,
		loops: m.boundaryLoops.map(function (l) { return Uint32Array.from(l, function (id) { return slot.get(id); }); }),
		constrained: segs(m.constrainedEdges.map(function (e) { return [e.a, e.b]; })),
		nonManifold: segs(nm),
		origin: result.origin,
		summary: {
			closed: m.closed,
			enclosedVolume: m.enclosedVolume,
			boundaryEdgeCount: m.boundaryEdgeCount,
			nonManifoldEdgeCount: m.nonManifoldEdgeCount,
			constrainedEdges: m.constrainedEdges.length,
			orientation: m.orientation,
			orientationConflicts: m.orientationConflicts,
			triangles: soup.length
		},
		report: rep
	};
}

function transfers(d) {
	var list = [d.positions.buffer, d.index.buffer, d.constrained.buffer, d.nonManifold.buffer];
	d.loops.forEach(function (l) { list.push(l.buffer); });
	return list;
}

function send(type, extra) {
	var data = renderData();
	self.postMessage(Object.assign({ type: type, data: data }, extra || {}), transfers(data));
}

function snapshot() {
	return {
		soup: result.soup.map(function (t) { return { v0: t.v0, v1: t.v1, v2: t.v2, mesh: t.mesh, origIdx: t.origIdx }; }),
		mesh: result.mesh,
		orientation: result.report.orientation
	};
}

self.onmessage = function (e) {
	var m = e.data;
	try {
		if (m.type === "setCloud") {
			cols = m.cols;
			result = null;
			undoStack = [];
		} else if (m.type === "build") {
			var opts = Object.assign({}, m.options, {
				onProgress: function (stage, fraction) { self.postMessage({ type: "progress", stage: stage, fraction: fraction }); }
			});
			var t0 = performance.now();
			result = buildMesh(cols, opts);
			undoStack = [];
			send("built", { ms: Math.round(performance.now() - t0) });
		} else if (m.type === "patch" || m.type === "patchAll") {
			var snap = snapshot();
			var info = m.type === "patch"
				? patchLoop(result, m.loop, { method: m.method })
				: patchLoops(result, { maxEdges: m.maxEdges, method: m.method });
			if (info.added > 0) undoStack.push(snap);
			send("patched", { info: info });
		} else if (m.type === "undo") {
			var u = undoStack.pop();
			if (!u) { self.postMessage({ type: "error", message: "Nothing to undo." }); return; }
			result.soup.length = 0;
			u.soup.forEach(function (t) { result.soup.push(t); });
			result.mesh = u.mesh;
			result.report.orientation = u.orientation;
			send("undone");
		} else if (m.type === "export") {
			var ix = toIndexed(result);
			self.postMessage({ type: "exported", positions: ix.positions, index: ix.index }, [ix.positions.buffer, ix.index.buffer]);
		}
	} catch (err) {
		self.postMessage({ type: "error", code: err.code || null, message: err.message });
	}
};
