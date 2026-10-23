# trimesh-build v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A tested JS library that turns a point cloud of a cave, drive or blast-hole void into a BMS (pool + mega soup) mesh, open or closed, with optional break lines, plus a `{positions, index}` adapter for Kirra.

**Architecture:** Local Delaunay umbrellas. Each point's neighbours are projected to its PCA plane and triangulated (Delaunator, or Constrainautor with break lines). Only the triangles touching the point are kept, and a triangle is accepted when 2 patches agree. Accepted triangles go through trimesh-boolean's `createVertexPool`, which welds them. The pipeline then cleans and orients the mesh and validates it.

**Tech Stack:** Node ≥ 22, ES modules, vitest; las-laz-js ^0.7.1, delaunator ^5.1.0, @kninnug/constrainautor ^4.1.0, trimesh-boolean ^0.7.6.

**Spec:** `docs/superpowers/specs/2026-10-23-trimesh-build-design.md`

## Global Constraints

- Code style: vanilla ES modules, `var` and `function()`, JSDoc on every export, tabs, as in trimesh-boolean. Each file starts with a short header comment saying what it does.
- Runtime dependencies are only las-laz-js, delaunator, @kninnug/constrainautor and trimesh-boolean. No WASM, no other meshing libraries.
- Import names are exact: `import Delaunator from "delaunator"`, `import Constrainautor from "@kninnug/constrainautor"`, `import { buildIndex, nearestPoints, pointsInRadius, pointNormals } from "las-laz-js"`, `import { createVertexPool, edgeKey, computeSignedVolume } from "trimesh-boolean"`.
- All internal work is origin-shifted Float64. Only `toIndexed` adds the origin back.
- Vertex ids: cloud points are `0..count-1`; break line vertices are `count..count+m-1`.
- The mega soup entry shape is exactly `{ v0, v1, v2, mesh: "A", origIdx }`, where each `v` is a `PoolVertex`.
- Normals point out of rock into the void. For a closed mesh the void is inside, so a correctly oriented mesh has a negative `computeSignedVolume`.
- Only bad input throws, as `TrimeshBuildError` with a `code`. Problems with the result are reported, never thrown.
- Defaults: k 20, maxRadiusMultiplier 3, minNeighbours 6, normalAgreement 0.5, maxPlaneOffset 0.5, minVotes 2, tolerance max(0.001, 0.25 × medianSpacing), breaklineSnap 0.001, closeHoles false, maxLoopEdges 200.

## Review Focus

1. Exact duplicate points in the cloud (common after merging scans). Expected: no throw, the pool merges them, and no non-manifold edges appear. Test in Task 10.
2. NaN or Infinity coordinates. Expected: `TrimeshBuildError` code `INVALID_INPUT` naming the first bad point. Test in Task 1.
3. Isolated outliers with no neighbours (`pointNormals` gives (0,0,0)). Expected: skipped and counted in `report.pointsSkipped`, with no NaN anywhere in the output. Test in Task 4.
4. A patch whose neighbours are all collinear (a single scan line). Expected: `triangulateLocal` returns no triangles and does not throw. Test in Task 3.
5. A break line digitised away from the cloud. Expected: no throw, its edges are simply missing from `mesh.constrainedEdges`, and the mesh is otherwise unchanged. Test in Task 10.

---

### Task 1: Scaffold, errors, fixtures, prepareCloud

**Files:**
- Create: `package.json`, `vitest.config.js`, `.gitignore`, `src/errors.js`, `src/input/prepareCloud.js`, `test/fixtures/synthetic.js`
- Test: `test/prepareCloud.test.js`

