/* ========================================
   SERVICE CARD - ISO HOME ENERGY
   Carte pour afficher un service
   ======================================== */

import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './ServiceCard.css';

/**
 * Composant ServiceCard
 * @param {object} service - Données du service
 */
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      {/* Image */}
      <div className="service-card-image">
        <img 
          src={service.thumbnail || service.image} 
          alt={service.name}
          loading="lazy"
        />
        {service.featured && (
          <div className="service-card-badge">⭐ Populaire</div>
        )}
      </div>

      {/* Contenu */}
      <div className="service-card-content">
        <h3 className="service-card-title">{service.name}</h3>
        <p className="service-card-description">{service.shortDescription}</p>

        {/* Infos */}
        <div className="service-card-info">
          <div className="service-card-info-item">
            <span className="icon">⏱️</span>
            <span>{service.dureeChantier}</span>
          </div>
          <div className="service-card-info-item">
            <span className="icon">🛡️</span>
            <span>{service.garantie}</span>
          </div>
        </div>

        {/* Bouton */}
        <Link to={service.route}>
          <Button variant="primary" fullWidth>
            En savoir plus
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;