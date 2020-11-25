const Scene = require('Scene');
const Patches = require('Patches');
export const Diagnostics = require('Diagnostics');

import { AloneTogetherScene } from './AloneTogetherScene'

export default Promise
    .all([
        Scene.root.findFirst("letterParent", { recursive: true }),
        Scene.root.findFirst("puffOfSmoke", { recursive: true }),
        Scene.root.findFirst("forehead", { recursive: true }),
        Patches.outputs.getBoolean("isFaceTracked"),
        Patches.outputs.getBoolean("sceneStartedTo")
    ])
    .then((results) => {
        const aloneTogether = new AloneTogetherScene(
            results[0],
            results[1],
            results[2]
        )
        const isFaceTracked = results[3]
        const sceneStarted = results[4]

        return {
            aloneTogether,
            isFaceTracked,
            sceneStarted
        }
    })
    .then((results) => {
        return results.aloneTogether.reset().then(() => {
            Diagnostics.log("Scene setup completed")
            return results
        })
    })
    .catch((error) => {
        throw new Error("While setting up scene: " + error.name + " " + error.message)
    })