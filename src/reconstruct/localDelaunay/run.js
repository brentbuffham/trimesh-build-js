// src/reconstruct/localDelaunay/run.js
//=============================================================
// LOCAL DELAUNAY RECONSTRUCTOR — the per-point loop
//=============================================================
// For each cloud point: neighbourhood -> plane -> bridging guard ->
// projection -> constraints in the patch -> umbrella -> vote.
// Then accept by votes. Output is triangles as vertex ids; welding,
// orientation and validation are shared downstream stages.
//
// Split in two so the loop can run on several cores:
//   proposeTriangles - one range of points -> umbrella triangles
//   acceptProposals  - all proposals -> voted, consistent triangles
// Each patch depends only on its own point's neighbours, and acceptance
// sorts the votes, so splitting the points does not change the mesh.
//=============================================================

import { queryNeighbourhood } from "./queryNeighbourhood.js";
import { estimatePlane, bridgingGuard } from "./estimatePlane.js";
import { projectToPlane } from "./projectToPlane.js";
import { triangulateLocal } from "./triangulateLocal.js";
import { createVoteTable } from "./acceptTriangles.js";
import { clipConstraints } from "../../constraints/clipConstraints.js";
import { vertexCoordsOf } from "../vertexCoords.js";

/**
 * Umbrella triangles proposed by points from..to-1.
 * @param {import("../../input/prepareCloud.js").PreparedCloud} cloud
 * @param {Object} constraints - ConstraintSet (or the empty one)
 * @param {{k: number, maxRadiusMultiplier: number, minNeighbours: number,
 *   normalAgreement: number, maxPlaneOffset: number, onProgress?: function}} options
 * @param {number} [from=0]
 * @param {number} [to=cloud.count]
 * @param {Float64Array} [vertexCoords] - vertexCoordsOf(cloud, constraints), if already made
 * @returns {{proposals: Uint32Array, used: number, skipped: number, failures: number}} 3 ids per proposal
 */
export function proposeTriangles(cloud, constraints, options, from, to, vertexCoords) {
	var start = from || 0, end = to === undefined ? cloud.count : to;
	var vc = vertexCoords || vertexCoordsOf(cloud, constraints);
	var dropped = constraints.dropped;
	var nbOpts = {
		k: options.k,
		maxRadiusMultiplier: options.maxRadiusMultiplier,
		minNeighbours: options.minNeighbours,
		extra: constraints.count > 0 ? constraints : null
	};
	var N = cloud.normals;
	var used = 0, skipped = 0, failures = 0;
	var out = new Uint32Array(Math.max(64, 18 * (end - start))), n = 0;
	// progress about every 1% of points
	var onProgress = typeof options.onProgress === "function" ? options.onProgress : null;
	var span = Math.max(1, end - start), tick = Math.max(1, Math.floor(span / 100));

	for (var p = start; p < end; p++) {
		if (onProgress && (p - start) % tick === 0) onProgress("reconstruct", (p - start) / span);
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
		if (n + r.triangles.length > out.length) {
			var grown = new Uint32Array(Math.max(out.length * 2, n + r.triangles.length));
			grown.set(out.subarray(0, n));
			out = grown;
		}
		for (var t = 0; t < r.triangles.length; t++) out[n++] = r.triangles[t];
		used++;
	}
	return { proposals: out.slice(0, n), used: used, skipped: skipped, failures: failures };
}

/**
 * Vote on every proposal and accept a consistent set.
 * @param {Array<{proposals: Uint32Array, used: number, skipped: number, failures: number}>} parts - from proposeTriangles
 * @param {import("../../input/prepareCloud.js").PreparedCloud} cloud
 * @param {{minVotes: number}} options
 * @param {Float64Array} vertexCoords
 * @returns {{triangles: Uint32Array, report: {pointsUsed: number, pointsSkipped: number,
 *   trianglesProposed: number, trianglesAccepted: number, constraintFailures: number}}}
 */
export function acceptProposals(parts, cloud, options, vertexCoords) {
	var votes = createVoteTable();
	var used = 0, skipped = 0, failures = 0;
	for (var i = 0; i < parts.length; i++) {
		votes.addAll(parts[i].proposals);
		used += parts[i].used; skipped += parts[i].skipped; failures += parts[i].failures;
	}
	var triangles = votes.accepted(options.minVotes, cloud.count, vertexCoords);
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

/**
 * The whole reconstructor on one thread.
 * @param {import("../../input/prepareCloud.js").PreparedCloud} cloud
 * @param {Object} constraints - ConstraintSet (or the empty one)
 * @param {{k: number, maxRadiusMultiplier: number, minNeighbours: number,
 *   normalAgreement: number, maxPlaneOffset: number, minVotes: number}} options
 * @returns {{triangles: Uint32Array, report: Object}}
 */
export function runLocalDelaunay(cloud, constraints, options) {
	var vc = vertexCoordsOf(cloud, constraints);
	return acceptProposals([proposeTriangles(cloud, constraints, options, 0, cloud.count, vc)], cloud, options, vc);
}
