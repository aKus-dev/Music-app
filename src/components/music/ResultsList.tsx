import styles from './results.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export const ResultsList = () => {
  return (
    <div className={styles.resultsContainer}>
      <img src="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/5/8/1/a/27594.jpg" alt="" />

      <div className={styles.infoContainer}>
        <h2>One for the money</h2>
        <span className={styles.group}>Escape the fate</span>
        <span className={styles.duration}>3m</span>
      </div>

      <div className={styles.play}>
        <FontAwesomeIcon icon={faPlay} size="2x" />
      </div>
    </div>
  )
}
