// examples/main.js
//=============================================================
// trimesh-build-js demo: build a mesh from a cloud and show what the
// pipeline reports — open loops, break line edges, non-manifold
// edges, and which way the normals face.
// Rendering is origin-shifted (the BMS soup already is).
//=============================================================

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { buildMesh, toIndexed } from "../src/index.js";
import { syntheticSource, fileSource } from "./clouds.js";

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
var lastResult = null;

function resize() {
	var w = viewport.clientWidth, h = viewport.clientHeight;
	renderer.setSize(w, h);
	camera.aspect = w / Math.max(1, h);
	camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();
renderer.setAnimationLoop(function () { controls.update(); renderer.render(scene, camera); });

// ── Geometry from the BMS soup ──
function clearGroup() {
	while (group.children.length) {
		var c = group.children.pop();
		if (c.geometry) c.geometry.dispose();
		if (c.material) c.material.dispose();
	}
	Object.keys(layers).forEach(function (k) { layers[k] = null; });
}

function meshGeometry(result) {
	var soup = result.soup, slot = new Map(), pos = [], idx = [];
	for (var t = 0; t < soup.length; t++) {
		[soup[t].v0, soup[t].v1, soup[t].v2].forEach(function (v) {
			var s = slot.get(v.id);
			if (s === undefined) { s = pos.length / 3; slot.set(v.id, s); pos.push(v.x, v.y, v.z); }
			idx.push(s);
		});
	}
	var g = new THREE.BufferGeometry();
	g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
	g.setIndex(idx);
	g.computeVertexNormals();
	return g;
}

function segments(pairs, byId, colour) {
	var pos = [];
	pairs.forEach(function (p) {
		var a = byId[p[0]], b = byId[p[1]];
		pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
	});
	var g = new THREE.BufferGeometry();
	g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
	return new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: colour, depthTest: false, transparent: true }));
}

function edgeUse(soup) {
	var m = new Map();
	soup.forEach(function (t) {
		var vs = [t.v0.id, t.v1.id, t.v2.id];
		for (var e = 0; e < 3; e++) {
			var a = vs[e], b = vs[(e + 1) % 3], k = a < b ? a + "|" + b : b + "|" + a;
			var r = m.get(k);
			if (r) r.n++; else m.set(k, { n: 1, a: a, b: b });
		}
	});
	return m;
}

function showResult(result, cols) {
	clearGroup();
	var byId = result.pool.getAll();
	var geom = meshGeometry(result);

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
	var loopPairs = [];
	result.mesh.boundaryLoops.forEach(function (l) {
		for (var i = 0; i < l.length; i++) loopPairs.push([l[i], l[(i + 1) % l.length]]);
	});
	lines.add(segments(loopPairs, byId, 0xff3333));
	lines.add(segments(result.mesh.constrainedEdges.map(function (e) { return [e.a, e.b]; }), byId, 0xffdd00));
	var nm = [];
	edgeUse(result.soup).forEach(function (r) { if (r.n > 2) nm.push([r.a, r.b]); });
	lines.add(segments(nm, byId, 0xff33ff));
	lines.renderOrder = 2;
	layers.loops = lines;
	group.add(lines);

	// Face normals (short ticks from triangle centroids)
	var npos = [], len = result.report.medianSpacing * 0.8;
	result.soup.forEach(function (t, i) {
		if (result.soup.length > 60000 && i % 4) return;
		var ax = t.v1.x - t.v0.x, ay = t.v1.y - t.v0.y, az = t.v1.z - t.v0.z;
		var bx = t.v2.x - t.v0.x, by = t.v2.y - t.v0.y, bz = t.v2.z - t.v0.z;
		var nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
		var nl = Math.hypot(nx, ny, nz) || 1;
		var cx = (t.v0.x + t.v1.x + t.v2.x) / 3, cy = (t.v0.y + t.v1.y + t.v2.y) / 3, cz = (t.v0.z + t.v1.z + t.v2.z) / 3;
		npos.push(cx, cy, cz, cx + nx / nl * len, cy + ny / nl * len, cz + nz / nl * len);
	});
	var ng = new THREE.BufferGeometry();
	ng.setAttribute("position", new THREE.Float32BufferAttribute(npos, 3));
	layers.normals = new THREE.LineSegments(ng, new THREE.LineBasicMaterial({ color: 0x44cc66 }));
	group.add(layers.normals);

	// Input points (subsampled), origin-shifted like the mesh
	var o = result.origin, n = cols.count, step = Math.max(1, Math.ceil(n / 300000)), pp = [];
	for (var p = 0; p < n; p += step) {
		var x = cols.positions ? cols.positions[3 * p] : cols.x[p];
		var y = cols.positions ? cols.positions[3 * p + 1] : cols.y[p];
		var z = cols.positions ? cols.positions[3 * p + 2] : cols.z[p];
		pp.push(x - o.x, y - o.y, z - o.z);
	}
	var pg = new THREE.BufferGeometry();
	pg.setAttribute("position", new THREE.Float32BufferAttribute(pp, 3));
	layers.points = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xcccccc, size: 2, sizeAttenuation: false }));
	group.add(layers.points);

	applyToggles();
	frame(geom);
}

