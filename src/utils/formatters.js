/* ========================================
   FORMATTERS - ISO HOME ENERGY
   Fonctions de formatage des données
   ======================================== */

/**
 * Formater un numéro de téléphone français
 * @param {string} phone - Numéro de téléphone
 * @returns {string} - Numéro formaté (ex: 07 88 09 70 70)
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  
  // Enlever tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '');
  
  // Formater par groupes de 2
  const match = cleaned.match(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/);
  
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
  }
  
  return phone;
};

/**
 * Formater un numéro de téléphone pour WhatsApp (international)
 * @param {string} phone - Numéro de téléphone
 * @returns {string} - Format international (ex: 33788097070)
 */
export const formatPhoneForWhatsApp = (phone) => {
  if (!phone) return '';
  
  // Enlever tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '');
  
  // Si commence par 0, remplacer par 33
  if (cleaned.startsWith('0')) {
    return '33' + cleaned.slice(1);
  }
  
  return cleaned;
};

/**
 * Formater un prix en euros
 * @param {number} amount - Montant
 * @param {boolean} showDecimals - Afficher les décimales
 * @returns {string} - Prix formaté (ex: 15 000 €)
 */
export const formatPrice = (amount, showDecimals = false) => {
  if (amount === null || amount === undefined) return '0 €';
  
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0
  };
  
  return new Intl.NumberFormat('fr-FR', options).format(amount);
};

/**
 * Formater un nombre avec séparateurs de milliers
 * @param {number} number - Nombre
 * @returns {string} - Nombre formaté (ex: 1 500)
 */
export const formatNumber = (number) => {
  if (number === null || number === undefined) return '0';
  
  return new Intl.NumberFormat('fr-FR').format(number);
};

/**
 * Formater une date
 * @param {string|Date} date - Date
 * @param {string} format - Format (short, long, full)
 * @returns {string} - Date formatée
 */
export const formatDate = (date, format = 'short') => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options = {
    short: { day: '2-digit', month: '2-digit', year: 'numeric' },
    long: { day: 'numeric', month: 'long', year: 'numeric' },
    full: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
  };
  
  return new Intl.DateTimeFormat('fr-FR', options[format]).format(dateObj);
};

/**
 * Formater un pourcentage
 * @param {number} value - Valeur (0-100)
 * @param {number} decimals - Nombre de décimales
 * @returns {string} - Pourcentage formaté (ex: 45%)
 */
export const formatPercentage = (value, decimals = 0) => {
  if (value === null || value === undefined) return '0%';
  
  return `${value.toFixed(decimals)}%`;
};

/**
 * Formater une surface en m²
 * @param {number} surface - Surface
 * @returns {string} - Surface formatée (ex: 120 m²)
 */
export const formatSurface = (surface) => {
  if (!surface) return '0 m²';
  
  return `${formatNumber(surface)} m²`;
};

/**
 * Formater un code postal
 * @param {string} postalCode - Code postal
 * @returns {string} - Code postal formaté
 */
export const formatPostalCode = (postalCode) => {
  if (!postalCode) return '';
  
  // Enlever tout sauf les chiffres
  const cleaned = postalCode.replace(/\D/g, '');
  
  // Limiter à 5 chiffres
  return cleaned.slice(0, 5);
};

/**
 * Formater un email en minuscules
 * @param {string} email - Email
 * @returns {string} - Email formaté
 */
export const formatEmail = (email) => {
  if (!email) return '';
  
  return email.toLowerCase().trim();
};

/**
 * Formater un nom (première lettre en majuscule)
 * @param {string} name - Nom
 * @returns {string} - Nom formaté
 */
export const formatName = (name) => {
  if (!name) return '';
  
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Formater une durée en texte lisible
 * @param {number} days - Nombre de jours
 * @returns {string} - Durée formatée
 */
export const formatDuration = (days) => {
  if (days === 0) return 'Moins d\'un jour';
  if (days === 1) return '1 jour';
  if (days < 7) return `${days} jours`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} semaine${weeks > 1 ? 's' : ''}`;
  }
  if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months} mois`;
  }
  const years = Math.floor(days / 365);
  return `${years} an${years > 1 ? 's' : ''}`;
};

/**
 * Tronquer un texte
 * @param {string} text - Texte
 * @param {number} maxLength - Longueur maximum
 * @returns {string} - Texte tronqué
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Formater un slug (URL-friendly)
 * @param {string} text - Texte
 * @returns {string} - Slug
 */
export const formatSlug = (text) => {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplacer les caractères spéciaux par -
    .replace(/^-+|-+$/g, ''); // Enlever les - au début et à la fin
};

/**
 * Formater les initiales d'un nom
 * @param {string} name - Nom complet
 * @returns {string} - Initiales (ex: JD)
 */
export const getInitials = (name) => {
  if (!name) return '';
  
  const words = name.split(' ');
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

/**
 * Formater un temps relatif (il y a X temps)
 * @param {string|Date} date - Date
 * @returns {string} - Temps relatif
 */
export const formatRelativeTime = (date) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now - dateObj;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSecs < 60) return 'À l\'instant';
  if (diffMins < 60) return `Il y a ${diffMins} minute${diffMins > 1 ? 's' : ''}`;
  if (diffHours < 24) return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`;
  if (diffDays < 7) return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
  
  return formatDate(dateObj, 'short');
};