**Interfaces:**
- Produces:
  - `class TrimeshBuildError extends Error { constructor(code, message) }` with codes `INVALID_INPUT`, `NEEDS_ORIGIN`, `TOO_FEW_POINTS`, `CROSSING_BREAKLINES`.
  - `prepareCloud(cols, options) → PreparedCloud { coords: Float64Array (3·count), count, origin: {x,y,z}, bounds: {min:[3], max:[3]}, index (las-laz PointIndex over coords), normals: Float32Array (3·count), medianSpacing: number }`.
  - Fixtures (seeded, deterministic): `fibonacciSphere(n, r, centre?)`, `cylinderTunnel(radius, length, spacing, seed)` (axis along +X from x=0), `halfPipe(radius, length, spacing, seed)` (upper half, crown on the line y=0, z=radius), `parallelWalls(gap, size, spacing, seed)` (planes z=0 and z=gap), `sphereWithCap(n, r, capAngle)` (points with polar angle < capAngle removed). Each returns `{ count, positions: Float64Array }`. Also `mulberry32(seed)`.

- [ ] **Step 1: Scaffold.** `package.json`: name `trimesh-build`, version `0.1.0`, `"type": "module"`, `"main"`/`"exports"` → `./src/index.js`, engines node >= 22, scripts `test: vitest run`, author "Brent Buffham", license MIT, the four runtime deps at the versions above, devDependency `vitest ^3`. `.gitignore`: `node_modules/`. `vitest.config.js`: `test.include: ["test/**/*.test.js"]`. Run `npm install`.
- [ ] **Step 2: Write failing tests** in `test/prepareCloud.test.js`:
  - `accepts positions column and shifts by centroid`: sphere fixture centred at (478000, 6771000, 300) → `origin` within 1e-6 of the centre, `coords` mean within 1e-9 of 0, `count` = n.
  - `accepts x/y/z columns`: the same cloud as split `x`, `y`, `z` Float64Arrays gives identical `coords`.
  - `uses caller origin`: `options.origin = {x:478000,y:6771000,z:300}` gives exactly that origin.
  - `Float32 without origin throws NEEDS_ORIGIN`.
  - `NaN coordinate throws INVALID_INPUT naming the point`: point 7 set to NaN → error message contains `"7"`.
  - `fewer than 3 points throws TOO_FEW_POINTS`.
  - `medianSpacing of a 1 m grid is ~1`: 20 × 20 planar grid at spacing 1 → `medianSpacing` within 1e-9 of 1.
  - `normals are unit length on a sphere`: every normal has length within 1e-5 of 1, and |dot(normal, radial)| > 0.99.
  - `caller normals are used as given`.
- [ ] **Step 3: Run** `npx vitest run test/prepareCloud.test.js`. Expected: FAIL (module not found).
- [ ] **Step 4: Implement** `src/errors.js`, `test/fixtures/synthetic.js` and `src/input/prepareCloud.js`.
  - Read the coordinates as either `x/y/z` or `positions` (k = 3).
  - Origin: `options.origin`, else the coordinate mean computed in Float64.
  - Build `index = buildIndex({ count, positions: coords })`.
  - `medianSpacing`: take up to 10,000 evenly strided sample points, call `nearestPoints(index, p, 2)`, use the second distance, and take the median.
  - `normals = options.normals || pointNormals({count, positions: coords}, { k: options.k || 20, maxDistance: (options.maxRadiusMultiplier || 3) * medianSpacing * 4 })`. The factor 4 allows for k = 20 reaching about 2.5 spacings.
- [ ] **Step 5: Run** the same command. Expected: PASS.
- [ ] **Step 6: Commit** `feat: scaffold, errors, fixtures and prepareCloud`.

### Task 2: Patch geometry (neighbourhood, plane, guard, projection)

**Files:**
- Create: `src/reconstruct/localDelaunay/queryNeighbourhood.js`, `estimatePlane.js`, `projectToPlane.js`
- Test: `test/patch.test.js`

