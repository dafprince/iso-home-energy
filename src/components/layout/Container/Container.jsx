/* ========================================
   CONTAINER COMPONENT - ISO HOME ENERGY
   Conteneur responsive
   ======================================== */

import './Container.css';

/**
 * Composant Container
 * @param {ReactNode} children - Contenu
 * @param {boolean} fluid - Pleine largeur
 * @param {string} className - Classes additionnelles
 */
const Container = ({ 
  children, 
  fluid = false,
  className = '',
  ...props 
}) => {
  const containerClasses = [
    fluid ? 'container-fluid' : 'container',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

export default Container;