import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { openLas } from "las-laz-js";
import { buildMesh, toIndexed, TrimeshBuildError } from "../src/index.js";
import { fibonacciSphere, cylinderTunnel, halfPipe, parallelWalls, sphereWithCap, mulberry32 } from "./fixtures/synthetic.js";

var SPHERE_V = 4 / 3 * Math.PI * 125;
var REAL = "C:/Users/brent/OneDrive/BHP/CLOUDCOMPARE/HOLETRIMMED - Cloud.laz";

// standard deviation of mesh vertex distance from the world origin
function radialSpread(r) {
	var o = r.origin, d = [];
	r.pool.getAll().forEach(function (v) { d.push(Math.hypot(v.x + o.x, v.y + o.y, v.z + o.z)); });
	var m = d.reduce(function (s, x) { return s + x; }, 0) / d.length;
	return Math.sqrt(d.reduce(function (s, x) { return s + (x - m) * (x - m); }, 0) / d.length);
}

function crownLine() {
	return { vertices: [[0, 0, 2.5], [10, 0, 2.5]], closedLoop: false };
}

describe("buildMesh", function () {
	it("sphere closed, volume within 1%", function () {
		var r = buildMesh(fibonacciSphere(3000, 5), {});
		expect(r.mesh.closed).toBe(true);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(Math.abs(r.mesh.enclosedVolume - SPHERE_V) / SPHERE_V).toBeLessThan(0.01);
		expect(r.mesh.orientation).toBe("closed");
		expect(r.soup[0].mesh).toBe("A");
	});

	it("tunnel open with 2 loops", function () {
		var r = buildMesh(cylinderTunnel(2.5, 20, 0.25, 1), {});
		expect(r.mesh.closed).toBe(false);
		expect(r.mesh.boundaryLoops.length).toBe(2);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(r.mesh.enclosedVolume).toBeNull();
	});

	it("tunnel viewpoint orientation", function () {
		var vps = [];
		for (var x = 0; x <= 20; x += 2) vps.push([x, 0, 0]);
		var r = buildMesh(cylinderTunnel(2.5, 20, 0.25, 1), { viewpoints: vps });
		expect(r.mesh.orientation).toBe("viewpoint");
	});

	it("half-pipe crown breakline survives", function () {
		var r = buildMesh(halfPipe(2.5, 10, 0.25, 2), { breaklines: [crownLine()] });
		expect(r.report.weld.collapsedConstraints).toBe(0);
		expect(r.report.breaklineSegments).toBeGreaterThanOrEqual(40);
		expect(r.mesh.constrainedEdges.length).toBe(r.report.breaklineSegments);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
	});

	it("breakline vertices keep their exact coordinates", function () {
		var r = buildMesh(halfPipe(2.5, 10, 0.25, 2), { breaklines: [crownLine()] });
		var o = r.origin;
		var byId = r.pool.getAll();
		r.mesh.constrainedEdges.forEach(function (e) {
			[byId[e.a], byId[e.b]].forEach(function (v) {
				expect(Math.abs(v.y + o.y)).toBeLessThan(1e-9);
				expect(Math.abs(v.z + o.z - 2.5)).toBeLessThan(1e-9);
			});
		});
	});

	it("crossing breaklines throw", function () {
		var a = { vertices: [[1, -1, 2.5], [1, 1, 2.5]], closedLoop: false };
		expect(function () { buildMesh(halfPipe(2.5, 10, 0.25, 2), { breaklines: [crownLine(), a] }); }).toThrow(TrimeshBuildError);
	});

	// At the walls' free edges the neighbourhood sees both edge rows as one
	// vertical strip (a sampling limit, see README), so only the interior is
	// asserted: at least 2 spacings in from every edge.
	it("parallel walls not bridged (interior)", function () {
		var r = buildMesh(parallelWalls(0.5, 10, 0.25, 1), {});
		var o = r.origin;
		r.soup.forEach(function (t) {
			var vs = [t.v0, t.v1, t.v2];
			var inner = vs.every(function (v) {
				var x = v.x + o.x, y = v.y + o.y;
				return x > 0.5 && x < 9.5 && y > 0.5 && y < 9.5;
			});
			if (!inner) return;
			var zs = [t.v0.z + o.z, t.v1.z + o.z, t.v2.z + o.z];
			var lo = zs.some(function (z) { return z < 0.25; }), hi = zs.some(function (z) { return z > 0.25; });
			expect(lo && hi).toBe(false);
		});
		expect(r.soup.length).toBeGreaterThan(2 * 2 * 40 * 40 * 0.9);
	});

	it("capped sphere + closeHoles closes", function () {
		var r = buildMesh(sphereWithCap(3000, 5, 0.4), { viewpoints: [[0, 0, 0]], closeHoles: {} });
		expect(r.mesh.closed).toBe(true);
		expect(r.unfilledLoops).toEqual([]);
		expect(r.mesh.enclosedVolume).toBeGreaterThan(0.95 * SPHERE_V);
	});

	it("duplicate points tolerated", function () {
		var s = fibonacciSphere(3000, 5);
		var p = Array.from(s.positions);
		for (var i = 0; i < 3000; i += 20) p.push(s.positions[3 * i], s.positions[3 * i + 1], s.positions[3 * i + 2]);
		var r = buildMesh({ count: p.length / 3, positions: Float64Array.from(p) }, {});
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(r.mesh.closed).toBe(true);
	});

	it("breakline away from cloud is harmless", function () {
		var far = { vertices: [[50, 0, 0], [55, 0, 0]], closedLoop: false };
		var r = buildMesh(fibonacciSphere(3000, 5), { breaklines: [far] });
		expect(r.mesh.constrainedEdges.length).toBe(0);
		expect(r.mesh.closed).toBe(true);
	});

	it("toIndexed keeps precision at UTM", function () {
		var C = [478000, 6771000, 300];
		var s = fibonacciSphere(3000, 5, C);
		var r = buildMesh(s, {});
		var idx = toIndexed(r);
		expect(idx.index.length).toBe(3 * r.soup.length);
		var n = idx.positions.length / 3;
		for (var v = 0; v < n; v += 7) {
			var best = Infinity;
			for (var i = 0; i < s.count; i++) {
				var d = Math.abs(idx.positions[3 * v] - s.positions[3 * i]) + Math.abs(idx.positions[3 * v + 1] - s.positions[3 * i + 1]) + Math.abs(idx.positions[3 * v + 2] - s.positions[3 * i + 2]);
				if (d < best) best = d;
			}
			expect(best).toBeLessThan(1e-6);
		}
	});

	it("thin option reduces a dense cloud", function () {
		var r = buildMesh(fibonacciSphere(20000, 5), { thin: 0.2 });
		expect(r.report.pointsInput).toBe(20000);
		expect(r.report.pointsAfterThin).toBeLessThan(20000);
		expect(r.mesh.closed).toBe(true);
	});

	it("denoise option repairs a noisy sphere", function () {
		var s = fibonacciSphere(3000, 5);
		var rnd = mulberry32(5), p = s.positions;
		// radial noise of +-0.15 m on ~0.32 m spacing
		for (var i = 0; i < s.count; i++) {
			var f = 1 + (rnd() - 0.5) * 0.06;
			p[3 * i] *= f; p[3 * i + 1] *= f; p[3 * i + 2] *= f;
		}
		var raw = buildMesh(s, {});
		var dn = buildMesh(s, { denoise: { iterations: 3 } });
		expect(dn.report.denoised).toBe(true);
		expect(raw.report.denoised).toBe(false);
		// what denoise is for: less radial scatter in the mesh vertices
		expect(radialSpread(dn)).toBeLessThan(0.6 * radialSpread(raw));
		expect(dn.mesh.closed).toBe(true);
		expect(dn.mesh.nonManifoldEdgeCount).toBe(0);
	});

	it.skipIf(!existsSync(REAL))("real LAZ (HOLETRIMMED, thin 5 cm + denoise)", async function () {
		var las = await openLas(REAL);
		var pts = await las.readPoints({ fields: ["x", "y", "z"] });
		var r = buildMesh({ count: pts.count, x: pts.x, y: pts.y, z: pts.z }, { thin: 0.05, denoise: { iterations: 3 } });
		expect(r.report.trianglesAccepted).toBeGreaterThan(25000);
		expect(r.mesh.nonManifoldEdgeCount).toBe(0);
		expect(r.mesh.boundaryLoops.length).toBeLessThan(150);
	}, 120000);
});
