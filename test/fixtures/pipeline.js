// test/fixtures/pipeline.js
//=============================================================
// Run the stages up to cleanSoup, for tests of later stages
//=============================================================

import { prepareCloud } from "../../src/input/prepareCloud.js";
import { runLocalDelaunay } from "../../src/reconstruct/localDelaunay/run.js";
import { EMPTY_CONSTRAINTS } from "../../src/constraints/insertConstraints.js";
import { ingestToBMS } from "../../src/bms/ingestToBMS.js";
import { cleanSoup } from "../../src/bms/cleanSoup.js";

export var DEFAULTS = { k: 20, maxRadiusMultiplier: 3, minNeighbours: 6, normalAgreement: 0.5, maxPlaneOffset: 0.5, minVotes: 2 };

/**
 * @returns {{cloud: Object, constraints: Object, bms: Object}}
 */
export function meshToClean(cols) {
	var cloud = prepareCloud(cols, {});
	var constraints = EMPTY_CONSTRAINTS(cloud);
	var r = runLocalDelaunay(cloud, constraints, DEFAULTS);
	var bms = ingestToBMS(cloud.coords, r.triangles, Math.max(0.001, 0.25 * cloud.medianSpacing));
	cleanSoup(bms, constraints);
	return { cloud: cloud, constraints: constraints, bms: bms };
}

export function triNormal(t) {
	var ax = t.v1.x - t.v0.x, ay = t.v1.y - t.v0.y, az = t.v1.z - t.v0.z;
	var bx = t.v2.x - t.v0.x, by = t.v2.y - t.v0.y, bz = t.v2.z - t.v0.z;
	return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
}

/** Every edge shared by 2 triangles is traversed in opposite directions. */
export function windingConsistent(soup) {
	var dir = new Map();
	for (var i = 0; i < soup.length; i++) {
		var vs = [soup[i].v0.id, soup[i].v1.id, soup[i].v2.id];
		for (var e = 0; e < 3; e++) {
			var a = vs[e], b = vs[(e + 1) % 3];
			var k = a + ">" + b;
			if (dir.has(k)) return false;
			dir.set(k, true);
		}
	}
	return true;
}
