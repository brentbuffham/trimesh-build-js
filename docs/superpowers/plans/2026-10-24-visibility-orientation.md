# Visibility Orientation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give open components without viewpoints a sign (normals out of the rock into the void) by a ray visibility vote, so that a cave orients as `"visibility"` instead of `"unresolved"`.

**Architecture:**
- A new module, `src/bms/visibility.js`, holds three things:
  - a uniform triangle grid on typed arrays;
  - a boolean ray test (3D DDA plus Möller–Trumbore);
  - `orientByVisibility`, which flips any `"unresolved"` component whose rays come back more often on its −n side.
- `orientMesh` also returns `componentOf`, so that the vote can find each component's triangles.
- `buildMesh` runs the vote once, after its last `orientMesh` call. `patchLoop` and `patchLoops` run it once each, in `refresh`.

**Tech Stack:** JavaScript ES modules (var/function style), Vitest, Node 24, trimesh-boolean.

**Spec:** `docs/superpowers/specs/2026-10-24-visibility-orientation-design.md`

## Global Constraints

- **Sign rule order:** viewpoints, then closed (signed volume), then visibility, then unresolved. Results that viewpoints or the closed rule already decide must not change.
- **Defaults:** `samples = 1000`, `rays = 8` per hemisphere, `minMargin = 0.2`. A component also stays unresolved if `max(H+, H−) < 0.1`.
- **`tMin`** = the mean edge length.
- **Grid:** the cell size is 2 × the mean edge length, and the cell count is capped at about 2²¹ by growing the cells.
- **Determinism:** the random source is seeded (mulberry32 copied into src), so the same mesh always gives the same signs and margins.
- **Rays** test every triangle in the soup, not just their own component's.
- **`buildMesh` option `visibility`:** default `true`; `false` gives today's behaviour; an object `{ samples, rays, minMargin }` sets the vote's options.
- **Report:** `report.visibilityMs`, and `perComponent[i].margin` on components the vote decides.
- **Code style:** var/function, with section-banner comments matching `src/bms/orientMesh.js`.

## Review Focus

1. **A component that is a single wall piece**, because a hole splits the cave. Rays must still find the opposite wall, which belongs to another component. Covered by the Task 3 "two halves of a tube" test.
2. **A ray starting exactly on a shared edge or vertex** must not count its neighbours as a hit (`tMin`). Covered by the Task 2 `tMin` test and the flat grid staying unresolved (Task 3).
3. **A mesh where `viewpoints` cover only some components.** Components already decided by viewpoints are untouched, and the vote's skip condition must not drop the others. Covered by the Task 4 test.
4. **`patchLoop` on a result built with `visibility: false`** must not start voting. Covered by the Task 4 test.
5. **Degenerate (zero-area) triangles** in a component must not produce NaN directions or margins. Covered by the Task 3 test.

---

### Task 1: orientMesh returns componentOf

**Files:**
- Modify: `src/bms/orientMesh.js` (return value, JSDoc)
- Test: `test/orientMesh.test.js`

**Interfaces:**
- Produces: `orientMesh(bms, viewpoints)` returns `{ perComponent, orientation, componentOf: Int32Array }`, where `componentOf[ti]` is the index into `perComponent` for soup triangle `ti`. This is the existing `comp` array. It is not copied into any report.

- [ ] **Step 1: Write the failing test** `"maps every triangle to its component"` in `test/orientMesh.test.js`. Use the two-sphere setup from the existing "two components" test, and assert:

```js
expect(r.componentOf).toBeInstanceOf(Int32Array);
expect(r.componentOf.length).toBe(m.bms.soup.length);
var counts = [0, 0];
r.componentOf.forEach(function (c) { counts[c]++; });
expect(counts).toEqual([r.perComponent[0].triangles, r.perComponent[1].triangles]);
```

