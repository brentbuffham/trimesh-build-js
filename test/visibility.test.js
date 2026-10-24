import { describe, it, expect } from "vitest";
import { meanEdgeLength, buildTriangleGrid, rayHits } from "../src/bms/visibility.js";

function tri(z, s) {
	return { v0: { x: -s, y: -s, z: z }, v1: { x: s, y: -s, z: z }, v2: { x: 0, y: s, z: z } };
}

describe("triangle grid and rays", function () {
	var soup = [tri(5, 1), tri(-5, 1)];

	it("a ray hits a triangle in front of it and misses one behind", function () {
		var g = buildTriangleGrid(soup, 2 * meanEdgeLength(soup));
		expect(rayHits(g, soup, 0.1, 0.1, 0, 0, 0, 1, 0, -1)).toBe(true);
		expect(rayHits(g, soup, 0.1, 0.1, 0, 1, 0, 0, 0, -1)).toBe(false);
	});

	it("ignores hits closer than tMin and the skip triangle", function () {
		var g = buildTriangleGrid(soup, 2 * meanEdgeLength(soup));
		expect(rayHits(g, soup, 0.1, 0.1, 4.9, 0, 0, 1, 0.5, -1)).toBe(false);
		expect(rayHits(g, soup, 0.1, 0.1, 4.9, 0, 0, 1, 0, 0)).toBe(false);
		expect(rayHits(g, soup, 0.1, 0.1, 4.9, 0, 0, 1, 0, -1)).toBe(true);
	});

	it("walks many cells", function () {
		var g = buildTriangleGrid(soup, 0.1);
		expect(rayHits(g, soup, 0.1, 0.1, -4.95, 0, 0, 1, 0.5, -1)).toBe(true);
	});

	it("caps the cell count", function () {
		var big = [tri(0, 500), tri(1000, 500)];
		var g = buildTriangleGrid(big, 0.01);
		expect(g.n[0] * g.n[1] * g.n[2]).toBeLessThanOrEqual(Math.pow(2, 21) * 1.01);
	});
});
