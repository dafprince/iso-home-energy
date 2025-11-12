/* ========================================
   FAQ ITEM - ISO HOME ENERGY
   Question/Réponse accordéon
   ======================================== */

import { useState } from 'react';
import './FAQItem.css';

/**
 * Composant FAQItem
 * @param {object} faq - Données de la question FAQ
 * @param {number} index - Index pour l'animation
 */
const FAQItem = ({ faq, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Question */}
      <button 
        className="faq-item-question"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <div className="faq-item-question-content">
          <span className="faq-item-category">{faq.category}</span>
          <h4 className="faq-item-title">{faq.question}</h4>
        </div>
        <span className="faq-item-icon">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Réponse */}
      <div className={`faq-item-answer ${isOpen ? 'faq-item-answer-open' : ''}`}>
        <div className="faq-item-answer-content">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;