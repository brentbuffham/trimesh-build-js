// src/version.js
//=============================================================
// Version stamps
//=============================================================
// VERSION is the package release (a test keeps it equal to package.json).
//
// GENERATOR_VERSION is the one to store beside a mesh you keep. Bump it
// whenever a fix changes the mesh for the same input and options, and only
// then: a release that leaves the mesh alone (a dependency bump, a doc fix)
// keeps it. A caller rebuilds any stored mesh whose generatorVersion is below
// the current one; a mesh stored before this stamp existed has none.
//=============================================================

export var VERSION = "0.6.7";
export var GENERATOR_VERSION = 1;
