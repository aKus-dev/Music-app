import styles from './results.module.scss';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchListProps {
    q: string;
}

export const SearchList = ({ q }: SearchListProps) => {

    const navigate = useNavigate();
    const [search, setSearch] = useState(q);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/results?q=${search.trim()}`);
    }

    return (
        <div>
            <div className={styles.inputContainer}>
                <img src="https://img.icons8.com/ios-glyphs/25/80849f/search--v1.png" />

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={search?.toString()}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Búsca canciones o artistas"
                    />
                </form>
            </div>
        </div>
    )
}
