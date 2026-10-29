// src/countSelfIntersections.js
//=============================================================
// COUNT SELF-INTERSECTIONS — where the mesh passes through itself
//=============================================================
// trimesh-boolean's bmsSelfIntersect on the result's soup: every pair of triangles that does
// not share a vertex is tested for a crossing, and coplanar overlaps are counted by area.
// It is a check to ask for, not part of every build: about 4 s for 160k triangles and 14 s for
// 185k when many triangles cross (Wookey Hole part 3 before and after patchLoops).
//
// A reconstruction is nearly clean (Wookey part 3: 203 crossing pairs in 162,268 triangles).
// Patching a hole can cut through the wall beside it (the same cave after patchLoops: 15,798
// pairs, 99% of them from the patches), so ask again after patching.
//=============================================================

import { bmsSelfIntersect } from "trimesh-boolean";

/**
 * @param {{soup: Array<Object>}} result - a buildMesh result (or any BMS with a soup)
 * @param {{tolerance?: number, minAreaRatio?: number}} [options] - passed to bmsSelfIntersect
 * @returns {{crossingPairs: number, coplanarPairs: number, triangles: number, segments: number,
 *   candidatePairs: number, ms: number}} triangles: how many triangles are in at least one crossing
 */
export function countSelfIntersections(result, options) {
	var t0 = performance.now();
	var soup = result.soup;
	if (!soup || soup.length === 0) return { crossingPairs: 0, coplanarPairs: 0, triangles: 0, segments: 0, candidatePairs: 0, ms: 0 };
	var si = bmsSelfIntersect(soup, options);
	return {
		crossingPairs: si.stats.crossingPairs,
		coplanarPairs: si.stats.coplanarPairs,
		triangles: Object.keys(si.crossedSet).length,
		segments: si.segments.length,
		candidatePairs: si.stats.candidatePairs,
		ms: Math.round(performance.now() - t0)
	};
}
