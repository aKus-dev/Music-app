import styles from '../components/play/play.module.scss';
import { Controls } from '../components';

export const PlayPage = () => {
  return (
    <div className="container bg-light">
      <h3 className={styles.artist}>Escape the fate</h3>

      <img className={styles.img} src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b9/8a/d3/b98ad345-1044-d13f-c733-c404902e7d79/source/300x300bb.png" alt="" />
      <h1 className={styles.song}>One for the money</h1>

      <Controls />
      
    </div>
  )
}
