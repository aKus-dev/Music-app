import styles from './play.module.scss';

export const Range = () => {
    return (
        <div className={styles.rangeContainer}>
            <input type="range" />
            <span className={styles.actualTime}>0</span>
            <span className={styles.totalTime}>30</span>
        </div>
    )
}
