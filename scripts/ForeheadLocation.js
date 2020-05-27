"use strict";
/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
exports.__esModule = true;
exports.Diagnostics = void 0;
var Reactive = require('Reactive');
//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================
// How to load in modules
var Scene = require('Scene');
var Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
exports.Diagnostics = require('Diagnostics');
var updatePosition = function (position) {
    Patches.inputs.setPoint("foreheadPosition", position);
};
var updateRotation = function (rotation) {
    Patches.inputs.setVector("foreheadRotation", rotation);
};
var updateScale = function (scale) {
    Patches.inputs.setVector("foreheadScale", scale);
};
var updateForeheadTransform = function (foreheadTransform) {
    var x = foreheadTransform.position.x.pinLastValue();
    var y = foreheadTransform.position.y.pinLastValue();
    var z = foreheadTransform.position.z.pinLastValue();
    updatePosition(Reactive.point(x, y, z));
    foreheadTransform.position.x.monitor().subscribe(function (event) {
        x = event.newValue;
        updatePosition(Reactive.point(x, y, z));
    });
    foreheadTransform.position.y.monitor().subscribe(function (event) {
        y = event.newValue;
        updatePosition(Reactive.point(x, y, z));
    });
    foreheadTransform.position.z.monitor().subscribe(function (event) {
        z = event.newValue;
        updatePosition(Reactive.point(x, y, z));
    });
    // const rotation = ReactiveModule.point(
    //     foreheadTransform.rotationX.pinLastValue(),
    //     foreheadTransform.rotationY.pinLastValue(),
    //     foreheadTransform.rotationZ.pinLastValue()
    // )
    // updateRotation(rotation)
    // const scale = foreheadTransform.scale.pinLastValue();
    // updateScale(scale)
    // foreheadTransform.position.monitor().subscribe((event) => {
    //     updatePosition(event.newValue)
    //     Diagnostics.log("Count " + c)
    // })
};
Scene.root.findFirst("forehead", { recursive: true })
    .then(function (forehead) {
    var transform = forehead.worldTransform;
    updateForeheadTransform(transform);
    // forehead.worldTransform.monitor().subscribe((event) => {
    //     updateForeheadTransform(event.newValue)
    // })
});
