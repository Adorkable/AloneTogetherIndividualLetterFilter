import { Letters } from './Letters'
import { EventSourceToPromise, playAudioOnce } from './Utility';
import { Diagnostics } from './SelectLetter';
const Reactive = require('Reactive');
const Time = require('Time')
const Animation = require('Animation');
const FaceTracking = require('FaceTracking');

const face = FaceTracking.face(0);

class AloneTogetherScene {
    letterParent: SceneObjectBase
    letters: Letters

    puffOfSmoke: ParticleSystem
    puffOfSmokeMaterial: MaterialBase

    forehead: Plane

    constructor(
        letterParent: SceneObjectBase,
        puffOfSmoke: ParticleSystem,
        forehead: Plane
    ) {
        this.letterParent = letterParent
        this.letters = new Letters(letterParent)

        // TODO: test if actually ParticleSystem
        this.puffOfSmoke = puffOfSmoke
        // HACKY to do this in the constructor
        this.puffOfSmoke.getMaterial().then((material) => {
            this.puffOfSmokeMaterial = material
        })

        this.forehead = forehead
    }

    reset(): Promise<any[]> {
        this.puffOfSmoke.birthrate = Reactive.val(0)
        this.forehead.hidden = true
        return Promise.all([
            // this.forehead.getMaterial().then((material: MaterialBase) => {
            //     material.opacity = Reactive.val(0)
            // }),
            this.letters.reset()
        ])
    }

    animateForehead(durationMilliseconds: number): Promise<void> {
        const driver = Animation.timeDriver({
            durationMilliseconds,
            loopCount: 1,
            mirror: false
        })
        const sampler = Animation.samplers.easeInOutCirc(0, 1)
        return this.forehead.getMaterial().then((material: MaterialBase) => {
            material.opacity = Animation.animate(driver, sampler)
            driver.start()

            return EventSourceToPromise(driver.onCompleted())
        })
    }

    animatePuffOfSmoke(durationMilliseconds: number): Promise<void> {
        this.puffOfSmoke.birthrate = Reactive.val(2000)

        playAudioOnce('reveal twinkle', 3500)

        Time.setTimeout(() => {
            // this.animateForehead(500 - 350)
        }, durationMilliseconds / 2)

        return new Promise((resolve) => {
            Time.setTimeout(() => {
                resolve()
            }, durationMilliseconds)
        })
    }

    startSequence(letterIndex: number): Promise<any> {
        const letter = this.letters.letterAtIndex(letterIndex)
        if (!letter) {
            return Promise.reject("Invalid letter index: " + letterIndex)
        }

        return letter.letter.getMaterial()
            .then((material) => {
                this.forehead.material = material
                this.puffOfSmokeMaterial.diffuse = material.diffuse
                this.puffOfSmokeMaterial.doubleSided = Reactive.val(true)
            }).then(() => {
                playAudioOnce('suck up', 1250)
                return this.letters.animate(
                    Reactive.point(
                        face.forehead.top.x.pinLastValue(),
                        face.forehead.top.y.pinLastValue(),
                        face.forehead.top.z.pinLastValue()),
                    Reactive.point(0, 0, 0),
                    1250,
                    letterIndex
                )
            }).then(() => {
                return this.animatePuffOfSmoke(500)
            })
            .then(() => {
                this.puffOfSmoke.birthrate = Reactive.val(0)
                this.forehead.hidden = false
                return playAudioOnce('kids cheering', 4000)
            })
    }
}

export {
    AloneTogetherScene
}