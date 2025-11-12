/* ========================================
   SECTION COMPONENT - ISO HOME ENERGY
   Section de page réutilisable
   ======================================== */

import './Section.css';

/**
 * Composant Section
 * @param {ReactNode} children - Contenu de la section
 * @param {string} background - Couleur de fond ('white', 'gray', 'green', 'black')
 * @param {string} padding - Padding ('small', 'medium', 'large')
 * @param {string} className - Classes additionnelles
 */
const Section = ({ 
  children, 
  background = 'white',
  padding = 'medium',
  className = '',
  id,
  ...props 
}) => {
  const sectionClasses = [
    'section',
    `section-${background}`,
    `section-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;