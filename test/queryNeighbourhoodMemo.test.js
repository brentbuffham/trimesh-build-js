// queryNeighbourhood remembers each point's median neighbour distance for the outlier test.
// It must answer exactly as the plain version does (a second search for the nearest neighbour,
// every time), whatever order the points are asked in.
import { describe, it, expect } from "vitest";
import { nearestPoints, pointsInRadius } from "las-laz-js";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { queryNeighbourhood } from "../src/reconstruct/localDelaunay/queryNeighbourhood.js";
import { planarGrid, fibonacciSphere, mulberry32 } from "./fixtures/synthetic.js";

var NB = { k: 20, maxRadiusMultiplier: 3, minNeighbours: 6 };
var DUPLICATE_DISTANCE = 1e-9;

function median(values) { var s = Float64Array.from(values).sort(); return s[(s.length - 1) >> 1]; }

// the version before the memo
function reference(cloud, p, opts) {
	var c = cloud.coords, q = [c[3 * p], c[3 * p + 1], c[3 * p + 2]];
	var r = nearestPoints(cloud.index, q, opts.k + 1), ids = [], dist = [];
	for (var i = 0; i < r.points.length; i++) {
		if (r.points[i] === p || r.d[i] < DUPLICATE_DISTANCE) continue;
		ids.push(r.points[i]); dist.push(r.d[i]);
	}
	if (ids.length === 0) return { ids: ids, valid: false };
	var localMedian = median(dist), nn = ids[0];
	var rn = nearestPoints(cloud.index, [c[3 * nn], c[3 * nn + 1], c[3 * nn + 2]], opts.k + 1), nd = [];
	for (var m = 0; m < rn.points.length; m++) if (rn.points[m] !== nn && rn.d[m] >= DUPLICATE_DISTANCE) nd.push(rn.d[m]);
	if (nd.length && localMedian > opts.maxRadiusMultiplier * median(nd)) return { ids: ids, valid: false };
	var cull = opts.maxRadiusMultiplier * localMedian, kept = [];
	for (var j = 0; j < ids.length; j++) if (dist[j] <= cull) kept.push(ids[j]);
	return { ids: kept, valid: kept.length >= opts.minNeighbours };
}

// a sphere with a few far stragglers (outliers) and exact duplicates, so every branch is taken
function messy() {
	var s = fibonacciSphere(1500, 5), p = Array.from(s.positions), rnd = mulberry32(3);
	// stragglers floating 4 above a surface sampled at ~0.46: their own spacing is far wider than
	// their nearest neighbour's, which is what the outlier test looks for
	for (var i = 0; i < 12; i++) {
		var u = rnd() * 2 - 1, th = rnd() * 2 * Math.PI, w = Math.sqrt(1 - u * u);
		p.push(9 * w * Math.cos(th), 9 * w * Math.sin(th), 9 * u);
	}
	for (var j = 0; j < 30; j++) p.push(p[3 * j], p[3 * j + 1], p[3 * j + 2]);                // duplicates
	return { count: p.length / 3, positions: Float64Array.from(p) };
}

describe("queryNeighbourhood memo", function () {
	[["sphere with outliers and duplicates", messy], ["flat grid", function () { return planarGrid(25, 25, 1); }]].forEach(function (c) {
		it("answers as the plain version does, in any order: " + c[0], function () {
			var cloud = prepareCloud(c[1](), { origin: { x: 0, y: 0, z: 0 } }), n = cloud.count, order = [];
			for (var i = 0; i < n; i++) order.push(i);
			var rnd = mulberry32(9);
			for (var a = n - 1; a > 0; a--) { var b = Math.floor(rnd() * (a + 1)), t = order[a]; order[a] = order[b]; order[b] = t; }
			var invalid = 0;
			order.forEach(function (p) {
				var got = queryNeighbourhood(cloud, p, NB), want = reference(cloud, p, NB);
				expect(got).toEqual(want);
				if (!want.valid) invalid++;
			});
			// ascending order too, on a fresh memo (a new k starts a new one)
			var other = { k: 19, maxRadiusMultiplier: 3, minNeighbours: 6 };
			for (var p = 0; p < n; p++) expect(queryNeighbourhood(cloud, p, other)).toEqual(reference(cloud, p, other));
			if (c[0] !== "flat grid") expect(invalid).toBeGreaterThan(0);
		});
	});
});
