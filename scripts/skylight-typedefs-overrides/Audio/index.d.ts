/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />

/// <reference path="../Audio.PlaybackController/index.d.ts" />

/// <reference path="../Audio.AudioComponent/index.d.ts" />
declare namespace AudioModule {
    /** 
    * ```
    (get) micVolumeLevel: ScalarSignal
    (set) (not available)
    ```
    
    Specifies a `ScalarSignal` representing the current microphone volume level.
    */
    const micVolumeLevel: ScalarSignal;
/** 
*  
 * play(audioSource: AudioSource): void
 *  
 * 
 * Creates a new playing instance of the sound associated with this AudioSource.
 */function play(audioSource: AudioSource): void
        ;

/** 
*  
 * stopAll(audioSource: AudioSource): void
 *  
 * 
 * Stops all playing instances of this AudioSource.
 */function stopAll(audioSource: AudioSource): void
        ;

/** 
*  
 * isPlaying(audioSource: AudioSource): BoolSignal
 *  
 * 
 * Returns a `BooleanSignal` indicating whether the specified audio source is playing.
 */function isPlaying(audioSource: AudioSource): BoolSignal
        ;

/** 
*  
 * getPlaybackController(name: String): PlaybackController
 *  
 * Get a playback controller from assets by name.
 */function getPlaybackController(name: String): PlaybackController
        ;

/** 
*  
 * unmuteMicrophone(): void
 *  
 * 
 * Unmutes the microphone, setting the volume level to its last non-zero value.
 */function unmuteMicrophone(): void
        ;

/** 
*  
 * minProgress(audioSource: AudioSource): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` indicating the timestamp of the played audio source instance with lowest timestamp. A value of zero is returned if the audio source is not currently playing.
 */function minProgress(audioSource: AudioSource): ScalarSignal
        ;

/** 
*  
 * getAudioComponent(id: string): AudioComponent
 *  
 * 
 * Returns an `AudioComponent` corresponding to the DSP effect with the corresponding id.
 */function getAudioComponent(id: string): AudioComponent
        ;

/** 
*  
 * muteMicrophone(): void
 *  
 * 
 * Sets the microphone volume level to zero.
 */function muteMicrophone(): void
        ;

}
export = AudioModule;