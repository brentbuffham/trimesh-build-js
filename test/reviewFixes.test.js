// Regression tests for the final-review findings (C1-C3, I1-I7)
import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { openLas } from "las-laz-js";
import { buildMesh, toIndexed, TrimeshBuildError } from "../src/index.js";
import { createVoteTable } from "../src/reconstruct/localDelaunay/acceptTriangles.js";
import { insertConstraints } from "../src/constraints/insertConstraints.js";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { fibonacciSphere, cylinderTunnel, halfPipe, planarGrid } from "./fixtures/synthetic.js";

var UTM = { x: 478000, y: 6771000, z: 300 };
var CLOUD_LAS = new URL("../../las-laz-js/samples/Cloud.las", import.meta.url);

function codeOf(fn) {
	try { fn(); } catch (e) { return e instanceof TrimeshBuildError ? e.code : "other: " + e.message; }
	return "no throw";
}

function repeat(cols, times) {
	var n = cols.count, p = new Float64Array(3 * n * times);
	for (var t = 0; t < times; t++) p.set(cols.positions, 3 * n * t);
	return { count: n * times, positions: p };
}

function crown(dx) {
	var v = [];
	for (var x = 0; x <= 10 + 1e-9; x += dx) v.push([x, 0, 2.5]);
	return { vertices: v, closedLoop: false };
}

describe("C1: thin is 3D", function () {
	it("thin keeps roof and floor of a tunnel", function () {
		var r = buildMesh(cylinderTunnel(2.5, 20, 0.1, 1), { thin: 0.2 });
		var o = r.origin, roof = 0, floor = 0;
		var byId = r.pool.getAll();
		byId.forEach(function (v) { var z = v.z + o.z; if (z > 2) roof++; else if (z < -2) floor++; });
		expect(floor / roof).toBeGreaterThan(0.8);
		expect(r.report.pointsAfterThin).toBeGreaterThan(5000);
	});
});

describe("C2: Float32 with origin is already shifted", function () {
	it("Float32 local cloud + origin matches the Float64 world cloud", function () {
		var local = halfPipe(2.5, 10, 0.25, 2);
		var world = new Float64Array(local.positions.length);
		for (var i = 0; i < local.count; i++) {
			world[3 * i] = local.positions[3 * i] + UTM.x;
			world[3 * i + 1] = local.positions[3 * i + 1] + UTM.y;
			world[3 * i + 2] = local.positions[3 * i + 2] + UTM.z;
		}
		var bl = { vertices: [[UTM.x, UTM.y, UTM.z + 2.5], [UTM.x + 10, UTM.y, UTM.z + 2.5]], closedLoop: false };
		var f64 = buildMesh({ count: local.count, positions: world }, { breaklines: [bl] });
		var f32 = buildMesh({ count: local.count, positions: Float32Array.from(local.positions) }, { origin: UTM, breaklines: [bl] });
		expect(f32.mesh.constrainedEdges.length).toBe(f64.mesh.constrainedEdges.length);
		expect(f32.mesh.constrainedEdges.length).toBeGreaterThan(30);
		var ix = toIndexed(f32);
		expect(Math.abs(ix.positions[0] - UTM.x)).toBeLessThan(20);
		expect(Math.abs(ix.positions[1] - UTM.y)).toBeLessThan(20);
	});
});

describe("C3 / I1: duplicated clouds", function () {
	it("fully duplicated sphere meshes and closes", function () {
		var r = buildMesh(repeat(fibonacciSphere(3000, 5), 2), {});
		expect(r.mesh.closed).toBe(true);
	});

	it("25 copies of every point still mesh", function () {
		var r = buildMesh(repeat(fibonacciSphere(3000, 5), 25), {});
		expect(r.mesh.closed).toBe(true);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
	});

	it("five coincident points throw TOO_FEW_POINTS", function () {
		expect(codeOf(function () { buildMesh({ count: 5, positions: new Float64Array(15).fill(1) }, {}); })).toBe("TOO_FEW_POINTS");
	});
});

