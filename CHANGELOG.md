# Changelog

## 0.3.0 (2026-10-24)

- **Depends on trimesh-boolean ^0.7.7.** Its vertex pool uses numeric cell keys: 2M lookups take 6.6 s instead of 30.4 s.
- **Overall:** 1M points take 55 s → 14.5 s (24 cores), and peak memory drops 3.8 GB → 1.1 GB. WALL.las (4.3M points, thinned to 0.1 m to give 1.44M) takes 38.6 s on 8 workers.
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
