export const Diagnostics = require('Diagnostics');
const Reactive = require('Reactive');
const Animation = require('Animation');

interface LetterInformation {
    letter: Plane
    initialPosition: PointSignal
    // initialRotation: PointSignal
    initialScale: PointSignal
}

class Letters {
    letters: Array<LetterInformation>

    constructor(parent: SceneObjectBase) {
        this.letters = [
            parent.child("a-lone"),
            parent.child("a-l-one"),
            parent.child("al-o-ne"),
            parent.child("alo-n-e"),
            parent.child("alon-e"),
            parent.child("t-ogether"),
            parent.child("t-o-gether"),
            parent.child("to-g-ether"),
            parent.child("tog-e-ther"),
            parent.child("toge-t-her"),
            parent.child("toget-h-er"),
            parent.child("togeth-e-r"),
            parent.child("togethe-r"),
        ].map((letter) => {
            // TODO: test if actually a Plane
            return {
                letter,
                initialPosition: Reactive.point(
                    letter.transform.x.pinLastValue(),
                    letter.transform.y.pinLastValue(),
                    letter.transform.z.pinLastValue()
                ),
                // initialRotation: Reactive.point(
                //     letter.transform.rotationX.pinLastValue(),
                //     letter.transform.rotationY.pinLastValue(),
                //     letter.transform.rotationZ.pinLastValue()
                // ),
                initialScale: Reactive.point(
                    letter.transform.scaleX.pinLastValue(),
                    letter.transform.scaleY.pinLastValue(),
                    letter.transform.scaleZ.pinLastValue()
                ),
            }
        })
    }

    async reset(): Promise<Letters> {
        await this.letters.forEach((letter) => {
            letter.letter.transform.x = letter.initialPosition.x
            letter.letter.transform.y = letter.initialPosition.y
            letter.letter.transform.z = letter.initialPosition.z
            // letter.letter.transform.rotationX = letter.initialRotation.x
            // letter.letter.transform.rotationY = letter.initialRotation.y
            // letter.letter.transform.rotationZ = letter.initialRotation.z
            letter.letter.transform.scaleX = letter.initialScale.x
            letter.letter.transform.scaleY = letter.initialScale.y
            letter.letter.transform.scaleZ = letter.initialScale.z
        })

        return this
    }

    async animate(
        position: PointSignal,
        scale: PointSignal,
        durationMilliseconds: number,
        fasterLetter: number | void
    ): Promise<mixed> {
        const slowerDriver = Animation.timeDriver({
            durationMilliseconds,
            loopCount: 1,
            mirror: false
        })
        const fasterDriver = Animation.timeDriver({
            durationMilliseconds: durationMilliseconds / 3 * 2,
            loopCount: 1,
            mirror: false
        })

        const samplerFactory = Animation.samplers.easeInCirc

        const animateLetter = (letter: LetterInformation, driver: TimeDriver) => {
            letter.letter.transform.x = Animation.animate(
                driver,
                samplerFactory(letter.initialPosition.x.pinLastValue(), position.x.pinLastValue())
            )
            letter.letter.transform.y = Animation.animate(
                driver,
                samplerFactory(letter.initialPosition.y.pinLastValue(), position.y.pinLastValue())
            )
            letter.letter.transform.z = Animation.animate(
                driver,
                samplerFactory(letter.initialPosition.z.pinLastValue(), position.z.pinLastValue())
            )

            letter.letter.transform.scaleX = Animation.animate(
                driver,
                samplerFactory(letter.initialScale.x.pinLastValue(), scale.x.pinLastValue())
            )
            letter.letter.transform.scaleY = Animation.animate(
                driver,
                samplerFactory(letter.initialScale.x.pinLastValue(), scale.y.pinLastValue())
            )
            letter.letter.transform.scaleZ = Animation.animate(
                driver,
                samplerFactory(letter.initialScale.x.pinLastValue(), scale.z.pinLastValue())
            )
        }

        await this.letters.forEach((letter, index) => {
            if (fasterLetter === index) {
                animateLetter(letter, fasterDriver)
            } else {
                animateLetter(letter, slowerDriver)
            }
        })

        fasterDriver.start()
        slowerDriver.start()
        return new Promise((resolve) => {
            slowerDriver.onCompleted().subscribe((event) => {
                resolve(event)
            })
        })
    }

    letterAtIndex(index: number): LetterInformation | void {
        if (index >= 0 && index < this.letters.length) {
            return this.letters[index]
        }
        return undefined
    }
}

export {
    Letters
}