/* ========================================
   EMAIL SERVICE - EMAILJS INTEGRATION
   ======================================== */

import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  eligibilityTemplateId: import.meta.env.VITE_EMAILJS_ELIGIBILITY_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Vérifier que toutes les variables sont présentes
console.log('📧 Configuration EmailJS:', {
  serviceId: EMAILJS_CONFIG.serviceId,
  contactTemplateId: EMAILJS_CONFIG.contactTemplateId,
  eligibilityTemplateId: EMAILJS_CONFIG.eligibilityTemplateId,
  publicKey: EMAILJS_CONFIG.publicKey ? '✅ Présente' : '❌ MANQUANTE'
});

/**
 * Envoyer un email de contact
 */
export const sendContactEmail = async (formData) => {
  try {
    console.log('📧 Envoi email contact...', formData);
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      formData,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('✅ Email contact envoyé avec succès !', response);
    return response;
    
  } catch (error) {
    console.error('❌ Erreur envoi email contact:', error);
    throw error;
  }
};

/**
 * Envoyer un email d'éligibilité
 */
export const sendEligibilityEmail = async (formData) => {
  try {
    console.log('📧 Envoi email éligibilité...', formData);
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.eligibilityTemplateId,
      formData,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('✅ Email éligibilité envoyé avec succès !', response);
    return response;
    
  } catch (error) {
    console.error('❌ Erreur envoi email éligibilité:', error);
    throw error;
  }
};

/**
 * Envoyer le formulaire d'éligibilité complet avec résultats
 * (Alias pour sendEligibilityEmail pour compatibilité)
 */
export const sendCompleteEligibilityForm = async (formData) => {
  return sendEligibilityEmail(formData);
};

export default {
  sendContactEmail,
  sendEligibilityEmail,
  sendCompleteEligibilityForm
};