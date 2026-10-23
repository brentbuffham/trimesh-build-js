// src/workers/proposeWorker.node.js
//=============================================================
// Node (worker_threads) entry for buildMeshAsync.
//   new Worker(new URL("./node_modules/trimesh-build-js/src/workers/proposeWorker.node.js", import.meta.url))
//=============================================================

import { parentPort } from "node:worker_threads";
import { createProposeHandler } from "./proposeHandler.js";

var handler = createProposeHandler();
parentPort.on("message", function (m) {
	var reply = handler.handle(m);
	if (reply) parentPort.postMessage(reply, [(reply.proposals || reply.normal).buffer]);
});
