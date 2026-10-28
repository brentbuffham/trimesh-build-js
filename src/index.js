/**
 * trimesh-build-js
 *
 * Reconstruct open or closed triangle meshes from point clouds of
 * underground voids (caves, drives, stopes, blast-hole voids), with
 * optional break lines, as a trimesh-boolean BMS soup.
 *
 * Author: Brent Buffham (kirra-design.com)
 *
 * @module trimesh-build-js
 */

// ── Pipeline ──
export { buildMesh, buildMeshAsync, DEFAULT_OPTIONS } from "./buildMesh.js";
export { TrimeshBuildError, ERROR_CODES } from "./errors.js";
export { VERSION, GENERATOR_VERSION } from "./version.js";

// ── Stages ──
export { prepareCloud } from "./input/prepareCloud.js";
export { insertConstraints, EMPTY_CONSTRAINTS } from "./constraints/insertConstraints.js";
export { RECONSTRUCTORS } from "./reconstruct/index.js";
export { runLocalDelaunay, proposeTriangles, acceptProposals } from "./reconstruct/localDelaunay/run.js";
// ── Repair (moved to trimesh-repair-js in 0.6.0) ──
// Re-exported for one release so existing imports keep working; import them from
// trimesh-repair-js instead - these re-exports go in 0.7.0.
export { toIndexed, ingestToBMS, cleanSoup, orientMesh, orientByVisibility, validateMesh, pointInside, closeHoles, fillGaps, repairFolds, patchLoop, patchLoops, patchLoopIds, triangulateHole, fairFill } from "trimesh-repair-js";
