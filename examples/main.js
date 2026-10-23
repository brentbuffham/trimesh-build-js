// examples/main.js
//=============================================================
// trimesh-build-js demo: build a mesh from a cloud and show what the
// pipeline reports — open loops, break line edges, non-manifold
// edges, and which way the normals face.
// The build and patching run in a Web Worker (buildWorker.js), so a
// big cloud never freezes the page and Cancel stops it outright.
// Rendering is origin-shifted (the BMS soup already is).
//=============================================================

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { syntheticSource, fileSource, sampleSource } from "./clouds.js";

var $ = function (id) { return document.getElementById(id); };

// ── Scene ──
var viewport = $("viewport");
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
viewport.appendChild(renderer.domElement);
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1a);
var camera = new THREE.PerspectiveCamera(50, 1, 0.01, 5000);
camera.up.set(0, 0, 1);
camera.position.set(15, -20, 12);
var controls = new OrbitControls(camera, renderer.domElement);
scene.add(new THREE.AmbientLight(0xffffff, 0.45));
var sun = new THREE.DirectionalLight(0xffffff, 1.6);
sun.position.set(1, -2, 3);
scene.add(sun);
var head = new THREE.DirectionalLight(0xffffff, 0.8);
camera.add(head);
scene.add(camera);

var group = new THREE.Group();
scene.add(group);
var layers = { mesh: null, wire: null, points: null, loops: null, normals: null };
var last = null;          // render data of the current mesh (from the worker)
var pointsSample = null;  // up to 300k input points, world coordinates, for the points layer

function resize() {
	var w = viewport.clientWidth, h = viewport.clientHeight;
	renderer.setSize(w, h);
	camera.aspect = w / Math.max(1, h);
	camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();
renderer.setAnimationLoop(function () { controls.update(); renderer.render(scene, camera); });

// ── Geometry from the worker's render data ──
function clearGroup() {
	while (group.children.length) {
		var c = group.children.pop();
		if (c.geometry) c.geometry.dispose();
		if (c.material) c.material.dispose();
	}
	Object.keys(layers).forEach(function (k) { layers[k] = null; });
}

function lineSegments(positions, colour) {
	var g = new THREE.BufferGeometry();
	g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	return new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: colour, depthTest: false, transparent: true }));
}

// Segment positions for loops given as vertex slots
function loopSegments(loops, P) {
	var n = 0;
	loops.forEach(function (l) { n += l.length; });
	var out = new Float32Array(6 * n), o = 0;
	loops.forEach(function (l) {
		for (var i = 0; i < l.length; i++) {
			var a = l[i], b = l[(i + 1) % l.length];
			out[o++] = P[3 * a]; out[o++] = P[3 * a + 1]; out[o++] = P[3 * a + 2];
			out[o++] = P[3 * b]; out[o++] = P[3 * b + 1]; out[o++] = P[3 * b + 2];
		}
	});
	return out;
}

