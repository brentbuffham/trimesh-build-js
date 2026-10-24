// src/buildMesh.js
//=============================================================
// BUILD MESH — point cloud to BMS mesh, open or closed
//=============================================================
// The whole pipeline (spec section 6):
//   [thin] -> prepareCloud -> insertConstraints -> reconstruct
//   -> ingestToBMS (the weld) -> cleanSoup -> orientMesh
//   -> validateMesh -> [repairFolds] -> fillGaps
//   -> [closeHoles -> validateMesh]
// Only bad input throws. Everything about the result is reported.
// buildMeshAsync runs the reconstructor on worker threads; the stages
// before and after are the same code (prepareStages, finishStages).
//=============================================================

import { dedupe, denoisePoints, buildIndex, pointNormals } from "las-laz-js";
import { prepareCloud, estimateMedianSpacing } from "./input/prepareCloud.js";
import { insertConstraints, EMPTY_CONSTRAINTS } from "./constraints/insertConstraints.js";
import { RECONSTRUCTORS } from "./reconstruct/index.js";
import { acceptProposals } from "./reconstruct/localDelaunay/run.js";
import { proposeInitMessage } from "./workers/proposeHandler.js";
import { vertexCoordsOf } from "./reconstruct/vertexCoords.js";
import { ingestToBMS } from "./bms/ingestToBMS.js";
import { cleanSoup } from "./bms/cleanSoup.js";
import { orientMesh } from "./bms/orientMesh.js";
import { validateMesh } from "./validate/validateMesh.js";
import { closeHoles } from "./post/closeHoles.js";
import { fillGaps } from "./post/fillGaps.js";
import { repairFolds } from "./post/repairFolds.js";
import { markWeldDuplicates } from "./input/markWeldDuplicates.js";
import { TrimeshBuildError, ERROR_CODES } from "./errors.js";

export var DEFAULT_OPTIONS = Object.freeze({
	algorithm: "localDelaunay",
	k: 20,
	maxRadiusMultiplier: 3,
	minNeighbours: 6,
	normalAgreement: 0.5,
	maxPlaneOffset: 0.5,
	minVotes: 2,
	breaklineSnap: 0.001,
	maxGapEdges: 6,
	repairFolds: true,
	closeHoles: false
});

// las-laz-js dedupe needs x, y, z columns
function xyzColumns(cols) {
	if (cols.x && cols.y && cols.z) return { count: cols.count, x: cols.x, y: cols.y, z: cols.z };
	var n = cols.count, p = cols.positions;
	var Ctor = p instanceof Float32Array ? Float32Array : Float64Array;
	var x = new Ctor(n), y = new Ctor(n), z = new Ctor(n);
	for (var i = 0; i < n; i++) { x[i] = p[3 * i]; y[i] = p[3 * i + 1]; z[i] = p[3 * i + 2]; }
	return { count: n, x: x, y: y, z: z };
}

// Memory grows with the points left after thinning (about 4 GB at 1M in
// v0.2), so a caller with a limit (a browser tab) sets maxPoints. The error
// suggests a thin value: spacing grows with sqrt(points / target).
function tooManyPoints(input, opts) {
	var xyz = xyzColumns(input), n = input.count;
	var coords = new Float64Array(3 * n);
	for (var i = 0; i < n; i++) { coords[3 * i] = xyz.x[i]; coords[3 * i + 1] = xyz.y[i]; coords[3 * i + 2] = xyz.z[i]; }
	var spacing = Math.max(opts.thin || 0, estimateMedianSpacing(buildIndex({ count: n, positions: coords }), coords, n) || 0);
	var raw = spacing * Math.sqrt(n / opts.maxPoints) * 1.2;
	var mag = Math.pow(10, Math.floor(Math.log10(raw)) - 1);
	var suggested = Math.ceil(raw / mag) * mag;
	var e = new TrimeshBuildError(ERROR_CODES.TOO_MANY_POINTS,
		n.toLocaleString("en-US") + " points" + (opts.thin ? " after thinning to " + opts.thin : "") +
		", more than maxPoints " + opts.maxPoints.toLocaleString("en-US") + ". Try thin " + suggested.toPrecision(2) + ".");
	e.count = n;
	e.suggestedThin = Number(suggested.toPrecision(2));
	return e;
}

