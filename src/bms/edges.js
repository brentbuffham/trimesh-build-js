// src/bms/edges.js
//=============================================================
// EDGE MAP over a BMS mega soup
//=============================================================
// Keyed by trimesh-boolean edgeKey on PoolVertex ids, so it matches
// the key format the BMS pipeline uses.
//=============================================================

import { edgeKey } from "trimesh-boolean";

/**
 * @param {number} a - PoolVertex id
 * @param {number} b - PoolVertex id
 * @returns {string}
 */
export function poolEdgeKey(a, b) {
	return edgeKey(String(a), String(b));
}

/**
 * @param {Array<{v0: {id: number}, v1: {id: number}, v2: {id: number}}>} soup
 * @returns {Map<string, number[]>} edge key -> indices of the triangles using it
 */
export function buildEdgeMap(soup) {
	var map = new Map();
	for (var t = 0; t < soup.length; t++) {
		var tri = soup[t];
		var vs = [tri.v0.id, tri.v1.id, tri.v2.id];
		for (var e = 0; e < 3; e++) {
			var k = poolEdgeKey(vs[e], vs[(e + 1) % 3]);
			var list = map.get(k);
			if (list) list.push(t);
			else map.set(k, [t]);
		}
	}
	return map;
}
