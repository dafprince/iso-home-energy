/* ========================================
   USE MEDIA QUERY - ISO HOME ENERGY
   Hook pour détecter les breakpoints responsive
   ======================================== */

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour détecter les media queries
 * @param {string} query - Media query CSS (ex: '(max-width: 768px)')
 * @returns {boolean} - true si la media query correspond
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Créer la media query
    const media = window.matchMedia(query);
    
    // Mettre à jour l'état initial
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    // Créer un listener pour les changements
    const listener = (e) => {
      setMatches(e.matches);
    };
    
    // Ajouter le listener
    media.addEventListener('change', listener);
    
    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

/**
 * Hook pour détecter si on est sur mobile
 * @returns {boolean}
 */
export const useIsMobile = () => {
  return useMediaQuery('(max-width: 768px)');
};

/**
 * Hook pour détecter si on est sur tablet
 * @returns {boolean}
 */
export const useIsTablet = () => {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
};

/**
 * Hook pour détecter si on est sur desktop
 * @returns {boolean}
 */
export const useIsDesktop = () => {
  return useMediaQuery('(min-width: 1025px)');
};

/**
 * Hook pour obtenir le type d'appareil actuel
 * @returns {string} - 'mobile', 'tablet', ou 'desktop'
 */
export const useDeviceType = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';
  return 'desktop';
};

/**
 * Hook pour détecter l'orientation
 * @returns {string} - 'portrait' ou 'landscape'
 */
export const useOrientation = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  return isPortrait ? 'portrait' : 'landscape';
};

/**
 * Hook pour détecter si l'utilisateur préfère le mode sombre
 * @returns {boolean}
 */
export const usePrefersDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

/**
 * Hook pour détecter si l'utilisateur préfère les animations réduites
 * @returns {boolean}
 */
export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

/**
 * Hook pour obtenir la largeur de la fenêtre
 * @returns {number}
 */
export const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

/**
 * Hook pour obtenir la hauteur de la fenêtre
 * @returns {number}
 */
export const useWindowHeight = () => {
  const [height, setHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return height;
};

/**
 * Hook pour obtenir les dimensions de la fenêtre
 * @returns {object} - { width, height }
 */
export const useWindowSize = () => {
  const width = useWindowWidth();
  const height = useWindowHeight();
  
  return { width, height };
};

// Export par défaut
export default useMediaQuery;