function shiftPoint(p, o) {
	if (!p || !isFinite(p[0]) || !isFinite(p[1]) || !isFinite(p[2])) {
		throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "each viewpoint must be a finite [x, y, z]");
	}
	return [p[0] - o.x, p[1] - o.y, p[2] - o.z];
}

// Everything before the reconstructor: options, thin, denoise, prepare,
// break lines. Shared by buildMesh and buildMeshAsync.
function prepareStages(cols, options, deferNormals) {
	var opts = Object.assign({}, DEFAULT_OPTIONS, options || {});
	var reconstruct = RECONSTRUCTORS[opts.algorithm];
	if (!reconstruct) throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "unknown algorithm " + String(opts.algorithm));

	// onProgress(stage, fraction): stages thin, denoise, prepare, [normals,
	// buildMeshAsync only] reconstruct, weld, orient, done. Fractions run 0..1
	// within a stage.
	var report = typeof opts.onProgress === "function" ? opts.onProgress : function () {};

	var pointsInput = cols && cols.count;
	var input = cols;
	if (opts.thin) {
		if (!(opts.thin > 0)) throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "thin must be a distance > 0");
		report("thin", 0);
		input = dedupe(xyzColumns(cols), opts.thin, { z: true });
	}
	if (opts.maxPoints && input.count > opts.maxPoints) throw tooManyPoints(input, opts);

	var cloud;
	if (opts.denoise) {
		report("denoise", 0);
		// Smooth in origin-shifted coordinates. The first pass only finds the
		// origin and spacing (zero normals skip the normal fit); the second
		// prepares the smoothed points and keeps the first pass's origin.
		var first = prepareCloud(input, Object.assign({}, opts, { normals: new Float32Array(3 * input.count), minSpacing: opts.thin || 0 }));
		var d = opts.denoise === true ? {} : opts.denoise;
		var smoothed = denoisePoints({ count: first.count, positions: first.coords }, {
			method: d.method || "bilateral",
			k: d.k || 16,
			iterations: d.iterations || 1,
			maxDistance: d.maxDistance || 5 * first.medianSpacing
		});
		report("prepare", 0);
		cloud = prepareCloud({ count: first.count, positions: smoothed.positions }, Object.assign({}, opts, { origin: { x: 0, y: 0, z: 0 }, deferNormals: !!deferNormals }));
		cloud.origin = first.origin;
	} else {
		report("prepare", 0);
		cloud = prepareCloud(input, Object.assign({}, opts, { minSpacing: opts.thin || 0, deferNormals: !!deferNormals }));
	}
	var tolerance = cloud.tolerance;

	var constraints = opts.breaklines && opts.breaklines.length
		? insertConstraints(cloud, opts.breaklines, { tolerance: tolerance, breaklineSnap: opts.breaklineSnap })
		: EMPTY_CONSTRAINTS(cloud);
	// ids the pool would weld together must not both vote
	var weldDuplicates = markWeldDuplicates(cloud, constraints, tolerance);

	return { opts: opts, report: report, reconstruct: reconstruct, pointsInput: pointsInput, input: input, cloud: cloud, tolerance: tolerance, constraints: constraints, weldDuplicates: weldDuplicates };
}

