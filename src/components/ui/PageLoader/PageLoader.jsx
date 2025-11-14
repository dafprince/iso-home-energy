/* ========================================
   PAGE LOADER - ULTRA PREMIUM
   Logo + Barre + Dots + Spinner
   ======================================== */

import { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo2.png';
import './PageLoader.css';

const PageLoader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  // Animation de la barre de progression
  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return 90;
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

  // Animation des dots
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots(prev => {
          if (prev === '...') return '';
          return prev + '.';
        });
      }, 400);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!isLoading && progress < 100) return null;

  return (
    <div className={`page-loader ${!isLoading && progress === 100 ? 'page-loader-exit' : ''}`}>
      <div className="page-loader-overlay"></div>
      
      <div className="page-loader-content">
        {/* SPINNER CIRCULAIRE */}
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>

        {/* LOGO ANIMÉ */}
        <div className="loader-logo">
          <img src={logo} alt="ISO HOME ENERGY" />
        </div>

        {/* TEXTE + DOTS */}
        <div className="loader-text">
          <span className="loader-text-main">Chargement</span>
          <span className="loader-dots">{dots}</span>
        </div>

        {/* BARRE DE PROGRESSION */}
        <div className="loader-progress">
          <div className="loader-progress-bar">
            <div 
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loader-progress-text">
            {Math.round(progress)}%
          </div>
        </div>

        {/* MESSAGE */}
        <p className="loader-message">
          Préparation de votre expérience premium
        </p>
      </div>
    </div>
  );
};

export default PageLoader;