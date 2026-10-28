// A break line on a crease: the mesh must run its edges ALONG the crease, one
// straight edge per segment with a face on each side. Without the break line,
// Delaunay triangles straddle a ridge and the crease saw-tooths (the same fault
// Kirra's timing surfaces show along strong creases).
//
// Known gap: past about 75 degrees between the two faces' normals the local
// plane fits straddle both walls and the break line is no longer a shared edge
// (it.fails below). Raising maxPlaneOffset or lowering normalAgreement does not
// fix it. Drop the .fails when it is fixed.
import { describe, it, expect } from "vitest";
import { buildMesh } from "../src/index.js";
import { mulberry32 } from "./fixtures/synthetic.js";

var RIDGE_Z = 3, STEP = 0.5, EPS = 1e-9;
// the sheet runs x -1..11; judge the crease away from its two outer ends,
// where the sheet's own boundary slivers cross it
var JUDGE_X0 = 0, JUDGE_X1 = 10;

// A tent: z = RIDGE_Z - slope * |y|, crease along y = 0 across the whole sheet.
// Rows sit at y = +-0.25, +-0.75 ... so no point is on the crease, and the x
// columns line up across it (cocircular quads, whose diagonals straddle it).
function tent(slope) {
	var xs = [], ys = [], zs = [], rnd = mulberry32(11);
	for (var x = -1; x <= 11 + EPS; x += STEP) {
		for (var j = -10; j < 10; j++) {
			var y = (j + 0.5) * STEP;
			xs.push(x + (rnd() - 0.5) * 0.02); ys.push(y); zs.push(RIDGE_Z - slope * Math.abs(y));
		}
	}
	return { count: xs.length, x: Float64Array.from(xs), y: Float64Array.from(ys), z: Float64Array.from(zs) };
}

function creaseLine() {
	var v = [];
	for (var x = -1; x <= 11 + EPS; x += STEP) v.push([x, 0, RIDGE_Z]);
	return { vertices: v, closedLoop: false };
}

// Triangles with a vertex on each side of the crease; the mesh edges that lie
// on it, each with the sides of the faces that use it.
function readCrease(r) {
	var o = r.origin, straddlers = 0, edges = new Map();
	function note(a, b, third) {
		if (Math.abs(a.y + o.y) > EPS || Math.abs(b.y + o.y) > EPS) return;
		var x0 = Math.min(a.x, b.x) + o.x, x1 = Math.max(a.x, b.x) + o.x;
		if (x0 < JUDGE_X0 - EPS || x1 > JUDGE_X1 + EPS) return;
		var key = Math.min(a.id, b.id) + "," + Math.max(a.id, b.id);
		var e = edges.get(key) || { a: a, b: b, sides: [] };
		e.sides.push(Math.sign(third.y + o.y));
		edges.set(key, e);
	}
	r.soup.forEach(function (t) {
		var ys = [t.v0.y + o.y, t.v1.y + o.y, t.v2.y + o.y], xs = [t.v0.x + o.x, t.v1.x + o.x, t.v2.x + o.x];
		var inside = Math.min.apply(null, xs) >= JUDGE_X0 - EPS && Math.max.apply(null, xs) <= JUDGE_X1 + EPS;
		if (inside && Math.min.apply(null, ys) < -0.01 && Math.max.apply(null, ys) > 0.01) straddlers++;
		note(t.v0, t.v1, t.v2); note(t.v1, t.v2, t.v0); note(t.v2, t.v0, t.v1);
	});
	return { straddlers: straddlers, edges: edges };
}

function expectStraightSharedCrease(slope) {
	var r = buildMesh(tent(slope), { breaklines: [creaseLine()] });
	var o = r.origin, c = readCrease(r);
	expect(r.report.constraintFailures).toBe(0);
	expect(r.report.weld.collapsedConstraints).toBe(0);
	expect(c.straddlers).toBe(0);
	// the crease edges chain end to end from x 0 to 10 (the line is split into
	// pieces shorter than a patch radius at insert, so a span may be two edges)
	var list = Array.from(c.edges.values()).map(function (e) {
		var xa = e.a.x + o.x, xb = e.b.x + o.x;
		return { e: e, x0: Math.min(xa, xb), x1: Math.max(xa, xb) };
	}).sort(function (p, q) { return p.x0 - q.x0; });
	expect(list.length).toBeGreaterThan(0);
	expect(list[0].x0).toBeCloseTo(JUDGE_X0, 6);
	expect(list[list.length - 1].x1).toBeCloseTo(JUDGE_X1, 6);
	for (var i = 1; i < list.length; i++) expect(list[i].x0).toBeCloseTo(list[i - 1].x1, 6);
	c.edges.forEach(function (e) {
		// a face on each side
		expect(e.sides.slice().sort()).toEqual([-1, 1]);
		// straight: both ends at the ridge height, the edge along x
		expect(Math.abs(e.a.z + o.z - RIDGE_Z)).toBeLessThan(EPS);
		expect(Math.abs(e.b.z + o.z - RIDGE_Z)).toBeLessThan(EPS);
		expect(Math.abs(e.a.y - e.b.y)).toBeLessThan(EPS);
	});
}

describe("break line on a crease", function () {
	it("control: without the break line, triangles straddle the ridge", function () {
		expect(readCrease(buildMesh(tent(0.5), {})).straddlers).toBeGreaterThan(0);
	});

	// slope 0.5 / 0.75: faces 53 / 74 degrees apart
	it("53 degree crease: straight shared edges, nothing straddles", function () { expectStraightSharedCrease(0.5); });
	it("74 degree crease: straight shared edges, nothing straddles", function () { expectStraightSharedCrease(0.75); });

	// slope 1 / 2: faces 90 / 127 degrees apart. Known failing.
	it.fails("90 degree crease: straight shared edges, nothing straddles", function () { expectStraightSharedCrease(1); });
	it.fails("127 degree crease: straight shared edges, nothing straddles", function () { expectStraightSharedCrease(2); });
});
