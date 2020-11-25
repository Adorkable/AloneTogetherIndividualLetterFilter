"use strict";
exports.__esModule = true;
exports.Diagnostics = void 0;
var Scene = require('Scene');
exports.Diagnostics = require('Diagnostics');
var Patches = require('Patches');
var Reactive = require('Reactive');
var TouchGestures = require('TouchGestures');
var canvas0 = Scene.root.findFirst('canvas0');
var aloneY = 0;
var togetherY = 345;
var endScale = Reactive.point2d(1, 1);
var endings = [
    {
        position: Reactive.point2d(0, aloneY),
        scale: endScale
    },
    {
        position: Reactive.point2d(1.81, aloneY),
        scale: endScale
    },
    {
        position: Reactive.point2d(1.38, aloneY),
        scale: endScale
    },
    {
        position: Reactive.point2d(0.93, aloneY),
        scale: endScale
    },
    {
        position: Reactive.point2d(0.51, aloneY),
        scale: endScale
    },
    ////////////////////////////
    {
        position: Reactive.point2d(920, togetherY),
        scale: endScale
    },
    {
        position: Reactive.point2d(580, togetherY),
        scale: endScale
    },
    {
        position: Reactive.point2d(210, togetherY),
        scale: endScale
    },
    {
        position: Reactive.point2d(-100, togetherY),
        scale: endScale
    },
    {
        position: Reactive.point2d(-370, togetherY),
        scale: endScale
    },
    {
        position: Reactive.point2d(-640, togetherY),
        scale: endScale
    },
    {
        position: Reactive.point2d(-960, togetherY),
        scale: endScale
    },
    {
        position: Reactive.point2d(-1280, togetherY),
        scale: endScale
    }
];
var setLetterEnding = function (letterIndex) {
    var ending = endings[letterIndex];
    if (!ending) {
        throw Error("No endings for letterIndex '" + letterIndex + "'");
    }
    var endPosition = ending.position;
    var endScale = ending.scale;
    Patches.inputs.setPoint2D('endPosition', endPosition);
    Patches.inputs.setPoint2D('endScale', endScale);
};
TouchGestures.onTap(canvas0).subscribe(function () {
    Patches.outputs.getScalar('letterIndex')
        .then(function (letterIndexSignal) {
        var letterIndex = letterIndexSignal.pinLastValue();
        setLetterEnding(letterIndex);
        letterIndexSignal.monitor().subscribe(function (event) {
            setLetterEnding(event.newValue);
        });
    })["catch"](function (error) {
        exports.Diagnostics.log("While setting up letter ending: " + error);
    });
});
