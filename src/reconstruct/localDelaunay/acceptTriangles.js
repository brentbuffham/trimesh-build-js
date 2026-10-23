// src/reconstruct/localDelaunay/acceptTriangles.js
//=============================================================
// ACCEPT TRIANGLES — umbrella votes to one consistent set
//=============================================================
// Every patch votes for the triangles of its source's umbrella. A
// triangle seen by >= minVotes patches is accepted. Break line
// vertices own no umbrella, so a triangle with two or more of them
// can reach only 1 vote: it is accepted at 1.
//
// Insertion is greedy, most votes first, and never puts a third
// face on an edge (cocircular quads can give BOTH diagonals 2 votes),
// nor a second face on the same side of an edge as its first.
//
// Promote pass: a 1-vote triangle that exactly fills a slit (all
// three edges under 2 faces, at least two of them at exactly 1) is
// added. Neighbouring patches that split their vote leave these.
//=============================================================

function sortedKey(a, b, c) {
	var t;
	if (a > b) { t = a; a = b; b = t; }
	if (b > c) { t = b; b = c; c = t; }
	if (a > b) { t = a; a = b; b = t; }
	return a + "," + b + "," + c;
}

function edgeId(a, b) {
	return a < b ? a + "|" + b : b + "|" + a;
}

/**
 * @returns {{add: function(number, number, number): void,
 *   accepted: function(number, number): Uint32Array, readonly proposed: number}}
 */
export function createVoteTable() {
	/** @type {Map<string, {v: number[], votes: number}>} */
	var table = new Map();

	function add(a, b, c) {
		var k = sortedKey(a, b, c);
		var e = table.get(k);
		if (e) e.votes++;
		else table.set(k, { v: [a, b, c], votes: 1 });
	}

	/**
	 * @param {number} minVotes
	 * @param {number} firstBreaklineId - ids >= this are break line vertices
	 * @param {Float64Array} [coords] - XYZ of every id; enables the same-side test
	 * @returns {Uint32Array} accepted triangles, 3 ids each
	 */
	function accepted(minVotes, firstBreaklineId, coords) {
		var keys = Array.from(table.keys()).sort();
		var faces = new Map();
		var thirdOf = new Map(); // edge -> third vertex of its first face
		var out = [];

		function faceCount(a, b) { return faces.get(edgeId(a, b)) || 0; }
		// An edge takes a second face only from the OTHER side of its first:
		// two triangles on one side of an edge overlap (a double cover).
		function otherSide(a, b, d) {
			if (!coords) return true;
			var c = thirdOf.get(edgeId(a, b));
			if (c === undefined) return true;
			var C = coords;
			var ex = C[3 * b] - C[3 * a], ey = C[3 * b + 1] - C[3 * a + 1], ez = C[3 * b + 2] - C[3 * a + 2];
			var cx = C[3 * c] - C[3 * a], cy = C[3 * c + 1] - C[3 * a + 1], cz = C[3 * c + 2] - C[3 * a + 2];
			var dx = C[3 * d] - C[3 * a], dy = C[3 * d + 1] - C[3 * a + 1], dz = C[3 * d + 2] - C[3 * a + 2];
			// n = e x c (first face normal); perp = n x e points from the edge towards c
			var nx = ey * cz - ez * cy, ny = ez * cx - ex * cz, nz = ex * cy - ey * cx;
			var px = ny * ez - nz * ey, py = nz * ex - nx * ez, pz = nx * ey - ny * ex;
			return dx * px + dy * py + dz * pz < 0;
		}
		function fits(v) {
			for (var e = 0; e < 3; e++) {
				var a = v[e], b = v[(e + 1) % 3], d = v[(e + 2) % 3];
				var n = faceCount(a, b);
				if (n >= 2 || (n === 1 && !otherSide(a, b, d))) return false;
			}
			return true;
		}
		function put(v) {
			for (var e = 0; e < 3; e++) {
				var id = edgeId(v[e], v[(e + 1) % 3]);
				if (!faces.has(id)) thirdOf.set(id, v[(e + 2) % 3]);
				faces.set(id, (faces.get(id) || 0) + 1);
			}
			out.push(v[0], v[1], v[2]);
		}
		function needed(v) {
			var bl = (v[0] >= firstBreaklineId ? 1 : 0) + (v[1] >= firstBreaklineId ? 1 : 0) + (v[2] >= firstBreaklineId ? 1 : 0);
			return bl >= 2 ? 1 : minVotes;
		}

		// Most votes first; ties in key order (deterministic)
		var ranked = keys.map(function (k) { return table.get(k); })
			.filter(function (e) { return e.votes >= needed(e.v); });
		ranked.sort(function (x, y) { return y.votes - x.votes; });
		var taken = new Set();
		for (var i = 0; i < ranked.length; i++) {
			if (fits(ranked[i].v)) { put(ranked[i].v); taken.add(ranked[i]); }
		}

		// Promote pass over the rejected 1-vote proposals
		for (var j = 0; j < keys.length; j++) {
			var e = table.get(keys[j]);
			if (e.votes !== 1 || taken.has(e)) continue;
			var v = e.v;
			if (!fits(v)) continue;
			var ones = (faceCount(v[0], v[1]) === 1 ? 1 : 0) + (faceCount(v[1], v[2]) === 1 ? 1 : 0) + (faceCount(v[2], v[0]) === 1 ? 1 : 0);
			if (ones >= 2) { put(v); taken.add(e); }
		}
		return Uint32Array.from(out);
	}

	return {
		add: add,
		accepted: accepted,
		get proposed() { return table.size; }
	};
}
