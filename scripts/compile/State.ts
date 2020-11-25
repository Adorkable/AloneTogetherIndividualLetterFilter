import { AloneTogetherScene } from "./AloneTogetherScene";
const TouchGestures = require('TouchGestures');
export const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Time = require('Time')
const Instruction = require('Instruction');

let animating = false

let startTimeoutDurationMilliseconds = 10000
let startTimeout: number | undefined = undefined

const startScene = (scene: AloneTogetherScene, letterIndex: ScalarSignal): Promise<any> => {
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
}

const StateSetup = (scene: AloneTogetherScene, isFaceTracked: BoolSignal, sceneStarted: BoolSignal): Promise<{
    findFaceInstructions: any,
    unsubscribeTap: any,
    readyTracking: any
}> => {
    return new Promise((resolve, reject) => {

        try {
            Diagnostics.log(sceneStarted.not)
            const findFaceInstructions = Instruction.bind(isFaceTracked.not(), 'find_face');

            const unsubscribeTap = TouchGestures.onTap().and(sceneStarted).monitor()
                .subscribe(() => {
                    if (animating) {
                        return
                    }

                    return scene.reset()
                        .then(() => {
                            Diagnostics.log("Scene reset")
                            // sceneStarted = Reactive.val(false)
                            Patches.inputs.setBoolean("sceneStartedFrom", false)
                        })
                })
            Diagnostics.log(unsubscribeTap)

            const readyTracking = isFaceTracked.and(sceneStarted.not()).monitor().subscribe((event) => {
                if (animating) {
                    return
                }

                if (event.newValue === true) {
                    startTimeout = Time.setTimeout(() => {
                        Patches.outputs.getScalar('letterIndex')
                            .then((letterIndex) => {
                                return startScene(scene, letterIndex)
                            })
                    }, startTimeoutDurationMilliseconds)
                } else {
                    Time.cancelTimeout(startTimeout)
                    startTimeout = undefined
                }
            })

            Diagnostics.log("State setup completed")

            resolve({
                findFaceInstructions,
                unsubscribeTap,
                readyTracking,
            })
        } catch (error) {
            reject(new Error("While setting up state: " + error.name + " " + error.message))
        }
    })
}

export default StateSetup