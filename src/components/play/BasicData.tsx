import styles from './play.module.scss';
import { useContext } from 'react';
import { SongContext } from '../../context/SongContext';

export const BasicData = () => {
    
    const {artist, imgPath, songName} = useContext(SongContext);

    return (
        <div>
            <h3 className={styles.artist}>{artist}</h3>

            <img className={styles.img} src={imgPath} alt={artist} />
            <h1 className={styles.song}>{songName}</h1>
        </div>
    )
}
