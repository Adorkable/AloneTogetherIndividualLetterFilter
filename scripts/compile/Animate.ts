const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');

const Patches = require('Patches');
const TouchGestures = require('TouchGestures');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');
const Instruction = require('Instruction');

import { AloneTogetherScene } from './AloneTogetherScene'

let aloneTogether: AloneTogetherScene = undefined
let isFaceTracked: BoolSignal = Reactive.val(false)
let sceneStarted: BoolSignal = undefined

const setupScenePromise = Promise.all([
    Scene.root.findFirst("letterParent", { recursive: true }),
    Scene.root.findFirst("puffOfSmoke", { recursive: true }),
    Scene.root.findFirst("forehead", { recursive: true }),
    Patches.outputs.getBoolean("faceIsTracked"),
    Patches.outputs.getBoolean("sceneStartedTo")
]).then((results) => {
    aloneTogether = new AloneTogetherScene(
        results[0],
        results[1],
        results[2]
    )
    isFaceTracked = results[3]
    sceneStarted = results[4]

    Instruction.bind(isFaceTracked.not(), 'find_face');
    isFaceTracked.monitor().subscribe((event) => {
        Instruction.bind(isFaceTracked.and(sceneStarted.not()), 'tap_to_start');
        if (event.newValue === true) {
        } else {
            Instruction.bind(isFaceTracked.not(), 'find_face');
        }
    })
})
    .then(() => {
        return aloneTogether.reset().then(() => {
            Diagnostics.log("Setup completed")
            return aloneTogether
        })
    })
    .catch((error) => {
        // TODO: show user
        Diagnostics.log("While setting up scene: " + error)
    })

///// None of this works because documentation is inaccurate, isTrack is not a Bool Signal but a boolean als;dakfjaldf going to use input from Patch (seems to be working)
// // Hack because FaceTracking.count is never 0
// let hasFace: BoolSignal = !FaceTracking.face(0).isTracked as unknown as BoolSignal
// Diagnostics.log(FaceTracking.face(0))

let animating = false
const unsubscribe = TouchGestures.onTap().subscribe(function () {
    Promise.all([
        setupScenePromise,
        Patches.outputs.getScalar('letterIndex')
    ]).then((results) => {
        const scene: AloneTogetherScene | void = results[0]
        const letterIndex: ScalarSignal = results[1]
        if (!scene) throw Error("Unable to retrieve Alone Together Scene")

        if (!sceneStarted.pinLastValue()) {
            if (!isFaceTracked.pinLastValue()) {
                return
            }
            if (animating) {
                return
            }
            animating = true
            // sceneStarted = Reactive.val(true)
            Patches.inputs.setBoolean("sceneStartedFrom", true)

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
                    // sceneStarted = Reactive.val(false)
                    Patches.inputs.setBoolean("sceneStartedFrom", false)
                })
        }
    })
        .catch((error: Error) => {
            Diagnostics.log("While tapping: [" + error.name + "] " + error.message)
            Diagnostics.log(error.stack)
        })
})
