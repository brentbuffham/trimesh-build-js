# Changelog

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
