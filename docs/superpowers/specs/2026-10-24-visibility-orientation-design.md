# Visibility orientation: the void side without scanner positions

Roadmap v0.4 item 2. Status: approved design, 2026-10-24.

## Goal

A cave, drive or blast-hole scan with no scanner positions should orient with normals out of the rock into the void, rather than ending up `"unresolved"`. Kirra needs that sign to give a closed cave's volume the right sign, and to shade and offset open surfaces the right way round.

## Decisions

- **Method:** a ray visibility vote, adapted from Takayama, Jacobson & Sorkine 2014, "A simple method for correcting facet orientations in polygon meshes based on ray casting". The two rejected alternatives were a centre line from skeletonisation (more code, and fragile on scans with holes) and the sign of total mean curvature (it measures local shape, so alcoves and breakdown can out-vote the passage).
- **On by default** for every open component that has no viewpoints. Components whose vote is weak stay `"unresolved"`.
- **Existing results don't change:** the sign rules run in the order viewpoints, then closed (signed volume), then visibility, then unresolved.

## Algorithm

`src/bms/visibility.js` holds the grid and the vote.

1. **Grid.** A uniform grid over the bounding boxes of the triangles, using every triangle in the soup with no regard to component. The cell size is 2 × the mean edge length, and the cell count is capped at about 2²¹ by growing the cells. Cells are stored in typed arrays (CSR: cell start offsets and triangle indices). It is built once per vote.
2. **Rays.** Each ray walks the grid by 3D DDA (Amanatides & Woo 1987) and tests triangles by Möller–Trumbore. Each ray stops at its first hit or when it leaves the grid. The following hits are ignored:
   - the sample triangle itself;
   - any hit with `t < tMin = mean edge length`, so wall roughness doesn't count as the opposite wall.
3. **Samples.** The vote runs on each component that is still `"unresolved"` after `orientMesh`:
   - **Triangles:** `samples` of them (default 1000, or every triangle in a smaller component), drawn area-weighted from a fixed seed (mulberry32), so the same mesh always gets the same answer.
   - **Rays:** from each sample's centroid, `rays` (default 8) cosine-weighted directions into each hemisphere, the +n one and the −n one, where n is the current face normal.
4. **Vote.** For each side, `H± = Σ area × (hits on that side) / rays`, normalised by the total area of the samples.
   - The void is the side with more hits, so normals point toward it: if `H− > H+`, flip the component.
   - `margin = |H+ − H−| / (H+ + H−)`.
   - The component stays `"unresolved"` if `margin < minMargin` (default 0.2) or if `max(H+, H−) < 0.1`, for example flat terrain or an outcrop where both sides escape.
   - Otherwise it gets `method: "visibility"` and `margin` on its `perComponent` entry.

## API

- `orientByVisibility(bms, orientation, options)` is exported. It takes the result of `orientMesh`, changes the soup's winding in place, and returns the updated orientation object: `perComponent[i].method` and `.margin`, and the summary `orientation`, which may now be `"visibility"` or `"mixed"`.
  - **Options:** `{ samples = 1000, rays = 8, minMargin = 0.2 }`.
  - **Components:** `orientMesh` also returns `componentOf`, an `Int32Array` that maps each triangle to its index in `perComponent`, so the vote can find each component's triangles. `componentOf` is not copied into the report.
- **`buildMesh` option `visibility`:** `true` by default, `false` turns it off, or pass an options object. It is skipped when `viewpoints` are given and every component got a sign from them.
- **`report.visibilityMs`** records the vote's time; the report has no other timing fields.
- **`orientation` values:** `validateMesh` and the docs accept `"visibility"`.

## Where it runs

- **`buildMesh`:** once, after its last `orientMesh` call (after repairFolds, fillGaps and closeHoles). The earlier calls only need consistent winding.
- **`patchLoop` / `patchLoops` (`refresh`):** once per call, after `orientMesh`, using the options stored on the result (`result.visibility`).
- **`repairFolds`:** never; it doesn't need the sign.

## Tests (`test/visibility.test.js`, `test/wookeyHole.test.js`)

- **Open rough tube** (`cylinderTunnel`): `orientation === "visibility"`, and more than 95% of the area has `n · (axis point − centroid) > 0`.
- **Open half-pipe or bowl** (`halfPipe`): normals face the concave side.
- **Flat grid** (`planarGrid`): stays `"unresolved"`.
- **`visibility: false`:** gives the same soup winding and orientation as before this change.
- **Determinism:** two runs give the same signs and margins.
- **Viewpoints and closed meshes:** a viewpoint result and a closed sphere's `"closed"` result are unchanged.
- **Wookey Hole parts 1 to 3:**
  - the largest component is `"visibility"`;
  - on part 3, the winding before patching agrees with the winding after `patchLoops` closes it (`"closed"`, signed volume) on more than 99% of the original triangles.
- **Speed:** the vote on Wookey part 1 takes under 0.5 s; this is logged, not asserted.

## Docs

The README's orientation section and option table, the CHANGELOG, and the ROADMAP (item 2 done). The demo shows the orientation method, and the margin when there is one.
