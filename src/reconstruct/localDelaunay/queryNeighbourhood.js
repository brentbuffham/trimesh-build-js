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

// The median neighbour distance of point id, as the first test below needs it for a point's nearest
// neighbour. That is the number the neighbour computes for itself when its own turn comes, so it is
// kept per cloud (and per k) and found once.
var UNKNOWN = -1, NO_NEIGHBOURS = -2;
var medians = new WeakMap();

function memoOf(cloud, k) {
	var memo = medians.get(cloud);
	if (!memo || memo.k !== k) { memo = { k: k, values: new Float64Array(cloud.count).fill(UNKNOWN) }; medians.set(cloud, memo); }
	return memo.values;
}

function neighbourMedian(cloud, id, k) {
	var values = memoOf(cloud, k);
	var m = values[id];
	if (m !== UNKNOWN) return m;
	var c = cloud.coords;
	var rn = nearestPoints(cloud.index, [c[3 * id], c[3 * id + 1], c[3 * id + 2]], k + 1);
	var nd = [];
	for (var i = 0; i < rn.points.length; i++) if (rn.points[i] !== id && rn.d[i] >= DUPLICATE_DISTANCE) nd.push(rn.d[i]);
	m = nd.length ? median(nd) : NO_NEIGHBOURS;
	values[id] = m;
	return m;
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
	var known = memoOf(cloud, opts.k);
	if (ids.length === 0) { known[p] = NO_NEIGHBOURS; return { ids: ids, valid: false }; }

	// Outlier test: a point far from everything has neighbours that are all
	// equally far, so a cull relative to its own median keeps them. Compare
	// with the spacing around its nearest neighbour instead; scan density
	// varies too much across a cloud for one global spacing.
	var localMedian = median(dist);
	known[p] = localMedian;   // the same number p's neighbours will ask for
	var nnMed = neighbourMedian(cloud, ids[0], opts.k);
	if (nnMed !== NO_NEIGHBOURS && localMedian > opts.maxRadiusMultiplier * nnMed) return { ids: ids, valid: false };

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
