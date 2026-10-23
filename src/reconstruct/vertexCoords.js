// src/reconstruct/vertexCoords.js
//=============================================================
// VERTEX COORDS — one array for every vertex id
//=============================================================
// Cloud points are ids 0..count-1, break line vertices follow.
// Shared by the reconstructors and by ingestToBMS.
//=============================================================

/**
 * @param {import("../input/prepareCloud.js").PreparedCloud} cloud
 * @param {{count: number, coords: Float64Array}} constraints
 * @returns {Float64Array} origin-shifted XYZ of ids 0..count+m-1
 */
export function vertexCoordsOf(cloud, constraints) {
	if (!constraints || constraints.count === 0) return cloud.coords;
	var all = new Float64Array(cloud.coords.length + constraints.coords.length);
	all.set(cloud.coords, 0);
	all.set(constraints.coords, cloud.coords.length);
	return all;
}
