/* ========================================
   VALIDATORS - ISO HOME ENERGY
   Fonctions de validation des données
   ======================================== */

/**
 * Valider un email
 * @param {string} email - Email à valider
 * @returns {boolean} - true si valide
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valider un numéro de téléphone français
 * @param {string} phone - Téléphone à valider
 * @returns {boolean} - true si valide
 */
export const isValidPhoneNumber = (phone) => {
  if (!phone) return false;
  
  // Enlever tous les espaces et caractères spéciaux
  const cleaned = phone.replace(/\D/g, '');
  
  // Vérifier que c'est un numéro français (10 chiffres commençant par 0)
  const phoneRegex = /^0[1-9]\d{8}$/;
  return phoneRegex.test(cleaned);
};

/**
 * Valider un code postal français
 * @param {string} postalCode - Code postal à valider
 * @returns {boolean} - true si valide
 */
export const isValidPostalCode = (postalCode) => {
  if (!postalCode) return false;
  
  // Code postal français = 5 chiffres
  const postalCodeRegex = /^\d{5}$/;
  return postalCodeRegex.test(postalCode);
};

/**
 * Valider un nom (prénom ou nom de famille)
 * @param {string} name - Nom à valider
 * @returns {boolean} - true si valide
 */
export const isValidName = (name) => {
  if (!name) return false;
  
  // Au moins 2 caractères, lettres et espaces/tirets seulement
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/;
  return nameRegex.test(name.trim());
};

/**
 * Valider une surface (m²)
 * @param {number|string} surface - Surface à valider
 * @returns {boolean} - true si valide
 */
export const isValidSurface = (surface) => {
  const num = Number(surface);
  return !isNaN(num) && num > 0 && num <= 10000;
};

/**
 * Valider un revenu fiscal
 * @param {number|string} revenu - Revenu à valider
 * @returns {boolean} - true si valide
 */
export const isValidRevenuFiscal = (revenu) => {
  const num = Number(revenu);
  return !isNaN(num) && num >= 0 && num <= 1000000;
};

/**
 * Valider un nombre de personnes
 * @param {number|string} nbPersonnes - Nombre de personnes
 * @returns {boolean} - true si valide
 */
export const isValidNbPersonnes = (nbPersonnes) => {
  const num = Number(nbPersonnes);
  return !isNaN(num) && num >= 1 && num <= 20;
};

/**
 * Valider une année de construction
 * @param {number|string} annee - Année de construction
 * @returns {boolean} - true si valide
 */
export const isValidAnneeConstruction = (annee) => {
  const num = Number(annee);
  const currentYear = new Date().getFullYear();
  return !isNaN(num) && num >= 1800 && num <= currentYear;
};

/**
 * Valider un texte obligatoire
 * @param {string} text - Texte à valider
 * @param {number} minLength - Longueur minimale
 * @returns {boolean} - true si valide
 */
export const isValidText = (text, minLength = 1) => {
  if (!text) return false;
  return text.trim().length >= minLength;
};

/**
 * Valider un message (texte long)
 * @param {string} message - Message à valider
 * @returns {boolean} - true si valide
 */
export const isValidMessage = (message) => {
  if (!message) return false;
  const trimmed = message.trim();
  return trimmed.length >= 10 && trimmed.length <= 2000;
};

/**
 * Valider une adresse
 * @param {string} address - Adresse à valider
 * @returns {boolean} - true si valide
 */
export const isValidAddress = (address) => {
  if (!address) return false;
  return address.trim().length >= 5;
};

/**
 * Valider une ville
 * @param {string} city - Ville à valider
 * @returns {boolean} - true si valide
 */
export const isValidCity = (city) => {
  if (!city) return false;
  const cityRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/;
  return cityRegex.test(city.trim());
};

/**
 * Valider un fichier uploadé
 * @param {File} file - Fichier à valider
 * @param {number} maxSize - Taille max en bytes (défaut 5MB)
 * @param {array} allowedTypes - Types MIME autorisés
 * @returns {object} - { valid: boolean, error: string }
 */
