const EventSourceToPromise = (eventSource: EventSource): Promise<mixed> => {
    return new Promise((resolve) => {
        eventSource.subscribe((event) => {
            resolve(event)
        })
    })
}

export {
    EventSourceToPromise
}