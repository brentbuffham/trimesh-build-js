// Real cave: Wookey Hole (CaveSurveys, github.com/CaveSurveys/Wookey-Hole)
import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { openLas } from "las-laz-js";
import { buildMesh, patchLoops } from "../src/index.js";

var SAMPLE = fileURLToPath(new URL("../examples/public/samples/wookey-hole.laz", import.meta.url));

describe("Wookey Hole cave sample", function () {
	it("meshes as one main surface with no non-manifold edges (thin 5 cm)", async function () {
		var las = await openLas(SAMPLE);
		var pts = await las.readPoints({ fields: ["x", "y", "z"] });
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
		var las = await openLas(SAMPLE);
		var pts = await las.readPoints({ fields: ["x", "y", "z"] });
		var r = buildMesh({ count: pts.count, x: pts.x, y: pts.y, z: pts.z }, { thin: 0.05 });
		var before = r.mesh.boundaryLoops.length;
		var p = patchLoops(r);
		expect(p.patched).toBeGreaterThan(0.99 * before);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(r.mesh.orientationConflicts).toBe(0);
		expect(p.methods.fan + p.methods.centroid + p.methods.vertexFan).toBe(p.patched);
	}, 120000);
});
