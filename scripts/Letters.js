"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Letters = exports.Diagnostics = void 0;
exports.Diagnostics = require('Diagnostics');
var Reactive = require('Reactive');
var Animation = require('Animation');
var Letters = /** @class */ (function () {
    function Letters(parent) {
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
        ].map(function (letter) {
            // TODO: test if actually a Plane
            return {
                letter: letter,
                initialPosition: Reactive.point(letter.transform.x.pinLastValue(), letter.transform.y.pinLastValue(), letter.transform.z.pinLastValue()),
                // initialRotation: Reactive.point(
                //     letter.transform.rotationX.pinLastValue(),
                //     letter.transform.rotationY.pinLastValue(),
                //     letter.transform.rotationZ.pinLastValue()
                // ),
                initialScale: Reactive.point(letter.transform.scaleX.pinLastValue(), letter.transform.scaleY.pinLastValue(), letter.transform.scaleZ.pinLastValue())
            };
        });
    }
    Letters.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.letters.forEach(function (letter) {
                            letter.letter.transform.x = letter.initialPosition.x;
                            letter.letter.transform.y = letter.initialPosition.y;
                            letter.letter.transform.z = letter.initialPosition.z;
                            // letter.letter.transform.rotationX = letter.initialRotation.x
                            // letter.letter.transform.rotationY = letter.initialRotation.y
                            // letter.letter.transform.rotationZ = letter.initialRotation.z
                            letter.letter.transform.scaleX = letter.initialScale.x;
                            letter.letter.transform.scaleY = letter.initialScale.y;
                            letter.letter.transform.scaleZ = letter.initialScale.z;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Letters.prototype.animate = function (position, scale, durationMilliseconds, fasterLetter) {
        return __awaiter(this, void 0, void 0, function () {
            var slowerDriver, fasterDriver, samplerFactory, animateLetter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slowerDriver = Animation.timeDriver({
                            durationMilliseconds: durationMilliseconds,
                            loopCount: 1,
                            mirror: false
                        });
                        fasterDriver = Animation.timeDriver({
                            durationMilliseconds: durationMilliseconds / 2,
                            loopCount: 1,
                            mirror: false
                        });
                        samplerFactory = Animation.samplers.easeInCirc;
                        animateLetter = function (letter, driver) {
                            letter.letter.transform.x = Animation.animate(driver, samplerFactory(letter.initialPosition.x.pinLastValue(), position.x.pinLastValue()));
                            letter.letter.transform.y = Animation.animate(driver, samplerFactory(letter.initialPosition.y.pinLastValue(), position.y.pinLastValue()));
                            letter.letter.transform.z = Animation.animate(driver, samplerFactory(letter.initialPosition.z.pinLastValue(), position.z.pinLastValue()));
                            letter.letter.transform.scaleX = Animation.animate(driver, samplerFactory(letter.initialScale.x.pinLastValue(), scale.x.pinLastValue()));
                            letter.letter.transform.scaleY = Animation.animate(driver, samplerFactory(letter.initialScale.x.pinLastValue(), scale.y.pinLastValue()));
                            letter.letter.transform.scaleZ = Animation.animate(driver, samplerFactory(letter.initialScale.x.pinLastValue(), scale.z.pinLastValue()));
                        };
                        return [4 /*yield*/, this.letters.forEach(function (letter, index) {
                                if (fasterLetter === index) {
                                    animateLetter(letter, fasterDriver);
                                }
                                else {
                                    animateLetter(letter, slowerDriver);
                                }
                            })];
                    case 1:
                        _a.sent();
                        fasterDriver.start();
                        slowerDriver.start();
                        return [2 /*return*/, new Promise(function (resolve) {
                                slowerDriver.onCompleted().subscribe(function (event) {
                                    resolve(event);
                                });
                            })];
                }
            });
        });
    };
    Letters.prototype.letterAtIndex = function (index) {
        if (index >= 0 && index < this.letters.length) {
            return this.letters[index];
        }
        return undefined;
    };
    return Letters;
}());
exports.Letters = Letters;
