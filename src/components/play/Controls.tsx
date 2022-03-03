import styles from './play.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { useControls } from '../../hooks/useControls';

interface RangeProps {
    audio: HTMLAudioElement;
}

export const Controls = ({ audio }: RangeProps) => {

    const {
        handleBackward,
        handleFordward,
        handleIsplaying,
        isPlaying,
        time,
        handleRange
    } = useControls(audio);

    return (
        <>
            {/* Range controls */}
            <div className={styles.rangeContainer}>
                <input type="range" min={0} max={30} value={time} onChange={handleRange} />
                <span className={styles.actualTime}>{time}</span>
                <span className={styles.totalTime}>30</span>
            </div>

            {/* Backward, pause/play and forward buttons*/}
            <div className={styles.controls}>
                <button onClick={handleBackward}>
                    <FontAwesomeIcon icon={faBackward} size="2x" color="#c9c9cf" />
                </button>

                <div className={styles.play} onClick={handleIsplaying}>
                    {
                        isPlaying && time < 30
                            ? <FontAwesomeIcon icon={faPause} size="2x" color="#c9c9cf" />
                            : <FontAwesomeIcon icon={faPlay} size="2x" color="#c9c9cf" />
                    }
                </div>

                <button onClick={handleFordward}>
                    <FontAwesomeIcon icon={faForward} size="2x" color="#c9c9cf" />
                </button>
            </div>
        </>
    )
}
