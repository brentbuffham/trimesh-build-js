// The stamp a caller keys stored surfaces on: GENERATOR_VERSION changes only when
// a fix changes the mesh for the same input; VERSION is the package release.
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { buildMesh, buildMeshAsync, VERSION, GENERATOR_VERSION } from "../src/index.js";
import { fibonacciSphere } from "./fixtures/synthetic.js";

describe("version stamp", function () {
	it("VERSION is the package.json version", function () {
		var pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
		expect(VERSION).toBe(pkg.version);
	});
	it("GENERATOR_VERSION is a whole number >= 1", function () {
		expect(Number.isInteger(GENERATOR_VERSION) && GENERATOR_VERSION >= 1).toBe(true);
	});
	it("every result reports both", async function () {
		var s = fibonacciSphere(500, 5);
		var sync = buildMesh(s, {});
		expect(sync.report.version).toBe(VERSION);
		expect(sync.report.generatorVersion).toBe(GENERATOR_VERSION);
		var async_ = await buildMeshAsync(s, {});
		expect(async_.report.version).toBe(VERSION);
		expect(async_.report.generatorVersion).toBe(GENERATOR_VERSION);
	});
});
