import queryString from 'query-string';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ResultsList } from '../components/music/ResultsList';
import styles from '../components/music/results.module.scss';
import { getMusicData } from '../helpers/getMusicData';
import { MusicData } from '../interfaces/Music';

export const ResultsPage = () => {

    const location = useLocation();
    const { q } = queryString.parse(location.search);

    const [search, setSearch] = useState(q);
    const [musicData, setMusicData] = useState<MusicData[]>();

    useEffect(
        () => {

            if (q) {
                getMusicData(q.toString()).then(res => setMusicData(res))
            }

        }, [setMusicData]
    )


    if (!q) return <Navigate to="/" />
    if (!musicData) return <h1>Loading</h1>


    return (
        <div className="container">

            <div>
                <div className={styles.inputContainer}>
                    <img src="https://img.icons8.com/ios-glyphs/25/80849f/search--v1.png" />
                    <input
                        type="text"
                        value={search?.toString()}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Búsca canciones o artistas"
                    />
                </div>
            </div>

            {
                musicData.map(music => (
                    <ResultsList
                        key={music.id}
                        title={music.title}
                        artist={music.artist.name}
                        imgPath={music.album.cover_medium}
                        duration={music.duration}
                    />
                ))
            }

        </div>
    )
}
