import { useState } from 'react';
import styles from './play.module.scss';

interface RangeProps {
    audio:HTMLAudioElement;
}

export const Range = ({audio}: RangeProps) => {


    return (
        <div className={styles.rangeContainer}>
            <input type="range" />
            <span className={styles.actualTime}>0</span>
            <span className={styles.totalTime}>30</span>
        </div>
    )
}