**Interfaces:**
- Consumes: `PreparedCloud` (Task 1).
- Produces:
  - `queryNeighbourhood(cloud, p, opts) → { ids: number[], valid: boolean }`. `opts = { k, maxRadiusMultiplier, minNeighbours, extra?: { index, firstId, coords } }`. `ids` excludes p. `extra` is the break line vertex index from Task 5: its vertices within the cull radius are appended as ids `firstId + i`. `valid` is false when fewer than `minNeighbours` survive.
  - `estimatePlane(cloud, p, ids, vertexCoords) → { point: [3], normal: [3], scale }`. `scale` is the median distance from p to `ids`. `vertexCoords` is the combined Float64Array of all vertex ids.
  - `bridgingGuard(cloud, p, ids, plane, vertexCoords, opts) → number[]`. Drops cloud neighbours with |dot(n_p, n_q)| < `normalAgreement`, and any neighbour with |(q − p)·n| > `maxPlaneOffset` × `scale`. Break line ids are tested for plane offset only.
  - `projectToPlane(plane, ids, vertexCoords) → Float64Array` of length `2 · (ids.length + 1)`. Index 0 is the source point at (0, 0); index j + 1 is `ids[j]`.

- [ ] **Step 1: Write failing tests:**
  - `neighbourhood of grid point has k ids, excludes self`: 20 × 20 grid, k = 20 → 20 ids, no p, `valid` true.
  - `isolated outlier is invalid`: a grid plus one point 100 m away → for that point, `valid` false.
  - `cull drops far neighbours`: the 20 nearest are 1 m away and 3 more sit at 50 m, with k = 23 → the 50 m points are absent.
  - `scale is median neighbour distance`.
  - `guard drops opposite wall`: `parallelWalls(2*spacing, ...)` → after the guard, no id from the other wall remains.
  - `guard keeps a curved wall`: on the r = 5 sphere at spacing 0.32, at least 90% of neighbours survive.
  - `projection frame is orthonormal and source at origin`: the first two values are 0, and for a point in the plane |u|² + |v|² equals its squared 3D distance (to 1e-9).
  - `normal parallel to Y uses X fallback`: no NaN.
- [ ] **Step 2: Run** `npx vitest run test/patch.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - `queryNeighbourhood` uses `nearestPoints(cloud.index, [x,y,z], k + 1)`, then culls at `maxRadiusMultiplier × median(d)`. Doubling the radius is unnecessary because kNN already returns k points.
  - Break line extras use `pointsInRadius(extra.index, p, cullRadius)`.
  - `projectToPlane`: U = normalise(n × [0,1,0]), or n × [1,0,0] when |n_y| > 0.9; V = n × U.
- [ ] **Step 4: Run.** Expected: PASS.
- [ ] **Step 5: Commit** `feat: patch neighbourhood, plane, bridging guard and projection`.

### Task 3: triangulateLocal and clipConstraints

**Files:**
- Create: `src/reconstruct/localDelaunay/triangulateLocal.js`, `src/constraints/clipConstraints.js`
- Test: `test/triangulateLocal.test.js`

**Interfaces:**
- Consumes: `projectToPlane` output (Task 2).
- Produces:
  - `clipConstraints(patchIds, constraints) → Array<[i, j]>` of patch-local indices: index 0 is the source, index j + 1 is `patchIds[j]`. A segment is returned only when both endpoints are in the patch. `constraints.segmentsByVertex: Map<id, id[]>` comes from Task 5.
  - `triangulateLocal(coords2D, patchIds, sourceId, scale, edges2D) → { triangles: number[] (global ids, 3 per triangle), constraintFailure: boolean }`. Only triangles containing patch index 0 are returned. Triangles with 2D area < 1e-12 × scale² are dropped.

- [ ] **Step 1: Write failing tests:**
  - `umbrella only`: source at the centre of a hexagon of 6 points → exactly 6 triangles, each containing `sourceId`.
  - `drops non-umbrella triangles`: a 5 × 5 grid patch with the source at the centre → every returned triangle contains `sourceId`.
  - `collinear patch returns nothing`: 8 points on a line → `triangles.length === 0`, no throw.
  - `forced edge survives`: a square of 4 points plus the source at the centre, with a constraint between two opposite corners passing through the source. Split that constraint into two segments (corner → source, source → corner) and check both appear as triangle edges.
  - `clip returns only internal segments`: a segment with one endpoint outside the patch is not returned.
  - `crossing constraints fall back`: give Constrainautor two crossing edges → `constraintFailure` true and an unconstrained umbrella is returned.
- [ ] **Step 2: Run** `npx vitest run test/triangulateLocal.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - `new Delaunator(coords2D)`. If `edges2D.length`, wrap `new Constrainautor(del)` in try/catch and call `constrainOne(i, j)` for each edge. On a throw, rebuild a plain Delaunator.
  - Read `del.triangles` and map local index 0 → `sourceId`, j + 1 → `patchIds[j]`.
  - Use the absolute 2D area. Winding is fixed later, in Task 7.
