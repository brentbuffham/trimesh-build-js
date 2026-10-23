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
// face on an edge (cocircular quads can give BOTH diagonals 2 votes).
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
	 * @returns {Uint32Array} accepted triangles, 3 ids each
	 */
	function accepted(minVotes, firstBreaklineId) {
		var keys = Array.from(table.keys()).sort();
		var faces = new Map();
		var out = [];

		function faceCount(a, b) { return faces.get(edgeId(a, b)) || 0; }
		function fits(v) {
			return faceCount(v[0], v[1]) < 2 && faceCount(v[1], v[2]) < 2 && faceCount(v[2], v[0]) < 2;
		}
		function put(v) {
			for (var e = 0; e < 3; e++) {
				var id = edgeId(v[e], v[(e + 1) % 3]);
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
