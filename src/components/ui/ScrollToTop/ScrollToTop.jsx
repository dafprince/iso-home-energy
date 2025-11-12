/* ========================================
   SCROLL TO TOP - ULTRA PREMIUM
   Bouton retour en haut avec animation
   ======================================== */

import { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      {/* Progress Circle */}
      <svg className="scroll-progress-circle" viewBox="0 0 100 100">
        <circle
          className="scroll-progress-bg"
          cx="50"
          cy="50"
          r="46"
        />
        <circle
          className="scroll-progress-bar"
          cx="50"
          cy="50"
          r="46"
          style={{
            strokeDashoffset: 289 - (289 * scrollProgress) / 100
          }}
        />
      </svg>

      {/* Arrow Icon */}
      <svg 
        className="scroll-arrow" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 19V5M5 12L12 5L19 12" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;