// Everything after the reconstructor: weld, clean, orient, validate, repair.
function finishStages(s, rec) {
	var opts = s.opts, report = s.report, pointsInput = s.pointsInput, input = s.input, cloud = s.cloud, tolerance = s.tolerance, constraints = s.constraints, weldDuplicates = s.weldDuplicates;
	report("weld", 0);
	var bms = ingestToBMS(vertexCoordsOf(cloud, constraints), rec.triangles, tolerance, constraints.firstId);
	bms.origin = cloud.origin;
	bms.tolerance = tolerance;  // weld distance, for the patch steps
	var weld = cleanSoup(bms, constraints);

	var viewpoints = opts.viewpoints ? opts.viewpoints.map(function (p) { return shiftPoint(p, cloud.origin); }) : null;
	report("orient", 0);
	var orient = orientMesh(bms, viewpoints);
	var mesh = validateMesh(bms, orient.orientation);

	// Twisted strips: cut them at their folds; fillGaps closes the small cuts
	var folds = { removed: 0, kept: 0 };
	if (opts.repairFolds && mesh.orientationConflicts > 0) {
		folds = repairFolds(bms, { viewpoints: viewpoints });
		if (folds.orientation) {
			orient = folds.orientation;
			mesh = validateMesh(bms, orient.orientation);
		}
	}

	// Voting gaps: repair, then re-orient so the new triangles agree
	var gaps = fillGaps(bms, mesh, opts.maxGapEdges);
	if (gaps.filled > 0) {
		orient = orientMesh(bms, viewpoints);
		mesh = validateMesh(bms, orient.orientation);
	}

	var unfilled = [];
	var filled = 0;
	if (opts.closeHoles) {
		var ch = closeHoles(bms, mesh, opts.closeHoles === true ? {} : opts.closeHoles);
		unfilled = ch.unfilledLoops;
		filled = ch.added;
		orient = orientMesh(bms, viewpoints);
		mesh = validateMesh(bms, orient.orientation);
	}

	var zeroNormals = 0;
	for (var i = 0; i < cloud.count; i++) {
		if (cloud.normals[3 * i] === 0 && cloud.normals[3 * i + 1] === 0 && cloud.normals[3 * i + 2] === 0) zeroNormals++;
	}
	report("done", 1);

	var result = {
		pool: bms.pool,
		soup: bms.soup,
		origin: cloud.origin,
		// kept for patchLoop / patchLoops: break line edges (pool ids) and origin-shifted viewpoints
		constraintPoolEdges: bms.constraintPoolEdges,
		constrainedPairs: bms.constrainedPairs,
		viewpoints: viewpoints,
		mesh: mesh,
		unfilledLoops: unfilled,
		report: {
			pointsInput: pointsInput,
			pointsAfterThin: input.count,
			pointsMergedAtTolerance: cloud.mergedAtTolerance,
			denoised: !!opts.denoise,
			medianSpacing: cloud.medianSpacing,
			tolerance: tolerance,
			zeroNormals: zeroNormals,
			pointsUsed: rec.report.pointsUsed,
			pointsSkipped: rec.report.pointsSkipped,
			pointsDropped: constraints.snapReport.dropped,
			weldDuplicatesDropped: weldDuplicates,
			snappedBreaklinePoints: constraints.snapReport.nearTolerance,
			breaklineSegments: constraints.segments.length / 2,
			trianglesProposed: rec.report.trianglesProposed,
			trianglesAccepted: rec.report.trianglesAccepted,
			constraintFailures: rec.report.constraintFailures,
			weld: { merged: weld.merged, degenerate: weld.degenerate, duplicates: weld.duplicates, collapsedConstraints: weld.collapsedConstraints },
			orientation: { perComponent: orient.perComponent },
			foldsRemoved: folds.removed,
			foldsKept: folds.kept,
			gapsFilled: gaps.filled,
			holesFilledTriangles: filled
		}
	};
	// the shared edge map travels with the result, for patchLoop (not enumerable)
	if (bms._edges) Object.defineProperty(result, "_edges", { value: bms._edges, writable: true, configurable: true, enumerable: false });
	return result;
}

/**
 * @param {Object} cols - las-laz-js columns: { count, positions } or { count, x, y, z }
 * @param {Object} [options] - see spec section 4; also `thin` (min spacing, world units), `denoise` (true or las-laz-js denoisePoints options), `maxPoints`, `onProgress(stage, fraction)` and `algorithm`
 * @returns {{pool: Object, soup: Array<Object>, origin: {x: number, y: number, z: number},
 *   mesh: import("./validate/validateMesh.js").MeshResult, unfilledLoops: number[][], report: Object}}
 */
export function buildMesh(cols, options) {
	var s = prepareStages(cols, options);
	s.report("reconstruct", 0);
	return finishStages(s, s.reconstruct(s.cloud, s.constraints, s.opts));
}

/**
 * buildMesh with the per-point triangulation spread over worker threads.
 * Same mesh as buildMesh: each patch depends only on its own point's
 * neighbours, and the votes are counted in one place.
 *
 * The host says how to start a worker running the library's worker script:
 *   browser: function () { return new Worker(new URL("trimesh-build-js/worker/browser", import.meta.url), { type: "module" }); }
 *   Node:    function () { return new Worker(new URL("trimesh-build-js/worker/node", import.meta.url)); }  // node:worker_threads
 *
 * @param {Object} cols - as buildMesh
 * @param {Object} [options] - as buildMesh, plus:
 *   workers (number of workers; 0 or 1 runs buildMesh on this thread) and
 *   createWorker (function returning a Worker that runs proposeWorker.browser.js or proposeWorker.node.js)
 * @returns {Promise<Object>} the buildMesh result
 */
