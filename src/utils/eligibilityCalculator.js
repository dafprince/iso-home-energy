/* ========================================
   ELIGIBILITY CALCULATOR - ISO HOME ENERGY
   Calcul d'éligibilité aux aides financières
   ======================================== */

// ========== PLAFONDS DE REVENUS MaPrimeRénov' 2024 ==========

// Plafonds pour l'Île-de-France
const PLAFONDS_IDF = {
  1: { bleu: 23541, jaune: 28657, violet: 40018, rose: 40019 },
  2: { bleu: 34551, jaune: 42058, violet: 58827, rose: 58828 },
  3: { bleu: 41493, jaune: 50513, violet: 70382, rose: 70383 },
  4: { bleu: 48447, jaune: 58981, violet: 82839, rose: 82840 },
  5: { bleu: 55427, jaune: 67473, violet: 94844, rose: 94845 },
  additionalPerson: { bleu: 6970, jaune: 8486, violet: 11916, rose: 11916 }
};

// Plafonds pour les autres régions
const PLAFONDS_AUTRES = {
  1: { bleu: 17009, jaune: 21805, violet: 30549, rose: 30550 },
  2: { bleu: 24875, jaune: 31889, violet: 44907, rose: 44908 },
  3: { bleu: 29917, jaune: 38349, violet: 54071, rose: 54072 },
  4: { bleu: 34948, jaune: 44802, violet: 63235, rose: 63236 },
  5: { bleu: 40002, jaune: 51281, violet: 72400, rose: 72401 },
  additionalPerson: { bleu: 5045, jaune: 6462, violet: 9165, rose: 9165 }
};

// Départements Île-de-France
const DEPARTEMENTS_IDF = ['75', '77', '78', '91', '92', '93', '94', '95'];

/**
 * Déterminer si un code postal est en Île-de-France
 * @param {string} codePostal - Code postal
 * @returns {boolean}
 */
const isIleDeFrance = (codePostal) => {
  if (!codePostal) return false;
  const dept = codePostal.substring(0, 2);
  return DEPARTEMENTS_IDF.includes(dept);
};

/**
 * Obtenir le profil de revenu (couleur MaPrimeRénov')
 * @param {number} revenuFiscal - Revenu fiscal de référence
 * @param {number} nbPersonnes - Nombre de personnes dans le foyer
 * @param {string} codePostal - Code postal
 * @returns {string} - 'bleu', 'jaune', 'violet', ou 'rose'
 */
export const getProfilRevenu = (revenuFiscal, nbPersonnes, codePostal) => {
  const isIDF = isIleDeFrance(codePostal);
  const plafonds = isIDF ? PLAFONDS_IDF : PLAFONDS_AUTRES;
  
  // Si plus de 5 personnes, ajouter le montant par personne supplémentaire
  let plafondsAjustes = { ...plafonds };
  
  if (nbPersonnes > 5) {
    const personnesSupp = nbPersonnes - 5;
    const basePlafonds = plafonds[5];
    const additional = plafonds.additionalPerson;
    
    plafondsAjustes[nbPersonnes] = {
      bleu: basePlafonds.bleu + (additional.bleu * personnesSupp),
      jaune: basePlafonds.jaune + (additional.jaune * personnesSupp),
      violet: basePlafonds.violet + (additional.violet * personnesSupp),
      rose: basePlafonds.rose + (additional.rose * personnesSupp)
    };
  }
  
  const plafond = plafondsAjustes[nbPersonnes] || plafondsAjustes[5];
  
  if (revenuFiscal <= plafond.bleu) return 'bleu';
  if (revenuFiscal <= plafond.jaune) return 'jaune';
  if (revenuFiscal <= plafond.violet) return 'violet';
  return 'rose';
};

/**
 * Obtenir le nom complet du profil
 * @param {string} profil - Profil de revenu
 * @returns {string}
 */
export const getProfilName = (profil) => {
  const noms = {
    bleu: 'MaPrimeRénov\' Bleu (Revenus très modestes)',
    jaune: 'MaPrimeRénov\' Jaune (Revenus modestes)',
    violet: 'MaPrimeRénov\' Violet (Revenus intermédiaires)',
    rose: 'MaPrimeRénov\' Rose (Revenus supérieurs)'
  };
  
  return noms[profil] || 'Non éligible';
};

/**
 * Calculer les montants d'aides pour l'isolation des combles
 * @param {string} profil - Profil de revenu
 * @param {number} surface - Surface en m²
 * @returns {object}
 */
export const calculerAidesIsolationCombles = (profil, surface) => {
  const montantsM2 = {
    bleu: 25,
    jaune: 20,
    violet: 15,
    rose: 7
  };
  
  const montantM2 = montantsM2[profil] || 0;
  const maprimerenov = montantM2 * surface;
  const cee = surface * 10; // Estimation CEE
  
  return {
    maprimerenov,
    cee,
    total: maprimerenov + cee,
    taux: Math.min(90, Math.round(((maprimerenov + cee) / (surface * 50)) * 100))
  };
};

/**
 * Calculer les montants d'aides pour l'isolation des murs
 * @param {string} profil - Profil de revenu
 * @param {number} surface - Surface en m²
 * @returns {object}
 */
export const calculerAidesIsolationMurs = (profil, surface) => {
  const montantsM2 = {
    bleu: 25,
    jaune: 20,
    violet: 15,
    rose: 7
  };
  
  const montantM2 = montantsM2[profil] || 0;
  const maprimerenov = montantM2 * surface;
  const cee = surface * 15; // Estimation CEE
  
  return {
    maprimerenov,
    cee,
    total: maprimerenov + cee,
    taux: Math.min(80, Math.round(((maprimerenov + cee) / (surface * 60)) * 100))
  };
};

