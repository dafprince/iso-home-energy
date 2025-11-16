/* ========================================
   FOOTER - VERSION FINALE SELON DESSIN
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
          
          {/* ========== COLONNE 1 : LOGO + SUIVEZ NOUS ========== */}
          <div className="footer-col footer-col-brand">
            {/* Logo + Nom sur la même ligne */}
            <div className="brand-header">
              <img src={logo} alt={COMMON_TEXTS.company.name} className="brand-logo" />
              <h3 className="brand-name">{COMMON_TEXTS.company.name}</h3>
            </div>

            {/* Description */}
            <p className="brand-description">
              {COMMON_TEXTS.company.description}. Nous vous accompagnons pour améliorer 
              le confort de votre logement et réduire vos factures d'énergie dans les 
              Vosges et le Grand Est.
            </p>

            {/* Séparateur */}
            <div className="brand-separator"></div>

            {/* Suivez-nous */}
            <div className="brand-social-section">
              <h5 className="social-title">SUIVEZ NOUS</h5>
              <p className="social-text">
                Restez connectés pour ne rien manquer de nos actualités, technologies et nouveautés
              </p>
              <div className="brand-social">
                {SOCIAL.facebook && (
                  <a 
                    href={SOCIAL.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook"
                    className="social-icon"
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
                    className="social-icon"
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
                    className="social-icon"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ========== COLONNE 2 : LIENS RAPIDES ========== */}
          <div className="footer-col footer-col-links">
            <h4 className="col-title">LIEN RAPIDE</h4>
            <nav className="links-list">
              <Link to="/">Accueil</Link>
              <Link to="/a-propos">À Propos</Link>
              <Link to="/services">Nos Services</Link>
              <Link to="/realisations">Réalisations</Link>
              <Link to="/aides">Aides Financières</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/estimation">Estimation Gratuite</Link>
              <Link to="/eligibilite">Tester mon Éligibilité</Link>
            </nav>
          </div>

          {/* ========== COLONNE 3 : CONTACT + HORAIRES ========== */}
          <div className="footer-col footer-col-contact">
            <h4 className="col-title">CONTACT</h4>
            
            {/* Adresse */}
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <strong>ADRESSE</strong>
                <p>{CONTACT.address.street}</p>
                <p>{CONTACT.address.postalCode} {CONTACT.address.city}</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-text">
                <strong>TÉLÉPHONE</strong>
                <p>
                  <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                    {CONTACT.phones.primary}
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-text">
                <strong>EMAIL</strong>
                <p>
                  <a href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Séparateur */}
            <div className="contact-separator"></div>

            {/* Horaires */}
            <div className="contact-hours">
              <strong>HORAIRE</strong>
              <p>{CONTACT.hours.weekdays}</p>
              <p>{CONTACT.hours.saturday}</p>
              <p>{CONTACT.hours.sunday}</p>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {currentYear} {COMMON_TEXTS.company.name}. Tous droits réservés.</p>
            <div className="footer-legal">
              <Link to="/mentions-legales">Mentions légales</Link>
              <span>•</span>
              <Link to="/politique-confidentialite">Politique de confidentialité</Link>
              <span>•</span>
              <Link to="/cgv">CGV</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;