// Real cave: Wookey Hole (CaveSurveys, github.com/CaveSurveys/Wookey-Hole)
import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { openLas } from "las-laz-js";
import { buildMesh, patchLoops } from "../src/index.js";

function sample(name) {
	return fileURLToPath(new URL("../examples/public/samples/" + name, import.meta.url));
}
var SAMPLE = sample("wookey-hole.laz");

async function load(file) {
	var las = await openLas(file);
	return las.readPoints({ fields: ["x", "y", "z"] });
}

describe("Wookey Hole cave sample", function () {
	it("meshes as one main surface with no non-manifold edges (thin 5 cm)", async function () {
		var pts = await load(SAMPLE);
		expect(pts.count).toBe(381870);
		var r = buildMesh({ count: pts.count, x: pts.x, y: pts.y, z: pts.z }, { thin: 0.05 });
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(r.report.trianglesAccepted).toBeGreaterThan(200000);
		// twisted strips are cut (repairFolds): every edge runs both ways
		expect(r.mesh.orientationConflicts).toBe(0);
		expect(r.report.foldsRemoved).toBeGreaterThan(0);
		expect(r.report.foldsRemoved).toBeLessThan(0.01 * r.soup.length);
		var sizes = r.report.orientation.perComponent.map(function (c) { return c.triangles; });
		expect(Math.max.apply(null, sizes) / r.soup.length).toBeGreaterThan(0.95);
		// pinched holes are split: every loop is simple, so every one can be patched
		r.mesh.boundaryLoops.forEach(function (l) { expect(new Set(l).size).toBe(l.length); });
	}, 120000);

	it("auto patching closes nearly every loop, figure-8s included", async function () {
		var pts = await load(SAMPLE);
		var r = buildMesh({ count: pts.count, x: pts.x, y: pts.y, z: pts.z }, { thin: 0.05 });
		var before = r.mesh.boundaryLoops.length;
		var p = patchLoops(r);
		expect(p.patched).toBeGreaterThan(0.99 * before);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(r.mesh.orientationConflicts).toBe(0);
		expect(p.methods.fair + p.methods.fan + p.methods.centroid + p.methods.vertexFan).toBe(p.patched);
		// Liepa fill takes nearly every loop
		expect(p.methods.fair).toBeGreaterThan(0.95 * p.patched);
	}, 120000);

	// Parts 2 and 3 of the same survey (mesh1.obj and mesh2.obj vertices)
	[["wookey-hole-2.laz", 638466], ["wookey-hole-3.laz", 194016]].forEach(function (part) {
		it(part[0] + " meshes clean and patches without new non-manifold or fold edges", async function () {
			var pts = await load(sample(part[0]));
			expect(pts.count).toBe(part[1]);
			var r = buildMesh({ count: pts.count, x: pts.x, y: pts.y, z: pts.z }, { thin: 0.05 });
			expect(r.mesh.nonManifoldEdgeCount).toBe(0);
			expect(r.mesh.orientationConflicts).toBe(0);
			var sizes = r.report.orientation.perComponent.map(function (c) { return c.triangles; });
			expect(Math.max.apply(null, sizes) / r.soup.length).toBeGreaterThan(0.9);
			var before = r.mesh.boundaryLoops.length;
			var p = patchLoops(r);
			expect(p.patched).toBeGreaterThan(0.98 * before);
			expect(r.mesh.nonManifoldEdgeCount).toBe(0);
			expect(r.mesh.orientationConflicts).toBe(0);
		}, 180000);
	});
});
