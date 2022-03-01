import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, ResultsPage } from '../pages';

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/results" element={ <ResultsPage /> } />
        </Routes>
    </Router>
  )
}