function showResult(d, keepCamera) {
	clearGroup();
	var geom = new THREE.BufferGeometry();
	geom.setAttribute("position", new THREE.BufferAttribute(d.positions, 3));
	geom.setIndex(new THREE.BufferAttribute(d.index, 1));
	geom.computeVertexNormals();

	var front = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color: 0x8fa8c8, side: THREE.FrontSide, flatShading: true, roughness: 0.8 }));
	var back = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color: 0xd08030, side: THREE.BackSide, flatShading: true, roughness: 0.8 }));
	var meshGroup = new THREE.Group();
	meshGroup.add(front, back);
	layers.mesh = meshGroup;
	group.add(meshGroup);

	layers.wire = new THREE.LineSegments(new THREE.WireframeGeometry(geom), new THREE.LineBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.5 }));
	group.add(layers.wire);

	// Loops, break line edges, non-manifold edges
	var lines = new THREE.Group();
	lines.add(lineSegments(loopSegments(d.loops, d.positions), 0xff3333));
	lines.add(lineSegments(d.constrained, 0xffdd00));
	lines.add(lineSegments(d.nonManifold, 0xff33ff));
	lines.renderOrder = 2;
	layers.loops = lines;
	group.add(lines);

	// Face normals (short ticks from triangle centroids)
	var P = d.positions, I = d.index, tris = I.length / 3, step = tris > 60000 ? 4 : 1;
	var npos = new Float32Array(6 * Math.ceil(tris / step)), o = 0, len = d.report.medianSpacing * 0.8;
	for (var t = 0; t < tris; t += step) {
		var a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2];
		var ax = P[b] - P[a], ay = P[b + 1] - P[a + 1], az = P[b + 2] - P[a + 2];
		var bx = P[c] - P[a], by = P[c + 1] - P[a + 1], bz = P[c + 2] - P[a + 2];
		var nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
		var nl = Math.hypot(nx, ny, nz) || 1;
		var cx = (P[a] + P[b] + P[c]) / 3, cy = (P[a + 1] + P[b + 1] + P[c + 1]) / 3, cz = (P[a + 2] + P[b + 2] + P[c + 2]) / 3;
		npos[o++] = cx; npos[o++] = cy; npos[o++] = cz;
		npos[o++] = cx + nx / nl * len; npos[o++] = cy + ny / nl * len; npos[o++] = cz + nz / nl * len;
	}
	var ng = new THREE.BufferGeometry();
	ng.setAttribute("position", new THREE.BufferAttribute(npos.subarray(0, o), 3));
	layers.normals = new THREE.LineSegments(ng, new THREE.LineBasicMaterial({ color: 0x44cc66 }));
	group.add(layers.normals);

	// Input points (sampled), origin-shifted like the mesh
	if (pointsSample) {
		var S = pointsSample, pp = new Float32Array(S.length), org = d.origin;
		for (var i = 0; i < S.length; i += 3) { pp[i] = S[i] - org.x; pp[i + 1] = S[i + 1] - org.y; pp[i + 2] = S[i + 2] - org.z; }
		var pg = new THREE.BufferGeometry();
		pg.setAttribute("position", new THREE.BufferAttribute(pp, 3));
		layers.points = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xcccccc, size: 2, sizeAttenuation: false }));
		group.add(layers.points);
	}

	applyToggles();
	if (!keepCamera) frame(geom);
}

function frame(geom) {
	geom.computeBoundingSphere();
	var bs = geom.boundingSphere;
	if (!bs || !isFinite(bs.radius) || bs.radius === 0) return;
	controls.target.copy(bs.center);
	var d = bs.radius * 2.6;
	camera.position.set(bs.center.x + d * 0.6, bs.center.y - d * 0.8, bs.center.z + d * 0.5);
	camera.near = bs.radius / 500;
	camera.far = bs.radius * 50;
	camera.updateProjectionMatrix();
}

function applyToggles() {
	if (layers.mesh) layers.mesh.visible = $("showMesh").checked;
	if (layers.wire) layers.wire.visible = $("showWire").checked;
	if (layers.points) layers.points.visible = $("showPoints").checked;
	if (layers.loops) layers.loops.visible = $("showLoops").checked;
	if (layers.normals) layers.normals.visible = $("showNormals").checked;
}
["showMesh", "showWire", "showPoints", "showLoops", "showNormals"].forEach(function (id) { $(id).addEventListener("change", applyToggles); });

// ── Panel ──
function fmt(n) { return typeof n === "number" ? n.toLocaleString(undefined, { maximumFractionDigits: 4 }) : String(n); }