function frame(geom) {
	geom.computeBoundingSphere();
	var bs = geom.boundingSphere;
	if (!bs) return;
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

function showReport(result, ms) {
	var m = result.mesh, r = result.report;
	var loops = m.boundaryLoops.map(function (l) { return l.length; }).sort(function (a, b) { return b - a; });
	$("result").innerHTML =
		"closed: <span class='" + (m.closed ? "good" : "bad") + "'>" + m.closed + "</span><br>" +
		"volume: <b>" + (m.enclosedVolume === null ? "— (open)" : fmt(m.enclosedVolume) + " m³") + "</b><br>" +
		"triangles: <b>" + fmt(result.soup.length) + "</b><br>" +
		"boundary loops: <b>" + loops.length + "</b>" + (loops.length ? " (largest " + loops.slice(0, 5).join(", ") + ")" : "") + "<br>" +
		"boundary edges: <b>" + fmt(m.boundaryEdgeCount) + "</b><br>" +
		"non-manifold edges: <span class='" + (m.nonManifoldEdgeCount ? "bad" : "good") + "'>" + m.nonManifoldEdgeCount + "</span><br>" +
		"break line edges: <b>" + m.constrainedEdges.length + "</b> / " + r.breaklineSegments + "<br>" +
		"orientation: <b>" + m.orientation + "</b>" + (m.orientationConflicts ? " (<span class='bad'>" + m.orientationConflicts + " fold edges</span>)" : "") + "<br>" +
		"components: <b>" + r.orientation.perComponent.length + "</b><br>" +
		"time: <b>" + fmt(ms) + " ms</b>";
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

function readOptions(src) {
	var num = function (id) { return Number($(id).value); };
	var o = {
		k: num("k"), minVotes: num("minVotes"), normalAgreement: num("normalAgreement"),
		maxPlaneOffset: num("maxPlaneOffset"), maxGapEdges: num("maxGapEdges"),
		breaklines: src.breaklines
	};
	if (num("thin") > 0) o.thin = num("thin");
	if (num("denoise") > 0) o.denoise = { iterations: num("denoise") };
	if ($("viewpoint").checked) o.viewpoints = src.viewpoints;
	if ($("closeHoles").checked) o.closeHoles = {};
	return o;
}

var currentFile = null;
var currentSource = null;

async function loadSource() {
	var name = $("source").value;
	if (name === "file") {
		if (!currentFile) { $("file").click(); return null; }
		return fileSource(currentFile);
	}
	return syntheticSource(name);
}

async function build() {
	$("error").textContent = "";
	$("processing-overlay").classList.add("active");
	// let the overlay paint before the (synchronous) build
	await new Promise(function (r) { setTimeout(r, 30); });
	try {
		currentSource = currentSource || await loadSource();
		if (!currentSource) return;
		var t0 = performance.now();
		var result = buildMesh(currentSource.cols, readOptions(currentSource));
		var ms = Math.round(performance.now() - t0);
		lastResult = result;
		showResult(result, currentSource.cols);
		showReport(result, ms);
	} catch (err) {
		console.error(err);
		$("error").textContent = (err.code ? err.code + ": " : "") + err.message;
	} finally {
		$("processing-overlay").classList.remove("active");
	}
}

$("build").addEventListener("click", build);
$("source").addEventListener("change", function () {
	currentSource = null;
	var isFile = $("source").value === "file";
	// raw scans need thinning and denoising; synthetic clouds do not
	$("thin").value = isFile ? "0.05" : "0";
	$("denoise").value = isFile ? "3" : "0";
	$("viewpoint").checked = !isFile && $("source").value !== "walls";
	if (isFile) $("file").click();
	else build();
});
$("file").addEventListener("change", function () {
	currentFile = $("file").files[0] || null;
	currentSource = null;
	if (currentFile) build();
});

// ── Export OBJ (world coordinates, via toIndexed) ──
$("exportObj").addEventListener("click", function () {
	if (!lastResult) return;
	var ix = toIndexed(lastResult);
	var lines = ["# trimesh-build-js export"];
	for (var i = 0; i < ix.positions.length; i += 3) lines.push("v " + ix.positions[i].toFixed(4) + " " + ix.positions[i + 1].toFixed(4) + " " + ix.positions[i + 2].toFixed(4));
	for (var f = 0; f < ix.index.length; f += 3) lines.push("f " + (ix.index[f] + 1) + " " + (ix.index[f + 1] + 1) + " " + (ix.index[f + 2] + 1));
	var blob = new Blob([lines.join("\n")], { type: "text/plain" });
	var a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = "trimesh-build-js.obj";
	a.click();
	URL.revokeObjectURL(a.href);
});

$("viewpoint").checked = true;
build();
