/* ========================================
   NAVIGATION - AVEC 6 SERVICES
   ======================================== */

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../../../data/services';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <nav className="navigation">
      <Link 
        to="/" 
        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
      >
        Accueil
      </Link>

      <div 
        className="nav-dropdown" 
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className="nav-link"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
        >
          <span>Services</span>
          <span className={`nav-arrow ${isServicesOpen ? 'open' : ''}`}>▼</span>
        </button>

        {isServicesOpen && (
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-content">
              {servicesData.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="nav-dropdown-item"
                  onClick={() => setIsServicesOpen(false)}
                >
                  <span className="nav-dropdown-icon">{service.icon}</span>
                  <div className="nav-dropdown-text">
                    <div className="nav-dropdown-name">{service.name}</div>
                    <div className="nav-dropdown-desc">{service.shortDescription}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link 
        to="/a-propos" 
        className={`nav-link ${location.pathname === '/a-propos' ? 'active' : ''}`}
      >
        À Propos
      </Link>

      <Link 
        to="/realisations" 
        className={`nav-link ${location.pathname === '/realisations' ? 'active' : ''}`}
      >
        Réalisations
      </Link>

      <Link 
        to="/aides" 
        className={`nav-link ${location.pathname === '/aides' ? 'active' : ''}`}
      >
        Aides
      </Link>

      <Link 
        to="/contact" 
        className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;