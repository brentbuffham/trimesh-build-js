import { describe, it, expect } from "vitest";
import { markWeldDuplicates } from "../src/input/markWeldDuplicates.js";
import { prepareCloud } from "../src/input/prepareCloud.js";
import { insertConstraints, EMPTY_CONSTRAINTS } from "../src/constraints/insertConstraints.js";
import { planarGrid } from "./fixtures/synthetic.js";

var O = { x: 0, y: 0, z: 0 };

function withPoints(extra) {
	var g = planarGrid(20, 20, 0.5);
	var p = Array.from(g.positions).concat(extra);
	return prepareCloud({ count: p.length / 3, positions: Float64Array.from(p) }, { origin: O });
}

describe("markWeldDuplicates", function () {
	it("drops a cloud point within tolerance of an earlier one", function () {
		var c = withPoints([2.01, 2, 0]); // 1 cm from grid point (2, 2)
		var cons = EMPTY_CONSTRAINTS(c);
		var n = markWeldDuplicates(c, cons, 0.05);
		expect(n).toBe(1);
		expect(cons.dropped[c.count - 1]).toBe(1);
		expect(cons.dropped.reduce(function (s, v) { return s + v; }, 0)).toBe(1);
	});

	it("drops a cloud point within tolerance of a break line vertex", function () {
		var c = withPoints([]);
		// break line vertex lands 2 cm from grid point (3, 3)
		var cons = insertConstraints(c, [{ vertices: [[3.02, 3, 0.1], [3.4, 3, 0.1]], closedLoop: false }], { tolerance: 0.05, breaklineSnap: 0.001 });
		var before = cons.dropped.reduce(function (s, v) { return s + v; }, 0);
		markWeldDuplicates(c, cons, 0.15);
		var gid = 6 * 20 + 6; // grid point (3, 3)
		expect(cons.dropped[gid]).toBe(1);
		expect(cons.dropped.reduce(function (s, v) { return s + v; }, 0)).toBeGreaterThan(before);
	});

	it("keeps points further apart than tolerance", function () {
		var c = withPoints([]);
		var cons = EMPTY_CONSTRAINTS(c);
		expect(markWeldDuplicates(c, cons, 0.1)).toBe(0);
	});
});
