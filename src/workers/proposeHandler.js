// src/workers/proposeHandler.js
//=============================================================
// PROPOSE WORKER — the per-point loop on another core
//=============================================================
// Shared by proposeWorker.browser.js and proposeWorker.node.js.
// Messages:
//   { type: "init", cloud, constraints, options }  (once per build; cloud.normals may be null)
//   { type: "normals", start, end, k, maxDistance } (fit normals for a slice)
//   { type: "setNormals", normals }               (the whole cloud's normals)
//   { type: "range", from, to }                    (any number, after normals)
// Replies:
//   "normals" -> { type: "normals", start, end, normal }
//   "range"   -> { type: "proposals", from, to, proposals, used, skipped, failures }
// The cloud arrives as plain typed arrays; the neighbour indices are
// rebuilt here (las-laz-js buildIndex) because they hold no functions
// but are cheaper to rebuild than to copy.
//=============================================================

import { buildIndex, pointNormals } from "las-laz-js";
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
		cloud: { coords: cloud.coords, count: cloud.count, normals: cloud.normals || null },
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
			if (m.type === "normals") {
				// las-laz-js 0.9.1: a slice of a full run, bit for bit (neighbours from the whole cloud)
				var fit = pointNormals({ count: cloud.count, positions: cloud.coords }, { k: m.k, maxDistance: m.maxDistance, start: m.start, end: m.end });
				return { type: "normals", start: m.start, end: m.end, normal: fit.normal };
			}
			if (m.type === "setNormals") {
				cloud.normals = m.normals;
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
