"use strict";
exports.__esModule = true;
exports.AloneTogetherScene = void 0;
var Letters_1 = require("./Letters");
var Utility_1 = require("./Utility");
var Reactive = require('Reactive');
var Time = require('Time');
var Animation = require('Animation');
var FaceTracking = require('FaceTracking');
var face = FaceTracking.face(0);
var AloneTogetherScene = /** @class */ (function () {
    function AloneTogetherScene(letterParent, puffOfSmoke, forehead) {
        var _this = this;
        this.letterParent = letterParent;
        this.letters = new Letters_1.Letters(letterParent);
        // TODO: test if actually ParticleSystem
        this.puffOfSmoke = puffOfSmoke;
        // HACKY to do this in the constructor
        this.puffOfSmoke.getMaterial().then(function (material) {
            _this.puffOfSmokeMaterial = material;
        });
        this.forehead = forehead;
    }
    AloneTogetherScene.prototype.reset = function () {
        this.puffOfSmoke.birthrate = Reactive.val(0);
        this.forehead.hidden = true;
        return Promise.all([
            // this.forehead.getMaterial().then((material: MaterialBase) => {
            //     material.opacity = Reactive.val(0)
            // }),
            this.letters.reset()
        ]);
    };
    AloneTogetherScene.prototype.animateForehead = function (durationMilliseconds) {
        var driver = Animation.timeDriver({
            durationMilliseconds: durationMilliseconds,
            loopCount: 1,
            mirror: false
        });
        var sampler = Animation.samplers.easeInOutCirc(0, 1);
        return this.forehead.getMaterial().then(function (material) {
            material.opacity = Animation.animate(driver, sampler);
            driver.start();
            return Utility_1.EventSourceToPromise(driver.onCompleted());
        });
    };
    AloneTogetherScene.prototype.animatePuffOfSmoke = function (durationMilliseconds) {
        this.puffOfSmoke.birthrate = Reactive.val(2000);
        Utility_1.playAudioOnce('reveal twinkle', 3500);
        Time.setTimeout(function () {
            // this.animateForehead(500 - 350)
        }, durationMilliseconds / 2);
        return new Promise(function (resolve) {
            Time.setTimeout(function () {
                resolve();
            }, durationMilliseconds);
        });
    };
    AloneTogetherScene.prototype.startSequence = function (letterIndex) {
        var _this = this;
        var letter = this.letters.letterAtIndex(letterIndex);
        if (!letter) {
            return Promise.reject("Invalid letter index: " + letterIndex);
        }
        return letter.letter.getMaterial()
            .then(function (material) {
            _this.forehead.material = material;
            _this.puffOfSmokeMaterial.diffuse = material.diffuse;
            _this.puffOfSmokeMaterial.doubleSided = Reactive.val(true);
        }).then(function () {
            Utility_1.playAudioOnce('suck up', 1250);
            return _this.letters.animate(Reactive.point(face.forehead.top.x.pinLastValue(), face.forehead.top.y.pinLastValue(), face.forehead.top.z.pinLastValue()), Reactive.point(0, 0, 0), 1250, letterIndex);
        }).then(function () {
            return _this.animatePuffOfSmoke(500);
        })
            .then(function () {
            _this.puffOfSmoke.birthrate = Reactive.val(0);
            _this.forehead.hidden = false;
            return Utility_1.playAudioOnce('kids cheering', 4000);
        });
    };
    return AloneTogetherScene;
}());
exports.AloneTogetherScene = AloneTogetherScene;