- [ ] **Step 4: Run.** Expected: PASS.
- [ ] **Step 5: Commit** `feat: local umbrella triangulation with constraints`.

### Task 4: acceptTriangles, localDelaunay run, registry

**Files:**
- Create: `src/reconstruct/localDelaunay/acceptTriangles.js`, `src/reconstruct/localDelaunay/run.js`, `src/reconstruct/index.js`
- Test: `test/localDelaunay.test.js`

**Interfaces:**
- Consumes: Tasks 1 to 3.
- Produces:
  - `createVoteTable() → { add(a,b,c), accepted(minVotes, firstBreaklineId) → Uint32Array, proposed: number }`. The key is the sorted triple joined by `","`.
  - `accepted` keeps triangles with votes ≥ `minVotes`, plus triangles with votes ≥ 1 that have ≥ 2 vertex ids ≥ `firstBreaklineId`. After that comes the **promote pass**: each remaining 1-vote triangle, in ascending key order, is added only when all 3 of its edges currently have < 2 faces and at least 2 of them have exactly 1 face. This fills slits where the vote was split between two patches. It is an addition to spec §6.4; add a sentence there.
  - `runLocalDelaunay(cloud, constraints, options) → { triangles: Uint32Array, report: { pointsUsed, pointsSkipped, trianglesProposed, trianglesAccepted, constraintFailures } }`.
  - `RECONSTRUCTORS = { localDelaunay: runLocalDelaunay }`.
  - `constraints` may be `EMPTY_CONSTRAINTS` from Task 5. Until Task 5 lands, this task uses `{ firstId: cloud.count, count: 0, coords: new Float64Array(0), dropped: null, segmentsByVertex: new Map(), index: null }`.

- [ ] **Step 1: Write failing tests:**
  - `2 votes accepted, 1 rejected`: add (1,2,3) twice and (4,5,6) once, with no promote candidates touching it → only (1,2,3).
  - `key is order independent`: (3,1,2) and (2,3,1) count as the same triangle.
  - `breakline triangle needs 1 vote`: firstBreaklineId 100, one vote on (1,100,101) → accepted.
  - `promote fills a slit`: the accepted strip leaves two 1-face edges that a 1-vote triangle exactly fills → that triangle is accepted.
  - `sphere: every edge used ≤ 2 times`: `fibonacciSphere(3000, 5)` → in `triangles`, no edge appears in more than 2 triangles, and accepted > 0.95 × 2 × (n − 2) (the Euler count for a closed sphere).
  - `outlier skipped, no NaN`: the sphere plus one point 100 m away → `pointsSkipped ≥ 1`, all triangles valid ids < count.
