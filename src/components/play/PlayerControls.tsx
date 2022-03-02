import styles from './play.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

export const PlayerControls = () => {
    return (
        <div className={styles.controls}>
            <FontAwesomeIcon icon={faBackward} size="3x" color="#c9c9cf" />

            <div className={styles.play}>
                <FontAwesomeIcon icon={faPlay} size="2x" color="#c9c9cf" />
                {/*          <FontAwesomeIcon icon={faPause} size="2x" color="#c9c9cf" /> */}
            </div>

            <FontAwesomeIcon icon={faForward} size="3x" color="#c9c9cf" />
        </div>
    )
}
