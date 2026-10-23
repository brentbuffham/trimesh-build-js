# Roadmap

trimesh-build-js is built for Kirra: caves, drives, tunnels and blast-hole voids, open or closed, with volumes when they're closed. Items are ordered by what holds that back most. Current release: **0.2.0**.

## v0.3: mesh quality on real scans

1. **Fewer folds (consistent normals before triangulation).** The Wookey Hole sample has about 1,500 fold edges after the build, and about 3,600 once every loop is patched. Point normals are unsigned when patches triangulate. Orient them first (Hoppe et al. 1992: propagate along a minimum spanning tree of the kNN graph, weighted by 1 − |n·n|) so neighbouring patches agree. Then add a fold-repair pass that removes folded triangles and patches the gap.
2. **Fairing hole fill for large, twisted loops** (the spec's `retriangulate`). A flat fan across a long cave loop closes it but folds and gives the wrong volume. Use Liepa 2003: triangulate the hole, refine it to the surrounding edge length, then smooth (fair) the new points so the patch follows the surface. Add it as a `patchLoop` method and try it in `auto` before the centroid fan on long loops.
3. **Cave orientation without scanner positions.** Use photogrammetry camera positions when the scan carries them. Otherwise, take the passage centre line as viewpoints (it lies inside the void by definition), so a cave orients as `"viewpoint"` rather than `"unresolved"`.

## v0.4: scale and Kirra

4. **Speed.** 1M points take about 85 s today, and about 45 s of that is string-keyed edge maps rebuilt 6 to 7 times. Switch to integer edge keys and one edge map shared across cleanSoup, orientMesh, validateMesh and the patch steps. Then run it in a Web Worker, then tile multi-million-point clouds with overlapping halos (prototype step 8 of the original spec). Also: `checkCrossings` is O(S²) on long break lines.
5. **Kirra integration.**
   - A "Mesh from point cloud" dialog (FloatingDialog, worker, PresetBar), feeding `toIndexed` into `addGeneratedSurface`.
   - Mesh Edit's **Fill** switched to `patchLoop` (`auto`, figure-8 splitting, refusal reasons).
   - Kirra's copy of `triangulateLoop` in `MeshRepairHelper.js` retired (Rule Zero).
6. **Move shared code into trimesh-boolean.** Export the figure-8 loop split (`_splitSelfTouching`, private today) and the per-loop patch core from trimesh-boolean, so Kirra and both libraries use one copy. This follows the original spec's rule: when this library needs more from trimesh-boolean, add it to trimesh-boolean's public exports.

## v0.5: more algorithms and tools

7. **More reconstruction algorithms** in the registry: ball pivoting, and screened Poisson (always closed, so always has a volume, but it fills occluded areas the scan didn't see).
8. **Decimation and smoothing** (`DecimateMesh`, `SmoothMesh` in the spec) that never move break line vertices, with a limit on how far smoothing may move a point.
9. **Blast-hole tools (low priority).** Fit a hole axis or cylinder to a hole-void scan, and report its volume against the design hole using trimesh-boolean booleans.
10. **Deferred items from the v0.1 review.**
    - Warn when a break line sits off the surface.
    - Choose k adaptively.
    - Validate input before thinning, so error messages name the right point index.
    - Count `nearTolerance` points correctly.
    - Give `runLocalDelaunay` defaults when it's called directly.
    - Stop `closeHoles`' centroid snapping onto an unrelated vertex.
    - Stop `fillGaps` capping isolated two-triangle fragments.
    - Bring the spec text in line with the code.

## Done

- **0.2.0:** loop patching (`patchLoop`, `patchLoops`, `auto`), figure-8 splitting, the Wookey Hole sample, the demo on GitHub Pages.
- **0.1.0:** `buildMesh` (umbrella voting, BMS output), break lines, thin and denoise, voting-gap fill, orientation, validation, `closeHoles`, `toIndexed`.
