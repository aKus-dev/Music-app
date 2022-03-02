import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, ResultsPage, PlayPage } from '../pages';

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/results" element={ <ResultsPage /> } />
            <Route path="/play" element={ <PlayPage /> } />
        </Routes>
    </Router>
  )
}
