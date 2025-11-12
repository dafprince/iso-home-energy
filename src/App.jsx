import { Routes, Route } from 'react-router-dom';
import { Layout, NotificationContainer, Modal } from './components';
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';

// Pages
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Eligibilite from './pages/Eligibilite/Eligibilite';
import ServicePage from './pages/Services/ServicePage';
import APropos from './pages/APropos/APropos';
import Realisations from './pages/Realisations/Realisations';
import Aides from './pages/Aides/Aides';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/aides" element={<Aides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eligibilite" element={<Eligibilite />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      
      <NotificationContainer />
      <Modal />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App;