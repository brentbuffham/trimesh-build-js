// src/input/markWeldDuplicates.js
//=============================================================
// MARK WELD DUPLICATES — make ids unique at the weld tolerance
//=============================================================
// The BMS pool welds anything within tolerance. If two ids the pool
// will merge both take part in voting, two different id-edges can
// become ONE pool edge after the weld, and the "never a third face"
// rule of acceptance is broken behind its back (seen on a break
// line: a cloud point 6 cm from a break line vertex).
//
// So, before reconstruction, drop:
//   - cloud points within tolerance of a break line vertex
//     (the break line wins: it is never moved);
//   - cloud points within tolerance of an earlier kept cloud point.
// Dropped points take no part in any patch.
//=============================================================

import { pointsInRadius } from "las-laz-js";

/**
 * @param {import("./prepareCloud.js").PreparedCloud} cloud
 * @param {{count: number, coords: Float64Array, dropped: Uint8Array|null}} constraints - dropped is created if null
 * @param {number} tolerance - weld distance
 * @returns {number} cloud points newly dropped
 */
export function markWeldDuplicates(cloud, constraints, tolerance) {
	if (!constraints.dropped) constraints.dropped = new Uint8Array(cloud.count);
	var dropped = constraints.dropped;
	var C = cloud.coords, B = constraints.coords;
	var n = 0;

	for (var b = 0; b < constraints.count; b++) {
		var near = pointsInRadius(cloud.index, [B[3 * b], B[3 * b + 1], B[3 * b + 2]], tolerance);
		for (var i = 0; i < near.length; i++) {
			if (!dropped[near[i]]) { dropped[near[i]] = 1; n++; }
		}
	}

	for (var p = 0; p < cloud.count; p++) {
		if (dropped[p]) continue;
		var close = pointsInRadius(cloud.index, [C[3 * p], C[3 * p + 1], C[3 * p + 2]], tolerance);
		for (var j = 0; j < close.length; j++) {
			var q = close[j];
			if (q > p && !dropped[q]) { dropped[q] = 1; n++; }
		}
	}
	return n;
}
