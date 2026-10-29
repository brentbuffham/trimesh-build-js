// src/buildMesh.js
//=============================================================
// BUILD MESH — point cloud to BMS mesh, open or closed
//=============================================================
// The whole pipeline (spec section 6):
//   [thin] -> prepareCloud -> insertConstraints -> reconstruct
//   -> ingestToBMS (the weld) -> cleanSoup -> orientMesh
//   -> validateMesh -> [repairFolds] -> fillGaps
//   -> [closeHoles -> validateMesh] -> [orientByVisibility]
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
// The clean-up stages live in trimesh-repair-js (moved there from this library in 0.6.0).
import { ingestToBMS, cleanSoup, orientMesh, orientByVisibility, validateMesh, closeHoles, fillGaps, repairFolds } from "trimesh-repair-js";
import { markWeldDuplicates } from "./input/markWeldDuplicates.js";
import { TrimeshBuildError, ERROR_CODES } from "./errors.js";
import { VERSION, GENERATOR_VERSION } from "./version.js";

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
	visibility: true,
	closeHoles: false
});

// An option the caller passed as undefined means "not given": Object.assign
// would copy the undefined over the default.
function withDefaults(defaults, options) {
	var out = Object.assign({}, defaults);
	if (!options) return out;
	for (var key in options) if (options[key] !== undefined) out[key] = options[key];
	return out;
}

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

// visibility: true -> {}, false -> false, an options object passes through
function visibilityOptions(v) {
	if (v === true || v === undefined) return {};
	if (v === false) return false;
	if (v !== null && typeof v === "object") return v;
	throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "visibility must be true, false or an options object");
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
	var opts = withDefaults(DEFAULT_OPTIONS, options);
	var reconstruct = RECONSTRUCTORS[opts.algorithm];
	if (!reconstruct) throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "unknown algorithm " + String(opts.algorithm));

	// onProgress(stage, fraction): stages thin, denoise, prepare, [normals,
	// buildMeshAsync only] reconstruct, weld, orient, visibility, done. Fractions run 0..1
	// within a stage.
	var report = typeof opts.onProgress === "function" ? opts.onProgress : function () {};
	opts.visibility = visibilityOptions(opts.visibility);

	var pointsInput = cols && cols.count;
	var input = cols;
	// thin 0 (or false) is off; NaN is a mistake, not "off"
	if (opts.thin || Number.isNaN(opts.thin)) {
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
		var dk = d.k === undefined ? 16 : d.k;
		var iterations = d.iterations === undefined ? 1 : d.iterations;
		var maxDistance = d.maxDistance === undefined ? 5 * first.medianSpacing : d.maxDistance;
		if (!(Number.isInteger(dk) && dk >= 1)) throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "denoise.k must be a whole number >= 1, not " + String(dk));
		if (!(Number.isInteger(iterations) && iterations >= 1)) throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "denoise.iterations must be a whole number >= 1, not " + String(iterations));
		if (!(maxDistance > 0 && isFinite(maxDistance))) throw new TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "denoise.maxDistance must be a finite distance > 0, not " + String(maxDistance));
		var smoothed = denoisePoints({ count: first.count, positions: first.coords }, {
			method: d.method === undefined ? "bilateral" : d.method,
			k: dk,
			iterations: iterations,
			maxDistance: maxDistance
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

	// Open components without viewpoints: a ray vote for the void side
	var visibilityMs = 0;
	if (opts.visibility) {
		report("visibility", 0);
		var t0 = performance.now();
		orientByVisibility(bms, orient, opts.visibility);
		visibilityMs = Math.round((performance.now() - t0) * 10) / 10;
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
		visibility: opts.visibility,
		mesh: mesh,
		unfilledLoops: unfilled,
		report: {
			version: VERSION,
			generatorVersion: GENERATOR_VERSION,
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
			visibilityMs: visibilityMs,
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
 *   mesh: import("trimesh-repair-js/src/validate/validateMesh.js").MeshResult, unfilledLoops: number[][], report: Object}}
 */
export function buildMesh(cols, options) {
	var s = prepareStages(cols, options);
	s.report("reconstruct", 0);
	return finishStages(s, s.reconstruct(s.cloud, s.constraints, s.opts));
}

// Measured (8 workers, sphere clouds): one thread wins below ~10,000 points, workers win from
// ~20,000 (0.87x), and by 100,000 they take half the time. Past 8 workers nothing more is gained.
var AUTO_MIN_POINTS = 20000;
var AUTO_MAX_WORKERS = 8;

function autoWorkers() {
	var cores = (globalThis.navigator && globalThis.navigator.hardwareConcurrency) | 0;
	return Math.min(AUTO_MAX_WORKERS, cores - 1);
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
 *   workers (number of workers; 0 or 1 runs buildMesh on this thread; "auto" uses one fewer than the
 *   cores, at most 8, and stays on this thread below 20,000 points after thinning) and
 *   createWorker (function returning a Worker that runs proposeWorker.browser.js or proposeWorker.node.js)
 * @returns {Promise<Object>} the buildMesh result
 */
export async function buildMeshAsync(cols, options) {
	var opts = options || {};
	var auto = opts.workers === "auto";
	var workers = auto ? autoWorkers() : opts.workers | 0;
	if (workers < 2 || typeof opts.createWorker !== "function") return buildMesh(cols, opts);
	// Normals are fitted on the workers too, unless the caller supplied them
	var s = prepareStages(cols, opts, !opts.normals);
	var rec;
	// "auto" keeps a small cloud on this thread: starting workers costs more than they save
	if (s.opts.algorithm === "localDelaunay" && !(auto && s.cloud.count < AUTO_MIN_POINTS)) {
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
