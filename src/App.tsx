import { Route, Routes } from 'react-router-dom'
import { QuotesPage } from './pages/QuotesPage'
import { Navigation } from './components/Navigation'
import { QuotesByTagPage } from './pages/QuotesByTagPage';

function App() {
  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/quotes-app" element={<QuotesPage />} />
          <Route path="/tag/:tagname" element={<QuotesByTagPage />} />
        </Routes>
    </>
  )
}

export default App;
