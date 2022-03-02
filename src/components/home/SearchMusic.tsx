import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './search.module.scss';

export const SearchMusic = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/results?q=${search.trim()}`);
    }

    return (
        <div className={styles.container}>

            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    placeholder="Búsca una canción..."
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>


            <div className={styles.info}>
                <span>Además puedes buscar por bandas, géneros o artistas.</span>
            </div>
        </div>
    )
}
