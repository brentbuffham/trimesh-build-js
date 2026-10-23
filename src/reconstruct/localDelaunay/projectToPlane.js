// src/reconstruct/localDelaunay/projectToPlane.js
//=============================================================
// PROJECT A PATCH TO ITS PLANE
//=============================================================
// Orthonormal U, V on the plane (U = n x Y, or n x X when n is
// near Y). The source is patch index 0 at (0, 0); neighbour j is
// patch index j + 1.
//=============================================================

/**
 * @param {{point: number[], normal: number[]}} plane
 * @param {number[]} ids - neighbour vertex ids
 * @param {Float64Array} vertexCoords
 * @returns {Float64Array} 2 * (ids.length + 1) values
 */
export function projectToPlane(plane, ids, vertexCoords) {
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
	for (var i = 0; i < ids.length; i++) {
		var q = ids[i];
		var dx = v[3 * q] - o[0], dy = v[3 * q + 1] - o[1], dz = v[3 * q + 2] - o[2];
		out[2 * (i + 1)] = dx * ux + dy * uy + dz * uz;
		out[2 * (i + 1) + 1] = dx * vx + dy * vy + dz * vz;
	}
	return out;
}
