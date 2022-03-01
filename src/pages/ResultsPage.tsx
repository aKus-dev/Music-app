import queryString from 'query-string';
import { Navigate, useLocation } from 'react-router-dom';

export const ResultsPage = () => {

    const location = useLocation();  
    const { q } = queryString.parse(location.search);

    if(!q) return <Navigate to="/" />


    return (
        <div className="container">
            <input type="search" value={q.toString()}  />
        </div>
    )
}
