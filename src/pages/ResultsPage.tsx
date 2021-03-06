import { ResultsList, Loading, SearchList } from '../components';
import styles from '../components/music/results.module.scss';

import queryString from 'query-string';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMusicData } from '../helpers/getMusicData';
import { MusicData } from '../interfaces/Music';



export const ResultsPage = () => {

    const location = useLocation();
    const { q } = queryString.parse(location.search);

    const [musicData, setMusicData] = useState<MusicData[]>();

    useEffect(
        () => {
            if (q) {
                getMusicData(q.toString()).then(res => setMusicData(res))
            }
        }, [setMusicData, q]
    )

    if (!q) return <Navigate to="/" />
    if (!musicData) return <Loading />


    return (
        <div className="container">
            <SearchList q={q.toString()} />

            <div className={styles.musicGrid}>
                {
                    musicData.length > 0
                        ? musicData.map(music => (
                            <ResultsList
                                key={music.id}
                                title={music.title}
                                artist={music.artist.name}
                                imgPath={music.album.cover_big}
                                duration={music.duration}
                                mp3={music.preview}
                            />
                        ))
                        : <h1 className="text-center not-found">No se encontraron resultados</h1>

                }
            </div>

        </div>
    )
}
