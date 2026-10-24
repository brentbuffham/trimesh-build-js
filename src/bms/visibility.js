// src/bms/visibility.js
//=============================================================
// VISIBILITY — which side of an open surface is the void
//=============================================================
// A component with no viewpoints that is not closed has no sign
// from orientMesh. Inside a cave, drive or hole, rays cast into the
// void come back off the opposite wall; rays cast into the rock
// escape. So from sampled triangles cast rays into both hemispheres
// and point the normals at the side whose rays come back (after
// Takayama, Jacobson & Sorkine 2014, who cast rays to fix facet
// orientation). Rays test every triangle, not only the component's:
// holes often split a cave into separate wall pieces.
//
//   grid:  uniform cells over the triangles' boxes (CSR, typed)
//   rays:  3D DDA through the cells (Amanatides & Woo 1987),
//          Moller-Trumbore per triangle, any hit past tMin counts
//=============================================================

var MAX_CELLS = 2097152; // 2^21

/**
 * Mean length over every triangle's three edges.
 * @param {Array<{v0, v1, v2}>} soup
 * @returns {number}
 */
export function meanEdgeLength(soup) {
	var sum = 0;
	for (var i = 0; i < soup.length; i++) {
		var a = soup[i].v0, b = soup[i].v1, c = soup[i].v2;
		sum += Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z) + Math.hypot(c.x - b.x, c.y - b.y, c.z - b.z) + Math.hypot(a.x - c.x, a.y - c.y, a.z - c.z);
	}
	return soup.length ? sum / (3 * soup.length) : 0;
}

/**
 * Uniform grid over the triangles' bounding boxes. A triangle is listed
 * in every cell its box overlaps; the cells grow until there are at
 * most 2^21 of them.
 * @param {Array<{v0, v1, v2}>} soup
 * @param {number} cellSize
 * @returns {Object} grid: min, cell, n, start (CSR offsets), tris, P (9 coords per triangle), stamp, ray
 */
export function buildTriangleGrid(soup, cellSize) {
	var T = soup.length, P = new Float64Array(9 * T);
	var lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
	for (var i = 0; i < T; i++) {
		var vs = [soup[i].v0, soup[i].v1, soup[i].v2];
		for (var k = 0; k < 3; k++) {
			var x = vs[k].x, y = vs[k].y, z = vs[k].z;
			P[9 * i + 3 * k] = x; P[9 * i + 3 * k + 1] = y; P[9 * i + 3 * k + 2] = z;
			if (x < lo[0]) lo[0] = x; if (x > hi[0]) hi[0] = x;
			if (y < lo[1]) lo[1] = y; if (y > hi[1]) hi[1] = y;
			if (z < lo[2]) lo[2] = z; if (z > hi[2]) hi[2] = z;
		}
	}
	if (T === 0) { lo = [0, 0, 0]; hi = [0, 0, 0]; }
	var pad = 1e-9 * Math.max(Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]), 1);
	for (var d = 0; d < 3; d++) { lo[d] -= pad; hi[d] += pad; }

	var cell = cellSize > 0 ? cellSize : 1, n;
	for (;;) {
		n = [0, 1, 2].map(function (a) { return Math.max(1, Math.ceil((hi[a] - lo[a]) / cell)); });
		var cells = n[0] * n[1] * n[2];
		if (cells <= MAX_CELLS) break;
		cell *= Math.cbrt(cells / MAX_CELLS) * 1.0001;
	}

	var nx = n[0], ny = n[1], nz = n[2];
	var start = new Int32Array(nx * ny * nz + 1);
	var box = new Int32Array(6 * T);
	for (var t = 0; t < T; t++) {
		for (var a = 0; a < 3; a++) {
			var mn = Math.min(P[9 * t + a], P[9 * t + 3 + a], P[9 * t + 6 + a]);
			var mx = Math.max(P[9 * t + a], P[9 * t + 3 + a], P[9 * t + 6 + a]);
			box[6 * t + a] = Math.min(n[a] - 1, Math.max(0, Math.floor((mn - lo[a]) / cell)));
			box[6 * t + 3 + a] = Math.min(n[a] - 1, Math.max(0, Math.floor((mx - lo[a]) / cell)));
		}
		for (var cz = box[6 * t + 2]; cz <= box[6 * t + 5]; cz++)
			for (var cy = box[6 * t + 1]; cy <= box[6 * t + 4]; cy++)
				for (var cx = box[6 * t]; cx <= box[6 * t + 3]; cx++) start[(cz * ny + cy) * nx + cx + 1]++;
	}
	for (var c = 0; c < nx * ny * nz; c++) start[c + 1] += start[c];
	var tris = new Int32Array(start[nx * ny * nz]), fill = start.slice(0, nx * ny * nz);
	for (var u = 0; u < T; u++) {
		for (var zz = box[6 * u + 2]; zz <= box[6 * u + 5]; zz++)
			for (var yy = box[6 * u + 1]; yy <= box[6 * u + 4]; yy++)
				for (var xx = box[6 * u]; xx <= box[6 * u + 3]; xx++) tris[fill[(zz * ny + yy) * nx + xx]++] = u;
	}
	return { min: lo, cell: cell, n: n, start: start, tris: tris, P: P, stamp: new Int32Array(T), ray: 0 };
}

