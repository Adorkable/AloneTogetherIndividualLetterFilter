"use strict";
exports.__esModule = true;
var Patches = require('Patches');
var updateTextLength = function (text) {
    Patches.inputs.setScalar('textLength', text.length);
};
Patches.outputs.getString('string')
    .then(function (stringSignal) {
    var string = stringSignal.pinLastValue();
    updateTextLength(string);
    stringSignal.monitor().subscribe(function (event) {
        updateTextLength(event.newValue);
    });
});
