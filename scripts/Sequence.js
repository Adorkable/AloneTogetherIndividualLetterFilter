"use strict";
exports.__esModule = true;
exports.startSequence = exports.Diagnostics = void 0;
var Reactive = require('Reactive');
exports.Diagnostics = require('Diagnostics');
var startSequence = function (scene, letterIndex) {
    return scene.letters.animate(Reactive.point(0, 0, 0), Reactive.point(0, 0, 0), 500, letterIndex)
        .then(function (event) {
        exports.Diagnostics.log("Finished");
    });
};
exports.startSequence = startSequence;