// Moller-Trumbore: ray parameter t of the hit on triangle i, or -1
function hitT(P, i, ox, oy, oz, dx, dy, dz) {
	var b = 9 * i;
	var e1x = P[b + 3] - P[b], e1y = P[b + 4] - P[b + 1], e1z = P[b + 5] - P[b + 2];
	var e2x = P[b + 6] - P[b], e2y = P[b + 7] - P[b + 1], e2z = P[b + 8] - P[b + 2];
	var px = dy * e2z - dz * e2y, py = dz * e2x - dx * e2z, pz = dx * e2y - dy * e2x;
	var det = e1x * px + e1y * py + e1z * pz;
	var eps = 1e-12 * Math.hypot(e1x, e1y, e1z) * Math.hypot(e2x, e2y, e2z);
	if (!(Math.abs(det) > eps)) return -1;
	var inv = 1 / det;
	var tx = ox - P[b], ty = oy - P[b + 1], tz = oz - P[b + 2];
	var u = (tx * px + ty * py + tz * pz) * inv;
	if (u < 0 || u > 1) return -1;
	var qx = ty * e1z - tz * e1y, qy = tz * e1x - tx * e1z, qz = tx * e1y - ty * e1x;
	var v = (dx * qx + dy * qy + dz * qz) * inv;
	if (v < 0 || u + v > 1) return -1;
	return (e2x * qx + e2y * qy + e2z * qz) * inv;
}

/**
 * Does the ray o + t d hit any triangle other than skip at t > tMin?
 * Pass a unit d so that tMin is a distance.
 * @returns {boolean}
 */
export function rayHits(grid, soup, ox, oy, oz, dx, dy, dz, tMin, skip) {
	var lo = grid.min, cell = grid.cell, n = grid.n, nx = n[0], ny = n[1], nz = n[2];
	var ix = Math.floor((ox - lo[0]) / cell), iy = Math.floor((oy - lo[1]) / cell), iz = Math.floor((oz - lo[2]) / cell);
	if (ix < 0 || iy < 0 || iz < 0 || ix >= nx || iy >= ny || iz >= nz) return false;
	var ray = ++grid.ray, stamp = grid.stamp, start = grid.start, tris = grid.tris, P = grid.P;
	var sx = dx > 0 ? 1 : dx < 0 ? -1 : 0, sy = dy > 0 ? 1 : dy < 0 ? -1 : 0, sz = dz > 0 ? 1 : dz < 0 ? -1 : 0;
	var tmx = sx ? (lo[0] + (ix + (sx > 0 ? 1 : 0)) * cell - ox) / dx : Infinity;
	var tmy = sy ? (lo[1] + (iy + (sy > 0 ? 1 : 0)) * cell - oy) / dy : Infinity;
	var tmz = sz ? (lo[2] + (iz + (sz > 0 ? 1 : 0)) * cell - oz) / dz : Infinity;
	var tdx = sx ? cell / Math.abs(dx) : Infinity, tdy = sy ? cell / Math.abs(dy) : Infinity, tdz = sz ? cell / Math.abs(dz) : Infinity;
	for (;;) {
		var c = (iz * ny + iy) * nx + ix;
		for (var k = start[c]; k < start[c + 1]; k++) {
			var t = tris[k];
			if (stamp[t] === ray) continue;
			stamp[t] = ray;
			if (t === skip) continue;
			if (hitT(P, t, ox, oy, oz, dx, dy, dz) > tMin) return true;
		}
		if (tmx <= tmy && tmx <= tmz) { ix += sx; tmx += tdx; if (ix < 0 || ix >= nx) return false; }
		else if (tmy <= tmz) { iy += sy; tmy += tdy; if (iy < 0 || iy >= ny) return false; }
		else { iz += sz; tmz += tdz; if (iz < 0 || iz >= nz) return false; }
		if (!sx && !sy && !sz) return false;
	}
}
