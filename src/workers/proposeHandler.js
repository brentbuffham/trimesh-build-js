// src/workers/proposeHandler.js
//=============================================================
// PROPOSE WORKER — the per-point loop on another core
//=============================================================
// Shared by proposeWorker.browser.js and proposeWorker.node.js.
// Messages:
//   { type: "init", cloud, constraints, options }  (once per build)
//   { type: "range", from, to }                    (any number)
// Replies to "range" with
//   { type: "proposals", from, to, proposals, used, skipped, failures }
// The cloud arrives as plain typed arrays; the neighbour indices are
// rebuilt here (las-laz-js buildIndex) because they hold no functions
// but are cheaper to rebuild than to copy.
//=============================================================

import { buildIndex } from "las-laz-js";
import { proposeTriangles } from "../reconstruct/localDelaunay/run.js";
import { vertexCoordsOf } from "../reconstruct/vertexCoords.js";

/**
 * Plain, cloneable copy of what proposeTriangles needs (page/main side).
 * @param {import("../input/prepareCloud.js").PreparedCloud} cloud
 * @param {Object} constraints - ConstraintSet
 * @param {Object} options
 * @returns {Object} the "init" message
 */
export function proposeInitMessage(cloud, constraints, options) {
	return {
		type: "init",
		cloud: { coords: cloud.coords, count: cloud.count, normals: cloud.normals },
		constraints: {
			firstId: constraints.firstId,
			count: constraints.count,
			coords: constraints.coords,
			segments: constraints.segments,
			dropped: constraints.dropped
		},
		options: {
			k: options.k,
			maxRadiusMultiplier: options.maxRadiusMultiplier,
			minNeighbours: options.minNeighbours,
			normalAgreement: options.normalAgreement,
			maxPlaneOffset: options.maxPlaneOffset
		}
	};
}

/**
 * State for one worker; call handle(message) for each message.
 * @returns {{handle: function(Object): (Object|null)}} handle returns a reply, or null
 */
export function createProposeHandler() {
	var cloud = null, constraints = null, options = null, vc = null;
	return {
		handle: function (m) {
			if (m.type === "init") {
				var c = m.cloud, k = m.constraints;
				cloud = { coords: c.coords, count: c.count, normals: c.normals, index: buildIndex({ count: c.count, positions: c.coords }) };
				var byVertex = new Map();
				for (var s = 0; s < k.segments.length; s += 2) {
					var a = k.segments[s], b = k.segments[s + 1];
					if (!byVertex.has(a)) byVertex.set(a, []);
					if (!byVertex.has(b)) byVertex.set(b, []);
					byVertex.get(a).push(b);
					byVertex.get(b).push(a);
				}
				constraints = {
					firstId: k.firstId,
					count: k.count,
					coords: k.coords,
					dropped: k.dropped,
					segmentsByVertex: byVertex,
					index: k.count > 0 ? buildIndex({ count: k.count, positions: k.coords }) : null
				};
				options = m.options;
				vc = vertexCoordsOf(cloud, constraints);
				return null;
			}
			if (m.type === "range") {
				var r = proposeTriangles(cloud, constraints, options, m.from, m.to, vc);
				return { type: "proposals", from: m.from, to: m.to, proposals: r.proposals, used: r.used, skipped: r.skipped, failures: r.failures };
			}
			return null;
		}
	};
}
