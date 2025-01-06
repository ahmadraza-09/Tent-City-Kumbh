import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import ThanksPage from './pages/thanks-page';
import KumbhMapPage from './pages/kumbh-map-page';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/thanks' element={<ThanksPage />} />
          <Route path='/kumbh-map' element={<KumbhMapPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
