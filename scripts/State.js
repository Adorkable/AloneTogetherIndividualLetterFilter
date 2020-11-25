"use strict";
exports.__esModule = true;
exports.Diagnostics = void 0;
var TouchGestures = require('TouchGestures');
exports.Diagnostics = require('Diagnostics');
var Patches = require('Patches');
var Time = require('Time');
var Instruction = require('Instruction');
var animating = false;
var startTimeoutDurationMilliseconds = 10000;
var startTimeout = undefined;
var startScene = function (scene, letterIndex) {
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
};
var StateSetup = function (scene, isFaceTracked, sceneStarted) {
    return new Promise(function (resolve, reject) {
        try {
            exports.Diagnostics.log(sceneStarted.not);
            var findFaceInstructions = Instruction.bind(isFaceTracked.not(), 'find_face');
            var unsubscribeTap = TouchGestures.onTap().and(sceneStarted).monitor()
                .subscribe(function () {
                if (animating) {
                    return;
                }
                return scene.reset()
                    .then(function () {
                    exports.Diagnostics.log("Scene reset");
                    // sceneStarted = Reactive.val(false)
                    Patches.inputs.setBoolean("sceneStartedFrom", false);
                });
            });
            exports.Diagnostics.log(unsubscribeTap);
            var readyTracking = isFaceTracked.and(sceneStarted.not()).monitor().subscribe(function (event) {
                if (animating) {
                    return;
                }
                if (event.newValue === true) {
                    startTimeout = Time.setTimeout(function () {
                        Patches.outputs.getScalar('letterIndex')
                            .then(function (letterIndex) {
                            return startScene(scene, letterIndex);
                        });
                    }, startTimeoutDurationMilliseconds);
                }
                else {
                    Time.cancelTimeout(startTimeout);
                    startTimeout = undefined;
                }
            });
            exports.Diagnostics.log("State setup completed");
            resolve({
                findFaceInstructions: findFaceInstructions,
                unsubscribeTap: unsubscribeTap,
                readyTracking: readyTracking
            });
        }
        catch (error) {
            reject(new Error("While setting up state: " + error.name + " " + error.message));
        }
    });
};
exports["default"] = StateSetup;
