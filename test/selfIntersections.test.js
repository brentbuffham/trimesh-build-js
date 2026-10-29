// countSelfIntersections: trimesh-boolean's detector on a result, and the opt-in report field.
import { describe, it, expect } from "vitest";
import { buildMesh, countSelfIntersections } from "../src/index.js";
import { fibonacciSphere } from "./fixtures/synthetic.js";

function tri(a, b, c) { return { v0: { x: a[0], y: a[1], z: a[2] }, v1: { x: b[0], y: b[1], z: b[2] }, v2: { x: c[0], y: c[1], z: c[2] } }; }

describe("countSelfIntersections", function () {
	it("two triangles that pass through each other are one crossing pair", function () {
		var flat = tri([0, 0, 0], [2, 0, 0], [0, 2, 0]);
		var upright = tri([0.4, 0.4, -1], [0.4, 0.4, 1], [1.2, 0.2, 0]);   // stands through the middle of flat
		var r = countSelfIntersections({ soup: [flat, upright] });
		expect(r.crossingPairs).toBe(1);
		expect(r.triangles).toBe(2);
		expect(r.segments).toBeGreaterThan(0);
	});

	it("triangles that only meet along an edge are not a crossing", function () {
		var a = tri([0, 0, 0], [1, 0, 0], [0, 1, 0]), b = tri([1, 0, 0], [0, 1, 0], [1, 1, 0]);   // share the edge (1,0,0)-(0,1,0)
		expect(countSelfIntersections({ soup: [a, b] })).toMatchObject({ crossingPairs: 0, triangles: 0 });
	});

	it("an empty soup has none", function () {
		expect(countSelfIntersections({ soup: [] })).toEqual({ crossingPairs: 0, coplanarPairs: 0, triangles: 0, segments: 0, candidatePairs: 0, ms: 0 });
	});

	it("a clean sphere has none, and buildMesh reports them only when asked", function () {
		var s = fibonacciSphere(1500, 5);
		var plain = buildMesh(s, {});
		expect(plain.report.selfIntersections).toBeNull();
		var asked = buildMesh(s, { checkSelfIntersections: true });
		expect(asked.report.selfIntersections).toMatchObject({ crossingPairs: 0, triangles: 0 });
		expect(asked.report.selfIntersections.ms).toBeGreaterThanOrEqual(0);
		expect(countSelfIntersections(asked)).toMatchObject({ crossingPairs: 0 });
	});
});
