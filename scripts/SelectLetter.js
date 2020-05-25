const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');

const Patches = require('Patches');
const Reactive = require('Reactive');
const TouchGestures = require('TouchGestures');
const Animation = require('Animation');

const canvas0 = Scene.root.findFirst('canvas0');

const aloneY = 0.35
const togetherY = 345
const endScale = Reactive.point2d(8, 8)
const endings = [

	{ // a
		position: Reactive.point2d(2.15, aloneY),
		scale: endScale
	},

	{ // l
		position: Reactive.point2d(1.81, aloneY),
		scale: endScale
	},

	{ // o
		position: Reactive.point2d(1.38, aloneY),
		scale: endScale
	},

	{ // n
		position: Reactive.point2d(0.93, aloneY),
		scale: endScale
	},

	{ // e
		position: Reactive.point2d(0.51, aloneY),
		scale: endScale
	},
	////////////////////////////
	{ // t
		position: Reactive.point2d(920, togetherY),
		scale: endScale
	},

	{ // o
		position: Reactive.point2d(580, togetherY),
		scale: endScale
	},

	{ // g
		position: Reactive.point2d(210, togetherY),
		scale: endScale
	},

	{ // e
		position: Reactive.point2d(-100, togetherY),
		scale: endScale
	},

	{ // t
		position: Reactive.point2d(-370, togetherY),
		scale: endScale
	},

	{ // h
		position: Reactive.point2d(-640, togetherY),
		scale: endScale
	},

	{ // e
		position: Reactive.point2d(-960, togetherY),
		scale: endScale
	},

	{ // r
		position: Reactive.point2d(-1280, togetherY),
		scale: endScale
	}
];

const setLetterEnding = (letterIndex) => {
	const ending = endings[letterIndex];
	if (!ending) {
		throw Error("No endings for letterIndex '" + letterIndex + "'")
	}

	const endPosition = ending.position;
	const endScale = ending.scale;

	Patches.inputs.setPoint2D('endPosition', endPosition);
	Patches.inputs.setPoint2D('endScale', endScale);
}

TouchGestures.onTap(canvas0).subscribe(function () {
	Patches.outputs.getScalar('letterIndex')
		.then((letterIndexSignal) => {
			const letterIndex = letterIndexSignal.pinLastValue()
			setLetterEnding(letterIndex)

			letterIndexSignal.monitor().subscribe((event) => {
				setLetterEnding(event.newValue)
			})
		});
});
