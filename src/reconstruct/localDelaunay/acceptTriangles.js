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
//
// Built on typed arrays: a million-point cloud makes ~6 million
// proposals, and string-keyed Maps took ~10 s and gigabytes here.
// Order is deterministic: most votes first, ties in first-proposed order
// (proposals arrive in point order, on one thread or many).
//=============================================================

var ID_SPAN = 67108864; // 2^26: vertex ids stay below this

// Open-addressing hash from a numeric key (< 2^52) to an int.
function IntHash(capacity) {
	var size = 16;
	while (size < capacity * 2) size *= 2;
	this.mask = size - 1;
	this.keys = new Float64Array(size).fill(-1);
	this.vals = new Int32Array(size);
	this.count = 0;
}
function slotOf(h, key) {
	var hi = Math.floor(key / ID_SPAN), lo = key - hi * ID_SPAN;
	var i = (Math.imul(hi, 0x9E3779B1) ^ Math.imul(lo, 0x85EBCA6B)) & h.mask;
	while (h.keys[i] !== -1 && h.keys[i] !== key) i = (i + 1) & h.mask;
	return i;
}
IntHash.prototype.get = function (key) {
	var i = slotOf(this, key);
	return this.keys[i] === -1 ? 0 : this.vals[i];
};
IntHash.prototype.set = function (key, v) {
	if (this.count * 2 >= this.mask) this._grow();
	var i = slotOf(this, key);
	if (this.keys[i] === -1) { this.keys[i] = key; this.count++; }
	this.vals[i] = v;
};
IntHash.prototype._grow = function () {
	var oldK = this.keys, oldV = this.vals;
	var size = (this.mask + 1) * 2;
	this.mask = size - 1;
	this.keys = new Float64Array(size).fill(-1);
	this.vals = new Int32Array(size);
	for (var i = 0; i < oldK.length; i++) {
		if (oldK[i] === -1) continue;
		var j = slotOf(this, oldK[i]);
		this.keys[j] = oldK[i];
		this.vals[j] = oldV[i];
	}
};

function edgeKey(a, b) {
	return a < b ? a * ID_SPAN + b : b * ID_SPAN + a;
}

/**
 * @returns {{add: function(number, number, number): void, addAll: function(Uint32Array): void,
 *   accepted: function(number, number, Float64Array=): Uint32Array, readonly proposed: number}}
 */
