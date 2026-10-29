# Changelog

## 0.6.7

- **`buildMeshAsync` takes `workers: "auto"`.** It uses one fewer than the cores, at most 8, and builds on the calling thread when the cloud has fewer than 20,000 points after thinning (measured: 8 workers take 1.26x as long at 10,000 points and 0.87x at 20,000). A number of workers is used as given. The mesh is the same either way.
- **Version stamp.** `VERSION` (the package release) and `GENERATOR_VERSION` (a whole number, 1 today) are exported, and every result carries `report.version` and `report.generatorVersion`. Store `generatorVersion` beside a mesh you keep and rebuild it when the current one is higher; a mesh stored before this release has none. It is bumped only when a fix changes the mesh for the same input and options, not on every release.
- **A 0 you pass is no longer swallowed by a default.** `denoise: { iterations: 0 }` ran one pass; `denoise: { k: 0 }` ran with 16; `denoise.maxDistance: 0`, `k: 0` and `maxRadiusMultiplier: 0` were replaced by their defaults without a word (`x || default`). Defaults now apply only to `undefined`, and a bad number throws `INVALID_INPUT`: `k` and `denoise.k` and `denoise.iterations` must be whole numbers >= 1, `maxRadiusMultiplier` and `denoise.maxDistance` must be finite and > 0, and `thin: NaN` is refused instead of reading as "off". `thin: 0` and `thin: false` still mean off.
- **An option passed as `undefined` takes its default.** `buildMesh(cols, { k: undefined })` copied the undefined over the default `k: 20` and crashed inside the neighbour query.

## 0.6.6

- **Depends on las-laz-js ^0.18.0** (screen-shape and pruned selections, cloneStore, a faster tile build). Nothing this library uses changed: `dedupe`, `denoisePoints`, `buildIndex`, `pointNormals` and `pointsInRadius` are as in 0.17. A 0.x caret stops at the next minor, so `^0.17.0` would have left a second copy of las-laz-js in an app that moved to 0.18.

## 0.6.5

- **Depends on las-laz-js ^0.17.0** (stray points, sparse points and roughness on a tile store). Nothing this library uses changed: `dedupe`, `denoisePoints`, `buildIndex`, `pointNormals` and `pointsInRadius` are as in 0.16. A 0.x caret stops at the next minor, so `^0.16.1` would have left a second copy of las-laz-js in an app that moved to 0.17.

## 0.6.4

- **Depends on las-laz-js ^0.16.1** (align, dedupe, smooth, merge and split on tile stores). Nothing this library uses changed: `dedupe`, `denoisePoints`, `buildIndex`, `pointNormals` and `pointsInRadius` are as in 0.15. A 0.x caret stops at the next minor, so `^0.15.0` would have left a second copy of las-laz-js in an app that moved to 0.16.

## 0.6.3

- **Depends on las-laz-js ^0.15.0** (fragments and facets on a tile store; `resolutionOf`). Nothing this library uses changed: `dedupe`, `denoisePoints`, `buildIndex`, `pointNormals` and `pointsInRadius` are as in 0.14. A 0.x caret stops at the next minor, so `^0.14.1` would have left a second copy of las-laz-js in an app that moved to 0.15.

## 0.6.2

- **Depends on las-laz-js ^0.14.1** (parallel fragments and facets; `sizeDistribution` fines and `unresolved`). Nothing this library uses changed: `dedupe`, `denoisePoints`, `buildIndex`, `pointNormals` and `pointsInRadius` are as in 0.12.

## 0.6.1

- **Depends on las-laz-js ^0.12.0** (fragments and size distribution; nothing this library uses changed).

## 0.6.0

