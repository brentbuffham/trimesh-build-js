import { describe, it, expect } from "vitest";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { queryNeighbourhood } from "../src/reconstruct/localDelaunay/queryNeighbourhood.js";
import { estimatePlane, bridgingGuard } from "../src/reconstruct/localDelaunay/estimatePlane.js";
import { projectToPlane } from "../src/reconstruct/localDelaunay/projectToPlane.js";
import { planarGrid, parallelWalls, fibonacciSphere } from "./fixtures/synthetic.js";

var NB = { k: 20, maxRadiusMultiplier: 3, minNeighbours: 6 };
var GUARD = { normalAgreement: 0.5, maxPlaneOffset: 0.5 };

function nearestTo(cloud, x, y, z) {
	var best = -1, bd = Infinity;
	for (var i = 0; i < cloud.count; i++) {
		var d = Math.hypot(cloud.coords[3 * i] - x, cloud.coords[3 * i + 1] - y, cloud.coords[3 * i + 2] - z);
		if (d < bd) { bd = d; best = i; }
	}
	return best;
}

function withExtra(cols, list) {
	var p = Array.from(cols.positions).concat(list);
	return { count: p.length / 3, positions: Float64Array.from(p) };
}

describe("queryNeighbourhood", function () {
	it("neighbourhood of grid point has k ids, excludes self", function () {
		var c = prepareCloud(planarGrid(20, 20, 1), { origin: { x: 0, y: 0, z: 0 } });
		var p = nearestTo(c, 10, 10, 0);
		var r = queryNeighbourhood(c, p, NB);
		expect(r.valid).toBe(true);
		expect(r.ids.length).toBe(20);
		expect(r.ids.indexOf(p)).toBe(-1);
	});

	it("isolated outlier is invalid", function () {
		var c = prepareCloud(withExtra(planarGrid(20, 20, 1), [100, 100, 100]), { origin: { x: 0, y: 0, z: 0 } });
		var r = queryNeighbourhood(c, c.count - 1, NB);
		expect(r.valid).toBe(false);
	});

	it("cull drops far neighbours", function () {
		// source at origin, 20 points on a 1 m ring, 3 points 50 m away
		var list = [0, 0, 0];
		for (var i = 0; i < 20; i++) list.push(Math.cos(i * 0.314), Math.sin(i * 0.314), 0);
		list.push(50, 0, 0, 0, 50, 0, -50, 0, 0);
		var c = prepareCloud({ count: list.length / 3, positions: Float64Array.from(list) }, { origin: { x: 0, y: 0, z: 0 } });
		var r = queryNeighbourhood(c, 0, { k: 23, maxRadiusMultiplier: 3, minNeighbours: 6 });
		expect(r.ids.length).toBe(20);
		for (var j = 0; j < r.ids.length; j++) expect(r.ids[j]).toBeLessThan(21);
	});
});

describe("estimatePlane and bridgingGuard", function () {
	it("scale is median neighbour distance", function () {
		var list = [0, 0, 0, 1, 0, 0, 0, 2, 0, -3, 0, 0];
		var c = prepareCloud({ count: 4, positions: Float64Array.from(list) }, { origin: { x: 0, y: 0, z: 0 }, normals: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]) });
		var pl = estimatePlane(c, 0, [1, 2, 3], c.coords);
		expect(pl.scale).toBe(2);
		expect(pl.point).toEqual([0, 0, 0]);
		expect(pl.normal).toEqual([0, 0, 1]);
	});

	it("guard drops opposite wall", function () {
		var spacing = 0.25;
		var c = prepareCloud(parallelWalls(2 * spacing, 5, spacing, 1), { origin: { x: 0, y: 0, z: 0 } });
		var p = nearestTo(c, 2.5, 2.5, 0);
		var nb = queryNeighbourhood(c, p, { k: 40, maxRadiusMultiplier: 3, minNeighbours: 6 });
		var hadOther = nb.ids.some(function (q) { return c.coords[3 * q + 2] > spacing; });
		expect(hadOther).toBe(true);
		var pl = estimatePlane(c, p, nb.ids, c.coords);
		var kept = bridgingGuard(c, p, nb.ids, pl, c.coords, GUARD);
		expect(kept.some(function (q) { return c.coords[3 * q + 2] > spacing; })).toBe(false);
		expect(kept.length).toBeGreaterThan(6);
	});

	it("guard keeps a curved wall", function () {
		var c = prepareCloud(fibonacciSphere(3000, 5), {});
		var total = 0, keptN = 0;
		for (var p = 0; p < c.count; p += 37) {
			var nb = queryNeighbourhood(c, p, NB);
			var pl = estimatePlane(c, p, nb.ids, c.coords);
			total += nb.ids.length;
			keptN += bridgingGuard(c, p, nb.ids, pl, c.coords, GUARD).length;
		}
		expect(keptN / total).toBeGreaterThan(0.9);
	});
});

describe("projectToPlane", function () {
	it("projection frame is orthonormal and source at origin", function () {
		var coords = Float64Array.from([1, 2, 3, 2, 2, 3, 1, 3.5, 3, 4, -1, 3]);
		var plane = { point: [1, 2, 3], normal: [0, 0, 1], scale: 1 };
		var uv = projectToPlane(plane, [1, 2, 3], coords);
		expect(uv.length).toBe(8);
		expect(uv[0]).toBe(0);
		expect(uv[1]).toBe(0);
		for (var j = 1; j < 4; j++) {
			var dx = coords[3 * j] - 1, dy = coords[3 * j + 1] - 2;
			expect(Math.abs(uv[2 * j] * uv[2 * j] + uv[2 * j + 1] * uv[2 * j + 1] - (dx * dx + dy * dy))).toBeLessThan(1e-9);
		}
	});

	it("normal parallel to Y uses X fallback", function () {
		var coords = Float64Array.from([0, 0, 0, 1, 0, 0, 0, 0, 1]);
		var uv = projectToPlane({ point: [0, 0, 0], normal: [0, 1, 0], scale: 1 }, [1, 2], coords);
		for (var i = 0; i < uv.length; i++) expect(Number.isFinite(uv[i])).toBe(true);
		expect(Math.abs(Math.hypot(uv[2], uv[3]) - 1)).toBeLessThan(1e-12);
	});
});