- [ ] **Step 2: Run it.** `npx vitest run test/orientMesh.test.js`. Expected: FAIL, because `componentOf` is undefined.
- [ ] **Step 3: Implement.** Return `componentOf: comp`, and update the `@returns` JSDoc.
- [ ] **Step 4: Run it.** `npx vitest run test/orientMesh.test.js`. Expected: PASS.
- [ ] **Step 5: Commit.** Message: `orientMesh returns componentOf`.

### Task 2: Triangle grid and ray test

**Files:**
- Create: `src/bms/visibility.js`
- Test: `test/visibility.test.js`

**Interfaces:**
- Produces, all exported from `src/bms/visibility.js` (only `orientByVisibility` goes into `src/index.js`, in Task 4):
  - `meanEdgeLength(soup) -> number`: the mean length over each triangle's 3 edges.
  - `buildTriangleGrid(soup, cellSize) -> grid`. The grid is `{ min: [x, y, z], cell: number, n: [nx, ny, nz], start: Int32Array(nx·ny·nz + 1), tris: Int32Array, stamp: Int32Array(soup.length), ray: number }`, in CSR form: the triangles of cell c are `tris[start[c] .. start[c+1])`. Each triangle goes in every cell its bounding box overlaps. If `nx·ny·nz > 2^21`, grow `cell` by the cube root of the excess. The bounding box is padded by `1e-9 × diagonal` so that points on the boundary are inside.
  - `rayHits(grid, soup, ox, oy, oz, dx, dy, dz, tMin, skip) -> boolean`. It is true if any triangle other than `skip` is hit at `t > tMin` (Möller–Trumbore, ray direction not necessarily unit; `t` is in units of the direction's length, so callers pass unit directions). It walks cells by Amanatides–Woo DDA from the origin's cell until the ray leaves the grid. `stamp` and `ray` stop a triangle from being tested twice for one ray. A ray whose origin is outside the grid returns false.

- [ ] **Step 1: Write the failing tests** in a `describe("triangle grid and rays")` block:
  - `"a ray hits a triangle in front of it and misses one behind"`. Use a soup of two unit triangles: one in the plane z = 5, spanning (−1..1), and one in z = −5. Pool-free objects `{v0: {x, y, z}, ...}` will do. Then `rayHits(g, soup, 0.1, 0.1, 0, 0, 0, 1, 0, -1) === true`, and with direction `(1, 0, 0)` the result is false.
  - `"ignores hits closer than tMin and the skip triangle"`. Use the same soup with origin (0.1, 0.1, 4.9) and direction +z. With `tMin = 0.5`, the result is false: the z = 5 hit is at t = 0.1. With `tMin = 0` and `skip = 0` (the index of the z = 5 triangle), it is also false. With `tMin = 0` and `skip = -1`, it is true.
  - `"walks many cells"`. Build `buildTriangleGrid` with `cellSize = 0.1` on the two-triangle soup. A ray from (0.1, 0.1, −4.95) along +z with `tMin = 0.5` returns true, because it crosses about 100 cells to reach z = 5.
  - `"caps the cell count"`. With a soup spanning 1000 units and `cellSize = 0.01`, the result has `n[0] * n[1] * n[2] <= 2 ** 21 * 1.01`.
- [ ] **Step 2: Run them.** `npx vitest run test/visibility.test.js`. Expected: FAIL, because the module is not found.
- [ ] **Step 3: Implement** `meanEdgeLength`, `buildTriangleGrid` and `rayHits` as specified above. Möller–Trumbore uses parallel-ray epsilon `1e-12 × |e1|·|e2|`.
- [ ] **Step 4: Run them.** `npx vitest run test/visibility.test.js`. Expected: PASS.
- [ ] **Step 5: Commit.** Message: `visibility: triangle grid and ray test`.

### Task 3: orientByVisibility

**Files:**
- Modify: `src/bms/visibility.js`
- Test: `test/visibility.test.js`

**Interfaces:**
- Consumes: `orientMesh(...).componentOf` (Task 1), and `buildTriangleGrid`, `rayHits` and `meanEdgeLength` (Task 2).
- Produces: `orientByVisibility(bms, orientation, options) -> orientation`.
  - It changes the winding in place and updates `orientation.perComponent[i].method` to `"visibility"` and sets `.margin` (a number, rounded to 3 decimals) for each component it decides.
  - It recomputes `orientation.orientation` with the same rule as `orientMesh`: one method gives that method, several give `"mixed"`.
  - It returns the same object.
  - Only components with `method === "unresolved"` are touched.
  - With no unresolved components, it returns at once without building the grid.

The vote, which the signature doesn't fix:

```
mean = meanEdgeLength(soup); grid = buildTriangleGrid(soup, 2 * mean); rnd = mulberry32(12345)
for each unresolved component c (in index order):
  members = triangles with componentOf === c; area-weight cumulative array (skip area 0)
  if total area is 0: leave unresolved
  m = min(samples, members.length); draw m triangles by area (binary search on rnd() * total)
  Hp = Hm = 0
  for each sample t: n = unit face normal, centroid o, frame (e1, e2, n)
    for side s in (+1, -1): for r in 0..rays-1:
      u1 = rnd(), u2 = rnd(); rr = sqrt(u1); phi = 2 pi u2
      d = rr cos(phi) e1 + rr sin(phi) e2 + s sqrt(1 - u1) n
      if rayHits(grid, soup, o, d, mean, t): (s > 0 ? Hp : Hm) += 1 / rays
  Hp /= m; Hm /= m   (each sample is drawn by area, so plain means are area-weighted)
  margin = (Hp + Hm) > 0 ? |Hp - Hm| / (Hp + Hm) : 0
  if max(Hp, Hm) < 0.1 or margin < minMargin: stay unresolved (still set .margin)
  else: if Hm > Hp flip every member; method = "visibility"
```

The void is the side whose rays come back. The normal points toward that side, which matches the viewpoint convention, where `n · (viewpoint − centroid) > 0`.

- [ ] **Step 1: Write the failing tests.** Setup for each: `meshToClean(...)`, `scramble`, `orientMesh(m.bms)`, then `orientByVisibility(m.bms, r, {})`. The helper `facingAxis(soup, origin)` returns the area fraction with `n · (0, −cy, −cz) > 0`, using world centroid y and z as in the existing viewpoint test.
  - `"open tube: normals face the axis"`. Use `cylinderTunnel(2.5, 20, 0.25, 1)`. Expect `r.orientation === "visibility"`, `r.perComponent[0].margin > 0.5` and `facingAxis > 0.95`.
  - `"half-pipe: normals face the concave side"`. Use `halfPipe(2.5, 20, 0.25, 2)`, with the same assertions as the tube.
  - `"flat grid stays unresolved"`. Use `planarGrid(40, 40, 0.25)`. Expect `r.orientation === "unresolved"`.
  - `"two halves of a tube vote across the gap"`. Take `cylinderTunnel(2.5, 20, 0.25, 1)`, remove the points with `|z| < 0.3` (world coordinates) so the tube becomes two separate wall pieces, and check that `r.perComponent.length >= 2`. Every component with more than 100 triangles should be `"visibility"`, and `facingAxis > 0.95` over the whole soup.
  - `"same mesh, same answer"`. Run the tube setup twice and compare `perComponent.map(c => c.margin)` and the soup's vertex id order of the first 50 triangles.
  - `"closed and viewpoint components are untouched"`. On a closed `fibonacciSphere(3000, 5)`, `orientByVisibility` returns `"closed"`, `computeSignedVolume` is unchanged, and the winding of the first 50 triangles is unchanged.
  - `"zero-area triangles do not give NaN"`. Append to a tube soup a degenerate triangle whose 3 vertices are the same pool vertex as an existing one, as its own component. Every `margin` must be finite or undefined, and the tube must still be `"visibility"`.
- [ ] **Step 2: Run them.** `npx vitest run test/visibility.test.js`. Expected: FAIL, because `orientByVisibility` is not exported.
- [ ] **Step 3: Implement** `orientByVisibility` with the vote above. Copy `mulberry32` from `test/fixtures/synthetic.js` into `src/bms/visibility.js` as a local function. The face normal uses the same cross product as `orientMesh`'s `crossOf`; import it or copy it, matching the file's existing helpers. Also update `orientMesh.js`'s header comment, which lists the sign rules, to add the visibility rule.
- [ ] **Step 4: Run them.** `npx vitest run test/visibility.test.js test/orientMesh.test.js`. Expected: PASS.
- [ ] **Step 5: Commit.** Message: `orientByVisibility: ray vote for the void side (Takayama et al. 2014)`.

### Task 4: buildMesh and patchLoop integration

**Files:**
- Modify: `src/buildMesh.js`:
  - `DEFAULT_OPTIONS` gains `visibility: true`;
  - in `finishStages`, after the closeHoles block, add the vote, the report field and `result.visibility`.
- Modify: `src/post/patchLoop.js`: `refresh`.
- Modify: `src/index.js`: export `orientByVisibility`.
- Test: `test/buildMesh.test.js`, `test/patchLoop.test.js`

**Interfaces:**
- Consumes: `orientByVisibility(bms, orientation, options)` (Task 3).
- Produces:
  - `result.visibility`: the normalised option, either `false` or an options object (`true` becomes `{}`).
  - `report.visibilityMs`: a number, or 0 when the vote is off.
  - `refresh(result, bms)` calls `orientByVisibility(bms, orient, result.visibility)` whenever `result.visibility` is truthy.

- [ ] **Step 1: Write the failing tests.**
  - In `buildMesh.test.js`:
    - `"an open tunnel without viewpoints orients by visibility"`. `buildMesh(cylinderTunnel(2.5, 20, 0.25, 1))` gives `r.mesh.orientation === "visibility"`, `r.report.visibilityMs >= 0` and `r.report.orientation.perComponent[0].margin > 0.5`.
    - `"visibility: false keeps today's result"`. `buildMesh(cylinderTunnel(2.5, 20, 0.25, 1), { visibility: false })` gives `r.mesh.orientation === "unresolved"` and `r.report.visibilityMs === 0`.
    - `"viewpoints on some components leave the rest to the vote"`. Use the tube from the "two halves" test in Task 3 with one viewpoint, on the axis at x = 10 and in world coordinates. The method set across `perComponent` must be a subset of `{"viewpoint", "visibility", "unresolved"}`, every component must be decided by one of the first two, and none of the components the viewpoint already decided may change. Pin this down by first running with `visibility: false` and comparing the viewpoint components' first triangles.
  - In `patchLoop.test.js`:
    - `"patching keeps the visibility sign"`. Build the tube, record the winding of 50 triangles, run `patchLoops(r)`, then check that those 50 have the same winding and that `r.mesh.orientation` is `"visibility"` or `"closed"`.
    - `"patching a visibility: false result does not vote"`. Build with `{ visibility: false }`, run `patchLoop(r, 0)`, and check that `r.mesh.orientation` is not `"visibility"`.
- [ ] **Step 2: Run them.** `npx vitest run test/buildMesh.test.js test/patchLoop.test.js`. Expected: the new tests FAIL; the existing ones pass.
- [ ] **Step 3: Implement.**
  - **In `finishStages`:** normalise the option: `true` or `undefined` becomes `{}`, `false` becomes `false`, and an object passes through. A value of any other type throws `TrimeshBuildError(ERROR_CODES.INVALID_INPUT, "visibility must be true, false or an options object")`.
  - **The vote:** when the option is on, time `orientByVisibility(bms, orient, vis)` with `performance.now()` (rounded to 0.1 ms), then `mesh = validateMesh(bms, orient.orientation)`.
  - **`onProgress`:** add a stage name, `"visibility"`, to the stage list comment and call `report("visibility", 0)`.
  - **Result:** store `visibility: vis` on the result, next to `viewpoints`.
  - **`refresh` in patchLoop:** after `orientMesh`, if `result.visibility` is truthy, call `orientByVisibility`.
- [ ] **Step 4: Run them.** `npx vitest run`. Expected: all pass. The existing `orientMesh` "unresolved" test calls `orientMesh` directly, so it's unaffected. If an existing `buildMesh` or `patchLoop` test pinned `"unresolved"`, it gets a ruling: either pass `visibility: false` in that test or update the expectation.
- [ ] **Step 5: Commit.** Message: `buildMesh option visibility (on by default); patchLoop keeps the sign`.

### Task 5: Wookey Hole checks

**Files:**
- Test: `test/wookeyHole.test.js`

**Interfaces:**
- Consumes: `buildMesh`, `patchLoops`, and `r.report.visibilityMs` (Task 4).

- [ ] **Step 1: Add the assertions.** Because these check real data, they may pass on the first run; that run is the verification.
  - **Part 1 test:** the largest component's method is `"visibility"`, and `console.log("visibility ms", r.report.visibilityMs)` logs the time.
  - **Parts 2 and 3:** the largest component is `"visibility"`.
  - **New test, `"part 3: the vote's sign agrees with the closed mesh's"`:**
    1. Build part 3 and record, for each original triangle (index below `r.soup.length` before patching), its vertex-id triple in winding order, as a key in the canonical rotation (smallest id first).
    2. Run `patchLoops(r)` and expect `r.mesh.closed === true`.
    3. Rebuild the same keys for the soup and count how many original triangles appear with the same rotation, as opposed to reversed. Expect a match fraction above 0.99. If part 3 is not fully closed after `patchLoops`, use its largest component's method `"closed"` instead, and compare only that component's triangles.
- [ ] **Step 2: Run it.** `npx vitest run test/wookeyHole.test.js`. Expected: PASS. If the part 3 agreement is below 0.99, stop and debug (superpowers:systematic-debugging): it means the vote picked the wrong side on real data. Do not loosen the threshold.
- [ ] **Step 3: Check the speed.** Read the logged `visibility ms` for part 1. Expected: under 500 ms. If it's over, ledger the number. Fix it only if it's over 2 s (sample fewer triangles in large components, or adjust the cell size).
- [ ] **Step 4: Commit.** Message: `Wookey Hole: orientation by visibility, checked against the closed part 3`.

### Task 6: Docs and demo

**Files:**
- Modify:
  - `README.md`: the orientation section (around line 150) and the option table (around line 131); the Wookey paragraph (line 166) currently says "unresolved".
  - `CHANGELOG.md`: a new `## Unreleased` entry.
  - `ROADMAP.md`: item 2 moves to Done (Unreleased).
  - `examples/main.js`: the stats line (line 177) shows the largest component's margin when its method is `"visibility"`.
  - `examples/index.html` and `examples/buildWorker.js`: a **visibility** checkbox (checked) passed as `options.visibility`.

- [ ] **Step 1: Write the docs.**
  - **README:** add a sign rule bullet: "with no viewpoints and an open component, rays cast from both sides vote: the side whose rays come back off the opposite wall is the void". Add the option row `visibility | true | Ray vote for the void side on open components without viewpoints; false or { samples, rays, minMargin }.`, and give the Wookey numbers from Task 5.
  - **CHANGELOG and ROADMAP:** write them to match.
- [ ] **Step 2: Wire the demo:** the checkbox and the margin display.
- [ ] **Step 3: Verify.** Run `npx vitest run`: everything passes. Run `npm run build:demo`: it succeeds.
- [ ] **Step 4: Commit.** Message: `docs and demo: visibility orientation`.