function showReport(d, ms) {
	var m = d.summary, r = d.report;
	var loops = d.loops.map(function (l) { return l.length; }).sort(function (a, b) { return b - a; });
	$("result").innerHTML =
		"closed: <span class='" + (m.closed ? "good" : "bad") + "'>" + m.closed + "</span><br>" +
		"volume: <b>" + (m.enclosedVolume === null ? "— (open)" : fmt(m.enclosedVolume) + " m³") + "</b><br>" +
		"triangles: <b>" + fmt(m.triangles) + "</b><br>" +
		"boundary loops: <b>" + loops.length + "</b>" + (loops.length ? " (largest " + loops.slice(0, 5).join(", ") + ")" : "") + "<br>" +
		"boundary edges: <b>" + fmt(m.boundaryEdgeCount) + "</b><br>" +
		"non-manifold edges: <span class='" + (m.nonManifoldEdgeCount ? "bad" : "good") + "'>" + m.nonManifoldEdgeCount + "</span><br>" +
		"break line edges: <b>" + m.constrainedEdges + "</b> / " + r.breaklineSegments + "<br>" +
		"orientation: <b>" + m.orientation + "</b>" + (m.orientationConflicts ? " (<span class='bad'>" + m.orientationConflicts + " fold edges</span>)" : "") + "<br>" +
		"components: <b>" + r.components + "</b>" +
		(ms !== undefined ? "<br>time: <b>" + fmt(ms) + " ms</b>" : "");
	$("report").innerHTML = [
		["points in", r.pointsInput], ["after thin", r.pointsAfterThin], ["denoised", r.denoised],
		["median spacing", r.medianSpacing], ["weld tolerance", r.tolerance], ["zero normals", r.zeroNormals],
		["points used", r.pointsUsed], ["points skipped", r.pointsSkipped], ["points dropped (break lines)", r.pointsDropped], ["points dropped (weld duplicates)", r.weldDuplicatesDropped],
		["triangles proposed", r.trianglesProposed], ["triangles accepted", r.trianglesAccepted],
		["gaps filled", r.gapsFilled], ["hole-fill triangles", r.holesFilledTriangles],
		["welded ids", r.weld.merged], ["degenerate removed", r.weld.degenerate], ["duplicates removed", r.weld.duplicates],
		["constraint failures", r.constraintFailures], ["collapsed break line edges", r.weld.collapsedConstraints]
	].map(function (row) { return row[0] + ": <b>" + fmt(row[1]) + "</b>"; }).join("<br>");
}

function status(text) { $("error").textContent = text; }

function readOptions(src) {
	var num = function (id) { return Number($(id).value); };
	var o = {
		k: num("k"), minVotes: num("minVotes"), normalAgreement: num("normalAgreement"),
		maxPlaneOffset: num("maxPlaneOffset"), maxGapEdges: num("maxGapEdges"),
		breaklines: src.breaklines,
		// a tab has about 4 GB; v0.3 needs about 1.2 GB per 1.4M points after thinning
		maxPoints: MAX_BUILD_POINTS
	};
	if (num("thin") > 0) o.thin = num("thin");
	if (num("denoise") > 0) o.denoise = { iterations: num("denoise") };
	if ($("viewpoint").checked) o.viewpoints = src.viewpoints;
	if ($("closeHoles").checked) o.closeHoles = {};
	return o;
}

// ── Worker ──
var LARGE = 1000000;            // above this, a build without thinning is refused
var MAX_BUILD_POINTS = 1500000; // points left after thinning that a tab can mesh
var worker = null;
var busy = false;
var buildStart = 0;

var STAGES = { thin: "Thinning", denoise: "Denoising", prepare: "Normals", reconstruct: "Triangulating", weld: "Welding", orient: "Orienting", done: "Drawing" };

function overlay(on, text) {
	$("processing-overlay").classList.toggle("active", on);
	if (text) $("progress").textContent = text;
	busy = on;
}

function makeWorker() {
	worker = new Worker(new URL("./buildWorker.js", import.meta.url), { type: "module" });
	worker.onmessage = function (e) {
		var m = e.data;
		if (m.type === "progress") {
			var secs = ((performance.now() - buildStart) / 1000).toFixed(0);
			$("progress").textContent = (STAGES[m.stage] || m.stage) + (m.stage === "reconstruct" ? " " + Math.round(m.fraction * 100) + "%" : "…") + " (" + secs + " s)";
			return;
		}
		overlay(false);
		if (m.type === "error") {
			if (m.code === "TOO_MANY_POINTS" && m.suggestedThin) {
				// The cloud is still in the worker: one press of Build tries again
				$("thin").value = String(m.suggestedThin);
				status(m.message + " Thin is now " + m.suggestedThin + ": press Build.");
				return;
			}
			status((m.code ? m.code + ": " : "") + m.message);
			return;
		}
		if (m.type === "exported") { saveObj(m.positions, m.index); return; }
		last = m.data;
		clearLoopSelection();
		showResult(last, m.type !== "built");
		showReport(last, m.ms);
		if (m.type === "built") status("");
		else if (m.type === "undone") status("Undid the last patch.");
		else patchMessage(m.info);
	};
	worker.onerror = function (e) { overlay(false); status("Worker error: " + (e.message || "see console")); };
}
makeWorker();

