const Animation = require('Animation');

Animation.TimeDriver.onCompletedPromise = (): Promise<mixed> => {
    return new Promise((resolve) => {
        this.onCompleted().subscribe((event) => {
            resolve(event)
        })
    })
}