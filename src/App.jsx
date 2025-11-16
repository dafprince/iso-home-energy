/* ========================================
   APP - AVEC LOADER PREMIUM
   ======================================== */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { Layout, NotificationContainer, Modal } from './components';
import PageLoader from './components/ui/PageLoader';
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
import Estimation from './pages/Estimation/Estimation';
//==============================
import './styles/variables.css';
import './styles/reset.css';
import './styles/typography.css';
import './styles/utilities.css';
import './styles/responsive.css';
import './styles/animations.css';
import './styles/mobile.css';  // ⬅️ AJOUTER CETTE LIGNE À LA FIN !
import './App.css';
import './App.css';

// Composant pour gérer le loading lors des changements de route
const AppContent = () => {
  const location = useLocation();
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // Démarrer le loader
    startLoading();

    // Scroll to top
    window.scrollTo(0, 0);

    // Arrêter le loader après un court délai
    const timer = setTimeout(() => {
      stopLoading();
    }, 1000); // 1 seconde

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]); // ⬅️ SEULEMENT location.pathname dans les dépendances !

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/aides" element={<Aides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eligibilite" element={<Eligibilite />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      
      <NotificationContainer />
      <Modal />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
};

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
}

export default App;