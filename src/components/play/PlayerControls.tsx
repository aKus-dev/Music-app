import styles from './play.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react';
import { SongContext } from '../../context/SongContext';
import { useControls } from '../../hooks/useControls';
import { Range } from '../';


export const PlayerControls = () => {

    const { mp3 } = useContext(SongContext);
    const audio = new Audio(mp3);

    const {
        handleBackward,
        handleFordward,
        handleIsplaying,
        isPlaying
    } = useControls(audio);


    return (
        <>
            <Range audio={audio} />

            <div className={styles.controls}>
                <button onClick={handleBackward}>
                    <FontAwesomeIcon icon={faBackward} size="2x" color="#c9c9cf" />
                </button>

                <div className={styles.play} onClick={handleIsplaying}>
                    {
                        isPlaying
                            ? <FontAwesomeIcon icon={faPlay} size="2x" color="#c9c9cf" />
                            : <FontAwesomeIcon icon={faPause} size="2x" color="#c9c9cf" />
                    }
                </div>

                <button onClick={handleFordward}>
                    <FontAwesomeIcon icon={faForward} size="2x" color="#c9c9cf" />
                </button>
            </div>
        </>
    )
}
