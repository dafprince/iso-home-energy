/* ========================================
   FOOTER - ULTRA MINIMALISTE PREMIUM
   ======================================== */

import { Link } from 'react-router-dom';
import { CONTACT } from '../../../utils/constants';
import logo from '../../../assets/images/logo.jpg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* LOGO & NEWSLETTER */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="ISO HOME ENERGY" />
            </Link>
            <p className="footer-tagline">
              Expert en rénovation énergétique
            </p>
            
            {/* NEWSLETTER */}
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Restez informé de nos actualités</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  required 
                />
                <button type="submit">
                  →
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-icon">📞</span>
                <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                  {CONTACT.phones.primary}
                </a>
              </li>
              <li>
                <span className="footer-icon">📧</span>
                <a href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="footer-icon">📍</span>
                <span>{CONTACT.address.full}</span>
              </li>
            </ul>
          </div>

          {/* HORAIRES */}
          <div className="footer-section">
            <h4>Horaires</h4>
            <ul className="footer-hours">
              <li>
                <span className="hours-day">Lun - Ven</span>
                <span className="hours-time">8h - 18h</span>
              </li>
              <li>
                <span className="hours-day">Samedi</span>
                <span className="hours-time">9h - 12h</span>
              </li>
              <li>
                <span className="hours-day">Dimanche</span>
                <span className="hours-time">Fermé</span>
              </li>
            </ul>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>📘</span> Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>📷</span> Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💼</span> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} ISO HOME ENERGY. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;