/* ========================================
   useNotification Hook
   Hook pour afficher des notifications
   ======================================== */

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useNotification = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useNotification must be used within AppProvider');
  }

  const showNotification = (message, type = 'info') => {
    if (context.addNotification) {
      context.addNotification(message, type);
    } else {
      // Fallback si addNotification n'existe pas
      console.log(`[${type.toUpperCase()}] ${message}`);
      alert(message);
    }
  };

  return { showNotification };
};