- [ ] **Step 2: Run** `npx vitest run test/localDelaunay.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.** For each p not in `constraints.dropped`: skip and count if its normal is zero or the neighbourhood is invalid. Otherwise run guard → plane → projection → clip → triangulate → vote. `vertexCoords` is `cloud.coords` when `constraints.count === 0`, else the concatenation of `cloud.coords` and `constraints.coords`.
- [ ] **Step 4: Run.** Expected: PASS. If the sphere edge or count assertion fails, use superpowers:systematic-debugging. Don't loosen the thresholds.
- [ ] **Step 5: Commit** `feat: umbrella voting and localDelaunay reconstructor`.

### Task 5: insertConstraints

**Files:**
- Create: `src/constraints/insertConstraints.js`
- Test: `test/insertConstraints.test.js`
- Modify: `src/reconstruct/localDelaunay/run.js` (import `EMPTY_CONSTRAINTS` instead of the inline stub)

**Interfaces:**
- Consumes: `PreparedCloud`.
- Produces:
  - `insertConstraints(cloud, breaklines, options) → ConstraintSet { firstId, count, coords: Float64Array (3·count, origin-shifted), segments: Uint32Array (id pairs), segmentsByVertex: Map<id, id[]>, edgeKeys: Set<string> (edgeKey of id strings), index (las-laz buildIndex over coords, or null when count 0), dropped: Uint8Array(cloud.count) | null, snapReport: { dropped, nearTolerance } }`.
  - `EMPTY_CONSTRAINTS(cloud)` returns the empty set used when there are no break lines.

- [ ] **Step 1: Write failing tests:**
  - `splits long segments to ≤ medianSpacing`: a 10 m line with medianSpacing 0.5 gives ≥ 20 segments, each ≤ 0.5 + 1e-9 long.
  - `closedLoop adds the closing segment`.
  - `ids start at cloud.count and coords are origin-shifted`.
  - `crossing breaklines throw naming both`: two lines that cross → `CROSSING_BREAKLINES`, and the message contains `"breakline 0 segment"` and `"breakline 1 segment"`.
  - `adjacent segments of one line are not a crossing`.
  - `drops cloud points within breaklineSnap`: a cloud point 0.0005 m from the line → `dropped[i] === 1`; one 0.01 m away is not dropped and is counted in `nearTolerance` when tolerance is 0.02.
- [ ] **Step 2: Run** `npx vitest run test/insertConstraints.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - Crossing test: for each pair of segments from different lines, or non-adjacent segments of the same line, compute the segment–segment closest distance (clamped parameters). It is a crossing when the distance < `tolerance` and neither closest point is an endpoint shared by both segments. Pre-filter by bounding box.
  - Snap: for each segment, query `pointsInRadius(cloud.index, midpoint, halfLength + breaklineSnap)` and test the point–segment distance.
- [ ] **Step 4: Run.** Expected: PASS.
- [ ] **Step 5: Commit** `feat: insert and split breaklines, crossing check, snap drop`.

### Task 6: ingestToBMS and cleanSoup

**Files:**
- Create: `src/bms/ingestToBMS.js`, `src/bms/cleanSoup.js`, `src/bms/edges.js`
- Test: `test/bms.test.js`

**Interfaces:**
- Consumes: `triangles: Uint32Array` (Task 4), `vertexCoords` (Task 4), `ConstraintSet` (Task 5).
- Produces:
  - `ingestToBMS(vertexCoords, triangles, tolerance) → { pool, soup, idToPool: Array<PoolVertex> }`.
  - `cleanSoup(bms, constraints) → { merged, degenerate, duplicates, boundaryEdges, nonManifoldEdges, collapsedConstraints }`. It mutates `bms.soup` in place (degenerates and duplicates removed) and renumbers `origIdx` to the new index.
  - `buildEdgeMap(soup) → Map<string, number[]>`, keyed by `edgeKey(String(a.id), String(b.id))` and listing triangle indices. Tasks 7 to 9 reuse it.

- [ ] **Step 1: Write failing tests:**
  - `soup entries have BMS shape`: each has `v0, v1, v2, mesh === "A", origIdx`, and `v0` is a pool vertex with `id`.
  - `shared vertex identity`: two triangles sharing an id share the same `PoolVertex` object (`===`).
  - `pool welds within tolerance`: two ids 0.0001 apart with tolerance 0.001 → the same `PoolVertex`, `merged === 1`.
  - `collapsed triangle removed`: `degenerate === 1`.
  - `duplicate triangle removed`: the same vertex set in a different order → `duplicates === 1`.
  - `edge counts`: a closed tetrahedron gives 0 boundary edges and 0 non-manifold edges; three triangles on one edge give 1 non-manifold edge.
  - `collapsed constraint reported`: a constraint whose two ends weld together → `collapsedConstraints === 1`.
