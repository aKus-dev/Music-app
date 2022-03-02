import { PlayerControls } from '../';
import styles from './play.module.scss';

export const Controls = () => {
    return (
        <div className={styles.controlContainer}>
            <PlayerControls />
        </div>
    )
}
