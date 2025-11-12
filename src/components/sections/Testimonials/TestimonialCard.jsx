/* ========================================
   TESTIMONIAL CARD - ISO HOME ENERGY
   Carte pour afficher un témoignage client
   ======================================== */

import './TestimonialCard.css';

/**
 * Composant TestimonialCard
 * @param {object} testimonial - Données du témoignage
 */
const TestimonialCard = ({ testimonial }) => {
  // Générer les étoiles
  const renderStars = () => {
    return '⭐'.repeat(testimonial.rating);
  };

  return (
    <div className="testimonial-card">
      {/* Header */}
      <div className="testimonial-card-header">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="testimonial-card-avatar"
        />
        <div className="testimonial-card-info">
          <h4 className="testimonial-card-name">{testimonial.name}</h4>
          <p className="testimonial-card-location">📍 {testimonial.location}</p>
        </div>
      </div>

      {/* Rating & Service */}
      <div className="testimonial-card-meta">
        <span className="testimonial-card-stars">{renderStars()}</span>
        <span className="testimonial-card-service">{testimonial.service}</span>
      </div>

      {/* Comment */}
      <p className="testimonial-card-comment">
        "{testimonial.comment}"
      </p>

      {/* Date */}
      <p className="testimonial-card-date">
        {new Date(testimonial.date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </div>
  );
};

export default TestimonialCard;