/**
 * Calculer les montants d'aides pour la façade ITE
 * @param {string} profil - Profil de revenu
 * @param {number} surface - Surface en m²
 * @returns {object}
 */
export const calculerAidesFacadeITE = (profil, surface) => {
  const montantsM2 = {
    bleu: 75,
    jaune: 60,
    violet: 40,
    rose: 15
  };
  
  const montantM2 = montantsM2[profil] || 0;
  const maprimerenov = montantM2 * surface;
  const cee = surface * 20; // Estimation CEE
  
  return {
    maprimerenov,
    cee,
    total: maprimerenov + cee,
    taux: Math.min(75, Math.round(((maprimerenov + cee) / (surface * 150)) * 100))
  };
};

/**
 * Calculer les montants d'aides pour la pompe à chaleur
 * @param {string} profil - Profil de revenu
 * @returns {object}
 */
export const calculerAidesPompeAChaleur = (profil) => {
  const montants = {
    bleu: 5000,
    jaune: 4000,
    violet: 3000,
    rose: 1000
  };
  
  const maprimerenov = montants[profil] || 0;
  const cee = 2500; // Estimation CEE
  
  return {
    maprimerenov,
    cee,
    total: maprimerenov + cee,
    taux: Math.min(70, Math.round(((maprimerenov + cee) / 12000) * 100))
  };
};

/**
 * Calculer les montants d'aides pour la menuiserie
 * @param {string} profil - Profil de revenu
 * @param {number} nbFenetres - Nombre de fenêtres
 * @returns {object}
 */
export const calculerAidesMenuiserie = (profil, nbFenetres = 1) => {
  const montantsParFenetre = {
    bleu: 100,
    jaune: 80,
    violet: 40,
    rose: 0
  };
  
  const montantParFenetre = montantsParFenetre[profil] || 0;
  const maprimerenov = montantParFenetre * nbFenetres;
  const cee = nbFenetres * 80; // Estimation CEE
  
  return {
    maprimerenov,
    cee,
    total: maprimerenov + cee,
    taux: Math.min(50, Math.round(((maprimerenov + cee) / (nbFenetres * 600)) * 100))
  };
};

/**
 * Calculer l'éligibilité complète
 * @param {object} formData - Données du formulaire d'éligibilité
 * @returns {object}
 */
export const calculerEligibilite = (formData) => {
  const {
    revenuFiscal,
    nbPersonnes,
    codePostal,
    services,
    surface,
    nbFenetres
  } = formData;
  
  // Déterminer le profil
  const profil = getProfilRevenu(revenuFiscal, nbPersonnes, codePostal);
  const profilName = getProfilName(profil);
  
  // Calculer les aides par service
  const aidesParService = {};
  let totalAides = 0;
  
  if (services.includes('isolation')) {
    const aides = calculerAidesIsolationCombles(profil, surface || 100);
    aidesParService.isolation = aides;
    totalAides += aides.total;
  }
  
  if (services.includes('facade')) {
    const aides = calculerAidesFacadeITE(profil, surface || 100);
    aidesParService.facade = aides;
    totalAides += aides.total;
  }
  
  if (services.includes('pompe-chaleur')) {
    const aides = calculerAidesPompeAChaleur(profil);
    aidesParService.pompeChaleur = aides;
    totalAides += aides.total;
  }
  
  if (services.includes('menuiserie')) {
    const aides = calculerAidesMenuiserie(profil, nbFenetres || 5);
    aidesParService.menuiserie = aides;
    totalAides += aides.total;
  }
  
  // Aides complémentaires
  const ecoPtz = Math.min(30000, totalAides * 0.5); // Max 30 000€
  const tvaReduite = totalAides * 0.055; // Économie TVA 5.5%
  
  return {
    eligible: profil !== 'rose' || totalAides > 0,
    profil,
    profilName,
    aidesParService,
    totalMaprimerenov: Object.values(aidesParService).reduce((sum, a) => sum + a.maprimerenov, 0),
    totalCEE: Object.values(aidesParService).reduce((sum, a) => sum + a.cee, 0),
    totalAides,
    ecoPtz,
    tvaReduite,
    montantTotal: totalAides + ecoPtz,
    tauxFinancement: Math.min(100, Math.round((totalAides / (totalAides * 1.5)) * 100)),
    economiesAnnuelles: Math.round(totalAides * 0.15) // Estimation 15% d'économies
  };
};

/**
 * Obtenir un message d'éligibilité personnalisé
 * @param {object} resultat - Résultat du calcul d'éligibilité
 * @returns {string}
 */
export const getMessageEligibilite = (resultat) => {
  if (!resultat.eligible) {
    return "Vous n'êtes malheureusement pas éligible aux aides actuellement.";
  }
  
  if (resultat.profil === 'bleu') {
    return `Excellente nouvelle ! Vous êtes éligible aux aides maximales. Vos travaux peuvent être financés jusqu'à ${resultat.tauxFinancement}% !`;
  }
  
  if (resultat.profil === 'jaune') {
    return `Bonne nouvelle ! Vous êtes éligible à des aides importantes pouvant couvrir jusqu'à ${resultat.tauxFinancement}% de vos travaux.`;
  }
  
  if (resultat.profil === 'violet') {
    return `Vous êtes éligible à des aides qui peuvent financer jusqu'à ${resultat.tauxFinancement}% de vos travaux.`;
  }
  
  return `Vous pouvez bénéficier d'aides pour vos travaux de rénovation énergétique.`;
};