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
export { buildMesh, DEFAULT_OPTIONS } from "./buildMesh.js";
export { toIndexed } from "./output/toIndexed.js";
export { TrimeshBuildError, ERROR_CODES } from "./errors.js";

// ── Stages ──
export { prepareCloud } from "./input/prepareCloud.js";
export { insertConstraints, EMPTY_CONSTRAINTS } from "./constraints/insertConstraints.js";
export { RECONSTRUCTORS } from "./reconstruct/index.js";
export { runLocalDelaunay } from "./reconstruct/localDelaunay/run.js";
export { ingestToBMS } from "./bms/ingestToBMS.js";
export { cleanSoup } from "./bms/cleanSoup.js";
export { orientMesh } from "./bms/orientMesh.js";
export { validateMesh, pointInside } from "./validate/validateMesh.js";
export { closeHoles } from "./post/closeHoles.js";
export { fillGaps } from "./post/fillGaps.js";
