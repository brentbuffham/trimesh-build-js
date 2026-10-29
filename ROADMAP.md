# Roadmap

trimesh-build-js is built for Kirra: caves, drives, tunnels and blast-hole voids, open or closed, with volumes when they're closed. Items are ordered by what holds that back most. Current release: **0.5.0**.

## v0.4: mesh quality on real scans

1. **Hole fill follow-ups** (`fair` is done).
   - Split the mesh triangles on long loop edges before filling. Where the mesh reaches into a hole with long, thin triangles, loop edges are several spacings long, and the patch's first row stays that coarse. On a sphere cap with such a rim, `fair` is 5.8% short against 0.4% on a clean rim.
   - The 1,144-edge loop on Wookey part 3 still falls back to the centroid fan: its faired patch comes within the weld tolerance of the mesh. Test patch triangles against nearby mesh triangles instead of point distance alone.
   - Fix trimesh-boolean `triangulateLoop` returning two triangles on one loop edge (patchLoop refuses those patches now).
2. **Boulders and floating slabs.** The thin-bubble sign flip is fixed (below, Done). What is left: a closed piece is oriented as a cavity, but a small closed piece in a cave scan is usually a boulder (void outside), and the ray vote cannot decide boulders or slabs because both their sides see walls. After patching on Wookey Hole, 13-16 closed pieces (500-800 triangles) and 2-7 unresolved ones (220-9,344 triangles) keep an arbitrary side; they show as back faces from inside. Tried 2026-10-29 (prototype, not shipped): vote on the orientation of the first triangle each ray hits, counting only other pieces' front faces. It separates a few pieces clearly (an 82-triangle closed piece on part 1: rock side sees front faces 47% of the time, void side 5%; a 60-triangle one on part 2), but that is 1-2 pieces per cave out of 13-16; many are free-floating slabs that see walls equally on both sides (0.70/0.62, 0.74/0.78, 0.84/0.83: no correct side exists) or fragments behind the walls (mostly back-face hits on both sides); and on one piece (110 triangles, part 1) it contradicts the existing vote. Not reliable enough to move a winding. More useful: report free-floating and behind-wall pieces as such so a viewer can draw them two-sided or drop them.
3. **Folds that don't twist.** `repairFolds` finds folds through the orientation conflicts they cause. A Z-fold (the surface doubling back on itself and on again) orients cleanly, so it isn't found. Detect it by a sharp crease between triangles wound the same way, or by face normals that disagree with the point normals, then cut and patch it the same way.

