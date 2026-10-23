# trimesh-build: Design (v1)

**Author:** Brent Buffham
**Date:** 2026-10-23
**Supersedes:** `trimesh-build-spec.md` rev 2 where the two disagree. Section 9 lists every change.

## 1. Goal

Build triangle meshes, open or closed, from denoised point clouds of underground voids: caves, drives, tunnels, stopes, CMS cavity scans and blast-hole voids. Optional digitised break lines become hard edges. Whether a mesh is closed is a property of the result, not an input mode. A closed mesh gets an enclosed volume.

The output is the BMS (Brent's Mega Soup) pair that trimesh-boolean already uses: a `createVertexPool` pool plus a mega soup of `{ v0, v1, v2, mesh, origIdx }` triangles that share `PoolVertex` objects. It goes straight into `bmsBooleanOp`. An adapter turns it into the `{ positions, index }` form that Kirra's `addGeneratedSurface` takes.

Kirra's current point-cloud mesher (`Kirra/src/workers/pointCloudMeshWorker.js`) runs one 2.5D Delaunay in XY, so it cannot represent roofs, overhangs or tunnels. trimesh-build meshes in true 3D.

## 2. Scope

**In v1:** the full pipeline below with the `localDelaunay` algorithm, break lines, welding, validation, orientation, opt-in centroid hole filling, and the Kirra output adapter.

**Later, not v1:** ball pivoting and screened Poisson (as extra algorithms in the registry), `DecimateMesh`, `SmoothMesh`, tiling of multi-million-point clouds (spec rev 2, prototype step 8), adaptive k, circumcentre and `retriangulate` hole filling, and the Kirra dialog and worker.

## 3. Dependencies

| Package | Used for |
|---|---|
| `las-laz-js` ^0.7.0 | `buildIndex`, `nearestPoints` (kNN), `pointNormals` (covariance normals). Also the input column format. |
| `delaunator` ^5.0.1 | 2D Delaunay of each patch. |
| `@kninnug/constrainautor` ^4.0.1 | Constrained patches: `new Constrainautor(del)`, then `con.constrainOne(i, j)`. |
| `trimesh-boolean` ^0.7.6 | `createVertexPool`, `edgeKey`, `computeSignedVolume`. |

Dev: `vitest`. Code style follows trimesh-boolean: vanilla ES modules, `var` and `function`, JSDoc types, no build step needed to consume `src/`. No WASM and no other meshing libraries.

Kirra already depends on all four runtime packages.

## 4. Inputs

`buildMesh(cols, options)`

`cols` is a las-laz-js columns object: `{ x, y, z }` columns, or a `positions` column with k = 3, plus `count`. These may be `Float64Array`, or `Float32Array` with `options.origin` given. A Float32 array cannot hold mine coordinates (around 6,771,000 m north, where the step size is about 0.5 m), so a Float32 cloud must already be shifted by the origin it was written with.

| Option | Type | Default | Notes |
|---|---|---|---|
| `origin` | `{x,y,z}` | cloud centroid | The shift applied before any work. It is added back by `toIndexed`. |
| `normals` | `Float32Array` (3 per point) | computed | Caller-supplied normals skip `pointNormals`. Their sign is ignored (see 6.7). |
| `breaklines` | `Array<{ vertices: [x,y,z][], closedLoop: boolean }>` | none | World coordinates, shifted by `origin` internally. |
| `viewpoints` | `Array<[x,y,z]>` | none | Scanner positions, in the void. These decide the normal direction. |
| `k` | number | 20 | Neighbours per patch (Q5: fixed in v1). |
| `maxRadiusMultiplier` | number | 3 | Neighbour cull distance as a multiple of the median neighbour distance. |
| `minNeighbours` | number | 6 | A point with fewer neighbours is skipped and counted as a boundary or outlier candidate. |
| `normalAgreement` | number | 0.5 | Neighbours with \|dot(n_source, n_neighbour)\| below this are dropped (bridging guard, for walls meeting at an angle). |
| `maxPlaneOffset` | number | 0.5 | Neighbours more than this × `scale` off the source plane are dropped (bridging guard, for close parallel walls). |
| `minVotes` | number | 2 | Votes a triangle needs to be accepted. |
| `tolerance` | number | max(0.001, 0.25 × median spacing) | Weld tolerance in world units (metres) (Q6). |
| `breaklineSnap` | number | 0.001 | Cloud points this close to a break line are dropped (Q1). In world units: 1 mm for a cloud in metres. Set it per call for clouds in other units. |
| `closeHoles` | `false \| { maxLoopEdges }` | `false` | Opt-in. |

Normals point **out of rock into the void**.

## 5. Module layout

```
src/
  index.js                     buildMesh + every stage export
  input/prepareCloud.js
  reconstruct/
    index.js                   registry: { localDelaunay }
    localDelaunay/
      queryNeighbourhood.js
      estimatePlane.js
      projectToPlane.js
      triangulateLocal.js
      acceptTriangles.js
      run.js
  constraints/
    insertConstraints.js
    clipConstraints.js
  bms/
    ingestToBMS.js
    cleanSoup.js
    orientMesh.js
  validate/validateMesh.js
  post/closeHoles.js
  output/toIndexed.js
test/
  fixtures/synthetic.js        sphere, tunnel, half-pipe, parallel walls
  *.test.js
```

Every reconstruction algorithm has the same signature:

```js
/**
 * @param {PreparedCloud} cloud
 * @param {ConstraintSet} constraints
 * @param {Object} options
 * @returns {{ triangles: Uint32Array, report: Object }}  // global vertex ids, 3 per triangle
 */
function reconstruct(cloud, constraints, options) {}
```

Ball pivoting and Poisson will be added as further registry entries with this signature. Everything downstream (`ingestToBMS` onwards) is shared by all of them.

## 6. Pipeline

### 6.1 Vertex identity

Every vertex has a global integer id until `ingestToBMS`. Cloud points are `0..count-1`. Break line vertices, including those added by splitting, are `count..count+m-1`. `PreparedCloud.coords` is one `Float64Array` holding all `count + m` vertices, origin-shifted. Voting, triangle keys and constraint lookups all use these ids.

### 6.2 prepareCloud

```js
/** @returns {PreparedCloud} { coords: Float64Array, count, origin, bounds, cols, index, normals, medianSpacing } */
function prepareCloud(cols, options) {}
```

- Shift the coordinates by `origin` into `coords`.
- Build the las-laz-js `buildIndex` on the shifted columns.
- Take normals from `options.normals`, or else from `pointNormals(cols, { k, maxDistance })`. `maxDistance` is `maxRadiusMultiplier` × a median spacing estimated from a sample of up to 10,000 points.
- `medianSpacing` is the median nearest-neighbour distance over the same sample.

### 6.3 insertConstraints

```js
/** @returns {ConstraintSet} { firstId, count, segments: Uint32Array (id pairs), edgeKeys: Set<string>, dropped: Uint8Array, snapReport } */
function insertConstraints(cloud, breaklines, options) {}
```

- Split each break line segment into pieces no longer than `medianSpacing`. Every segment is then shorter than any patch radius, so no patch needs a point of its own on a break line, and every patch that sees a segment sees the same vertex ids.
- Test all segment pairs in 3D, using the closest-approach distance below `tolerance` with the segments otherwise disjoint. A crossing throws `TrimeshBuildError` naming both break lines and both segment indices (Q2). Neighbouring segments of the same line are not tested against each other.
- Mark cloud points within `breaklineSnap` of any segment as dropped. Report how many points were dropped and how many lay between `breaklineSnap` and `tolerance` (Q1).
- Break line vertices are inserted once, globally. Future tiles will reference the same ids and never re-insert them (Q3).

### 6.4 localDelaunay (per point p, skipping dropped points)

1. **queryNeighbourhood.** Call `nearestPoints(index, p, k + 1, { maxDistance })`, drop p itself, then drop neighbours beyond `maxRadiusMultiplier` × the median neighbour distance. Add any break line vertices within that radius as extra neighbours. If fewer than `minNeighbours` remain, skip p and count it.
2. **estimatePlane.** The plane passes through p with normal n_p. Its `scale` is the median neighbour distance.
3. **Bridging guard.** Drop neighbours with \|dot(n_p, n_q)\| < `normalAgreement`; the absolute value is used because normal signs are not yet resolved. Also drop neighbours whose distance off p's plane, \|(q − p) · n_p\|, is more than `maxPlaneOffset` × `scale`. The first test handles walls meeting at an angle, the second close parallel walls. Walls closer together than about the point spacing cannot be separated by any local method; that is a sampling limit, not a bug.
4. **projectToPlane.** Build U = normalise(n × Y), or n × X when \|n · Y\| > 0.9, and V = n × U. Each neighbour's 2D coordinates are its offset from p dotted with U and V. p sits at (0, 0) as patch index 0.
5. **clipConstraints.** Return the segments whose two endpoints are both in the patch, as pairs of patch-local indices. Splitting at insert time means no segment ever needs clipping against the patch edge.
6. **triangulateLocal.** Run `new Delaunator(coords2D)`. If there are constraint edges, run `new Constrainautor(del)` and `constrainOne` for each edge. If Constrainautor throws, fall back to the unconstrained triangulation and count a `constraintFailure`. Keep only the triangles that include patch index 0 (p's umbrella). Drop triangles whose 2D area is below 1e-12 × scale².
7. **acceptTriangles.** Key each umbrella triangle by its sorted id triple `"a,b,c"` and add 1 to its count in a `Map`.

After all points are done, accept every triangle with at least `minVotes` votes. Break line vertices propose no umbrellas of their own, so a triangle with one break line vertex can reach at most 2 votes and one with two can reach only 1. To keep those triangles, a triangle with two or more break line vertices needs only 1 vote. Every vote it can get comes from a cloud point, so one vote already shows the patch agrees.

### 6.5 ingestToBMS

```js
/** @returns {{ pool, soup, idToPool: Array<PoolVertex> }} */
function ingestToBMS(cloud, triangles, tolerance) {}
```

Insert each used vertex id through `pool.getOrCreate(x, y, z)` once and remember the `PoolVertex` it maps to. Push `{ v0, v1, v2, mesh: "A", origIdx: t }` for each triangle.

### 6.6 cleanSoup

```js
/** @returns {{ merged, degenerate, boundaryEdges, nonManifoldEdges, collapsedConstraints }} */
function cleanSoup(bms, constraints) {}
```

Welding is done by the BMS pool: `ingestToBMS` sends every vertex through `pool.getOrCreate`, which merges anything within tolerance. trimesh-build has no weld algorithm of its own. This step only tidies up after the pool:

- `merged` is the number of ids that landed on a `PoolVertex` another id already used.
- Remove triangles with two corners on the same `PoolVertex`, then remove duplicate triangles (the same vertex set).
- Count faces per `edgeKey(String(a.id), String(b.id))`.
- Report any constrained edge whose two endpoints merged.

### 6.7 orientMesh

Covariance (PCA) normals have no reliable sign, so the winding is fixed on the welded mesh, not per triangle.

1. **Consistent winding.** For each connected component, walk outward across edges shared by exactly 2 triangles. A neighbour that runs the shared edge in the same direction is flipped. Edges with more than 2 triangles are not crossed. If a component can't be made consistent (a Möbius-like conflict), it is reported.
2. **Overall sign, per component**, in this order:
   - (a) If `viewpoints` are given: for each triangle, find the nearest viewpoint and take the dot of the triangle normal with the direction from the centroid to that viewpoint, weighted by triangle area. A negative total flips the component.
   - (b) Else, if the component is closed: the void is inside, so normals point inward. A positive `computeSignedVolume` flips the component.
   - (c) Else: leave it and report `orientation: "unresolved"` for that component.

### 6.8 validateMesh

```js
/** @returns {MeshResult} */
function validateMesh(bms, constraints) {}
```

`MeshResult`:

| Field | Meaning |
|---|---|
| `closed` | No edges used once and none used more than twice. |
| `boundaryLoops` | `Array<number[]>` of `PoolVertex` ids, traced from edges used once. |
| `boundaryEdgeCount` | Edges used once that are not constrained edges. |
| `nonManifoldEdgeCount` | Edges used more than twice. |
| `enclosedVolume` | \|`computeSignedVolume`\| when `closed`, else `null`. |
| `constrainedEdges` | `Array<{a, b}>` of `PoolVertex` ids that survived welding. |
| `orientation` | `"viewpoint" \| "closed" \| "unresolved" \| "mixed"`. |

A constrained edge used once (a break line that ends mid-surface) is left out of `boundaryEdgeCount`, but it still stops `closed` from being true.

Also exported: `pointInside(bms, p)`, a ray-parity test for closed meshes. It casts a ray from p towards a point outside the bounding box (along +Z with a small fixed jitter) and returns true for an odd number of crossings. Whether "inside" means void or rock is for the caller to decide, using the convention.

### 6.9 closeHoles (opt-in)

```js
/** @returns {{ added: number, unfilledLoops: number[][] }} */
function closeHoles(bms, mesh, { maxLoopEdges = 200 } = {}) {}
```

- For each boundary loop up to `maxLoopEdges` edges: add a Steiner `PoolVertex` at the loop centroid and fan-triangulate, with the winding opposite to the loop's adjacent triangles (Q4: centroid now, circumcentre later).
- A loop that runs along a constrained edge, or whose fan would create a non-manifold edge, goes in `unfilledLoops`. The function never throws for an unfillable loop.
- After filling, run `validateMesh` again.

### 6.10 toIndexed

```js
/** @returns {{ positions: Float64Array, index: Uint32Array }} world coordinates, origin added back */
function toIndexed(bms, origin) {}
```

This is the input for `addGeneratedSurface({ positions, index, ... })`.

## 7. buildMesh result

```js
{
  pool, soup,             // BMS pair, origin-shifted, ready for bmsBooleanOp
  origin,                 // {x, y, z}
  mesh,                   // MeshResult
  unfilledLoops,          // [] unless closeHoles ran
  report: {
    pointsUsed, pointsSkipped, pointsDropped,
    trianglesProposed, trianglesAccepted,
    constraintFailures, snappedBreaklinePoints,
    weld: { merged, degenerate, collapsedConstraints },
    orientation: { perComponent: [...] }
  }
}
```

**Errors.** `TrimeshBuildError` (with a `code`) is thrown only for bad input: wrong column lengths, a Float32 cloud with no `origin`, crossing break lines, or fewer than 3 usable points. Problems with the result (open edges, non-manifold edges, unresolved orientation, unfilled holes) are reported and never thrown.

## 8. Testing

vitest. Synthetic clouds come from `test/fixtures/synthetic.js` with a fixed random seed and roughly even spacing.

| Test | Asserts |
|---|---|
| Sphere, r = 5, about 3,000 points | `closed: true`, `nonManifoldEdgeCount: 0`, volume within 1% of 4/3 πr³ (the meshed volume is slightly smaller than the true sphere's), orientation `"closed"`, normals inward. |
| Cylinder tunnel, open at both ends | `closed: false`, exactly 2 boundary loops, no non-manifold edges. |
| Tunnel with a viewpoint on its axis | orientation `"viewpoint"`; every triangle's normal points towards the axis. |
| Half-pipe drive, break line along the crown | every split break line segment is a mesh edge after welding; `collapsedConstraints: 0`. |
| Crossing break lines | throws, naming both lines and both segments. |
| Two parallel walls 2 × spacing apart (inside the k = 20 neighbourhood radius) | no triangle has vertices on both walls. |
| Sphere with a cap removed, then `closeHoles` | becomes closed; volume reported. |
| Hole loop over `maxLoopEdges` | ends up in `unfilledLoops`; no throw. |
| `toIndexed` with origin (478000, 6771000, 300) | positions keep sub-millimetre precision. |
| Real LAZ smoke test (`las-laz-js/samples/Cloud.las`) | runs end to end and returns a report; no geometric assertions. |

There are also unit tests for each stage: projection frame, umbrella filter, vote threshold, weld counts, winding propagation and loop tracing.

## 9. Changes from spec rev 2

1. **BMS** is the existing trimesh-boolean pair (`createVertexPool` plus mega soup), not a new class.
2. **las-laz-js is a core dependency.** `BuildIndex`, `QueryNeighbourhood` and `EstimatePlane` reuse its `buildIndex`, `nearestPoints` and `pointNormals` instead of writing new ones.
3. **Input** is a las-laz-js columns object, as Float64, or Float32 with an `origin`. All work is origin-shifted.
4. **`AcceptTriangles` is new:** an umbrella filter plus the 2-of-3 vote. Without it, overlapping patches give stacked duplicates.
5. **`ClipConstraints` adds no patch-local Steiner points.** Break lines are split once, globally, at insert time, because a patch-local point could never get a second vote.
6. **`OrientTriangle` is replaced by `orientMesh`** (consistent winding, then viewpoint or closed-volume sign).
7. **The bridging guard** (neighbour normal agreement plus plane offset) is new.
8. **The reconstruction algorithm is pluggable** through a registry, for ball pivoting and Poisson later.
9. **Open questions Q1 to Q7 are resolved** as in section 4 and section 6. Q1 is the `breaklineSnap` option, default 1 mm. Q7 falls away: welding is done by the BMS pool, so trimesh-build has no weld stage to tune.
10. **`WeldSoup` is renamed `cleanSoup`.** The BMS pool does the welding; this step only removes collapsed and duplicate triangles and counts edges.
