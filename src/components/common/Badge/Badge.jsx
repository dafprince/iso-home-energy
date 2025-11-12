/* ========================================
   BADGE COMPONENT - ISO HOME ENERGY
   Badge/Étiquette réutilisable
   ======================================== */

import './Badge.css';

/**
 * Composant Badge
 * @param {ReactNode} children - Contenu du badge
 * @param {string} variant - Variante ('primary', 'secondary', 'success', 'warning', 'error')
 * @param {string} size - Taille ('small', 'medium', 'large')
 */
const Badge = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props 
}) => {
  const badgeClasses = [
    'badge',
    `badge-${variant}`,
    `badge-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;