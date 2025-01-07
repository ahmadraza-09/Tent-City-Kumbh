import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import ThanksPage from './pages/thanks-page';
import KumbhMapPage from './pages/kumbh-map-page';
import MahakumbhPage from './pages/mahakumbh-page';
import AboutPage from './pages/about-page';
import KumbhGalleryPage from './pages/kumbh-gallery-page';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/thanks' element={<ThanksPage />} />
          <Route path='/kumbh-map' element={<KumbhMapPage />} />
          <Route path='/kumbh-gallery' element={<KumbhGalleryPage />} />
          <Route path='/mahakumbh' element={<MahakumbhPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
