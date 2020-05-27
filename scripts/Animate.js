"use strict";
exports.__esModule = true;
exports.Diagnostics = void 0;
var Scene = require('Scene');
exports.Diagnostics = require('Diagnostics');
var Patches = require('Patches');
var TouchGestures = require('TouchGestures');
var AloneTogetherScene_1 = require("./AloneTogetherScene");
var aloneTogether = undefined;
var setupScenePromise = Promise.all([
    Scene.root.findFirst("letterParent", { recursive: true }),
    Scene.root.findFirst("puffOfSmoke", { recursive: true }),
    Scene.root.findFirst("forehead", { recursive: true })
]).then(function (results) {
    aloneTogether = new AloneTogetherScene_1.AloneTogetherScene(results[0], results[1], results[2]);
    exports.Diagnostics.log("Setup completed");
    return aloneTogether.reset().then(function () {
        return aloneTogether;
    });
})["catch"](function (error) {
    // TODO: show user
    exports.Diagnostics.log("While setting up scene: " + error);
});
var sceneStarted = false;
var animating = false;
var unsubscribe = TouchGestures.onTap().subscribe(function () {
    Promise.all([
        setupScenePromise,
        Patches.outputs.getScalar('letterIndex')
    ]).then(function (results) {
        var scene = results[0];
        var letterIndex = results[1];
        if (!scene)
            throw Error("Unable to retrieve Alone Together Scene");
        if (!sceneStarted) {
            if (animating) {
                return;
            }
            animating = true;
            sceneStarted = true;
            return scene.startSequence(letterIndex.pinLastValue())
                .then(function () {
                exports.Diagnostics.log("Finished sequence");
                animating = false;
            });
        }
        else {
            if (animating) {
                return;
            }
            return scene.reset()
                .then(function () {
                exports.Diagnostics.log("Scene reset");
                sceneStarted = false;
            });
        }
    })["catch"](function (error) {
        exports.Diagnostics.log("While tapping: " + error);
    });
});
