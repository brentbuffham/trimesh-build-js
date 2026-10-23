// src/reconstruct/localDelaunay/estimatePlane.js
//=============================================================
// PATCH PLANE + BRIDGING GUARD
//=============================================================
// The plane goes through the source point with its (PCA) normal;
// scale is the median distance to its neighbours.
//
// The bridging guard keeps a patch on ONE surface:
//   - normal agreement drops walls meeting at an angle;
//   - plane offset drops a close parallel wall, whose normals agree.
// Normal signs are not resolved yet, so agreement uses |dot|.
//=============================================================

function median(values) {
	var s = Float64Array.from(values).sort();
	return s[(s.length - 1) >> 1];
}

/**
 * @param {import("../../input/prepareCloud.js").PreparedCloud} cloud
 * @param {number} p - source point id (a cloud point)
 * @param {number[]} ids - neighbour vertex ids
 * @param {Float64Array} vertexCoords - coordinates of every vertex id
 * @returns {{point: number[], normal: number[], scale: number}}
 */
export function estimatePlane(cloud, p, ids, vertexCoords) {
	var v = vertexCoords;
	var px = v[3 * p], py = v[3 * p + 1], pz = v[3 * p + 2];
	var nx = cloud.normals[3 * p], ny = cloud.normals[3 * p + 1], nz = cloud.normals[3 * p + 2];
	var len = Math.sqrt(nx * nx + ny * ny + nz * nz);
	var normal = len > 0 ? [nx / len, ny / len, nz / len] : [0, 0, 0];
	var d = [];
	for (var i = 0; i < ids.length; i++) {
		var q = ids[i];
		var dx = v[3 * q] - px, dy = v[3 * q + 1] - py, dz = v[3 * q + 2] - pz;
		d.push(Math.sqrt(dx * dx + dy * dy + dz * dz));
	}
	return { point: [px, py, pz], normal: normal, scale: d.length ? median(d) : 0 };
}

/**
 * Drop neighbours that belong to a different wall.
 * @param {import("../../input/prepareCloud.js").PreparedCloud} cloud
 * @param {number} p
 * @param {number[]} ids
 * @param {{point: number[], normal: number[], scale: number}} plane
 * @param {Float64Array} vertexCoords
 * @param {{normalAgreement: number, maxPlaneOffset: number}} opts
 * @returns {number[]} surviving ids
 */
export function bridgingGuard(cloud, p, ids, plane, vertexCoords, opts) {
	var v = vertexCoords, n = plane.normal, o = plane.point;
	var maxOff = opts.maxPlaneOffset * plane.scale;
	var N = cloud.normals;
	var out = [];
	for (var i = 0; i < ids.length; i++) {
		var q = ids[i];
		var off = (v[3 * q] - o[0]) * n[0] + (v[3 * q + 1] - o[1]) * n[1] + (v[3 * q + 2] - o[2]) * n[2];
		if (Math.abs(off) > maxOff) continue;
		if (q < cloud.count) {
			var qx = N[3 * q], qy = N[3 * q + 1], qz = N[3 * q + 2];
			var ql = Math.sqrt(qx * qx + qy * qy + qz * qz);
			if (!(ql > 0)) continue;
			if (Math.abs((qx * n[0] + qy * n[1] + qz * n[2]) / ql) < opts.normalAgreement) continue;
		}
		out.push(q);
	}
	return out;
}
