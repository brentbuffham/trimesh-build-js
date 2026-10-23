// examples/clouds.js
//=============================================================
// Demo sources: the test fixtures, with their break lines and
// scanner viewpoints, and LAS/LAZ files via las-laz-js.
//=============================================================

import { openLas } from "las-laz-js";
import { fibonacciSphere, sphereWithCap, cylinderTunnel, halfPipe, parallelWalls, mulberry32 } from "../test/fixtures/synthetic.js";

/**
 * @param {string} name
 * @returns {{cols: Object, breaklines: Array, viewpoints: Array<number[]>}}
 */
export function syntheticSource(name) {
	switch (name) {
		case "sphere":
			return { cols: fibonacciSphere(3000, 5), breaklines: [], viewpoints: [[0, 0, 0]] };
		case "noisySphere": {
			var s = fibonacciSphere(3000, 5), rnd = mulberry32(5), p = s.positions;
			for (var i = 0; i < s.count; i++) {
				var f = 1 + (rnd() - 0.5) * 0.06;
				p[3 * i] *= f; p[3 * i + 1] *= f; p[3 * i + 2] *= f;
			}
			return { cols: s, breaklines: [], viewpoints: [[0, 0, 0]] };
		}
		case "capped":
			return { cols: sphereWithCap(3000, 5, 0.4), breaklines: [], viewpoints: [[0, 0, 0]] };
		case "tunnel": {
			var vps = [];
			for (var x = 0; x <= 20; x += 2) vps.push([x, 0, 0]);
			return { cols: cylinderTunnel(2.5, 20, 0.25, 1), breaklines: [], viewpoints: vps };
		}
		case "halfpipe": {
			var hv = [];
			for (var hx = 0; hx <= 10; hx += 2) hv.push([hx, 0, 1]);
			return {
				cols: halfPipe(2.5, 10, 0.25, 2),
				breaklines: [{ vertices: [[0, 0, 2.5], [10, 0, 2.5]], closedLoop: false }],
				viewpoints: hv
			};
		}
		case "walls":
			return { cols: parallelWalls(0.5, 10, 0.25, 1), breaklines: [], viewpoints: [[5, 5, 0.25]] };
	}
	throw new Error("unknown source " + name);
}

/**
 * Read a LAS/LAZ File. Viewpoint: the cloud centroid (inside a hole or drive scan).
 * @param {File} file
 * @returns {Promise<{cols: Object, breaklines: Array, viewpoints: Array<number[]>}>}
 */
export async function fileSource(file) {
	var las = await openLas(file);
	var pts = await las.readPoints({ fields: ["x", "y", "z"] });
	var n = pts.count, cx = 0, cy = 0, cz = 0;
	var x0 = pts.x[0], y0 = pts.y[0], z0 = pts.z[0];
	for (var i = 0; i < n; i++) { cx += pts.x[i] - x0; cy += pts.y[i] - y0; cz += pts.z[i] - z0; }
	return {
		cols: { count: n, x: pts.x, y: pts.y, z: pts.z },
		breaklines: [],
		viewpoints: [[x0 + cx / n, y0 + cy / n, z0 + cz / n]]
	};
}
