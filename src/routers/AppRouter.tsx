import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SongContextProvider } from '../context/SongContextProvider';
import { HomePage, ResultsPage, PlayPage } from '../pages';
import { ScrollToTop } from '../components';


export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop>
        <SongContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/play" element={<PlayPage />} />
          </Routes>
        </SongContextProvider>
      </ScrollToTop>
    </Router>
  )
}