- **The repair functions moved to [trimesh-repair-js](https://github.com/brentbuffham/trimesh-repair-js) 0.1.0**, unchanged: `ingestToBMS`, `cleanSoup`, `orientMesh`, `orientByVisibility`, `validateMesh`, `pointInside`, `closeHoles`, `fillGaps`, `repairFolds`, `patchLoop`, `patchLoops`, `patchLoopIds`, `triangulateHole`, `fairFill`, `toIndexed`. `buildMesh` uses them from there; this library depends on trimesh-repair-js ^0.1.0.
- **Deprecated:** importing those names from trimesh-build-js. They are re-exported for this release and removed in 0.7.0 - import them from trimesh-repair-js.
- Their tests moved with them; the Wookey Hole test stays here (it tests `buildMesh`).

## 0.5.0 (2026-10-24)

- **Open components get a sign without scanner positions: `"visibility"`.** A ray vote (after Takayama, Jacobson & Sorkine 2014) casts rays into both sides from sampled triangles, and normals point at the side whose rays come back off the opposite wall: the void of a cave, drive or blast hole, or the air above a pit floor. A weak vote, as on flat terrain, stays `"unresolved"`. The `buildMesh` option is `visibility` (on by default; `false`, or `{ samples, rays, minMargin }`). New report fields: `report.visibilityMs`, and `perComponent[i].margin`. `orientMesh` now also returns `componentOf`. Exported: `orientByVisibility`. Wookey Hole orients as `"visibility"` in about 0.2 s; on part 3, the cave's sign matches the closed mesh's signed volume on every triangle.
- **Demo:** a **ray vote** checkbox; the vote's margin is shown next to the orientation.

## 0.4.1 (2026-10-24)

- **Depends on las-laz-js ^0.10.0** (tiles and level of detail; nothing this library uses changed).

## 0.4.0 (2026-10-24)

- **`patchLoop` method `"fair"` (Liepa 2003), first in `auto`.** Minimum-weight triangulation of the loop (sharpest crease, then area; never an edge the mesh already has), refined to the mesh's edge length, then the new points faired into the surface (scale-dependent umbrella, least squares, preconditioned conjugate gradients, fixed one ring of mesh around the loop). A cap cut from a sphere mesh refills to within 0.5% of the full volume (flat centroid fan: 9% short). Wookey Hole: 495 of 498 patched loops by `fair`, patching in about 1.2 s; part 3 closes completely. Also exported: `triangulateHole`, `fairFill`.
- **Patches must be discs on their loop.** trimesh-boolean `triangulateLoop` can put two triangles on one loop edge, which made that edge non-manifold; such a patch is now refused and `auto` moves on.
- **Wookey Hole parts 2 and 3** (`wookey-hole-2.laz`, `wookey-hole-3.laz`) in the demo and the tests.
- `buildMesh` keeps the weld tolerance on its working mesh (`tolerance`), for the patch steps.

## 0.3.1 (2026-10-24)

- **Orientation crosses the flattest edges first** (Hoppe et al. 1992's spanning tree, over triangles). Scan meshes can hold twisted, Möbius-like strips between holes, where no winding is consistent. Each strip's seam now lands on its fold, instead of wherever a breadth-first walk happened to meet itself. Wookey Hole: fold edges 1,773 → 461.
- **`repairFolds(bms, { viewpoints, maxPasses })`, on by default in `buildMesh` (`repairFolds: true`).** It removes the triangles on those seams, which leaves each strip untwisted; the gap fill or `patchLoops` closes the cuts. Triangles on break line edges are never removed. New report fields `foldsRemoved` and `foldsKept`. Wookey Hole: 565 triangles removed (0.2%), 0 fold edges after the build and after patching every loop (was about 3,600).
- **Demo:** a **repair folds** checkbox, and fold edges drawn in cyan.

## 0.3.0 (2026-10-24)

- **Depends on las-laz-js ^0.9.1.**
- **`buildMeshAsync` fits normals on the workers too,** one slice per worker with `pointNormals({ start, end })`. Each slice matches a full run bit for bit, so the mesh is unchanged. There is a new progress stage, `normals`.
- **`prepareCloud` option `deferNormals`,** and `cloud.normalOptions`.
- **Depends on trimesh-boolean ^0.7.7.** Its vertex pool uses numeric cell keys: 2M lookups take 6.6 s instead of 30.4 s.
- **Overall:** 1M points take 55 s → 14.5 s (24 cores), and peak memory drops 3.8 GB → 1.1 GB. WALL.las (4.3M points, thinned to 0.1 m to give 1.44M) takes 33.7 s on 8 workers.
- **Faster after `thin`:** `prepareCloud` skips its duplicate-merge passes when the cloud is already thinned (new option `minSpacing`). That saves about 2.4 s per 1M points.
- **`buildMeshAsync(cols, { workers, createWorker })`** spreads triangulation over worker threads and gives the same mesh as `buildMesh`. Worker scripts: `trimesh-build-js/worker/browser` and `trimesh-build-js/worker/node`. New exports `proposeTriangles` and `acceptProposals`.
- **Faster vote counting:** typed-array hash tables, no string keys. At 1M points, 9.6 s → 1.1 s.
- **Demo:** triangulates on child workers. Thin and denoise keep the values you type when the source changes. New **Open file…** button.
- **Less memory, faster.**
  - Edges use numeric keys in a typed-array `EdgeTable` (no JavaScript array per edge).
  - One cached edge table is shared by every stage instead of being rebuilt in each.
  - Duplicate triangles are detected with numeric keys.
  - Results at 1M points: peak heap 3.2 GB → 0.96 GB, memory held after clean-up 1.35 GB → 0.75 GB.
- **`buildMesh` option `maxPoints`.** If more points than this remain after thinning, the build throws `TOO_MANY_POINTS` before the memory-heavy steps. The message suggests a thin value (`err.suggestedThin`). Memory is about 1.1 GB per 1M points after thinning. The demo sets 1,500,000 and fills in the suggested thin for you.
- **`buildMesh` option `onProgress(stage, fraction)`.** The stages are thin, denoise, prepare, reconstruct (about every 1% of points), weld, orient and done.
- **The demo builds and patches in a Web Worker,** with progress and a Cancel button, so a large cloud no longer freezes the page. Above 1M points it asks for a thin value before building.

## 0.2.0 (2026-10-23)

- **`patchLoop(result, loop, { method })` and `patchLoops(result, { maxEdges, method })`** fill a chosen open loop or many loops. They are ported from Kirra Mesh Edit's **Fill** (`LocalVoidFill.fillLoopWithTriangles`) and use trimesh-boolean `triangulateLoop`. A loop can be given as an index, as vertex ids or as world points. Refused loops come back with a reason; nothing is thrown.
- **Method `auto` (the default):** fan, then centroid, then vertex fan. On the Wookey Hole sample it closes 470 of 472 loops.
- **Figure-8 loops** (holes touching at one vertex) are split into simple loops, so every loop can be patched.
- `fillGaps` and `closeHoles` share the per-loop code. `fillGaps` now uses `auto`.
- `buildMesh` results also carry `constraintPoolEdges`, `constrainedPairs` and `viewpoints`, for patching after the build.
- **Wookey Hole cave sample** (CaveSurveys, github.com/CaveSurveys/Wookey-Hole) for tests and the demo.
- **Demo on GitHub Pages:** click-to-patch loops, Patch all and Undo.

## 0.1.0 (2026-10-23)

- First release: `buildMesh` builds a mesh from local Delaunay umbrellas with 2-of-3 voting and outputs a trimesh-boolean BMS soup.
- Break lines, thinning and denoising (las-laz-js), voting-gap fill, orientation into the void, validation, `closeHoles`, and `toIndexed` for Kirra.
