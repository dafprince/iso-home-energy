/* ========================================
   BUTTON COMPONENT - ISO HOME ENERGY
   Bouton réutilisable avec plusieurs variantes
   ======================================== */

import './Button.css';

/**
 * Composant Button
 * @param {string} variant - Variante du bouton ('primary', 'secondary', 'outline', 'ghost')
 * @param {string} size - Taille ('small', 'medium', 'large')
 * @param {boolean} fullWidth - Prendre toute la largeur
 * @param {boolean} disabled - Désactivé
 * @param {boolean} loading - État de chargement
 * @param {ReactNode} children - Contenu du bouton
 * @param {function} onClick - Fonction au clic
 */
const Button = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  // Classes CSS dynamiques
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full-width',
    loading && 'btn-loading',
    disabled && 'btn-disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="btn-spinner"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;