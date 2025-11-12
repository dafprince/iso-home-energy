/* ========================================
   USE LOCAL STORAGE - ISO HOME ENERGY
   Hook pour gérer le localStorage facilement
   ======================================== */

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour utiliser le localStorage
 * @param {string} key - Clé de stockage
 * @param {any} initialValue - Valeur initiale
 * @returns {array} - [value, setValue, removeValue]
 */
export const useLocalStorage = (key, initialValue) => {
  // State pour stocker la valeur
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Récupérer depuis localStorage
      const item = window.localStorage.getItem(key);
      
      // Parser la valeur stockée ou retourner initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erreur lecture localStorage pour "${key}":`, error);
      return initialValue;
    }
  });

  // Fonction pour mettre à jour la valeur
  const setValue = (value) => {
    try {
      // Permettre que value soit une fonction comme useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Sauvegarder dans le state
      setStoredValue(valueToStore);
      
      // Sauvegarder dans localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erreur écriture localStorage pour "${key}":`, error);
    }
  };

  // Fonction pour supprimer la valeur
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Erreur suppression localStorage pour "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};

/**
 * Hook pour sauvegarder les données de formulaire
 * @param {string} formName - Nom du formulaire
 * @param {object} initialData - Données initiales
 * @returns {object}
 */
export const useFormStorage = (formName, initialData = {}) => {
  const storageKey = `form_${formName}`;
  const [formData, setFormData, clearFormData] = useLocalStorage(storageKey, initialData);

  // Fonction pour mettre à jour un champ
  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Fonction pour mettre à jour plusieurs champs
  const updateFields = (fields) => {
    setFormData(prev => ({
      ...prev,
      ...fields
    }));
  };

  // Fonction pour réinitialiser le formulaire
  const resetForm = () => {
    clearFormData();
  };

  return {
    formData,
    setFormData,
    updateField,
    updateFields,
    resetForm
  };
};

/**
 * Hook pour gérer les préférences utilisateur
 * @returns {object}
 */
export const useUserPreferences = () => {
  const [preferences, setPreferences, clearPreferences] = useLocalStorage('user_preferences', {
    cookiesAccepted: false,
    newsletter: false,
    theme: 'light'
  });

  const updatePreference = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return {
    preferences,
    updatePreference,
    clearPreferences
  };
};

/**
 * Hook pour gérer l'historique de navigation
 * @param {number} maxItems - Nombre max d'items
 * @returns {object}
 */
export const useNavigationHistory = (maxItems = 10) => {
  const [history, setHistory] = useLocalStorage('navigation_history', []);

  const addToHistory = (item) => {
    setHistory(prev => {
      const newHistory = [item, ...prev.filter(i => i !== item)];
      return newHistory.slice(0, maxItems);
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    clearHistory
  };
};

/**
 * Hook pour gérer les favoris
 * @param {string} storageKey - Clé de stockage
 * @returns {object}
 */
export const useFavorites = (storageKey = 'favorites') => {
  const [favorites, setFavorites] = useLocalStorage(storageKey, []);

  const addFavorite = (item) => {
    setFavorites(prev => {
      if (prev.find(fav => fav.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFavorite = (itemId) => {
    setFavorites(prev => prev.filter(fav => fav.id !== itemId));
  };

  const isFavorite = (itemId) => {
    return favorites.some(fav => fav.id === itemId);
  };

  const toggleFavorite = (item) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    clearFavorites
  };
};

/**
 * Hook pour gérer le cache de données
 * @param {string} key - Clé de cache
 * @param {number} expirationMinutes - Durée d'expiration en minutes
 * @returns {object}
 */
export const useCache = (key, expirationMinutes = 60) => {
  const cacheKey = `cache_${key}`;
  const [cache, setCache] = useLocalStorage(cacheKey, null);

  const isCacheValid = () => {
    if (!cache || !cache.timestamp) return false;
    
    const now = new Date().getTime();
    const expirationTime = cache.timestamp + (expirationMinutes * 60 * 1000);
    
    return now < expirationTime;
  };

  const getCachedData = () => {
    if (isCacheValid()) {
      return cache.data;
    }
    return null;
  };

  const setCachedData = (data) => {
    setCache({
      data,
      timestamp: new Date().getTime()
    });
  };

  const clearCache = () => {
    setCache(null);
  };

  return {
    cachedData: getCachedData(),
    setCachedData,
    clearCache,
    isCacheValid: isCacheValid()
  };
};

/**
 * Fonction utilitaire pour nettoyer le localStorage
 * @param {array} keysToKeep - Clés à conserver
 */
export const cleanupLocalStorage = (keysToKeep = []) => {
  try {
    const keys = Object.keys(window.localStorage);
    
    keys.forEach(key => {
      if (!keysToKeep.includes(key)) {
        window.localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Erreur nettoyage localStorage:', error);
  }
};

// Export par défaut
export default useLocalStorage;