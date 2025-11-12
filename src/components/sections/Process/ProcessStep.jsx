/* ========================================
   PROCESS STEP - ISO HOME ENERGY
   Étape du processus en 4 étapes
   ======================================== */

import './ProcessStep.css';

/**
 * Composant ProcessStep
 * @param {object} step - Données de l'étape
 * @param {number} index - Index de l'étape (pour l'animation)
 */
const ProcessStep = ({ step, index = 0 }) => {
  return (
    <div 
      className="process-step"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--step-color': step.color 
      }}
    >
      {/* Numéro */}
      <div className="process-step-number" style={{ background: step.color }}>
        {step.number}
      </div>

      {/* Contenu */}
      <div className="process-step-content">
        <h3 className="process-step-title">{step.title}</h3>
        <p className="process-step-subtitle">{step.subtitle}</p>
        <p className="process-step-description">{step.description}</p>

        {/* Détails */}
        <ul className="process-step-details">
          {step.details.map((detail, i) => (
            <li key={i}>✓ {detail}</li>
          ))}
        </ul>

        {/* Durée */}
        <div className="process-step-duration">
          <span className="icon">⏱️</span>
          <span>{step.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;