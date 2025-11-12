/* ========================================
   MOBILE MENU - ISO HOME ENERGY
   Menu mobile premium avec animations
   ======================================== */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { servicesData } from '../../../data/services';
import { CONTACT } from '../../../utils/constants';
import './MobileMenu.css';

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useApp();
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  const handleLinkClick = () => {
    closeMobileMenu();
    setIsServicesExpanded(false);
  };

  if (!isMobileMenuOpen) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      
      <div className="mobile-menu-content">
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={handleLinkClick}>
            <span>🏠</span>
            <span>Accueil</span>
          </Link>

          {/* Services Expandable */}
          <div className="mobile-nav-section">
            <button 
              className={`mobile-nav-link ${isServicesExpanded ? 'active' : ''}`}
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
            >
              <span>⚙️</span>
              <span>Services</span>
              <span className={`mobile-nav-arrow ${isServicesExpanded ? 'open' : ''}`}>▼</span>
            </button>

            {isServicesExpanded && (
              <div className="mobile-nav-submenu">
                {servicesData.map(service => (
                  <Link
                    key={service.id}
                    to={service.route}
                    className="mobile-nav-sublink"
                    onClick={handleLinkClick}
                  >
                    <span>{service.icon}</span>
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/eligibilite" className="mobile-nav-link" onClick={handleLinkClick}>
            <span>🎯</span>
            <span>Test d'Éligibilité</span>
          </Link>

          <Link to="/contact" className="mobile-nav-link" onClick={handleLinkClick}>
            <span>📧</span>
            <span>Contact</span>
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="mobile-menu-contact">
          <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`} className="mobile-contact-btn">
            <span>📞</span>
            <span>{CONTACT.phones.primary}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="mobile-contact-btn">
            <span>✉️</span>
            <span>{CONTACT.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;