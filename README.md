# trimesh-build-js

Build triangle meshes, open or closed, from point clouds of underground voids: caves, drives, tunnels, stopes, CMS cavity scans and blast-hole voids. Break lines you digitise become hard edges. A closed mesh reports its enclosed volume.

The output is a BMS (Brent's Mega Soup) pair from [trimesh-boolean](https://github.com/brentbuffham/trimesh-boolean): a `createVertexPool` pool plus a mega soup of `{ v0, v1, v2, mesh, origIdx }` triangles that share `PoolVertex` objects. It goes straight into `bmsBooleanOp`. `toIndexed()` turns it into the `{ positions, index }` form Kirra's `addGeneratedSurface` takes.

Vanilla JavaScript, ES modules, no WASM. Depends on las-laz-js, delaunator, @kninnug/constrainautor and trimesh-boolean.

**Live demo:** [brentbuffham.github.io/trimesh-build-js](https://brentbuffham.github.io/trimesh-build-js/). It meshes synthetic voids, the bundled Wookey Hole cave, or your own LAS/LAZ file in the browser, and shows open loops, break line edges, non-manifold edges and which way the normals face. The source is in `examples/`; run `npm run dev` to work on it locally.

## How it works

Every point gets a local patch:

1. Take its k nearest neighbours and fit a plane through them.
2. Drop neighbours from another wall (the bridging guard).
3. Project the patch to 2D and triangulate it with Delaunator, or Constrainautor when break lines are in the patch.
4. Keep only the triangles that touch the point (its umbrella).

A triangle is accepted when the patches of 2 of its 3 vertices agree on it. Accepted triangles are welded by the BMS vertex pool. The mesh is then cleaned, voting gaps of 6 edges or fewer are filled, and the winding is made consistent. Normals point **out of rock into the void**.

## Install

```sh
npm install trimesh-build-js
```

## Use

```js
import { openLas } from "las-laz-js";
import { buildMesh, toIndexed } from "trimesh-build-js";

var las = await openLas(file);
var pts = await las.readPoints({ fields: ["x", "y", "z"] });

var result = buildMesh(
	{ count: pts.count, x: pts.x, y: pts.y, z: pts.z },
	{
		thin: 0.05,                    // raw scans: even out scan-line sampling (metres, 3D)
		denoise: { iterations: 3 },    // raw scans: smooth before meshing
		viewpoints: [[x, y, z]],       // scanner positions (in the void), if known
		breaklines: [{ vertices: [[x, y, z], ...], closedLoop: false }]
	}
);

result.mesh.closed;          // true only when no edge is open or over-shared
result.mesh.enclosedVolume;  // m³ when closed, else null
result.mesh.boundaryLoops;   // open edges, as loops of pool vertex ids
result.report;               // counts from every stage

// Booleans: the BMS pair is origin-shifted; shift the other mesh the same way
// bmsBooleanOp(result.soup, otherSoup, "subtract")

// Kirra
var indexed = toIndexed(result);   // { positions: Float64Array (world), index: Uint32Array }
// addGeneratedSurface({ id, name, positions: indexed.positions, index: indexed.index, layerName })
```

### Using every core

`buildMeshAsync` gives the same mesh as `buildMesh`, with the per-point triangulation spread over worker threads. You tell it how to start a worker, and the library supplies the worker script:

```js
import { buildMeshAsync } from "trimesh-build-js";

// browser
var result = await buildMeshAsync(cols, {
	thin: 0.05,
	workers: navigator.hardwareConcurrency - 1,
	createWorker: function () {
		return new Worker(new URL("trimesh-build-js/worker/browser", import.meta.url), { type: "module" });
	},
	onProgress: function (stage, fraction) { /* thin, denoise, prepare, reconstruct, weld, orient, done */ }
});

// Node
import { Worker } from "node:worker_threads";
var workerUrl = new URL(import.meta.resolve("trimesh-build-js/worker/node"));
var result = await buildMeshAsync(cols, { workers: 8, createWorker: function () { return new Worker(workerUrl); } });
```

At 1M points on a 24-core machine the whole build takes about 14.5 s (triangulation 3.4 s), down from 55 s in 0.2.0, and peaks at about 1.1 GB. For a browser tab, set `maxPoints`: the build then stops with `TOO_MANY_POINTS` and a suggested thin value instead of running out of memory.

### Patching loops

`patchLoop` fills one open loop you choose. It works like **Fill** in Kirra's Mesh Edit, and is ported from `LocalVoidFill.fillLoopWithTriangles`. It uses trimesh-boolean's `triangulateLoop` on the loop's own vertices and turns each new triangle to agree with its neighbour. The result is then re-oriented and re-validated, so `result.mesh` stays current.

```js
import { patchLoop, patchLoops } from "trimesh-build-js";

patchLoop(result, 0);                                  // loop index in result.mesh.boundaryLoops
patchLoop(result, pickedPoints);                        // or world [x, y, z] points, e.g. picked in Kirra
patchLoop(result, 2, { method: "centroid" });           // force one method
patchLoops(result, { maxEdges: 50 });                   // every loop up to 50 edges
// patchLoop  -> { added, method, refused: [{ loop, reason }] }
// patchLoops -> { added, patched, methods: { fan, centroid, vertexFan }, refused }
```

| `method` | What it does |
|---|---|
| `"auto"` (default) | Tries `fan`, then `centroid`, then `vertexFan`, and uses the first that is valid. |
| `"fan"` | Kirra's Fill: `triangulateLoop` on the loop's own vertices. No new points. |
| `"centroid"` | One new point at the loop centre, fanned to every loop edge. |
| `"vertexFan"` | A fan from one loop vertex to all the others, trying each vertex in turn. |

**Figure-8 loops.** A loop that passes through one vertex twice, where two holes touch at a pinch point, is split there into simple loops (ported from trimesh-boolean's `_splitSelfTouching`). Each lobe is then patched on its own.

**What works on real data.** Cave loops are rarely flat, so the fan alone refuses most of them: its diagonals already exist in the mesh, or the loop can't be triangulated in projection. On the Wookey Hole sample at 5 cm thinning, `auto` closes 470 of 472 loops (49 by fan, 413 by centroid, 8 by vertex fan) with no non-manifold edges.

A loop is refused, never thrown on, when it runs along a break line, isn't simple, or when every method would give an edge a third triangle. `fillGaps` (automatic, loops of 6 edges or fewer, `auto`) and `closeHoles` (opt-in, centroid) use the same per-loop code. In the demo, tick **patch loops** and click near a red loop, then press **Patch selected** or Enter, or use **Patch all**.

### Raw scans need thinning and denoising

Scanners sample densely along scan lines, often about 1 mm apart, and LAS files round coordinates (often to 1 mm). A point's nearest neighbours then lie on one line, and no plane fits them. Use `thin` to even out the spacing (it calls las-laz-js `dedupe`). Then use `denoise` to bring the noise well below the spacing (it calls las-laz-js `denoisePoints`).

Two blast-hole scans of about 1 million points each, thinned to 5 cm (about 16,000 points), went from 511 and 477 open loops without denoising to 87 and 65 with three denoise passes. Both had no non-manifold edges and took under 3 s. Keep the thinning spacing well above the scan noise: at 3 cm, on the same scans with 1.3 cm of noise, patches disagree and the mesh folds.

## Options

| Option | Default | Meaning |
|---|---|---|
| `origin` | cloud centroid | Shift applied before any work. Required for a Float32 cloud, whose values must already be world − origin. |
| `normals` | computed | Per-point normals (3 per point). The sign is ignored. |
| `thin` | off | Minimum 3D point spacing, via las-laz-js `dedupe`. |
| `denoise` | off | `true` or `{ method, iterations, k, maxDistance }` for las-laz-js `denoisePoints`. |
| `breaklines` | none | `[{ vertices: [[x,y,z], ...], closedLoop }]`, world coordinates. |
| `viewpoints` | none | Scanner positions; normals face the nearest one. |
| `k` | 20 | Neighbours per patch. |
| `maxRadiusMultiplier` | 3 | Neighbour cull distance, × the median neighbour distance. |
| `minNeighbours` | 6 | A point with fewer neighbours is skipped (boundary or outlier). |
| `normalAgreement` | 0.5 | Bridging guard: drop neighbours with \|n·n\| below this. |
| `maxPlaneOffset` | 0.5 | Bridging guard: drop neighbours further than this × scale off the plane. |
| `minVotes` | 2 | Patches that must agree on a triangle. |
| `tolerance` | max(1 mm, 0.25 × spacing) | Weld distance. Input points closer than this are merged before meshing, and so are break line vertices. |
| `breaklineSnap` | 0.001 | Cloud points this close to a break line are dropped (world units). |
| `maxGapEdges` | 6 | Voting gaps up to this many edges are filled. 0 turns it off. |
| `closeHoles` | `false` | `{ maxLoopEdges }`: fill real holes with a centroid fan. |

Only bad input throws (`TrimeshBuildError` with a `code`): wrong column lengths, a Float32 cloud with no origin, non-finite coordinates, crossing break lines, or fewer than 3 points. Problems with the result are reported, never thrown.

## Orientation

Normals are flipped for each connected component:

- with `viewpoints`, normals face the nearest scanner position;
- otherwise, a closed mesh has its void inside, so normals point inward (negative signed volume);
- otherwise the component is left `"unresolved"`. Its winding is still consistent; only its overall direction is unknown.

## Known limits

- **Close walls.** Two walls closer than about the point spacing can't be told apart locally. At the free edges of two close parallel sheets, the patch sees both edge rows as one strip, so bridging can happen there, even at 2 × spacing.
- **Break line junctions.** Break lines may meet at a shared vertex (vertices closer than the weld tolerance are merged). A break line ending on another line's interior (a T-junction) is rejected like a crossing; add a vertex to the other line at that point.
- **Deferred:** ball pivoting and screened Poisson (as extra algorithms), decimation, smoothing, tiling of very large clouds, adaptive k.

## Sample data

`examples/public/samples/wookey-hole.laz` is a 381,870-point survey of Wookey Hole cave, made with an iPhone 13 Pro photogrammetry workflow. It comes from [CaveSurveys, github.com/CaveSurveys/Wookey-Hole](https://github.com/CaveSurveys/Wookey-Hole), shared with "Feel free to distribute and use!". It drives a cave test and the demo's **Wookey Hole cave** source.

At `thin: 0.05` it meshes in about 9 s to about 258,000 triangles. 98% of them are in one surface, with no non-manifold edges. It has no viewpoints, so orientation is per component and can be patchy where the surface folds. The file is not part of the npm package.

## Tests

```sh
npm test
```

The real-scan tests run only when the BHP scan files are on the machine; otherwise they are skipped.

## Licence

MIT. Brent Buffham, [kirra-design.com](https://kirra-design.com).
