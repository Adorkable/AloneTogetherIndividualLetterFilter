"use strict";
exports.__esModule = true;
exports.Diagnostics = void 0;
var Scene = require('Scene');
exports.Diagnostics = require('Diagnostics');
var Patches = require('Patches');
var TouchGestures = require('TouchGestures');
var FaceTracking = require('FaceTracking');
var Reactive = require('Reactive');
var Instruction = require('Instruction');
var AloneTogetherScene_1 = require("./AloneTogetherScene");
var aloneTogether = undefined;
var isFaceTracked = Reactive.val(false);
var sceneStarted = undefined;
var setupScenePromise = Promise.all([
    Scene.root.findFirst("letterParent", { recursive: true }),
    Scene.root.findFirst("puffOfSmoke", { recursive: true }),
    Scene.root.findFirst("forehead", { recursive: true }),
    Patches.outputs.getBoolean("faceIsTracked"),
    Patches.outputs.getBoolean("sceneStartedTo")
]).then(function (results) {
    aloneTogether = new AloneTogetherScene_1.AloneTogetherScene(results[0], results[1], results[2]);
    isFaceTracked = results[3];
    sceneStarted = results[4];
    Instruction.bind(isFaceTracked.not(), 'find_face');
    isFaceTracked.monitor().subscribe(function (event) {
        Instruction.bind(isFaceTracked.and(sceneStarted.not()), 'tap_to_start');
        if (event.newValue === true) {
        }
        else {
            Instruction.bind(isFaceTracked.not(), 'find_face');
        }
    });
})
    .then(function () {
    return aloneTogether.reset().then(function () {
        exports.Diagnostics.log("Setup completed");
        return aloneTogether;
    });
})["catch"](function (error) {
    // TODO: show user
    exports.Diagnostics.log("While setting up scene: " + error);
});
///// None of this works because documentation is inaccurate, isTrack is not a Bool Signal but a boolean als;dakfjaldf going to use input from Patch (seems to be working)
// // Hack because FaceTracking.count is never 0
// let hasFace: BoolSignal = !FaceTracking.face(0).isTracked as unknown as BoolSignal
// Diagnostics.log(FaceTracking.face(0))
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
        if (!sceneStarted.pinLastValue()) {
            if (!isFaceTracked.pinLastValue()) {
                return;
            }
            if (animating) {
                return;
            }
            animating = true;
            // sceneStarted = Reactive.val(true)
            Patches.inputs.setBoolean("sceneStartedFrom", true);
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
                // sceneStarted = Reactive.val(false)
                Patches.inputs.setBoolean("sceneStartedFrom", false);
            });
        }
    })["catch"](function (error) {
        exports.Diagnostics.log("While tapping: [" + error.name + "] " + error.message);
        exports.Diagnostics.log(error.stack);
    });
});
