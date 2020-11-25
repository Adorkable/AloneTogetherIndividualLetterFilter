export const Diagnostics = require('Diagnostics')

import Scene from './Scene'
import State from './State'

// let aloneTogether: AloneTogetherScene = undefined
// let isFaceTracked: BoolSignal = Reactive.val(false)
// let sceneStarted: BoolSignal = undefined

// let startTimeoutDurationMilliseconds = 10000
// let startTimeout: number | undefined = undefined

const indexPromise = Scene
    .then((results) => {
        return State(results.aloneTogether, results.isFaceTracked, results.sceneStarted)
    })
    .catch((error) => {
        // TODO: show user
        Diagnostics.log(error.name + " " + error.message)
    })


// isFaceTracked.and(sceneStarted.not()).monitor().subscribe((event) => {
//     if (event.newValue === true) {
//         startTimeout = Time.setTimeout(() => {

//         }, startTimeoutDurationMilliseconds)
//     } else {
//         Time.cancelTimeout(startTimeout)
//         startTimeout = undefined
//     }
// })

// let animating = false
// const unsubscribe = TouchGestures.onTap().subscribe(function () {
//     Promise.all([
//         setupScenePromise,
//         Patches.outputs.getScalar('letterIndex')
//     ]).then((results) => {
//         const scene: AloneTogetherScene | void = results[0]
//         const letterIndex: ScalarSignal = results[1]
//         if (!scene) throw Error("Unable to retrieve Alone Together Scene")

//         if (!sceneStarted.pinLastValue()) {
//             if (!isFaceTracked.pinLastValue()) {
//                 return
//             }
//             if (animating) {
//                 return
//             }
//             animating = true
//             // sceneStarted = Reactive.val(true)
//             Patches.inputs.setBoolean("sceneStartedFrom", true)

//             return scene.startSequence(letterIndex.pinLastValue())
//                 .then(() => {
//                     Diagnostics.log("Finished sequence")
//                     animating = false
//                 })
//         } else {
//             if (animating) {
//                 return
//             }

//             return scene.reset()
//                 .then(() => {
//                     Diagnostics.log("Scene reset")
//                     // sceneStarted = Reactive.val(false)
//                     Patches.inputs.setBoolean("sceneStartedFrom", false)
//                 })
//         }
//     })
//         .catch((error: Error) => {
//             Diagnostics.log("While tapping: [" + error.name + "] " + error.message)
//             Diagnostics.log(error.stack)
//         })
// })
