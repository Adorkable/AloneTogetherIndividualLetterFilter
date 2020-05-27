"use strict";
exports.__esModule = true;
exports.playAudioOnce = exports.EventSourceToPromise = void 0;
var Audio = require('Audio');
var Time = require('Time');
var EventSourceToPromise = function (eventSource) {
    return new Promise(function (resolve) {
        eventSource.subscribe(function (event) {
            resolve(event);
        });
    });
};
exports.EventSourceToPromise = EventSourceToPromise;
var playAudioOnce = function (controllerName, durationMilliseconds) {
    var controller = Audio.getPlaybackController(controllerName);
    controller.reset();
    controller.setLooping(false);
    controller.setPlaying(true);
    return new Promise(function (resolve) {
        // Why don't we have an onCompleted?!?!?
        Time.setTimeout(function () {
            controller.setPlaying(false);
            resolve(controller);
        }, durationMilliseconds);
    });
};
exports.playAudioOnce = playAudioOnce;
