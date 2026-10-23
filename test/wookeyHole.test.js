// Real cave: Wookey Hole (CaveSurveys, github.com/CaveSurveys/Wookey-Hole)
import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { openLas } from "las-laz-js";
import { buildMesh } from "../src/index.js";

var SAMPLE = fileURLToPath(new URL("../examples/public/samples/wookey-hole.laz", import.meta.url));

describe("Wookey Hole cave sample", function () {
	it("meshes as one main surface with no non-manifold edges (thin 5 cm)", async function () {
		var las = await openLas(SAMPLE);
		var pts = await las.readPoints({ fields: ["x", "y", "z"] });
		expect(pts.count).toBe(381870);
		var r = buildMesh({ count: pts.count, x: pts.x, y: pts.y, z: pts.z }, { thin: 0.05 });
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(r.report.trianglesAccepted).toBeGreaterThan(200000);
		var sizes = r.report.orientation.perComponent.map(function (c) { return c.triangles; });
		expect(Math.max.apply(null, sizes) / r.soup.length).toBeGreaterThan(0.95);
	}, 120000);
});
