import { describe, it, expect } from "vitest";
import { computeSignedVolume } from "trimesh-boolean";
import { orientMesh } from "../src/bms/orientMesh.js";
import { meshToClean, triNormal, windingConsistent } from "./fixtures/pipeline.js";
import { fibonacciSphere, cylinderTunnel, mulberry32 } from "./fixtures/synthetic.js";

function scramble(soup, frac, seed) {
	var rnd = mulberry32(seed);
	soup.forEach(function (t) {
		if (rnd() < frac) { var x = t.v1; t.v1 = t.v2; t.v2 = x; }
	});
}

// A Mobius band: a flat ring of quads, one quad wide, given its half turn
// in three sharp 60 degree steps (rungs 0..3). No winding can be
// consistent; the seam should land in the twist, not on the flat ring.
function mobiusBand(N) {
	var rungs = [];
	for (var i = 0; i < N; i++) {
		var phi = 2 * Math.PI * i / N, th = Math.PI / 3 * Math.min(i, 3);
		var c = [10 * Math.cos(phi), 10 * Math.sin(phi), 0];
		var d = [Math.cos(th) * Math.cos(phi), Math.cos(th) * Math.sin(phi), Math.sin(th)];
		rungs.push([
			{ x: c[0] + d[0], y: c[1] + d[1], z: c[2] + d[2], id: 2 * i, rung: i },
			{ x: c[0] - d[0], y: c[1] - d[1], z: c[2] - d[2], id: 2 * i + 1, rung: i }
		]);
	}
	var soup = [];
	for (var s = 0; s < N; s++) {
		var a = rungs[s][0], b = rungs[s][1];
		// the last segment closes with the ends swapped: the half turn
		var c2 = s === N - 1 ? rungs[0][0] : rungs[s + 1][1], d2 = s === N - 1 ? rungs[0][1] : rungs[s + 1][0];
		soup.push({ v0: a, v1: b, v2: c2, mesh: "A", origIdx: soup.length });
		soup.push({ v0: a, v1: c2, v2: d2, mesh: "A", origIdx: soup.length });
	}
	return { soup: soup };
}

// interior edges whose two triangles run them the same way, as [a, b] vertices
function conflictEdges(soup) {
	var seen = new Map(), out = [];
	soup.forEach(function (t) {
		var vs = [t.v0, t.v1, t.v2];
		for (var e = 0; e < 3; e++) {
			var k = vs[e].id + ">" + vs[(e + 1) % 3].id;
			if (seen.has(k)) out.push([vs[e], vs[(e + 1) % 3]]);
			seen.set(k, true);
		}
	});
	return out;
}

describe("orientMesh", function () {
	it("puts a non-orientable band's seam on its sharpest edges, not the flat ring", function () {
		var bms = mobiusBand(24);
		var r = orientMesh(bms);
		expect(r.perComponent[0].consistent).toBe(false);
		var bad = conflictEdges(bms.soup);
		expect(bad.length).toBeGreaterThan(0);
		bad.forEach(function (e) {
			expect(e[0].rung).toBeLessThanOrEqual(3);
			expect(e[1].rung).toBeLessThanOrEqual(3);
		});
	});

	it("randomly flipped closed sphere becomes consistent and inward", function () {
		var m = meshToClean(fibonacciSphere(3000, 5));
		scramble(m.bms.soup, 0.3, 7);
		expect(windingConsistent(m.bms.soup)).toBe(false);
		var r = orientMesh(m.bms);
		expect(windingConsistent(m.bms.soup)).toBe(true);
		expect(computeSignedVolume(m.bms.soup)).toBeLessThan(0);
		expect(r.orientation).toBe("closed");
		expect(r.perComponent.length).toBe(1);
		expect(r.perComponent[0].consistent).toBe(true);
	});

	it("open tunnel with viewpoint on axis", function () {
		var m = meshToClean(cylinderTunnel(2.5, 20, 0.25, 1));
		scramble(m.bms.soup, 0.5, 3);
		// viewpoints along the axis, origin-shifted
		var o = m.cloud.origin, vps = [];
		for (var x = 0; x <= 20; x += 2) vps.push([x - o.x, -o.y, -o.z]);
		var r = orientMesh(m.bms, vps);
		expect(r.orientation).toBe("viewpoint");
		m.bms.soup.forEach(function (t) {
			var n = triNormal(t);
			var cy = (t.v0.y + t.v1.y + t.v2.y) / 3 + o.y, cz = (t.v0.z + t.v1.z + t.v2.z) / 3 + o.z;
			// axis point is (cx, 0, 0) in world; direction to it is (0, -cy, -cz)
			expect(n[1] * -cy + n[2] * -cz).toBeGreaterThan(0);
		});
	});

	it("open tunnel without viewpoint is unresolved but consistent", function () {
		var m = meshToClean(cylinderTunnel(2.5, 20, 0.25, 1));
		scramble(m.bms.soup, 0.5, 4);
		var r = orientMesh(m.bms);
		expect(r.orientation).toBe("unresolved");
		expect(windingConsistent(m.bms.soup)).toBe(true);
	});

	it("two components oriented independently", function () {
		var a = fibonacciSphere(1500, 3, [0, 0, 0]), b = fibonacciSphere(1500, 3, [20, 0, 0]);
		var p = new Float64Array(6 * 1500);
		p.set(a.positions, 0); p.set(b.positions, 3 * 1500);
		var m = meshToClean({ count: 3000, positions: p });
		scramble(m.bms.soup, 0.3, 9);
		var r = orientMesh(m.bms);
		expect(r.perComponent.length).toBe(2);
		r.perComponent.forEach(function (c) { expect(c.method).toBe("closed"); });
		expect(r.orientation).toBe("closed");
		expect(windingConsistent(m.bms.soup)).toBe(true);
	});
});
