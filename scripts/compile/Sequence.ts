import { AloneTogetherScene } from "./AloneTogetherScene";
const Reactive = require('Reactive');
export const Diagnostics = require('Diagnostics');

const startSequence = (scene: AloneTogetherScene, letterIndex: number): Promise<any> => {
    return scene.letters.animate(
        Reactive.point(0, 0, 0),
        Reactive.point(0, 0, 0),
        500,
        letterIndex
    )
        .then((event) => {
            Diagnostics.log("Finished")
        })
}

export {
    startSequence
}