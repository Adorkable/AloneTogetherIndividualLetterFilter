"use strict";
exports.__esModule = true;
exports.EventSourceToPromise = void 0;
var EventSourceToPromise = function (eventSource) {
    return new Promise(function (resolve) {
        eventSource.subscribe(function (event) {
            resolve(event);
        });
    });
};
exports.EventSourceToPromise = EventSourceToPromise;
