"use strict";
exports.__esModule = true;
exports.Diagnostics = void 0;
var Scene = require('Scene');
var Patches = require('Patches');
exports.Diagnostics = require('Diagnostics');
var AloneTogetherScene_1 = require("./AloneTogetherScene");
exports["default"] = Promise
    .all([
    Scene.root.findFirst("letterParent", { recursive: true }),
    Scene.root.findFirst("puffOfSmoke", { recursive: true }),
    Scene.root.findFirst("forehead", { recursive: true }),
    Patches.outputs.getBoolean("isFaceTracked"),
    Patches.outputs.getBoolean("sceneStartedTo")
])
    .then(function (results) {
    var aloneTogether = new AloneTogetherScene_1.AloneTogetherScene(results[0], results[1], results[2]);
    var isFaceTracked = results[3];
    var sceneStarted = results[4];
    return {
        aloneTogether: aloneTogether,
        isFaceTracked: isFaceTracked,
        sceneStarted: sceneStarted
    };
})
    .then(function (results) {
    return results.aloneTogether.reset().then(function () {
        exports.Diagnostics.log("Scene setup completed");
        return results;
    });
})["catch"](function (error) {
    throw new Error("While setting up scene: " + error.name + " " + error.message);
});
