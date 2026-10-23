// src/reconstruct/localDelaunay/projectToPlane.js
//=============================================================
// PROJECT A PATCH TO ITS PLANE
//=============================================================
// Orthonormal U, V on the plane (U = n x Y, or n x X when n is
// near Y). The source is patch index 0 at (0, 0); neighbour j is
// patch index j + 1.
//
// Tie-break: exact lattices put 4+ points on one circle, and each patch
// would break that tie its own way, splitting the votes. Every vertex id
// gets a fixed, tiny 3D offset (1e-7 x scale, from a hash of the id) for
// the 2D triangulation only, so every patch breaks a tie the same way.
// Output triangles use the real coordinates, and so must the area test:
// the offsets would give three collinear points a sliver of area.
//=============================================================

var JITTER = 1e-7;

// Deterministic value in [-0.5, 0.5) from an id and an axis
function hashUnit(id, axis) {
	var h = Math.imul((id + 1) ^ 0x9E3779B9, 0x85EBCA6B) ^ Math.imul(axis + 1, 0xC2B2AE35);
	h ^= h >>> 16; h = Math.imul(h, 0x7FEB352D);
	h ^= h >>> 15; h = Math.imul(h, 0x846CA68B);
	h ^= h >>> 16;
	return (h >>> 0) / 4294967296 - 0.5;
}

/**
 * @param {{point: number[], normal: number[]}} plane
 * @param {number[]} ids - neighbour vertex ids
 * @param {Float64Array} vertexCoords
 * @param {number} [sourceId] - id of the source point; enables the tie-break offsets
 * @returns {Float64Array} 2 * (ids.length + 1) values; with the tie-break on, its .exact
 *   property holds the same projection without the offsets (for area tests)
 */
export function projectToPlane(plane, ids, vertexCoords, sourceId) {
	var n = plane.normal, o = plane.point, v = vertexCoords;
	var ux, uy, uz;
	if (Math.abs(n[1]) > 0.9) {
		// n x X = (0, n.z, -n.y)
		ux = 0; uy = n[2]; uz = -n[1];
	} else {
		// n x Y = (-n.z, 0, n.x)
		ux = -n[2]; uy = 0; uz = n[0];
	}
	var ul = Math.sqrt(ux * ux + uy * uy + uz * uz);
	ux /= ul; uy /= ul; uz /= ul;
	// V = n x U
	var vx = n[1] * uz - n[2] * uy;
	var vy = n[2] * ux - n[0] * uz;
	var vz = n[0] * uy - n[1] * ux;

	var out = new Float64Array(2 * (ids.length + 1));
	var exact = null;
	var jit = sourceId === undefined ? 0 : JITTER * (plane.scale || 0);
	var sx = 0, sy = 0, sz = 0;
	if (jit) { sx = jit * hashUnit(sourceId, 0); sy = jit * hashUnit(sourceId, 1); sz = jit * hashUnit(sourceId, 2); }
	for (var i = 0; i < ids.length; i++) {
		var q = ids[i];
		var dx = v[3 * q] - o[0], dy = v[3 * q + 1] - o[1], dz = v[3 * q + 2] - o[2];
		if (jit) {
			if (!exact) exact = new Float64Array(out.length);
			exact[2 * (i + 1)] = dx * ux + dy * uy + dz * uz;
			exact[2 * (i + 1) + 1] = dx * vx + dy * vy + dz * vz;
			dx += jit * hashUnit(q, 0) - sx; dy += jit * hashUnit(q, 1) - sy; dz += jit * hashUnit(q, 2) - sz;
		}
		out[2 * (i + 1)] = dx * ux + dy * uy + dz * uz;
		out[2 * (i + 1) + 1] = dx * vx + dy * vy + dz * vz;
	}
	if (exact) out.exact = exact;
	return out;
}