- [ ] **Step 2: Run** `npx vitest run test/bms.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.** `idToPool` is lazy: create a pool vertex only for ids that a triangle uses. `merged` counts ids whose `getOrCreate` returned a vertex that already had an earlier id.
- [ ] **Step 4: Run.** Expected: PASS.
- [ ] **Step 5: Commit** `feat: BMS ingest and soup cleanup`.

### Task 7: orientMesh

**Files:**
- Create: `src/bms/orientMesh.js`
- Test: `test/orientMesh.test.js`

**Interfaces:**
- Consumes: `bms` (Task 6), `buildEdgeMap`.
- Produces: `orientMesh(bms, viewpoints?) → { perComponent: Array<{ triangles: number, method: "viewpoint"|"closed"|"unresolved", consistent: boolean }>, orientation: "viewpoint"|"closed"|"unresolved"|"mixed" }`. Viewpoints are origin-shifted `[x,y,z]`. It swaps `v1`/`v2` in place. `orientation` is the shared method when all components agree, else `"mixed"`.

- [ ] **Step 1: Write failing tests:**
  - `randomly flipped closed sphere becomes consistent and inward`: mesh a Fibonacci sphere (via Tasks 4 and 6), flip 30% of triangles with a seeded RNG, orient → every manifold edge is traversed in opposite directions by its 2 triangles, `computeSignedVolume(soup) < 0`, method `"closed"`.
  - `open tunnel with viewpoint on axis`: every triangle's normal has dot > 0 with (axis point − centroid).
  - `open tunnel without viewpoint is unresolved but consistent`.
  - `two components oriented independently`: two spheres → 2 entries, both `"closed"`.
- [ ] **Step 2: Run** `npx vitest run test/orientMesh.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - Walk each component outward from its lowest-index triangle, crossing only edges with exactly 2 faces.
  - Two triangles agree on a shared edge when one runs it a→b and the other b→a. Flip the neighbour when they don't. An already-visited neighbour that disagrees sets `consistent: false`.
  - A component is closed when none of its edges has a face count other than 2.
  - Viewpoint test: Σ area × dot(n̂, nearestViewpoint − centroid); flip the component when the total < 0.
- [ ] **Step 4: Run.** Expected: PASS.
- [ ] **Step 5: Commit** `feat: consistent winding and void-facing orientation`.

### Task 8: validateMesh and pointInside

**Files:**
- Create: `src/validate/validateMesh.js`
- Test: `test/validateMesh.test.js`

**Interfaces:**
- Consumes: `bms`, `ConstraintSet`, `buildEdgeMap`, the `orientMesh` result.
- Produces:
  - `validateMesh(bms, constraints, orientation) → MeshResult { closed, boundaryLoops: number[][] (PoolVertex ids, in loop order), boundaryEdgeCount, nonManifoldEdgeCount, enclosedVolume: number|null, constrainedEdges: Array<{a,b}>, orientation }`.
  - `pointInside(bms, p) → boolean`.
  - `constrainedEdges`: constraint id pairs mapped through `idToPool`, kept when the edge exists in the edge map and its two pool vertices are distinct.

- [ ] **Step 1: Write failing tests:**
  - `tetrahedron closed with volume`: unit right tetrahedron → `closed`, `enclosedVolume` within 1e-12 of 1/6.
  - `open square has one loop of 4`.
  - `two holes give two loops`.
  - `non-manifold edge makes it not closed`.
  - `constrained edge used once is excluded from boundaryEdgeCount but closed is false`.
  - `pointInside`: the tetrahedron centroid → true; (5,5,5) → false.
