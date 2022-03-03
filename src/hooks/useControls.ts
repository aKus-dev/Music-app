import { ChangeEvent, useEffect, useState } from 'react';

export const useControls = (audio: HTMLAudioElement) => {

    const [isPlaying, setIsPlaying] = useState(true);
    const [time, setTime] = useState(audio.currentTime)

    // Efects
    useEffect(
        () => {

            isPlaying ? audio.play() : audio.pause();

        }, [isPlaying]
    )

    useEffect(
        () => {

            return () => {
                audio.pause();
            }

        }, [audio]
    )

    // Events functions
    const handleIsplaying = () => {
        setIsPlaying(!isPlaying);
    }

    const handleBackward = () => {
        audio.currentTime = audio.currentTime - 5;
    }

    const handleFordward = () => {
        audio.currentTime = audio.currentTime + 5;
    }

    const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = parseInt(e.target.value);
    }

    audio.ontimeupdate = (e: any) => {
        setTime(
            Math.round(e.path[0].currentTime)
        );

        if (time >= 30) {
            console.log('a')
            setIsPlaying(false);
            setTime(0);
            e.path[0].currentTime = 0;
        }
    }


    return {
        handleBackward,
        handleFordward,
        handleIsplaying,
        isPlaying,
        time,
        handleRange
    }

}