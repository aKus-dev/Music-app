import { useEffect, useState } from 'react';


export const useControls = (audio: HTMLAudioElement) => {

    const [isPlaying, setIsPlaying] = useState(false);

    // Efects
    useEffect(
        () => {

            isPlaying ? audio.pause() : audio.play();

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

    return {
        handleBackward,
        handleFordward,
        handleIsplaying,
        isPlaying
    }

}