$("cancelBuild").addEventListener("click", function () {
	// Terminating drops the cloud the worker held; the next Build reloads the source
	worker.terminate();
	makeWorker();
	currentSource = null;
	overlay(false);
	status("Cancelled.");
});

// ── Sources ──
var currentFile = null;
var currentSource = null;

async function loadSource() {
	var name = $("source").value;
	if (name === "file") {
		if (!currentFile) { $("file").click(); return null; }
		return fileSource(currentFile);
	}
	if (name === "wookey") return sampleSource("wookey-hole.laz");
	return syntheticSource(name);
}

// Keep up to 300k points (world coordinates) for the points layer
function samplePoints(cols) {
	var n = cols.count, step = Math.max(1, Math.ceil(n / 300000)), out = new Float64Array(3 * Math.ceil(n / step)), o = 0;
	for (var p = 0; p < n; p += step) {
		out[o++] = cols.positions ? cols.positions[3 * p] : cols.x[p];
		out[o++] = cols.positions ? cols.positions[3 * p + 1] : cols.y[p];
		out[o++] = cols.positions ? cols.positions[3 * p + 2] : cols.z[p];
	}
	return out.subarray(0, o);
}

// Hand the cloud to the worker without copying it (its buffers move)
function sendCloud(src) {
	var c = src.cols, buffers = new Set();
	Object.keys(c).forEach(function (k) { if (ArrayBuffer.isView(c[k])) buffers.add(c[k].buffer); });
	worker.postMessage({ type: "setCloud", cols: c }, Array.from(buffers));
	src.sent = true;
}

async function build() {
	if (busy) return;
	status("");
	overlay(true, "Loading…");
	try {
		if (!currentSource) {
			currentSource = await loadSource();
			if (!currentSource) { overlay(false); return; }
			currentSource.count = currentSource.cols.count;
			pointsSample = samplePoints(currentSource.cols);
		}
		var opts = readOptions(currentSource);
		if (currentSource.count > LARGE && !opts.thin) {
			overlay(false);
			status(currentSource.count.toLocaleString() + " points: set thin (for example 0.05) before building. Without it this cloud would take minutes and gigabytes.");
			return;
		}
		if (!currentSource.sent) sendCloud(currentSource);
		buildStart = performance.now();
		overlay(true, "Building " + currentSource.count.toLocaleString() + " points…");
		worker.postMessage({ type: "build", options: opts });
	} catch (err) {
		console.error(err);
		overlay(false);
		status((err.code ? err.code + ": " : "") + err.message);
	}
}

$("build").addEventListener("click", build);

// ── Patch loops (Kirra's Mesh Edit "Fill", via patchLoop in the worker) ──
var selectedLoop = -1;
var selectionLine = null;

function clearLoopSelection() {
	selectedLoop = -1;
	if (selectionLine) {
		scene.remove(selectionLine);
		selectionLine.geometry.dispose();
		selectionLine.material.dispose();
		selectionLine = null;
	}
}

function showLoopSelection() {
	selectionLine = lineSegments(loopSegments([last.loops[selectedLoop]], last.positions), 0x44ff44);
	selectionLine.renderOrder = 3;
	scene.add(selectionLine);
}

// The loop with a vertex nearest the click on screen (within 24 px)
function pickLoop(clientX, clientY) {
	var rect = renderer.domElement.getBoundingClientRect();
	var P = last.positions, v = new THREE.Vector3();
	var best = -1, bestD = 24;
	last.loops.forEach(function (loop, li) {
		for (var i = 0; i < loop.length; i++) {
			var s = loop[i];
			v.set(P[3 * s], P[3 * s + 1], P[3 * s + 2]).project(camera);
			if (v.z > 1) continue;
			var sx = rect.left + (v.x + 1) / 2 * rect.width, sy = rect.top + (1 - v.y) / 2 * rect.height;
			var d = Math.hypot(sx - clientX, sy - clientY);
			if (d < bestD) { bestD = d; best = li; }
		}
	});
	return best;
}

