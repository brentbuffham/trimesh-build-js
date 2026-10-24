# Roadmap

trimesh-build-js is built for Kirra: caves, drives, tunnels and blast-hole voids, open or closed, with volumes when they're closed. Items are ordered by what holds that back most. Current release: **0.5.0**.

## v0.4: mesh quality on real scans

1. **Hole fill follow-ups** (`fair` is done).
   - Split the mesh triangles on long loop edges before filling. Where the mesh reaches into a hole with long, thin triangles, loop edges are several spacings long, and the patch's first row stays that coarse. On a sphere cap with such a rim, `fair` is 5.8% short against 0.4% on a clean rim.
   - The 1,144-edge loop on Wookey part 3 still falls back to the centroid fan: its faired patch comes within the weld tolerance of the mesh. Test patch triangles against nearby mesh triangles instead of point distance alone.
   - Fix trimesh-boolean `triangulateLoop` returning two triangles on one loop edge (patchLoop refuses those patches now).
2. **Thin closed bubbles.** After `patchLoops`, an isolated sheet can close into a pancake whose near-zero volume sets its sign (Wookey part 3: 6,813 triangles, −0.27 m³), undoing the ray vote. Treat a closed component whose volume is small against its area × edge length as open, and vote it.
3. **Folds that don't twist.** `repairFolds` finds folds through the orientation conflicts they cause. A Z-fold (the surface doubling back on itself and on again) orients cleanly, so it isn't found. Detect it by a sharp crease between triangles wound the same way, or by face normals that disagree with the point normals, then cut and patch it the same way.

## v0.5: scale and Kirra

4. **Speed.** 0.3.0 has integer edge keys, one shared edge table, and normals and patches on worker threads. What's left on WALL.las at thin 0.1 (33.7 s): the weld (9.3 s), orientation (6.1 s) and las-laz-js thinning (5.2 s), all still on objects or maps rather than typed arrays. Then tile multi-million-point clouds with overlapping halos (prototype step 8 of the original spec). Also: `checkCrossings` is O(S²) on long break lines.
5. **Kirra integration.**
   - A "Mesh from point cloud" dialog (FloatingDialog, worker, PresetBar), feeding `toIndexed` into `addGeneratedSurface`.
   - Mesh Edit's **Fill** switched to `patchLoop` (`auto`, figure-8 splitting, refusal reasons).
   - Kirra's copy of `triangulateLoop` in `MeshRepairHelper.js` retired (Rule Zero).
6. **Move shared code into trimesh-boolean.** Export the figure-8 loop split (`_splitSelfTouching`, private today) and the per-loop patch core from trimesh-boolean, so Kirra and both libraries use one copy. This follows the original spec's rule: when this library needs more from trimesh-boolean, add it to trimesh-boolean's public exports.

## v0.6: more algorithms and tools

7. **More reconstruction algorithms** in the registry: screened Poisson (always closed, so always has a volume, but it fills occluded areas the scan didn't see), and ball pivoting. Poisson needs consistently signed point normals: take them from the oriented mesh (now free of twists), or orient them with Hoppe's spanning tree over the kNN graph.
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

- **0.5.0:** cave orientation without scanner positions. A ray vote (`"visibility"`, after Takayama et al. 2014) points normals at the side whose rays come back off the opposite wall. Wookey Hole orients as `"visibility"` in about 0.2 s, and matches the closed part 3's signed volume on the whole cave.
- **0.3.1:** orientation spreads across the flattest edges first (Hoppe et al. 1992's spanning tree, over triangles), so each twisted strip's seam lands on its fold; `repairFolds` (on by default) cuts the strips there. Wookey Hole: fold edges 1,773 → 0 after the build, and about 3,600 → 0 after patching every loop.
- **0.3.0:** speed. Integer edge keys and one shared edge table, a typed vote table, `buildMeshAsync` (normals and patches on worker threads), `maxPoints` with a suggested thin, `onProgress`. 1M points: 55 s → about 14.5 s, 3.8 GB → about 1.1 GB.
- **0.2.0:** loop patching (`patchLoop`, `patchLoops`, `auto`), figure-8 splitting, the Wookey Hole sample, the demo on GitHub Pages.
- **0.1.0:** `buildMesh` (umbrella voting, BMS output), break lines, thin and denoise, voting-gap fill, orientation, validation, `closeHoles`, `toIndexed`.
