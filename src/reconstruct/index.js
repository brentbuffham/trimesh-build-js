// src/reconstruct/index.js
//=============================================================
// RECONSTRUCTOR REGISTRY
//=============================================================
// Every algorithm: (cloud, constraints, options) ->
//   { triangles: Uint32Array of vertex ids, report }.
// Ball pivoting and screened Poisson are planned additions.
//=============================================================

import { runLocalDelaunay } from "./localDelaunay/run.js";

export var RECONSTRUCTORS = Object.freeze({
	localDelaunay: runLocalDelaunay
});
