import { describe, it, expect } from "vitest";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { TrimeshBuildError } from "../src/errors.js";
import { fibonacciSphere, planarGrid } from "./fixtures/synthetic.js";

var UTM = [478000, 6771000, 300];

function codeOf(fn) {
	try { fn(); } catch (e) { return e instanceof TrimeshBuildError ? e.code : "not TrimeshBuildError: " + e.message; }
	return "no throw";
}

describe("prepareCloud", function () {
	it("accepts positions column and shifts by centroid", function () {
		var cols = fibonacciSphere(500, 5, UTM);
		var c = prepareCloud(cols, {});
		expect(c.count).toBe(500);
		var m = [0, 0, 0];
		for (var k = 0; k < 500; k++) for (var q = 0; q < 3; q++) m[q] += cols.positions[3 * k + q] / 500;
		expect(Math.abs(c.origin.x - m[0])).toBeLessThan(1e-6);
		expect(Math.abs(c.origin.y - m[1])).toBeLessThan(1e-6);
		expect(Math.abs(c.origin.z - m[2])).toBeLessThan(1e-6);
		expect(Math.abs(c.origin.y - UTM[1])).toBeLessThan(0.1);
		for (var a = 0; a < 3; a++) {
			var s = 0;
			for (var i = 0; i < c.count; i++) s += c.coords[3 * i + a];
			expect(Math.abs(s / c.count)).toBeLessThan(1e-9);
		}
	});

	it("accepts x/y/z columns", function () {
		var cols = fibonacciSphere(300, 5, UTM);
		var n = cols.count, x = new Float64Array(n), y = new Float64Array(n), z = new Float64Array(n);
		for (var i = 0; i < n; i++) { x[i] = cols.positions[3 * i]; y[i] = cols.positions[3 * i + 1]; z[i] = cols.positions[3 * i + 2]; }
		var a = prepareCloud(cols, {});
		var b = prepareCloud({ count: n, x: x, y: y, z: z }, {});
		expect(Array.from(b.coords)).toEqual(Array.from(a.coords));
	});

	it("uses caller origin", function () {
		var c = prepareCloud(fibonacciSphere(300, 5, UTM), { origin: { x: 478000, y: 6771000, z: 300 } });
		expect(c.origin).toEqual({ x: 478000, y: 6771000, z: 300 });
	});

	it("Float32 without origin throws NEEDS_ORIGIN", function () {
		var cols = fibonacciSphere(300, 5);
		expect(codeOf(function () { prepareCloud({ count: cols.count, positions: Float32Array.from(cols.positions) }, {}); })).toBe("NEEDS_ORIGIN");
	});

	it("NaN coordinate throws INVALID_INPUT naming the point", function () {
		var cols = fibonacciSphere(300, 5);
		cols.positions[3 * 7 + 1] = NaN;
		expect(codeOf(function () { prepareCloud(cols, {}); })).toBe("INVALID_INPUT");
		expect(function () { prepareCloud(cols, {}); }).toThrow(/\b7\b/);
	});

	it("fewer than 3 points throws TOO_FEW_POINTS", function () {
		expect(codeOf(function () { prepareCloud({ count: 2, positions: new Float64Array(6) }, {}); })).toBe("TOO_FEW_POINTS");
	});

	it("medianSpacing of a 1 m grid is ~1", function () {
		var c = prepareCloud(planarGrid(20, 20, 1), {});
		expect(Math.abs(c.medianSpacing - 1)).toBeLessThan(1e-9);
	});

	it("normals are unit length on a sphere", function () {
		var c = prepareCloud(fibonacciSphere(2000, 5), {});
		for (var i = 0; i < c.count; i++) {
			var nx = c.normals[3 * i], ny = c.normals[3 * i + 1], nz = c.normals[3 * i + 2];
			expect(Math.abs(Math.hypot(nx, ny, nz) - 1)).toBeLessThan(1e-5);
			var px = c.coords[3 * i], py = c.coords[3 * i + 1], pz = c.coords[3 * i + 2];
			var pl = Math.hypot(px, py, pz);
			expect(Math.abs((nx * px + ny * py + nz * pz) / pl)).toBeGreaterThan(0.99);
		}
	});

	it("caller normals are used as given", function () {
		var cols = fibonacciSphere(300, 5);
		var normals = new Float32Array(3 * cols.count).fill(0);
		for (var i = 0; i < cols.count; i++) normals[3 * i + 2] = 1;
		var c = prepareCloud(cols, { normals: normals });
		expect(c.normals).toBe(normals);
	});
});
