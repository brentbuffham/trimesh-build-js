// src/constraints/clipConstraints.js
//=============================================================
// CLIP CONSTRAINTS — the break line segments inside one patch
//=============================================================
// Break lines are split at insert time so every segment is shorter
// than a patch radius. A segment is in a patch only when BOTH ends
// are: nothing is clipped against the patch edge, and no
// patch-local Steiner point is ever made (it could never win a
// second vote).
//=============================================================

/**
 * @param {number[]} patchIds - neighbour vertex ids; patch index j + 1 (index 0 is the source)
 * @param {{segmentsByVertex: Map<number, number[]>}} constraints
 * @returns {Array<[number, number]>} patch-local index pairs, each segment once
 */
export function clipConstraints(patchIds, constraints) {
	var byVertex = constraints.segmentsByVertex;
	if (!byVertex || byVertex.size === 0) return [];
	var local = new Map();
	for (var i = 0; i < patchIds.length; i++) local.set(patchIds[i], i + 1);
	var out = [];
	for (var j = 0; j < patchIds.length; j++) {
		var a = patchIds[j];
		var others = byVertex.get(a);
		if (!others) continue;
		for (var k = 0; k < others.length; k++) {
			var b = others[k];
			if (b <= a) continue;
			var lb = local.get(b);
			if (lb !== undefined) out.push([j + 1, lb]);
		}
	}
	return out;
}