export const isValidFile = (
  file, 
  maxSize = 5 * 1024 * 1024, 
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
) => {
  if (!file) {
    return { valid: false, error: 'Aucun fichier sélectionné' };
  }
  
  // Vérifier la taille
  if (file.size > maxSize) {
    const maxSizeMB = Math.round(maxSize / (1024 * 1024));
    return { valid: false, error: `Le fichier est trop volumineux (max ${maxSizeMB}MB)` };
  }
  
  // Vérifier le type
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Type de fichier non autorisé' };
  }
  
  return { valid: true, error: null };
};

/**
 * Valider un objet formulaire de contact
 * @param {object} formData - Données du formulaire
 * @returns {object} - { valid: boolean, errors: object }
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  // Nom
  if (!isValidName(formData.nom)) {
    errors.nom = 'Nom invalide (minimum 2 caractères)';
  }
  
  // Prénom
  if (!isValidName(formData.prenom)) {
    errors.prenom = 'Prénom invalide (minimum 2 caractères)';
  }
  
  // Email
  if (!isValidEmail(formData.email)) {
    errors.email = 'Email invalide';
  }
  
  // Téléphone
  if (!isValidPhoneNumber(formData.telephone)) {
    errors.telephone = 'Numéro de téléphone invalide';
  }
  
  // Message
  if (!isValidMessage(formData.message)) {
    errors.message = 'Message trop court (minimum 10 caractères)';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Valider un objet formulaire d'éligibilité
 * @param {object} formData - Données du formulaire
 * @returns {object} - { valid: boolean, errors: object }
 */
export const validateEligibilityForm = (formData) => {
  const errors = {};
  
  // Nom
  if (!isValidName(formData.nom)) {
    errors.nom = 'Nom invalide';
  }
  
  // Prénom
  if (!isValidName(formData.prenom)) {
    errors.prenom = 'Prénom invalide';
  }
  
  // Email
  if (!isValidEmail(formData.email)) {
    errors.email = 'Email invalide';
  }
  
  // Téléphone
  if (!isValidPhoneNumber(formData.telephone)) {
    errors.telephone = 'Téléphone invalide';
  }
  
  // Code postal
  if (!isValidPostalCode(formData.codePostal)) {
    errors.codePostal = 'Code postal invalide';
  }
  
  // Ville
  if (!isValidCity(formData.ville)) {
    errors.ville = 'Ville invalide';
  }
  
  // Type de logement
  if (!formData.typeLogement) {
    errors.typeLogement = 'Type de logement requis';
  }
  
  // Statut occupant
  if (!formData.statutOccupant) {
    errors.statutOccupant = 'Statut occupant requis';
  }
  
  // Surface
  if (!isValidSurface(formData.surface)) {
    errors.surface = 'Surface invalide';
  }
  
  // Année construction
  if (formData.anneeConstruction && !isValidAnneeConstruction(formData.anneeConstruction)) {
    errors.anneeConstruction = 'Année invalide';
  }
  
  // Revenu fiscal
  if (!isValidRevenuFiscal(formData.revenuFiscal)) {
    errors.revenuFiscal = 'Revenu fiscal invalide';
  }
  
  // Nombre de personnes
  if (!isValidNbPersonnes(formData.nbPersonnes)) {
    errors.nbPersonnes = 'Nombre de personnes invalide';
  }
  
  // Services
  if (!formData.services || formData.services.length === 0) {
    errors.services = 'Sélectionnez au moins un service';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Obtenir un message d'erreur personnalisé
 * @param {string} field - Champ concerné
 * @param {string} type - Type de validation échouée
 * @returns {string} - Message d'erreur
 */
export const getErrorMessage = (field, type) => {
  const messages = {
    required: `Le champ ${field} est obligatoire`,
    email: 'Email invalide',
    phone: 'Numéro de téléphone invalide',
    postalCode: 'Code postal invalide (5 chiffres)',
    minLength: `Le champ ${field} est trop court`,
    maxLength: `Le champ ${field} est trop long`,
    number: `Le champ ${field} doit être un nombre`,
    positive: `Le champ ${field} doit être positif`
  };
  
  return messages[type] || 'Champ invalide';
};