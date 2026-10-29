import { describe, it, expect } from "vitest";
import { Worker } from "node:worker_threads";
import { buildMesh, buildMeshAsync } from "../src/index.js";
import { fibonacciSphere, halfPipe } from "./fixtures/synthetic.js";

var WORKER = new URL("../src/workers/proposeWorker.node.js", import.meta.url);
function createWorker() { return new Worker(WORKER); }

function signature(r) {
	return {
		triangles: r.soup.length,
		closed: r.mesh.closed,
		volume: r.mesh.enclosedVolume,
		loops: r.mesh.boundaryLoops.map(function (l) { return l.length; }).sort(function (a, b) { return a - b; }),
		constrained: r.mesh.constrainedEdges.length,
		accepted: r.report.trianglesAccepted,
		proposed: r.report.trianglesProposed
	};
}

describe("buildMeshAsync", function () {
	it("3 workers give exactly the buildMesh mesh (closed sphere)", async function () {
		var cols = fibonacciSphere(3000, 5);
		var sync = buildMesh(cols, {});
		var par = await buildMeshAsync(cols, { workers: 3, createWorker: createWorker });
		expect(signature(par)).toEqual(signature(sync));
		expect(par.mesh.closed).toBe(true);
	}, 60000);

	it("same mesh with a break line", async function () {
		var cols = halfPipe(2.5, 10, 0.25, 2);
		var bl = [{ vertices: [[0, 0, 2.5], [10, 0, 2.5]], closedLoop: false }];
		var sync = buildMesh(cols, { breaklines: bl });
		var par = await buildMeshAsync(cols, { breaklines: bl, workers: 4, createWorker: createWorker });
		expect(signature(par)).toEqual(signature(sync));
		expect(par.mesh.constrainedEdges.length).toBe(par.report.breaklineSegments);
	}, 60000);

	it("reports reconstruct progress and finishes at done", async function () {
		var calls = [];
		await buildMeshAsync(fibonacciSphere(3000, 5), {
			workers: 2, createWorker: createWorker,
			onProgress: function (stage, fraction) { calls.push([stage, fraction]); }
		});
		var rec = calls.filter(function (c) { return c[0] === "reconstruct"; });
		expect(rec.length).toBeGreaterThan(3);
		expect(rec[rec.length - 1][1]).toBe(1);
		expect(calls[calls.length - 1]).toEqual(["done", 1]);
	}, 60000);

	// "auto": one fewer than the cores (at most 8), and no workers below 20,000 points
	var CORES = (globalThis.navigator && globalThis.navigator.hardwareConcurrency) | 0;

	it("auto keeps a small cloud on this thread", async function () {
		var cols = fibonacciSphere(3000, 5), started = 0;
		var par = await buildMeshAsync(cols, { workers: "auto", createWorker: function () { started++; return createWorker(); } });
		expect(started).toBe(0);
		expect(signature(par)).toEqual(signature(buildMesh(cols, {})));
	});

	it("a number of workers is honoured even on a small cloud", async function () {
		var started = 0;
		await buildMeshAsync(fibonacciSphere(3000, 5), { workers: 2, createWorker: function () { started++; return createWorker(); } });
		expect(started).toBe(2);
	}, 60000);

	it.skipIf(CORES < 3)("auto starts workers on a large cloud, at most 8, and gives the buildMesh mesh", async function () {
		var cols = fibonacciSphere(25000, 5), started = 0;
		var par = await buildMeshAsync(cols, { workers: "auto", createWorker: function () { started++; return createWorker(); } });
		expect(started).toBe(Math.min(8, CORES - 1));
		expect(signature(par)).toEqual(signature(buildMesh(cols, {})));
	}, 120000);

	it("without workers it is buildMesh", async function () {
		var cols = fibonacciSphere(1000, 5);
		expect(signature(await buildMeshAsync(cols, {}))).toEqual(signature(buildMesh(cols, {})));
	});
});
