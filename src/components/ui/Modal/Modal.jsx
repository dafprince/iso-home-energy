/* ========================================
   MODAL COMPONENT - ISO HOME ENERGY
   Fenêtre modale réutilisable
   ======================================== */

import { useEffect } from 'react';
import { useApp } from '../../../context/AppContext';
import './Modal.css';

/**
 * Composant Modal
 */
const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useApp();

  useEffect(() => {
    // Fermer avec la touche Escape
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close"
          onClick={closeModal}
          aria-label="Fermer"
        >
          ✕
        </button>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;