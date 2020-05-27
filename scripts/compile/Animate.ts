const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');

const Patches = require('Patches');
const TouchGestures = require('TouchGestures');

import { AloneTogetherScene } from './AloneTogetherScene'
import { Letters } from './Letters';
import { startSequence } from './Sequence';

let aloneTogether: AloneTogetherScene = undefined

const setupScenePromise = Promise.all([
    Scene.root.findFirst("letterParent", { recursive: true }),
    Scene.root.findFirst("puffOfSmoke", { recursive: true }),
    Scene.root.findFirst("forehead", { recursive: true })
]).then((results) => {
    aloneTogether = new AloneTogetherScene(
        results[0],
        results[1],
        results[2]
    )

    Diagnostics.log("Setup completed")

    return aloneTogether.reset().then(() => {
        return aloneTogether
    })
}).catch((error) => {
    // TODO: show user
    Diagnostics.log("While setting up scene: " + error)
})

let sceneStarted = false
let animating = false
const unsubscribe = TouchGestures.onTap().subscribe(function () {
    Promise.all([
        setupScenePromise,
        Patches.outputs.getScalar('letterIndex')
    ]).then((results) => {
        const scene: AloneTogetherScene | void = results[0]
        const letterIndex: ScalarSignal = results[1]
        if (!scene) throw Error("Unable to retrieve Alone Together Scene")

        if (!sceneStarted) {
            if (animating) {
                return
            }
            animating = true
            sceneStarted = true

            return scene.startSequence(letterIndex.pinLastValue())
                .then(() => {
                    Diagnostics.log("Finished sequence")
                    animating = false
                })
        } else {
            if (animating) {
                return
            }

            return scene.reset()
                .then(() => {
                    Diagnostics.log("Scene reset")
                    sceneStarted = false
                })
        }
    })
        .catch((error) => {
            Diagnostics.log("While tapping: " + error)
        })
})
