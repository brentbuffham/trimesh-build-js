// src/workers/proposeWorker.browser.js
//=============================================================
// Browser (Web Worker, type "module") entry for buildMeshAsync.
//   new Worker(new URL("trimesh-build-js/worker/browser", import.meta.url), { type: "module" })
//=============================================================

import { createProposeHandler } from "./proposeHandler.js";

var handler = createProposeHandler();
self.onmessage = function (e) {
	var reply = handler.handle(e.data);
	if (reply) self.postMessage(reply, [(reply.proposals || reply.normal).buffer]);
};
