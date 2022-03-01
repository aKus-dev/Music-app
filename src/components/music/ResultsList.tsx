import styles from './results.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

interface ResultListProps {
  title: string;
  artist: string;
  imgPath: string;
  duration: number;
}

export const ResultsList = ({ title, artist, imgPath, duration }: ResultListProps) => {

  // Paso de segundos a minutos
  duration = duration / 60;

  return (
    <div className={styles.resultsContainer}>
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
