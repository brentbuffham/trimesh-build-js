import { describe, it, expect } from "vitest";
import { computeSignedVolume } from "trimesh-boolean";
import { meanEdgeLength, buildTriangleGrid, rayHits, orientByVisibility } from "../src/bms/visibility.js";
import { orientMesh } from "../src/bms/orientMesh.js";
import { meshToClean, triNormal } from "./fixtures/pipeline.js";
import { cylinderTunnel, halfPipe, planarGrid, fibonacciSphere, mulberry32 } from "./fixtures/synthetic.js";

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

function scramble(soup, seed) {
	var rnd = mulberry32(seed);
	soup.forEach(function (t) { if (rnd() < 0.5) { var x = t.v1; t.v1 = t.v2; t.v2 = x; } });
}

// Area fraction whose normal faces the X axis (y = z = 0, world)
function facingAxis(soup, o) {
	var good = 0, all = 0;
	soup.forEach(function (t) {
		var n = triNormal(t), a = Math.hypot(n[0], n[1], n[2]);
		var cy = (t.v0.y + t.v1.y + t.v2.y) / 3 + o.y, cz = (t.v0.z + t.v1.z + t.v2.z) / 3 + o.z;
		all += a;
		if (n[1] * -cy + n[2] * -cz > 0) good += a;
	});
	return good / all;
}

function voted(cols, seed) {
	var m = meshToClean(cols);
	scramble(m.bms.soup, seed);
	var r = orientMesh(m.bms);
	return { m: m, r: orientByVisibility(m.bms, r, {}) };
}

function withoutBand(cols, half) {
	var p = cols.positions, out = [];
	for (var i = 0; i < cols.count; i++) if (Math.abs(p[3 * i + 2]) >= half) out.push(p[3 * i], p[3 * i + 1], p[3 * i + 2]);
	return { count: out.length / 3, positions: Float64Array.from(out) };
}

function windingKeys(soup, n) {
	return soup.slice(0, n).map(function (t) { return t.v0.id + "," + t.v1.id + "," + t.v2.id; });
}

describe("orientByVisibility", function () {
	it("open tube: normals face the axis", function () {
		var v = voted(cylinderTunnel(2.5, 20, 0.25, 1), 3);
		expect(v.r.orientation).toBe("visibility");
		expect(v.r.perComponent[0].margin).toBeGreaterThan(0.5);
		expect(facingAxis(v.m.bms.soup, v.m.cloud.origin)).toBeGreaterThan(0.95);
	});

	it("half-pipe: normals face the concave side", function () {
		var v = voted(halfPipe(2.5, 20, 0.25, 2), 5);
		expect(v.r.orientation).toBe("visibility");
		expect(v.r.perComponent[0].margin).toBeGreaterThan(0.5);
		expect(facingAxis(v.m.bms.soup, v.m.cloud.origin)).toBeGreaterThan(0.95);
	});

	it("flat grid stays unresolved", function () {
		var v = voted(planarGrid(40, 40, 0.25), 7);
		expect(v.r.orientation).toBe("unresolved");
	});

	it("two halves of a tube vote across the gap", function () {
		var v = voted(withoutBand(cylinderTunnel(2.5, 20, 0.25, 1), 0.6), 11);
		expect(v.r.perComponent.length).toBeGreaterThanOrEqual(2);
		v.r.perComponent.forEach(function (c) { if (c.triangles > 100) expect(c.method).toBe("visibility"); });
		expect(facingAxis(v.m.bms.soup, v.m.cloud.origin)).toBeGreaterThan(0.95);
	});

	it("same mesh, same answer", function () {
		var a = voted(cylinderTunnel(2.5, 20, 0.25, 1), 3), b = voted(cylinderTunnel(2.5, 20, 0.25, 1), 3);
		expect(a.r.perComponent.map(function (c) { return c.margin; })).toEqual(b.r.perComponent.map(function (c) { return c.margin; }));
		expect(windingKeys(a.m.bms.soup, 50)).toEqual(windingKeys(b.m.bms.soup, 50));
	});

	it("closed components are untouched", function () {
		var m = meshToClean(fibonacciSphere(3000, 5));
		var r = orientMesh(m.bms);
		var vol = computeSignedVolume(m.bms.soup), keys = windingKeys(m.bms.soup, 50);
		r = orientByVisibility(m.bms, r, {});
		expect(r.orientation).toBe("closed");
		expect(computeSignedVolume(m.bms.soup)).toBe(vol);
		expect(windingKeys(m.bms.soup, 50)).toEqual(keys);
	});

	it("zero-area triangles do not give NaN", function () {
		var m = meshToClean(cylinderTunnel(2.5, 20, 0.25, 1));
		var id = m.bms.pool.size() + 10;
		m.bms.soup.push({ v0: { x: 0, y: 0, z: 0, id: id }, v1: { x: 1, y: 0, z: 0, id: id + 1 }, v2: { x: 2, y: 0, z: 0, id: id + 2 } });
		var r = orientByVisibility(m.bms, orientMesh(m.bms), {});
		r.perComponent.forEach(function (c) { if (c.margin !== undefined) expect(Number.isFinite(c.margin)).toBe(true); });
		expect(r.perComponent[0].method).toBe("visibility");
	});
});
