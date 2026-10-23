import { describe, it, expect } from "vitest";
import { createVoteTable } from "../src/reconstruct/localDelaunay/acceptTriangles.js";
import { runLocalDelaunay } from "../src/reconstruct/localDelaunay/run.js";
import { RECONSTRUCTORS } from "../src/reconstruct/index.js";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { fibonacciSphere } from "./fixtures/synthetic.js";

var OPTS = { k: 20, maxRadiusMultiplier: 3, minNeighbours: 6, normalAgreement: 0.5, maxPlaneOffset: 0.5, minVotes: 2 };

function emptyConstraints(cloud) {
	return { firstId: cloud.count, count: 0, coords: new Float64Array(0), dropped: null, segmentsByVertex: new Map(), index: null };
}

function asList(u32) {
	var out = [];
	for (var i = 0; i < u32.length; i += 3) out.push([u32[i], u32[i + 1], u32[i + 2]].sort(function (a, b) { return a - b; }).join(","));
	return out.sort();
}

function edgeUse(u32) {
	var m = new Map();
	for (var i = 0; i < u32.length; i += 3) {
		for (var e = 0; e < 3; e++) {
			var a = u32[i + e], b = u32[i + (e + 1) % 3];
			var k = a < b ? a + "|" + b : b + "|" + a;
			m.set(k, (m.get(k) || 0) + 1);
		}
	}
	return m;
}

describe("createVoteTable", function () {
	it("2 votes accepted, 1 rejected", function () {
		var v = createVoteTable();
		v.add(1, 2, 3); v.add(1, 2, 3); v.add(4, 5, 6);
		expect(asList(v.accepted(2, 1000))).toEqual(["1,2,3"]);
		expect(v.proposed).toBe(2);
	});

	it("key is order independent", function () {
		var v = createVoteTable();
		v.add(3, 1, 2); v.add(2, 3, 1);
		expect(asList(v.accepted(2, 1000))).toEqual(["1,2,3"]);
	});

	it("breakline triangle needs 1 vote", function () {
		var v = createVoteTable();
		v.add(1, 100, 101);
		expect(asList(v.accepted(2, 100))).toEqual(["1,100,101"]);
	});

	it("promote fills a slit", function () {
		// strip of a square split into 4 triangles around centre 0; (0,3,4) has one vote
		var v = createVoteTable();
		[[0, 1, 2], [0, 2, 3], [0, 4, 1]].forEach(function (t) { v.add(t[0], t[1], t[2]); v.add(t[0], t[1], t[2]); });
		v.add(0, 3, 4);
		expect(asList(v.accepted(2, 1000))).toEqual(["0,1,2", "0,1,4", "0,2,3", "0,3,4"]);
	});

	it("promote does not over-fill an edge", function () {
		var v = createVoteTable();
		[[0, 1, 2], [0, 2, 3], [0, 3, 1]].forEach(function (t) { v.add(t[0], t[1], t[2]); v.add(t[0], t[1], t[2]); });
		v.add(0, 1, 9); // edge 0-1 already has 2 faces
		expect(asList(v.accepted(2, 1000))).not.toContain("0,1,9");
	});
});

describe("runLocalDelaunay", function () {
	it("sphere: every edge used <= 2 times", function () {
		var cloud = prepareCloud(fibonacciSphere(3000, 5), {});
		var r = runLocalDelaunay(cloud, emptyConstraints(cloud), OPTS);
		var over = 0;
		edgeUse(r.triangles).forEach(function (n) { if (n > 2) over++; });
		expect(over).toBe(0);
		expect(r.triangles.length / 3).toBeGreaterThan(0.95 * 2 * (3000 - 2));
		expect(r.report.trianglesAccepted).toBe(r.triangles.length / 3);
	});

	it("outlier skipped, no NaN", function () {
		var s = fibonacciSphere(3000, 5);
		var p = Array.from(s.positions).concat([100, 100, 100]);
		var cloud = prepareCloud({ count: p.length / 3, positions: Float64Array.from(p) }, {});
		var r = runLocalDelaunay(cloud, emptyConstraints(cloud), OPTS);
		expect(r.report.pointsSkipped).toBeGreaterThanOrEqual(1);
		for (var i = 0; i < r.triangles.length; i++) {
			expect(r.triangles[i]).toBeLessThan(cloud.count - 1);
		}
	});

	it("registry exposes localDelaunay", function () {
		expect(RECONSTRUCTORS.localDelaunay).toBe(runLocalDelaunay);
	});
});
