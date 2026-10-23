// src/bms/orientMesh.js
//=============================================================
// ORIENT MESH — consistent winding, then normals into the void
//=============================================================
// PCA normals have no reliable sign, so winding is fixed on the
// welded mesh, never per triangle:
//   1. per connected component, walk outward across edges with
//      exactly 2 faces, flipping any neighbour that runs the shared
//      edge the same way;
//   2. pick the component's sign so normals point out of rock into
//      the void:
//        viewpoints given -> face the nearest scanner position
//        closed           -> void is inside, normals inward
//                            (signed volume negative)
//        otherwise        -> leave it, "unresolved".
//=============================================================

import { computeSignedVolume } from "trimesh-boolean";
import { buildEdgeMap, poolEdgeKey } from "./edges.js";

function flip(t) {
	var x = t.v1; t.v1 = t.v2; t.v2 = x;
}

// true when triangle t runs edge a -> b
function runs(t, a, b) {
	var i0 = t.v0.id, i1 = t.v1.id, i2 = t.v2.id;
	return (i0 === a && i1 === b) || (i1 === a && i2 === b) || (i2 === a && i0 === b);
}

function crossOf(t) {
	var ax = t.v1.x - t.v0.x, ay = t.v1.y - t.v0.y, az = t.v1.z - t.v0.z;
	var bx = t.v2.x - t.v0.x, by = t.v2.y - t.v0.y, bz = t.v2.z - t.v0.z;
	return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
}

// Sum over triangles of (2 x area x normal) . (nearest viewpoint - centroid)
function viewpointScore(soup, tris, viewpoints) {
	var score = 0;
	for (var i = 0; i < tris.length; i++) {
		var t = soup[tris[i]];
		var cx = (t.v0.x + t.v1.x + t.v2.x) / 3, cy = (t.v0.y + t.v1.y + t.v2.y) / 3, cz = (t.v0.z + t.v1.z + t.v2.z) / 3;
		var best = null, bd = Infinity;
		for (var v = 0; v < viewpoints.length; v++) {
			var p = viewpoints[v];
			var d = (p[0] - cx) * (p[0] - cx) + (p[1] - cy) * (p[1] - cy) + (p[2] - cz) * (p[2] - cz);
			if (d < bd) { bd = d; best = p; }
		}
		var n = crossOf(t);
		score += n[0] * (best[0] - cx) + n[1] * (best[1] - cy) + n[2] * (best[2] - cz);
	}
	return score;
}

/**
 * @param {{soup: Array<Object>}} bms - triangles are flipped in place
 * @param {Array<number[]>} [viewpoints] - origin-shifted scanner positions
 * @returns {{perComponent: Array<{triangles: number, method: string, consistent: boolean}>,
 *   orientation: "viewpoint"|"closed"|"unresolved"|"mixed"}}
 */
export function orientMesh(bms, viewpoints) {
	var soup = bms.soup;
	var edges = buildEdgeMap(soup);
	var comp = new Int32Array(soup.length).fill(-1);
	var perComponent = [];
	var hasViews = Array.isArray(viewpoints) && viewpoints.length > 0;

	for (var seed = 0; seed < soup.length; seed++) {
		if (comp[seed] !== -1) continue;
		var id = perComponent.length;
		var members = [seed];
		var consistent = true;
		var closed = true;
		comp[seed] = id;
		for (var q = 0; q < members.length; q++) {
			var ti = members[q], t = soup[ti];
			var vs = [t.v0.id, t.v1.id, t.v2.id];
			for (var e = 0; e < 3; e++) {
				var a = vs[e], b = vs[(e + 1) % 3];
				var list = edges.get(poolEdgeKey(a, b));
				if (list.length !== 2) { closed = false; continue; }
				var nj = list[0] === ti ? list[1] : list[0];
				var other = soup[nj];
				// The current triangle may have been flipped since vs was read;
				// re-read its direction on this edge.
				var curAB = runs(t, a, b);
				var otherSame = curAB ? runs(other, a, b) : runs(other, b, a);
				if (comp[nj] === -1) {
					if (otherSame) flip(other);
					comp[nj] = id;
					members.push(nj);
				} else if (otherSame) {
					consistent = false;
				}
			}
		}

		var method;
		if (hasViews) {
			if (viewpointScore(soup, members, viewpoints) < 0) members.forEach(function (m) { flip(soup[m]); });
			method = "viewpoint";
		} else if (closed) {
			var tris = members.map(function (m) { return soup[m]; });
			if (computeSignedVolume(tris) > 0) members.forEach(function (m) { flip(soup[m]); });
			method = "closed";
		} else {
			method = "unresolved";
		}
		perComponent.push({ triangles: members.length, method: method, consistent: consistent });
	}

	var methods = new Set(perComponent.map(function (c) { return c.method; }));
	var orientation = methods.size === 1 ? perComponent[0].method : methods.size === 0 ? "unresolved" : "mixed";
	return { perComponent: perComponent, orientation: orientation };
}
