import queryString from 'query-string';
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ResultsList } from '../components/music/ResultsList';
import styles from '../components/music/results.module.scss';

export const ResultsPage = () => {


    const location = useLocation();
    const { q } = queryString.parse(location.search);

    const [search, setSearch] = useState(q);

    if (!q) return <Navigate to="/" />


    return (
        <div className="container">
            <div className={styles.inputContainer}>
                <img src="https://img.icons8.com/ios-glyphs/25/80849f/search--v1.png" />
                <input
                    type="search"
                    value={search?.toString()}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Búsca canciones o artistas"
                />
            </div>

            <ResultsList />
        </div>
    )
}
