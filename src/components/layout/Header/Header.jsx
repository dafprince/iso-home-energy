/* ========================================
   HEADER - ULTRA PREMIUM AVEC LOGO ANIMÉ
   ======================================== */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMMON_TEXTS, CONTACT } from '../../../utils/constants';
import { useApp } from '../../../context/AppContext';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import logo from '../../../assets/images/logo2.png';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { isMobileMenuOpen, toggleMobileMenu } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-bg"></div>
        <div className="container">
          <div className="header-content">
            {/* LOGO AVEC ANIMATION */}
            <Link to="/" className="header-logo">
              <div className="header-logo-wrapper">
                <img 
                  src={logo}
                  alt="ISO HOME ENERGY" 
                  className="header-logo-img"
                />
                <div className="header-logo-shine"></div>
              </div>
            </Link>

            {/* NAVIGATION DESKTOP */}
            <Navigation />

            {/* ACTIONS */}
            <div className="header-actions">
              <a 
                href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`} 
                className="header-phone"
              >
                <span className="header-phone-icon">📞</span>
                <span className="header-phone-text">{CONTACT.phones.primary}</span>
              </a>

              <Link to="/eligibilite" className="header-cta">
                <span className="header-cta-text">Test Gratuit</span>
                <span className="header-cta-arrow">→</span>
              </Link>

              <button 
                className={`header-burger ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu />
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;