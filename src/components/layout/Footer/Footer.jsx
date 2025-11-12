/* ========================================
   FOOTER - ISO HOME ENERGY
   Footer premium avec toutes les informations
   ======================================== */

import { Link } from 'react-router-dom';
import { COMMON_TEXTS, CONTACT, SOCIAL } from '../../../utils/constants';
import { servicesData } from '../../../data/services';
import { formatPhoneNumber } from '../../../utils/formatters';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Section principale */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* COLONNE 1 : À PROPOS */}
            <div className="footer-col">
              <div className="footer-brand">
                <h3 className="footer-brand-name">{COMMON_TEXTS.company.name}</h3>
                <p className="footer-brand-tagline">{COMMON_TEXTS.company.tagline}</p>
              </div>
              <p className="footer-description">
                Expert en rénovation énergétique dans les Vosges et le Grand Est. 
                Nous vous accompagnons dans tous vos projets d'isolation, façade, 
                pompe à chaleur et menuiserie avec un financement jusqu'à 100%.
              </p>
              <div className="footer-certifications">
                <div className="footer-cert-badge">🏆 RGE</div>
                <div className="footer-cert-badge">✓ Qualibat</div>
                <div className="footer-cert-badge">⭐ A+</div>
              </div>
            </div>

            {/* COLONNE 2 : SERVICES */}
            <div className="footer-col">
              <h4 className="footer-title">Nos Services</h4>
              <ul className="footer-links">
                {servicesData.map(service => (
                  <li key={service.id}>
                    <Link to={service.route} className="footer-link">
                      <span className="footer-link-icon">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLONNE 3 : LIENS RAPIDES */}
            <div className="footer-col">
              <h4 className="footer-title">Liens Rapides</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/" className="footer-link">
                    <span className="footer-link-icon">🏠</span>
                    <span>Accueil</span>
                  </Link>
                </li>
                <li>
                  <Link to="/eligibilite" className="footer-link">
                    <span className="footer-link-icon">🎯</span>
                    <span>Test d'Éligibilité</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    <span className="footer-link-icon">📧</span>
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <a href="#faq" className="footer-link">
                    <span className="footer-link-icon">❓</span>
                    <span>FAQ</span>
                  </a>
                </li>
                <li>
                  <a href="#temoignages" className="footer-link">
                    <span className="footer-link-icon">⭐</span>
                    <span>Témoignages</span>
                  </a>
                </li>
                <li>
                    <Link to="/a-propos" className="footer-link">
                        <span className="footer-link-icon">ℹ️</span>
                        <span>À Propos</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/realisations" className="footer-link">
                        <span className="footer-link-icon">📸</span>
                        <span>Réalisations</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/aides" className="footer-link">
                        <span className="footer-link-icon">💰</span>
                        <span>Aides Financières</span>
                    </Link>
                    </li>
              </ul>
            </div>

            {/* COLONNE 4 : CONTACT */}
            <div className="footer-col">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-contact">
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">📞</span>
                  <div>
                    <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                      {formatPhoneNumber(CONTACT.phones.primary)}
                    </a>
                    <a href={`tel:${CONTACT.phones.secondary.replace(/\s/g, '')}`}>
                      {formatPhoneNumber(CONTACT.phones.secondary)}
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">✉️</span>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">📍</span>
                  <span>{CONTACT.address.full}</span>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">🕐</span>
                  <div>
                    <span>{CONTACT.hours.weekdays}</span>
                    <span>{CONTACT.hours.saturday}</span>
                  </div>
                </li>
              </ul>

              {/* Réseaux sociaux */}
              {SOCIAL && (
                <div className="footer-social">
                  {SOCIAL.facebook && (
                    <a 
                      href={SOCIAL.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      aria-label="Facebook"
                    >
                      <span>f</span>
                    </a>
                  )}
                  {SOCIAL.instagram && (
                    <a 
                      href={SOCIAL.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      aria-label="Instagram"
                    >
                      <span>📷</span>
                    </a>
                  )}
                  {SOCIAL.linkedin && (
                    <a 
                      href={SOCIAL.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      aria-label="LinkedIn"
                    >
                      <span>in</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} {COMMON_TEXTS.company.name}. Tous droits réservés.
            </p>
            <div className="footer-legal">
              <Link to="/mentions-legales" className="footer-legal-link">
                Mentions Légales
              </Link>
              <span className="footer-separator">•</span>
              <Link to="/politique-confidentialite" className="footer-legal-link">
                Politique de Confidentialité
              </Link>
              <span className="footer-separator">•</span>
              <Link to="/cgv" className="footer-legal-link">
                CGV
              </Link>
            </div>
            <p className="footer-credit">
              Conçu avec 💚 par <strong>ISO HOME ENERGY</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;