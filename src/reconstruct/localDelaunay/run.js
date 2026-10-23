// src/reconstruct/localDelaunay/run.js
//=============================================================
// LOCAL DELAUNAY RECONSTRUCTOR — the per-point loop
//=============================================================
// For each cloud point: neighbourhood -> plane -> bridging guard ->
// projection -> constraints in the patch -> umbrella -> vote.
// Then accept by votes. Output is triangles as vertex ids; welding,
// orientation and validation are shared downstream stages.
//=============================================================

import { queryNeighbourhood } from "./queryNeighbourhood.js";
import { estimatePlane, bridgingGuard } from "./estimatePlane.js";
import { projectToPlane } from "./projectToPlane.js";
import { triangulateLocal } from "./triangulateLocal.js";
import { createVoteTable } from "./acceptTriangles.js";
import { clipConstraints } from "../../constraints/clipConstraints.js";
import { vertexCoordsOf } from "../vertexCoords.js";

/**
 * @param {import("../../input/prepareCloud.js").PreparedCloud} cloud
 * @param {Object} constraints - ConstraintSet (or the empty one)
 * @param {{k: number, maxRadiusMultiplier: number, minNeighbours: number,
 *   normalAgreement: number, maxPlaneOffset: number, minVotes: number}} options
 * @returns {{triangles: Uint32Array, report: {pointsUsed: number, pointsSkipped: number,
 *   trianglesProposed: number, trianglesAccepted: number, constraintFailures: number}}}
 */
export function runLocalDelaunay(cloud, constraints, options) {
	var vc = vertexCoordsOf(cloud, constraints);
	var dropped = constraints.dropped;
	var votes = createVoteTable();
	var nbOpts = {
		k: options.k,
		maxRadiusMultiplier: options.maxRadiusMultiplier,
		minNeighbours: options.minNeighbours,
		extra: constraints.count > 0 ? constraints : null
	};
	var N = cloud.normals;
	var used = 0, skipped = 0, failures = 0;
	// progress about every 1% of points
	var onProgress = typeof options.onProgress === "function" ? options.onProgress : null;
	var tick = Math.max(1, Math.floor(cloud.count / 100));

	for (var p = 0; p < cloud.count; p++) {
		if (onProgress && p % tick === 0) onProgress("reconstruct", p / cloud.count);
		if (dropped && dropped[p]) continue;
		if (N[3 * p] === 0 && N[3 * p + 1] === 0 && N[3 * p + 2] === 0) { skipped++; continue; }
		var nb = queryNeighbourhood(cloud, p, nbOpts);
		if (!nb.valid) { skipped++; continue; }
		var ids = nb.ids;
		if (dropped) ids = ids.filter(function (q) { return q >= cloud.count || !dropped[q]; });
		var plane = estimatePlane(cloud, p, ids, vc);
		ids = bridgingGuard(cloud, p, ids, plane, vc, options);
		if (ids.length < options.minNeighbours) { skipped++; continue; }

		var uv = projectToPlane(plane, ids, vc, p);
		var edges = clipConstraints(ids, constraints);
		var r = triangulateLocal(uv, ids, p, plane.scale, edges);
		if (r.constraintFailure) failures++;
		for (var t = 0; t < r.triangles.length; t += 3) votes.add(r.triangles[t], r.triangles[t + 1], r.triangles[t + 2]);
		used++;
	}

	var triangles = votes.accepted(options.minVotes, cloud.count, vc);
	return {
		triangles: triangles,
		report: {
			pointsUsed: used,
			pointsSkipped: skipped,
			trianglesProposed: votes.proposed,
			trianglesAccepted: triangles.length / 3,
			constraintFailures: failures
		}
	};
}
