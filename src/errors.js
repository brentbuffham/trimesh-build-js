// src/errors.js
//=============================================================
// TrimeshBuildError — thrown only for bad input
//=============================================================
// Problems with the RESULT (open edges, unfilled holes, unresolved
// orientation) are reported, never thrown. This error is for input
// the pipeline cannot start from.
//=============================================================

/** @type {Readonly<{INVALID_INPUT: string, NEEDS_ORIGIN: string, TOO_FEW_POINTS: string, TOO_MANY_POINTS: string, CROSSING_BREAKLINES: string}>} */
export var ERROR_CODES = Object.freeze({
	INVALID_INPUT: "INVALID_INPUT",
	NEEDS_ORIGIN: "NEEDS_ORIGIN",
	TOO_FEW_POINTS: "TOO_FEW_POINTS",
	TOO_MANY_POINTS: "TOO_MANY_POINTS",
	CROSSING_BREAKLINES: "CROSSING_BREAKLINES"
});

export class TrimeshBuildError extends Error {
	/**
	 * @param {string} code - one of ERROR_CODES
	 * @param {string} message
	 */
	constructor(code, message) {
		super(message);
		this.name = "TrimeshBuildError";
		this.code = code;
	}
}
