// A 0 the caller passed is an answer, not a missing value: `x || default` turns
// k: 0 and iterations: 0 into the default without a word. Defaults apply only
// to undefined; a bad number is refused as INVALID_INPUT.
import { describe, it, expect } from "vitest";
import { buildMesh, TrimeshBuildError } from "../src/index.js";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { fibonacciSphere } from "./fixtures/synthetic.js";

function codeOf(fn) {
	try { fn(); } catch (e) { return e instanceof TrimeshBuildError ? e.code : "other: " + e.message; }
	return "no throw";
}

describe("zero and NaN options are refused, not defaulted", function () {
	var s = fibonacciSphere(500, 5);

	it("denoise iterations 0", function () { expect(codeOf(function () { buildMesh(s, { denoise: { iterations: 0 } }); })).toBe("INVALID_INPUT"); });
	it("denoise k 0", function () { expect(codeOf(function () { buildMesh(s, { denoise: { k: 0 } }); })).toBe("INVALID_INPUT"); });
	it("denoise maxDistance 0", function () { expect(codeOf(function () { buildMesh(s, { denoise: { maxDistance: 0 } }); })).toBe("INVALID_INPUT"); });
	it("denoise k 2.5", function () { expect(codeOf(function () { buildMesh(s, { denoise: { k: 2.5 } }); })).toBe("INVALID_INPUT"); });
	it("k 0", function () { expect(codeOf(function () { buildMesh(s, { k: 0 }); })).toBe("INVALID_INPUT"); });
	it("maxRadiusMultiplier 0", function () { expect(codeOf(function () { buildMesh(s, { maxRadiusMultiplier: 0 }); })).toBe("INVALID_INPUT"); });
	it("prepareCloud k 0", function () { expect(codeOf(function () { prepareCloud(s, { k: 0 }); })).toBe("INVALID_INPUT"); });
	it("thin NaN", function () { expect(codeOf(function () { buildMesh(s, { thin: NaN }); })).toBe("INVALID_INPUT"); });
});

describe("what still means 'use the default'", function () {
	var s = fibonacciSphere(500, 5);

	it("thin 0 is off", function () {
		expect(buildMesh(s, { thin: 0 }).mesh.triangleCount).toBe(buildMesh(s, {}).mesh.triangleCount);
	});
	it("an explicit undefined takes the default", function () {
		var r = buildMesh(s, { k: undefined, maxRadiusMultiplier: undefined, denoise: { k: undefined, iterations: undefined, maxDistance: undefined } });
		expect(r.report.denoised).toBe(true);
		expect(r.mesh.closed).toBe(true);
	});
	it("prepareCloud without options takes k 20 and multiplier 3", function () {
		expect(function () { prepareCloud(s); }).not.toThrow();
	});
});
