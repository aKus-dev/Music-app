import { useState, ChangeEvent } from 'react';
import styles from './search.module.scss';

export const SearchMusic = () => {

    const [search, setSearch] = useState('')

    const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <div className={styles.container}>

            <input
                className={styles.input}
                value={search}
                onChange={handleSearchChange}
                placeholder="Búsca una canción..."
                type="text" /
            >

            <div className={styles.info}>
                <span>Además puedes buscar por bandas, géneros o artistas.</span>
            </div>
        </div>
    )
}
