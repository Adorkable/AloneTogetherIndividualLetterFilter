import { Diagnostics } from './SelectLetter';

const Patches = require('Patches');

const updateTextLength = (text) => {
    Patches.inputs.setScalar('textLength', text.length);
}

Patches.outputs.getString('string')
    .then((stringSignal) => {
        const string = stringSignal.pinLastValue()
        updateTextLength(string)

        stringSignal.monitor().subscribe((event) => {
            updateTextLength(event.newValue)
        })
    })