var downAt = null;
renderer.domElement.addEventListener("pointerdown", function (e) { downAt = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener("pointerup", function (e) {
	if (!$("patchMode").checked || !last || !downAt || busy) return;
	if (Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 4) return; // an orbit drag, not a click
	clearLoopSelection();
	selectedLoop = pickLoop(e.clientX, e.clientY);
	if (selectedLoop >= 0) {
		showLoopSelection();
		status("Loop " + selectedLoop + " selected (" + last.loops[selectedLoop].length + " edges). Press Patch selected or Enter.");
	} else {
		status("No open loop near that click.");
	}
});

function patchMessage(p) {
	var head = p.patched !== undefined
		? "Patched " + p.patched + " loop" + (p.patched === 1 ? "" : "s") + " (fan " + p.methods.fan + ", centroid " + p.methods.centroid + ", vertex fan " + p.methods.vertexFan + ")"
		: "Patched loop" + (p.method ? " (" + p.method + ")" : "");
	var msg = head + ": " + p.added + " triangle" + (p.added === 1 ? "" : "s") + " added.";
	if (p.refused.length) msg += " Refused " + p.refused.length + ": " + p.refused[0].reason + (p.refused.length > 1 ? " (and others)" : "") + ".";
	status(msg);
}

function patchSelected() {
	if (!last || selectedLoop < 0) { status("Tick patch loops, then click near a red loop."); return; }
	if (busy) return;
	overlay(true, "Patching…");
	worker.postMessage({ type: "patch", loop: selectedLoop, method: $("patchMethod").value });
}

$("patchSel").addEventListener("click", patchSelected);
window.addEventListener("keydown", function (e) { if (e.key === "Enter" && $("patchMode").checked && selectedLoop >= 0) patchSelected(); });

$("patchAll").addEventListener("click", function () {
	if (!last || busy) return;
	overlay(true, "Patching…");
	worker.postMessage({ type: "patchAll", maxEdges: Number($("patchMax").value), method: $("patchMethod").value });
});

$("undoPatch").addEventListener("click", function () {
	if (!last || busy) return;
	overlay(true, "Undoing…");
	worker.postMessage({ type: "undo" });
});

// Values the user typed are kept when the source changes
var userSet = { thin: false, denoise: false };
["thin", "denoise"].forEach(function (id) { $(id).addEventListener("input", function () { userSet[id] = true; }); });

$("source").addEventListener("change", function () {
	currentSource = null;
	var isFile = $("source").value === "file";
	var isCave = $("source").value === "wookey";
	// Raw scans need thinning and denoising; synthetic clouds do not. The
	// cave is low-noise photogrammetry: thin only, and no single viewpoint
	// sees a whole cave.
	if (!userSet.thin) $("thin").value = isFile || isCave ? "0.05" : "0";
	if (!userSet.denoise) $("denoise").value = isFile ? "3" : "0";
	$("viewpoint").checked = !isFile && !isCave && $("source").value !== "walls";
	if (isFile) $("file").click();
	else build();
});
$("file").addEventListener("change", function () {
	currentFile = $("file").files[0] || null;
	currentSource = null;
	$("file").value = ""; // the same file can be opened again
	if (currentFile) build();
});
$("openFile").addEventListener("click", function () {
	if ($("source").value !== "file") {
		$("source").value = "file";
		if (!userSet.thin) $("thin").value = "0.05";
		if (!userSet.denoise) $("denoise").value = "3";
		$("viewpoint").checked = false;
	}
	$("file").click();
});

// ── Export OBJ (world coordinates, via toIndexed in the worker) ──
$("exportObj").addEventListener("click", function () {
	if (!last || busy) return;
	worker.postMessage({ type: "export" });
});

function saveObj(positions, index) {
	var lines = ["# trimesh-build-js export"];
	for (var i = 0; i < positions.length; i += 3) lines.push("v " + positions[i].toFixed(4) + " " + positions[i + 1].toFixed(4) + " " + positions[i + 2].toFixed(4));
	for (var f = 0; f < index.length; f += 3) lines.push("f " + (index[f] + 1) + " " + (index[f + 1] + 1) + " " + (index[f + 2] + 1));
	var blob = new Blob([lines.join("\n")], { type: "text/plain" });
	var a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = "trimesh-build-js.obj";
	a.click();
	URL.revokeObjectURL(a.href);
}

$("viewpoint").checked = true;
build();