4. **Break lines on hard creases** (`test/creaseBreakline.test.js`, measured 2026-10-29). A tent ridge with a break line along it works up to about 75 degrees between the two faces' normals: the crease is a chain of straight edges with a face on each side, and nothing straddles it. At 90 degrees and past, the break line is no longer a shared edge: its edges have a face on one side only, and at 90-113 degrees the sheet also tears into 26 open loops. Lowering `normalAgreement` or raising `maxPlaneOffset` does not fix it (at 127 degrees `maxPlaneOffset` alone gets the straddlers to 0 but still leaves one-sided edges), so the cause is the local plane fit straddling both walls, not the bridging guard alone. Two `it.fails` tests pin this; drop the `.fails` when it is fixed. Idea: fit each side's plane from the points on that side of the break line.
5. **Self-intersections: the reconstruction is nearly clean, patching makes almost all of them** (traced 2026-10-29 with trimesh-boolean's `bmsSelfIntersect`, Wookey Hole part 3 at thin 0.05). The mesh as `buildMesh` returns it: 162,268 triangles, 203 crossing pairs, 410 triangles involved (0.25%). After `patchLoops`: 185,454 triangles, **15,798 crossing pairs**, 13,100 triangles involved, of which 7,676 are original wall triangles the patches cut through and 5,424 are patch triangles (4 s before, 14 s after, so it is a check to ask for, not a default). `report.selfIntersections` (opt-in) and `countSelfIntersections` now count them. Measured, not yet fixed: 158 of the 268 loops `auto` patches get a faired patch with some triangles crossing the mesh (3,052 of 20,604 triangles), and 2 centroid caps cross heavily (652 of 1,178); `fan` can patch only 50 of 271 loops and `vertexFan`/`centroid` are worse, so refusing every crossing patch would leave over half the holes open. A fix needs to move the faired points off the wall (relax them away from the surface, or fair with the neighbouring triangles as an obstacle), not pick another method. Item 1 already notes the 1,144-edge loop whose faired patch comes within the weld tolerance of the mesh.

## v0.5: scale and Kirra

6. **Speed.** Measured 2026-10-29 on a 24-thread laptop, Wookey Hole (382k points), seconds per stage, one thread / 8 workers / 16 workers:

   | thin | total | thin | prepare | normals + reconstruct | weld | orient | visibility |
   |---|---|---|---|---|---|---|---|
   | 0.05 (260k tris) | 7.4 / 4.1 / n/a | 0.3 / 0.6 | 0.5 / 0.1 | 3.8 / 1.1 | 0.6 / 0.3 | 1.9 / 1.7 | 0.3 / 0.3 |
   | 0.02 (514k tris) | 14.0 / 7.7 / 7.4 | 0.3 / 0.5 | 0.9 / 0.3 | 7.5 / 2.0 / 1.5 | 1.0 / 0.8 | 3.7 / 3.5 | 0.6 / 0.6 |
   | 0.01 (612k tris) | 17.1 / 9.5 / 9.5 | 0.3 / 0.5 | 1.0 / 0.2 | 9.0 / 2.3 / 1.9 | 1.2 / 1.1 | 4.9 / 4.8 | 0.7 / 0.7 |

   **After trimesh-repair-js 0.1.3** (typed-array edge table, one precomputed neighbour table in `orientMesh`; identical windings on scrambled caves): Wookey at thin 0.02 on 8 workers 7.7 s -> 5.5 s (orient 3.5 s -> 1.6 s), WALL.las at thin 0.1 on 8 workers 58.1 s -> 45.1 s (orient 25.6 s -> 13.3 s, measured with the CPU profiler on). Main thread on WALL, 45 s: thinning (`dedupeSelection` in las-laz-js) 6.2 s; orientation 8.5 s over all its calls (its own loop 3.1, `neighbourTable` 2.2, heap 1.1); weld (`ingestToBMS`) 5.3 s (`findNearest` 2.3, building pool vertices 2.2); `cleanSoup` 2.5 s; `validateMesh` 1.9 s; visibility vote 2.1 s; garbage collection 2.9 s; idle, waiting on workers, 11.3 s. Next, in order: build each triangle's neighbours while the edge table is built (no second pass of 8.6M lookups), weld on typed arrays, thinning in las-laz-js, then run the weld and orientation per tile on workers (the tiling item). Timings taken on a machine that other work was also using vary by up to 1.5x; compare runs taken together.

   **After trimesh-repair-js 0.1.5** (`orientMesh` on typed-array ids with a hole-sift heap, about 4x faster standalone; same windings on seven meshes): WALL.las 26.3 s on 8 workers (thin 2.1, normals + reconstruct 10.2, weld 3.8, orient 7.3, visibility 2.7). Same triangle hash on four meshes.

   **After trimesh-boolean 0.7.8** (the vertex pool scans the 8 cells a tolerance ball touches, not 27; same vertices, checked against the old search): WALL.las 28.9 s on 8 workers (weld 6.2 s -> 4.1 s, reconstruct 8.8 s after the neighbour-median memo). Meshes unchanged: the same triangle hash on a sphere, a half-pipe and two cave scans.

   **After las-laz-js 0.18.1** (`dedupe` skips the unused nearest-kept map): WALL.las 33.7 s on 8 workers (thin 4.7 s -> 2.3 s). Wookey thin 0.02 4.5 s.

   **After trimesh-repair-js 0.1.4** (weld looks vertices up in a typed array; `orientMesh` builds neighbours from one pass over the edge slots): Wookey thin 0.02, 8 workers 5.0 s (orient 1.4 s, weld 0.6 s); WALL.las thin 0.1, 8 workers **37.3 s** (was 58.1 s: thin 4.7, normals + reconstruct 12.6, weld 6.1, orient 9.4, visibility 4.2). The 27-cell search in trimesh-boolean's vertex pool (`findNearest`, about 2.3 s of the weld on WALL) is next for the weld: a point's tolerance ball touches at most 8 of its cells, not 27, with the same answer, but it is in trimesh-boolean.

   Every worker count gives the same triangles. Threading takes the per-point stage from 7.5-9.0 s to 1.5-2.3 s, and past 8 workers it gains almost nothing (23 workers was slower than 8 at 382k points). What is left is serial, and **orientation is now half the run (3.5-4.8 s of 7.7-9.5 s)**, then the weld and thinning. A GPU cannot help there: orientation is a priority-queue spanning-tree walk, so it needs typed arrays or per-component parallelism, not more cores. For a small cloud, workers cost more than they save: the 1M-point BHP hole scan (30k triangles after thin 0.05 and denoise) takes 2.3 s on one thread and 2.7 s on 8 workers, so `buildMeshAsync` should skip workers below some size.

   0.3.0 has integer edge keys, one shared edge table, and normals and patches on worker threads. What's left on WALL.las at thin 0.1 (33.7 s): the weld (9.3 s), orientation (6.1 s) and las-laz-js thinning (5.2 s), all still on objects or maps rather than typed arrays. Then tile multi-million-point clouds with overlapping halos (prototype step 8 of the original spec). Also: `checkCrossings` is O(S²) on long break lines.
7. **Kirra integration.**
   - A "Mesh from point cloud" dialog (FloatingDialog, worker, PresetBar), feeding `toIndexed` into `addGeneratedSurface`.
   - Mesh Edit's **Fill** switched to `patchLoop` (`auto`, figure-8 splitting, refusal reasons).
   - Kirra's copy of `triangulateLoop` in `MeshRepairHelper.js` retired (Rule Zero).
8. **Move shared code into trimesh-boolean.** Export the figure-8 loop split (`_splitSelfTouching`, private today) and the per-loop patch core from trimesh-boolean, so Kirra and both libraries use one copy. This follows the original spec's rule: when this library needs more from trimesh-boolean, add it to trimesh-boolean's public exports.

## v0.6: more algorithms and tools

9. **More reconstruction algorithms** in the registry: screened Poisson (always closed, so always has a volume, but it fills occluded areas the scan didn't see), and ball pivoting. Poisson needs consistently signed point normals: take them from the oriented mesh (now free of twists), or orient them with Hoppe's spanning tree over the kNN graph.
10. **Decimation and smoothing** (`DecimateMesh`, `SmoothMesh` in the spec) that never move break line vertices, with a limit on how far smoothing may move a point.
11. **Blast-hole tools (low priority).** Fit a hole axis or cylinder to a hole-void scan, and report its volume against the design hole using trimesh-boolean booleans.
12. **Deferred items from the v0.1 review.**
    - Warn when a break line sits off the surface.
    - Choose k adaptively.
    - Validate input before thinning, so error messages name the right point index.
    - Count `nearTolerance` points correctly.
    - Give `runLocalDelaunay` defaults when it's called directly.
    - Stop `closeHoles`' centroid snapping onto an unrelated vertex.
    - Stop `fillGaps` capping isolated two-triangle fragments.
    - Bring the spec text in line with the code.

## Before publishing to npm

- `package.json` installs trimesh-repair-js from GitHub (`git+https://github.com/brentbuffham/trimesh-repair-js.git#main`). Publish trimesh-repair-js first, then replace that line with its version (`^0.1.4` or later), run `npm install` and the tests. The same for `las-laz-js` (git `#main`, 0.18.1 -> `^0.18.1`) and `trimesh-boolean` (git `#master`, 0.7.8 -> `^0.7.8`). trimesh-repair-js's devDependency on this library is the same swap.

## Done

- **0.6.7:** a thin closed sheet is left to the vote, not set by its volume (trimesh-repair-js 0.1.6): Wookey Hole part 3's 6,813-triangle sheet kept its winding through `patchLoops` (all of it was reversed before).
- **0.5.0:** cave orientation without scanner positions. A ray vote (`"visibility"`, after Takayama et al. 2014) points normals at the side whose rays come back off the opposite wall. Wookey Hole orients as `"visibility"` in about 0.2 s, and matches the closed part 3's signed volume on the whole cave.
- **0.3.1:** orientation spreads across the flattest edges first (Hoppe et al. 1992's spanning tree, over triangles), so each twisted strip's seam lands on its fold; `repairFolds` (on by default) cuts the strips there. Wookey Hole: fold edges 1,773 → 0 after the build, and about 3,600 → 0 after patching every loop.
- **0.3.0:** speed. Integer edge keys and one shared edge table, a typed vote table, `buildMeshAsync` (normals and patches on worker threads), `maxPoints` with a suggested thin, `onProgress`. 1M points: 55 s → about 14.5 s, 3.8 GB → about 1.1 GB.
- **0.2.0:** loop patching (`patchLoop`, `patchLoops`, `auto`), figure-8 splitting, the Wookey Hole sample, the demo on GitHub Pages.
- **0.1.0:** `buildMesh` (umbrella voting, BMS output), break lines, thin and denoise, voting-gap fill, orientation, validation, `closeHoles`, `toIndexed`.
