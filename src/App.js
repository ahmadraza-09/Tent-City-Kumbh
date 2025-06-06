import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import ThanksPage from './pages/thanks-page';
import KumbhMapPage from './pages/kumbh-map-page';
import MahakumbhPage from './pages/mahakumbh-page';
import AboutPage from './pages/about-page';
import KumbhGalleryPage from './pages/kumbh-gallery-page';
import TentBookingPage from './pages/tent-booking-page';
import ShahiSnanPage from './pages/shahi-snan-page';
import HotelBookingPage from './pages/hotel-booking';
import TransportBookingPage from './pages/transport-booking-page';


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
          <Route path='/mahakumbh/tent-booking' element={<TentBookingPage />} />
          <Route path='/mahakumbh/hotel-booking' element={<HotelBookingPage />} />
          <Route path='/mahakumbh/transport-booking' element={<TransportBookingPage />} />
          <Route path='/mahakumbh/shahi-snan' element={<ShahiSnanPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
