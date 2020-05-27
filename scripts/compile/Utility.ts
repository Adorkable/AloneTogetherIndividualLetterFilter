import { Diagnostics } from "./SelectLetter";

const Audio = require('Audio');
const Time = require('Time')

const EventSourceToPromise = (eventSource: EventSource): Promise<mixed> => {
    return new Promise((resolve) => {
        eventSource.subscribe((event) => {
            resolve(event)
        })
    })
}

const playAudioOnce = (controllerName: string, durationMilliseconds: number): Promise<AudioPlaybackController> => {
    const controller =
        Audio.getPlaybackController(controllerName);
    controller.reset();
    controller.setLooping(false);
    controller.setPlaying(true);

    return new Promise((resolve) => {
        // Why don't we have an onCompleted?!?!?
        Time.setTimeout(() => {
            controller.setPlaying(false);

            resolve(controller)
        }, durationMilliseconds)
    })
}

export {
    EventSourceToPromise,
    playAudioOnce
}