- [ ] **Step 2: Run** `npx vitest run test/validateMesh.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - Loops: build a next-vertex map from directed boundary edges (each 1-face edge in its triangle's direction) and follow it. A vertex with two outgoing edges splits into separate loops.
  - Volume: `Math.abs(computeSignedVolume(soup))`.
  - `pointInside`: a Möller–Trumbore ray from p along (1e-4, 2e-4, 1) normalised; count hits with t > 0.
- [ ] **Step 4: Run.** Expected: PASS.
- [ ] **Step 5: Commit** `feat: mesh validation, boundary loops, volume, ray parity`.

### Task 9: closeHoles

**Files:**
- Create: `src/post/closeHoles.js`
- Test: `test/closeHoles.test.js`

**Interfaces:**
- Consumes: `bms`, `MeshResult`, `ConstraintSet`, `buildEdgeMap`.
- Produces: `closeHoles(bms, mesh, constraints, { maxLoopEdges = 200 }) → { added: number, unfilledLoops: number[][] }`. It appends to `bms.soup`. The Steiner vertex is `bms.pool.getOrCreate(centroid)`.

- [ ] **Step 1: Write failing tests:**
  - `capped sphere closes`: `sphereWithCap(3000, 5, 0.4)` through Tasks 4, 6 and 7 with a viewpoint at the centre, then `closeHoles`, then `validateMesh` → `closed`, `unfilledLoops` empty, and fan triangles wound consistently with their neighbours (every shared edge in opposite directions).
  - `loop over maxLoopEdges is unfilled`: `maxLoopEdges: 3` → the loop appears in `unfilledLoops`, no throw, `added === 0`.
  - `loop on a constrained edge is unfilled`.
- [ ] **Step 2: Run** `npx vitest run test/closeHoles.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement.** For a loop v0 → v1 → … whose boundary edges run vi → vi+1 in their triangles, each fan triangle is `(vi+1, vi, c)`, so the shared edge runs in the opposite direction. Before adding anything, check that no fan edge already has 2 faces; if one does, the loop is unfilled.
- [ ] **Step 4: Run.** Expected: PASS.
- [ ] **Step 5: Commit** `feat: opt-in centroid hole filling`.

### Task 10: toIndexed, buildMesh, index.js, end-to-end tests, README

**Files:**
- Create: `src/output/toIndexed.js`, `src/buildMesh.js`, `src/index.js`
- Modify: `README.md`, `docs/superpowers/specs/2026-10-23-trimesh-build-design.md` (the promote-pass sentence in §6.4)
- Test: `test/buildMesh.test.js`

**Interfaces:**
- Consumes: everything above.
- Produces:
  - `toIndexed(bms, origin) → { positions: Float64Array, index: Uint32Array }`.
  - `buildMesh(cols, options) → { pool, soup, origin, mesh, unfilledLoops, report }`, as spec §7. `viewpoints` and `breaklines` are given in world coordinates and shifted internally.
  - `src/index.js` re-exports `buildMesh`, `toIndexed`, `TrimeshBuildError`, `prepareCloud`, `insertConstraints`, `RECONSTRUCTORS`, `runLocalDelaunay`, `ingestToBMS`, `cleanSoup`, `orientMesh`, `validateMesh`, `pointInside`, `closeHoles`.