describe("I2 / I3: break line vertex identity", function () {
	it("two lines meeting at an endpoint share the vertex", function () {
		var r = buildMesh(halfPipe(2.5, 10, 0.25, 2), {
			breaklines: [{ vertices: [[0, 0, 2.5], [5, 0, 2.5]], closedLoop: false }, { vertices: [[5, 0, 2.5], [10, 0, 2.5]], closedLoop: false }]
		});
		expect(r.report.constraintFailures).toBe(0);
		expect(r.mesh.constrainedEdges.length).toBe(r.report.breaklineSegments);
	});

	it("closed loop with its first vertex repeated at the end", function () {
		var c = prepareCloud(planarGrid(20, 20, 0.5), { origin: { x: 0, y: 0, z: 0 } });
		var sq = [[1, 1, 0.3], [3, 1, 0.3], [3, 3, 0.3], [1, 3, 0.3], [1, 1, 0.3]];
		var cs = insertConstraints(c, [{ vertices: sq, closedLoop: true }], { tolerance: 0.125 });
		var ids = new Set(Array.from(cs.segments));
		expect(ids.size).toBe(cs.segments.length / 2); // a closed ring: as many vertices as segments
		expect(cs.count).toBe(ids.size);
	});

	it("densely digitised break line does not collapse", function () {
		var r = buildMesh(halfPipe(2.5, 10, 0.25, 2), { breaklines: [crown(0.01)] });
		expect(r.report.weld.collapsedConstraints).toBe(0);
		expect(r.mesh.constrainedEdges.length).toBe(r.report.breaklineSegments);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
	});
});

describe("I4: acceptance never stacks two faces on one side of an edge", function () {
	it("cocircular quad: both diagonals at 2 votes give one cover", function () {
		// unit square 0..3 in the z = 0 plane
		var coords = Float64Array.from([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]);
		var v = createVoteTable();
		[[0, 1, 2], [0, 2, 3], [0, 1, 3], [1, 2, 3]].forEach(function (t) { v.add(t[0], t[1], t[2]); v.add(t[0], t[1], t[2]); });
		var acc = v.accepted(2, 1000, coords);
		expect(acc.length / 3).toBe(2);
	});
});

describe("I5: exact lattices", function () {
	it("an exact planar grid meshes fully", function () {
		var r = buildMesh(planarGrid(50, 50, 1), {});
		expect(r.soup.length).toBeGreaterThan(0.95 * 2 * 49 * 49);
		expect(r.report.orientation.perComponent.length).toBe(1);
	});
});

describe("I6: bad options are TrimeshBuildError", function () {
	var s = fibonacciSphere(500, 5);
	it("tolerance 0", function () { expect(codeOf(function () { buildMesh(s, { tolerance: 0 }); })).toBe("INVALID_INPUT"); });
	it("NaN origin", function () { expect(codeOf(function () { buildMesh(s, { origin: { x: NaN, y: 0, z: 0 } }); })).toBe("INVALID_INPUT"); });
	it("NaN viewpoint", function () { expect(codeOf(function () { buildMesh(s, { viewpoints: [[NaN, 0, 0]] }); })).toBe("INVALID_INPUT"); });
});

describe("I7: public sample", function () {
	it.skipIf(!existsSync(CLOUD_LAS))("las-laz-js samples/Cloud.las builds", async function () {
		var las = await openLas(CLOUD_LAS.pathname.replace(/^\/([A-Za-z]:)/, "$1"));
		var pts = await las.readPoints({ fields: ["x", "y", "z"] });
		var r = buildMesh({ count: pts.count, x: pts.x, y: pts.y, z: pts.z }, {});
		expect(r.report.trianglesAccepted).toBeGreaterThan(10000);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
	}, 120000);
});
