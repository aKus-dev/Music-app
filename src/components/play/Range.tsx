import { ChangeEvent, useState, useEffect } from 'react';
import styles from './play.module.scss';

interface RangeProps {
    audio: HTMLAudioElement;
}

export const Range = ({ audio }: RangeProps) => {

    const [time, setTime] = useState(audio.currentTime)

    const handleRange = (e:ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = parseInt(e.target.value);
    }

    audio.ontimeupdate = (e: any) => {
        setTime(
            Math.round(e.path[0].currentTime)
        );
    }

    return (
        <div className={styles.rangeContainer}>
            <input type="range" min={0} max={30} value={time} onChange={handleRange} />
            <span className={styles.actualTime}>{time}</span>
            <span className={styles.totalTime}>30</span>

        </div>
    )
}