- [ ] **Step 1: Write failing tests:**
  - `sphere closed, volume within 1%`: `fibonacciSphere(3000, 5)` → `closed`, `nonManifoldEdgeCount 0`, |V − 4/3·π·125| / (4/3·π·125) < 0.01, orientation `"closed"`.
  - `tunnel open with 2 loops`: `cylinderTunnel(2.5, 20, 0.25, 1)` → `closed` false, `boundaryLoops.length === 2`, `nonManifoldEdgeCount 0`.
  - `tunnel viewpoint orientation`: viewpoints along the axis → orientation `"viewpoint"`.
  - `half-pipe crown breakline survives`: a break line along the crown → `report.weld.collapsedConstraints === 0`, and `mesh.constrainedEdges.length` equals the number of split segments.
  - `crossing breaklines throw`.
  - `parallel walls not bridged`: `parallelWalls(0.5, 10, 0.25, 1)` (gap = 2 × spacing) → no triangle has vertices with z < 0.25 and z > 0.25 at once.
  - `capped sphere + closeHoles closes`.
  - `duplicate points tolerated`: the sphere with 5% of its points duplicated exactly → no throw, `nonManifoldEdgeCount === 0`.
  - `breakline away from cloud is harmless`: a break line 50 m from the sphere → no throw, `constrainedEdges.length === 0`, still `closed`.
  - `toIndexed keeps precision at UTM`: the sphere centred at (478000, 6771000, 300) → every `positions` value matches the source point it came from within 1e-6.
  - `real LAZ smoke`: open `../las-laz-js/samples/Cloud.las` with las-laz-js `openLas` and read the positions. Skip with `it.skipIf` when the file is absent. Then `buildMesh` → returns a `report` with `trianglesAccepted > 0`.
- [ ] **Step 2: Run** `npx vitest run test/buildMesh.test.js`. Expected: FAIL.
- [ ] **Step 3: Implement** `buildMesh` as the spec §6 sequence: prepareCloud → insertConstraints (or EMPTY_CONSTRAINTS) → RECONSTRUCTORS[options.algorithm || "localDelaunay"] → ingestToBMS (tolerance per Global Constraints) → cleanSoup → orientMesh → validateMesh → closeHoles + validateMesh when opted in. Then `toIndexed` and `index.js`.
- [ ] **Step 4: Run** `npx vitest run`. Expected: all tests PASS. Any end-to-end failure goes to superpowers:systematic-debugging. Fix the stage at fault; don't loosen the assertions.
- [ ] **Step 5: README.** Purpose, install, a `buildMesh` example from las-laz-js columns, the Kirra hand-off (`toIndexed` → `addGeneratedSurface({ positions, index })`), the normal convention, the options table (copied from spec §4), and what's deferred.
- [ ] **Step 6: Commit** `feat: buildMesh pipeline, Kirra adapter, end-to-end tests`.

### Task 11: Three.js demo page

Added at Brent's request during execution (2026-10-23). It is a demo, not library code, so it has no TDD cycle; verification is a build plus a browser run.

**Files:**
- Create: `index.html`, `demo/main.js`, `demo/clouds.js`, `vite.config.js`
- Modify: `package.json` (devDependencies `three ^0.183.0`, `vite ^7`; scripts `dev: vite`, `build:demo: vite build`)

**Interfaces:**
- Consumes: `buildMesh`, `toIndexed` (Task 10); fixtures from `test/fixtures/synthetic.js`; las-laz-js `openLas` + `BlobSource` for a dropped or picked LAS/LAZ file.

- [ ] **Step 1:** Page with a left panel and a Three.js viewport (OrbitControls). Panel:
  - **Source:** sphere, capped sphere, tunnel, half-pipe with crown break line, parallel walls, or a LAS/LAZ file.
  - **Options:** k, minVotes, normalAgreement, maxPlaneOffset, tolerance, viewpoint on/off, closeHoles on/off.
  - A **Build** button.
- [ ] **Step 2:** Render the result:
  - the mesh (MeshStandardMaterial, double-sided, back faces tinted so wrong-facing normals show);
  - the points (toggle);
  - boundary loops as red lines, constrained edges as yellow lines, non-manifold edges as magenta;
  - optional normal ticks.

  Show the report, `closed`, `enclosedVolume` and the timing in the panel. Positions are origin-shifted for rendering.
- [ ] **Step 3:** Verify: `npx vite build` succeeds; `npx vite` serves the page; every synthetic source builds and shows the expected loops (sphere 0, tunnel 2) with no console errors.
- [ ] **Step 4:** Commit `feat: Three.js demo page`.
