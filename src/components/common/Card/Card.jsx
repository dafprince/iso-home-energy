/* ========================================
   CARD COMPONENT - ISO HOME ENERGY
   Carte réutilisable pour afficher du contenu
   ======================================== */

import './Card.css';

/**
 * Composant Card
 * @param {ReactNode} children - Contenu de la carte
 * @param {boolean} hover - Effet hover
 * @param {boolean} shadow - Ombre portée
 * @param {string} className - Classes CSS additionnelles
 */
const Card = ({ 
  children, 
  hover = true,
  shadow = true,
  className = '',
  ...props 
}) => {
  const cardClasses = [
    'card',
    hover && 'card-hover',
    shadow && 'card-shadow',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;