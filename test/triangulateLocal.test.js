import { describe, it, expect } from "vitest";
import { triangulateLocal } from "../src/reconstruct/localDelaunay/triangulateLocal.js";
import { clipConstraints } from "../src/constraints/clipConstraints.js";

function tris(list) {
	var out = [];
	for (var i = 0; i < list.length; i += 3) out.push([list[i], list[i + 1], list[i + 2]]);
	return out;
}

function hasEdge(t, a, b) {
	return t.some(function (tr) { return tr.indexOf(a) >= 0 && tr.indexOf(b) >= 0; });
}

describe("triangulateLocal", function () {
	it("umbrella only", function () {
		var uv = [0, 0];
		for (var i = 0; i < 6; i++) uv.push(Math.cos(i * Math.PI / 3), Math.sin(i * Math.PI / 3));
		var ids = [11, 12, 13, 14, 15, 16];
		var r = triangulateLocal(Float64Array.from(uv), ids, 10, 1, []);
		var t = tris(r.triangles);
		expect(t.length).toBe(6);
		t.forEach(function (tr) { expect(tr).toContain(10); });
	});

	it("drops non-umbrella triangles", function () {
		var uv = [0, 0], ids = [];
		for (var x = -2; x <= 2; x++) for (var y = -2; y <= 2; y++) {
			if (x === 0 && y === 0) continue;
			uv.push(x + 0.01 * y, y + 0.013 * x);
			ids.push(100 + ids.length);
		}
		var r = triangulateLocal(Float64Array.from(uv), ids, 7, 1, []);
		var t = tris(r.triangles);
		expect(t.length).toBeGreaterThan(3);
		t.forEach(function (tr) { expect(tr).toContain(7); });
	});

	it("collinear patch returns nothing", function () {
		var uv = [0, 0];
		for (var i = 1; i <= 8; i++) uv.push(i, 0);
		var r = triangulateLocal(Float64Array.from(uv), [1, 2, 3, 4, 5, 6, 7, 8], 0, 1, []);
		expect(r.triangles.length).toBe(0);
		expect(r.constraintFailure).toBe(false);
	});

	// S at the origin; A-B passes just above S and cuts the natural S-C edge.
	var PATCH = [0, 0, -2, 0.5, 2, 0.5, 0, 3, 0, -2, -2, -2, 2, -2];
	var PIDS = [1, 2, 3, 4, 5, 6]; // A B C D E F

	it("forced edge survives", function () {
		var free = tris(triangulateLocal(Float64Array.from(PATCH), PIDS, 0, 1, []).triangles);
		expect(hasEdge(free, 0, 3)).toBe(true); // S-C exists without the constraint
		var r = triangulateLocal(Float64Array.from(PATCH), PIDS, 0, 1, [[1, 2]]);
		var t = tris(r.triangles);
		expect(r.constraintFailure).toBe(false);
		expect(hasEdge(t, 1, 2)).toBe(true);
		expect(hasEdge(t, 0, 3)).toBe(false);
	});

	it("crossing constraints fall back", function () {
		// A-B and E-C cross
		var r = triangulateLocal(Float64Array.from(PATCH), PIDS, 0, 1, [[1, 2], [5, 3]]);
		expect(r.constraintFailure).toBe(true);
		var t = tris(r.triangles);
		expect(t.length).toBeGreaterThan(0);
		t.forEach(function (tr) { expect(tr).toContain(0); });
	});
});

describe("clipConstraints", function () {
	it("clip returns only internal segments", function () {
		var constraints = { segmentsByVertex: new Map([[50, [51, 52]], [51, [50]], [52, [50]]]) };
		// patch has 50 and 51 but not 52
		var e = clipConstraints([7, 50, 8, 51], constraints);
		expect(e).toEqual([[2, 4]]);
	});
});
