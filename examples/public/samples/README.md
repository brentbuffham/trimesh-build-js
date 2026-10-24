# Sample clouds

## wookey-hole.laz

A point cloud survey of part of Wookey Hole cave (Somerset, UK), made at Wessex Weekend with an iPhone 13 Pro (PIX4Dcatch, Agisoft, CloudCompare, MeshLab).

- **Source:** [github.com/CaveSurveys/Wookey-Hole](https://github.com/CaveSurveys/Wookey-Hole), which says "Feel free to distribute and use!"
- **Credit:** CaveSurveys, Wookey Hole.
- **Contents:** 381,870 points with XYZ only, in local metres. The extent is about 40 × 26 × 10 m.
- **Conversion:** converted losslessly from the original LAS to LAZ with las-laz-js. The scale is unchanged (1 mm).

This file is used by the tests and the demo. It is not part of the npm package.

## wookey-hole-2.laz and wookey-hole-3.laz

Two more parts of the same survey, in the same coordinate frame as `wookey-hole.laz`; the three parts overlap a little where they join.

- **Source:** the vertices of `mesh1.obj` (part 2) and `mesh2.obj` (part 3) in "Wookey Hole - 3 Parts Pointcloud Data.zip" from [github.com/CaveSurveys/Wookey-Hole](https://github.com/CaveSurveys/Wookey-Hole) ("Feel free to distribute and use!"). `wookey-hole.laz` is the third part, `mesh3.obj`.
- **Credit:** CaveSurveys, Wookey Hole.
- **Contents:** part 2 has 638,466 points (about 30 × 17 × 14 m); part 3 has 194,016 points (about 15 × 24 × 11 m). XYZ only, local metres.
- **Conversion:** OBJ vertices written as LAZ (LAS 1.2, point format 0) with las-laz-js, at a 1 mm scale, so each point is within 0.5 mm of the OBJ. The triangles are not used.

These files are used by the tests and the demo. They are not part of the npm package.
