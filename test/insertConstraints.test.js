import { describe, it, expect } from "vitest";
import { insertConstraints, EMPTY_CONSTRAINTS } from "../src/constraints/insertConstraints.js";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { planarGrid } from "./fixtures/synthetic.js";

var O = { x: 1000, y: 2000, z: 0 };

// 41 x 41 grid at 0.5 m in world coords offset by O, so medianSpacing = 0.5
function cloud() {
	var g = planarGrid(41, 41, 0.5);
	for (var i = 0; i < g.count; i++) { g.positions[3 * i] += O.x; g.positions[3 * i + 1] += O.y; }
	return prepareCloud(g, { origin: O });
}

function w(x, y, z) { return [O.x + x, O.y + y, z]; }

function codeOf(fn) {
	try { fn(); } catch (e) { return e.code + ": " + e.message; }
	return "no throw";
}

describe("insertConstraints", function () {
	it("splits long segments to <= medianSpacing", function () {
		var c = cloud();
		var cs = insertConstraints(c, [{ vertices: [w(0.1, 0.2, 0.3), w(10.1, 0.2, 0.3)], closedLoop: false }], { tolerance: 0.125 });
		var segs = cs.segments.length / 2;
		expect(segs).toBeGreaterThanOrEqual(20);
		for (var s = 0; s < segs; s++) {
			var a = cs.segments[2 * s] - cs.firstId, b = cs.segments[2 * s + 1] - cs.firstId;
			var d = Math.hypot(cs.coords[3 * a] - cs.coords[3 * b], cs.coords[3 * a + 1] - cs.coords[3 * b + 1], cs.coords[3 * a + 2] - cs.coords[3 * b + 2]);
			expect(d).toBeLessThanOrEqual(0.5 + 1e-9);
		}
	});

	it("closedLoop adds the closing segment", function () {
		var c = cloud();
		var sq = [w(1, 1, 0.3), w(1.4, 1, 0.3), w(1.4, 1.4, 0.3), w(1, 1.4, 0.3)];
		var open = insertConstraints(c, [{ vertices: sq, closedLoop: false }], { tolerance: 0.125 });
		var closed = insertConstraints(c, [{ vertices: sq, closedLoop: true }], { tolerance: 0.125 });
		expect(open.segments.length / 2).toBe(3);
		expect(closed.segments.length / 2).toBe(4);
		expect(closed.count).toBe(4);
	});

	it("ids start at cloud.count and coords are origin-shifted", function () {
		var c = cloud();
		var cs = insertConstraints(c, [{ vertices: [w(1, 2, 3), w(1.3, 2, 3)], closedLoop: false }], { tolerance: 0.125 });
		expect(cs.firstId).toBe(c.count);
		expect(Math.min.apply(null, Array.from(cs.segments))).toBe(c.count);
		expect(Array.from(cs.coords.slice(0, 3))).toEqual([1, 2, 3]);
		expect(cs.edgeKeys.size).toBe(1);
		expect(cs.segmentsByVertex.get(c.count)).toEqual([c.count + 1]);
		expect(cs.index).not.toBeNull();
	});

	it("crossing breaklines throw naming both", function () {
		var c = cloud();
		var msg = codeOf(function () {
			insertConstraints(c, [
				{ vertices: [w(0, 0, 0.3), w(2, 2, 0.3), w(4, 0, 0.3)], closedLoop: false },
				{ vertices: [w(0, 1.2, 0.3), w(2, 1.2, 0.3)], closedLoop: false }
			], { tolerance: 0.125 });
		});
		expect(msg).toMatch(/^CROSSING_BREAKLINES/);
		expect(msg).toContain("breakline 0 segment 0");
		expect(msg).toContain("breakline 1 segment 0");
	});

	it("adjacent segments of one line are not a crossing", function () {
		var c = cloud();
		expect(codeOf(function () {
			insertConstraints(c, [{ vertices: [w(0, 0, 0.3), w(2, 0, 0.3), w(2, 2, 0.3), w(0, 2, 0.3)], closedLoop: true }], { tolerance: 0.125 });
		})).toBe("no throw");
	});

	it("endpoint junction of two lines is allowed", function () {
		var c = cloud();
		expect(codeOf(function () {
			insertConstraints(c, [
				{ vertices: [w(0, 0, 0.3), w(2, 0, 0.3)], closedLoop: false },
				{ vertices: [w(2, 0, 0.3), w(2, 2, 0.3)], closedLoop: false }
			], { tolerance: 0.125 });
		})).toBe("no throw");
	});

	it("drops cloud points within breaklineSnap", function () {
		var c = cloud();
		// grid point (5, 5, 0): line 0.0005 above it; grid point (5, 7, 0): line 0.01 above
		var cs = insertConstraints(c, [
			{ vertices: [w(4.9, 5, 0.0005), w(5.1, 5, 0.0005)], closedLoop: false },
			{ vertices: [w(4.9, 7, 0.01), w(5.1, 7, 0.01)], closedLoop: false }
		], { tolerance: 0.02, breaklineSnap: 0.001 });
		var at = function (x, y) {
			for (var i = 0; i < c.count; i++) if (Math.abs(c.coords[3 * i] - x) < 1e-9 && Math.abs(c.coords[3 * i + 1] - y) < 1e-9) return i;
			return -1;
		};
		expect(cs.dropped[at(5, 5)]).toBe(1);
		expect(cs.dropped[at(5, 7)]).toBe(0);
		expect(cs.snapReport.dropped).toBe(1);
		expect(cs.snapReport.nearTolerance).toBe(1);
	});

	it("EMPTY_CONSTRAINTS has every field", function () {
		var c = cloud();
		var e = EMPTY_CONSTRAINTS(c);
		expect(e.firstId).toBe(c.count);
		expect(e.count).toBe(0);
		expect(e.segments.length).toBe(0);
		expect(e.segmentsByVertex.size).toBe(0);
		expect(e.edgeKeys.size).toBe(0);
		expect(e.index).toBeNull();
		expect(e.dropped).toBeNull();
		expect(e.snapReport).toEqual({ dropped: 0, nearTolerance: 0 });
	});
});
