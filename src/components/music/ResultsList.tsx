import styles from './results.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { SongContext } from '../../context/SongContext';
import { useNavigate } from 'react-router-dom';

interface ResultListProps {
  title: string;
  artist: string;
  imgPath: string;
  duration: number;
  mp3:string;
}

export const ResultsList = ({ title, artist, imgPath, duration, mp3 }: ResultListProps) => {

  // Paso de segundos a minutos
  duration = duration / 60;

  const navigate = useNavigate();

  const {setMp3, setImgPath, setArtist, setSongName} = useContext(SongContext);

  const handlePlayClick = (mp3:string) => {
    setMp3(mp3);
    setImgPath(imgPath);
    setArtist(artist);
    setSongName(title);
    navigate('/play');
  }

  return (
    <div className={styles.resultsContainer} onClick={() => handlePlayClick(mp3)}>
      <img src={imgPath} alt="" />

      <div className={styles.infoContainer}>
        <h2>{title}</h2>
        <span className={styles.group}>{artist}</span>
        <span className={styles.duration}>{Math.round(duration)}m</span>
      </div>

      <div className={styles.play}>
        <FontAwesomeIcon icon={faPlay} size="2x" />
      </div>
    </div>
  )
}