export async function buildMeshAsync(cols, options) {
	var opts = options || {};
	var workers = opts.workers | 0;
	if (workers < 2 || typeof opts.createWorker !== "function") return buildMesh(cols, opts);
	// Normals are fitted on the workers too, unless the caller supplied them
	var s = prepareStages(cols, opts, !opts.normals);
	var rec;
	if (s.opts.algorithm === "localDelaunay") {
		rec = await reconstructInWorkers(s, workers, opts.createWorker);
	} else {
		if (!s.cloud.normals) s.cloud.normals = pointNormals({ count: s.cloud.count, positions: s.cloud.coords }, s.cloud.normalOptions).normal;
		s.report("reconstruct", 0);
		rec = s.reconstruct(s.cloud, s.constraints, s.opts);
	}
	return finishStages(s, rec);
}

// Worker messages arrive as { data } (browser) or bare (Node)
function listen(w, onMessage, onError) {
	if (typeof w.on === "function") {
		w.on("message", onMessage);
		w.on("error", onError);
	} else {
		w.onmessage = function (e) { onMessage(e.data); };
		w.onerror = function (e) { onError(e.error || new Error(e.message || "worker error")); };
	}
}

// One pool of workers for both phases:
//   normals - one slice per worker (each slice builds its own k-d tree once);
//             the assembled normals go back to every worker
//   propose - ranges of about 1/(8 x workers) of the points, so faster
//             workers take more and progress moves smoothly
// Then vote on this thread.
function reconstructInWorkers(s, workers, createWorker) {
	var cloud = s.cloud, constraints = s.constraints;
	var n = cloud.count;
	var size = Math.max(256, Math.ceil(n / (8 * workers)));
	var ranges = [];
	for (var from = 0; from < n; from += size) ranges.push([from, Math.min(n, from + size)]);
	var init = proposeInitMessage(cloud, constraints, s.opts);
	var pool = [], parts = [], next = 0, done = 0, failed = false;
	var count = Math.min(workers, ranges.length);
	var needNormals = !cloud.normals, slicesBack = 0;

	return new Promise(function (resolve, reject) {
		function finish(err) {
			pool.forEach(function (w) { w.terminate(); });
			if (err) { failed = true; reject(err); return; }
			parts.sort(function (a, b) { return a.from - b.from; });
			var vc = vertexCoordsOf(cloud, constraints);
			resolve(acceptProposals(parts, cloud, s.opts, vc));
		}
		function feed(w) {
			if (next >= ranges.length) return;
			var r = ranges[next++];
			w.postMessage({ type: "range", from: r[0], to: r[1] });
		}
		function startProposing() {
			s.report("reconstruct", 0);
			pool.forEach(function (w) {
				if (needNormals) w.postMessage({ type: "setNormals", normals: cloud.normals });
				feed(w);
			});
		}
		function onMessage(w, m) {
			if (failed) return;
			if (m.type === "normals") {
				cloud.normals.set(m.normal, 3 * m.start);
				slicesBack++;
				s.report("normals", slicesBack / count);
				if (slicesBack === count) startProposing();
				return;
			}
			if (m.type !== "proposals") return;
			parts.push(m);
			done++;
			s.report("reconstruct", done / ranges.length);
			if (done === ranges.length) finish(null);
			else feed(w);
		}
		if (needNormals) {
			s.report("normals", 0);
			cloud.normals = new Float32Array(3 * n);
		}
		var slice = Math.ceil(n / count);
		for (var i = 0; i < count; i++) {
			(function (w, k) {
				pool.push(w);
				listen(w, function (m) { onMessage(w, m); }, function (err) { if (!failed) finish(err); });
				w.postMessage(init);
				if (needNormals) {
					var o = cloud.normalOptions;
					w.postMessage({ type: "normals", start: k * slice, end: Math.min(n, (k + 1) * slice), k: o.k, maxDistance: o.maxDistance });
				}
			})(createWorker(), i);
		}
		if (!needNormals) startProposing();
	});
}