export function createVoteTable() {
	// unique triangles, in first-proposed order, with their first-seen winding
	var cap = 1024, n = 0;
	var A = new Uint32Array(cap), B = new Uint32Array(cap), C = new Uint32Array(cap);
	var votes = new Uint16Array(cap);
	// hash on the sorted triple -> entry index + 1
	var mask = 2047, slots = new Int32Array(2048);
	var SA = new Uint32Array(cap), SB = new Uint32Array(cap), SC = new Uint32Array(cap);

	function hashOf(x, y, z) {
		return (Math.imul(x, 0x9E3779B1) ^ Math.imul(y, 0x85EBCA6B) ^ Math.imul(z, 0xC2B2AE35)) >>> 0;
	}
	function growEntries() {
		cap *= 2;
		function big(Ctor, old) { var a = new Ctor(cap); a.set(old); return a; }
		A = big(Uint32Array, A); B = big(Uint32Array, B); C = big(Uint32Array, C);
		SA = big(Uint32Array, SA); SB = big(Uint32Array, SB); SC = big(Uint32Array, SC);
		votes = big(Uint16Array, votes);
	}
	function growSlots() {
		var size = (mask + 1) * 2;
		mask = size - 1;
		slots = new Int32Array(size);
		for (var e = 0; e < n; e++) {
			var i = hashOf(SA[e], SB[e], SC[e]) & mask;
			while (slots[i] !== 0) i = (i + 1) & mask;
			slots[i] = e + 1;
		}
	}

	function add(a, b, c) {
		var x = a, y = b, z = c, t;
		if (x > y) { t = x; x = y; y = t; }
		if (y > z) { t = y; y = z; z = t; }
		if (x > y) { t = x; x = y; y = t; }
		var i = hashOf(x, y, z) & mask;
		while (slots[i] !== 0) {
			var e = slots[i] - 1;
			if (SA[e] === x && SB[e] === y && SC[e] === z) {
				if (votes[e] < 65535) votes[e]++;
				return;
			}
			i = (i + 1) & mask;
		}
		if (n === cap) growEntries();
		A[n] = a; B[n] = b; C[n] = c;
		SA[n] = x; SB[n] = y; SC[n] = z;
		votes[n] = 1;
		slots[i] = ++n;
		if (n * 2 > mask) growSlots();
	}

	function addAll(triples) {
		for (var t = 0; t < triples.length; t += 3) add(triples[t], triples[t + 1], triples[t + 2]);
	}

	/**
	 * @param {number} minVotes
	 * @param {number} firstBreaklineId - ids >= this are break line vertices
	 * @param {Float64Array} [coords] - XYZ of every id; enables the same-side test
	 * @returns {Uint32Array} accepted triangles, 3 ids each
	 */
	function accepted(minVotes, firstBreaklineId, coords) {
		var faces = new IntHash(Math.ceil(n * 1.6));   // edge -> faces so far
		var thirdOf = new IntHash(Math.ceil(n * 1.6)); // edge -> third vertex of its first face + 1
		var taken = new Uint8Array(n);
		var out = new Uint32Array(3 * n), m = 0;

		function needed(e) {
			var bl = (A[e] >= firstBreaklineId ? 1 : 0) + (B[e] >= firstBreaklineId ? 1 : 0) + (C[e] >= firstBreaklineId ? 1 : 0);
			return bl >= 2 ? 1 : minVotes;
		}
		// An edge takes a second face only from the OTHER side of its first:
		// two triangles on one side of an edge overlap (a double cover).
		function otherSide(a, b, d) {
			if (!coords) return true;
			var c = thirdOf.get(edgeKey(a, b)) - 1;
			if (c < 0) return true;
			var X = coords;
			var ex = X[3 * b] - X[3 * a], ey = X[3 * b + 1] - X[3 * a + 1], ez = X[3 * b + 2] - X[3 * a + 2];
			var cx = X[3 * c] - X[3 * a], cy = X[3 * c + 1] - X[3 * a + 1], cz = X[3 * c + 2] - X[3 * a + 2];
			var dx = X[3 * d] - X[3 * a], dy = X[3 * d + 1] - X[3 * a + 1], dz = X[3 * d + 2] - X[3 * a + 2];
			// n = e x c (first face normal); perp = n x e points from the edge towards c
			var nx = ey * cz - ez * cy, ny = ez * cx - ex * cz, nz = ex * cy - ey * cx;
			var px = ny * ez - nz * ey, py = nz * ex - nx * ez, pz = nx * ey - ny * ex;
			return dx * px + dy * py + dz * pz < 0;
		}
		function fitsEdge(a, b, d) {
			var f = faces.get(edgeKey(a, b));
			return f < 2 && (f === 0 || otherSide(a, b, d));
		}
		function fits(e) {
			var a = A[e], b = B[e], c = C[e];
			return fitsEdge(a, b, c) && fitsEdge(b, c, a) && fitsEdge(c, a, b);
		}
		function putEdge(a, b, d) {
			var k = edgeKey(a, b), f = faces.get(k);
			if (f === 0) thirdOf.set(k, d + 1);
			faces.set(k, f + 1);
		}
		function put(e) {
			putEdge(A[e], B[e], C[e]); putEdge(B[e], C[e], A[e]); putEdge(C[e], A[e], B[e]);
			out[m++] = A[e]; out[m++] = B[e]; out[m++] = C[e];
			taken[e] = 1;
		}

		// Most votes first; ties in first-proposed order
		var maxVotes = 0;
		for (var e = 0; e < n; e++) if (votes[e] > maxVotes) maxVotes = votes[e];
		for (var v = maxVotes; v >= 1; v--) {
			for (var q = 0; q < n; q++) {
				if (votes[q] !== v || v < needed(q)) continue;
				if (fits(q)) put(q);
			}
		}

		// Promote pass over the rejected 1-vote proposals
		for (var p = 0; p < n; p++) {
			if (votes[p] !== 1 || taken[p] || !fits(p)) continue;
			var a = A[p], b = B[p], c = C[p];
			var ones = (faces.get(edgeKey(a, b)) === 1 ? 1 : 0) + (faces.get(edgeKey(b, c)) === 1 ? 1 : 0) + (faces.get(edgeKey(c, a)) === 1 ? 1 : 0);
			if (ones >= 2) put(p);
		}
		return out.slice(0, m);
	}

	return {
		add: add,
		addAll: addAll,
		accepted: accepted,
		get proposed() { return n; }
	};
}
