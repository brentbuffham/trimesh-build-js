// src/reconstruct/localDelaunay/queryNeighbourhood.js
//=============================================================
// NEIGHBOURHOOD — the points one local patch is built from
//=============================================================
// k nearest cloud points (las-laz-js kNN), culled at
// maxRadiusMultiplier x their median distance, plus any break line
// vertices inside that radius. Too few left = boundary/outlier
// candidate, not a patch.
//=============================================================

import { nearestPoints, pointsInRadius } from "las-laz-js";

// Neighbours closer than this are exact duplicates of the source: they
// project onto it and could take its place in the 2D triangulation.
var DUPLICATE_DISTANCE = 1e-9;

function median(values) {
	var s = Float64Array.from(values).sort();
	return s[(s.length - 1) >> 1];
}

/**
 * @param {import("../../input/prepareCloud.js").PreparedCloud} cloud
 * @param {number} p - source point id
 * @param {{k: number, maxRadiusMultiplier: number, minNeighbours: number,
 *   extra?: {index: Object|null, firstId: number, coords: Float64Array}}} opts
 *   extra: break line vertices; ids returned as firstId + i.
 * @returns {{ids: number[], valid: boolean}} ids excludes p
 */
export function queryNeighbourhood(cloud, p, opts) {
	var c = cloud.coords;
	var q = [c[3 * p], c[3 * p + 1], c[3 * p + 2]];
	var r = nearestPoints(cloud.index, q, opts.k + 1);
	var ids = [], dist = [];
	for (var i = 0; i < r.points.length; i++) {
		var id = r.points[i];
		if (id === p || r.d[i] < DUPLICATE_DISTANCE) continue;
		ids.push(id);
		dist.push(r.d[i]);
	}
	if (ids.length === 0) return { ids: ids, valid: false };

	// Outlier test: a point far from everything has neighbours that are all
	// equally far, so a cull relative to its own median keeps them. Compare
	// with the spacing around its nearest neighbour instead; scan density
	// varies too much across a cloud for one global spacing.
	var localMedian = median(dist);
	var nn = ids[0];
	var rn = nearestPoints(cloud.index, [c[3 * nn], c[3 * nn + 1], c[3 * nn + 2]], opts.k + 1);
	var nd = [];
	for (var m = 0; m < rn.points.length; m++) if (rn.points[m] !== nn && rn.d[m] >= DUPLICATE_DISTANCE) nd.push(rn.d[m]);
	if (nd.length && localMedian > opts.maxRadiusMultiplier * median(nd)) return { ids: ids, valid: false };

	var cull = opts.maxRadiusMultiplier * localMedian;
	var kept = [];
	for (var j = 0; j < ids.length; j++) if (dist[j] <= cull) kept.push(ids[j]);

	var extra = opts.extra;
	if (extra && extra.index) {
		var near = pointsInRadius(extra.index, q, cull);
		for (var e = 0; e < near.length; e++) kept.push(extra.firstId + near[e]);
	}

	return { ids: kept, valid: kept.length >= opts.minNeighbours };
}
