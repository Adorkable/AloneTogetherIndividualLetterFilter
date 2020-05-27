/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

const Reactive = require('Reactive');

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
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

const updatePosition = (position) => {
    Patches.inputs.setPoint("foreheadPosition", position)
}

const updateRotation = (rotation) => {
    Patches.inputs.setVector("foreheadRotation", rotation)
}

const updateScale = (scale) => {
    Patches.inputs.setVector("foreheadScale", scale)
}

const updateForeheadTransform = (foreheadTransform) => {
    let x = foreheadTransform.position.x.pinLastValue();
    let y = foreheadTransform.position.y.pinLastValue();
    let z = foreheadTransform.position.z.pinLastValue();

    updatePosition(Reactive.point(x, y, z));

    foreheadTransform.position.x.monitor().subscribe((event) => {
        x = event.newValue
        updatePosition(Reactive.point(x, y, z));
    })

    foreheadTransform.position.y.monitor().subscribe((event) => {
        y = event.newValue
        updatePosition(Reactive.point(x, y, z));
    })

    foreheadTransform.position.z.monitor().subscribe((event) => {
        z = event.newValue
        updatePosition(Reactive.point(x, y, z));
    })

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
}

Scene.root.findFirst("forehead", { recursive: true })
    .then((forehead) => {
        const transform = forehead.worldTransform
        updateForeheadTransform(transform);

        // forehead.worldTransform.monitor().subscribe((event) => {
        //     updateForeheadTransform(event.newValue)
        // })
    })