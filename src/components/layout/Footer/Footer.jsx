/* ========================================
   FOOTER - MINIMALISTE CENTRÉ
   ======================================== */

import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CONTACT, COMMON_TEXTS, SOCIAL } from '../../../utils/constants';
import logo from '../../../assets/images/logo.jpg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* WAVE SEPARATOR */}
      <div className="footer-wave">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          
          {/* LOGO */}
          <div className="footer-logo-section">
            <img src={logo} alt={COMMON_TEXTS.company.name} className="footer-logo" />
          </div>

          {/* NAVIGATION */}
          <nav className="footer-nav">
            <Link to="/" className="footer-link">ACCUEIL</Link>
            <Link to="/services" className="footer-link">{COMMON_TEXTS.company.name}</Link>
            <Link to="/a-propos" className="footer-link">À PROPOS</Link>
            <Link to="/realisations" className="footer-link">NOS RÉALISATIONS</Link>
            <Link to="/aides" className="footer-link">AIDES FINANCIÈRES</Link>
            <Link to="/contact" className="footer-link">CONTACT</Link>
            <Link to="/estimation" className="footer-link">ESTIMATION GRATUITE</Link>
          </nav>

          {/* RÉSEAUX SOCIAUX */}
          <div className="footer-social">
            {SOCIAL.facebook && (
              <a 
                href={SOCIAL.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="social-link"
              >
                <FaFacebookF />
              </a>
            )}
            {SOCIAL.instagram && (
              <a 
                href={SOCIAL.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-link"
              >
                <FaInstagram />
              </a>
            )}
            {SOCIAL.linkedin && (
              <a 
                href={SOCIAL.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>

          {/* COPYRIGHT */}
          <div className="footer-copyright">
            <p>© {currentYear} {COMMON_TEXTS.company.name}</p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;