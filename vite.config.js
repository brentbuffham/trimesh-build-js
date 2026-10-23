import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

var __dirname = dirname(fileURLToPath(import.meta.url));

// GitHub Pages project site: https://<user>.github.io/<repo>/
var GH_PAGES_BASE = "/trimesh-build-js/";

export default defineConfig(function (ctx) {
	var isBuild = ctx.command === "build";
	return {
		root: resolve(__dirname, "examples"),
		base: isBuild ? GH_PAGES_BASE : "/",
		server: { fs: { allow: [__dirname] } },
		// las-laz-js's worker pool uses top-level await
		worker: { format: "es" },
		optimizeDeps: { esbuildOptions: { target: "esnext" } },
		build: {
			target: "esnext",
			outDir: resolve(__dirname, "docs/demo"),
			emptyOutDir: true
		}
	};
});
