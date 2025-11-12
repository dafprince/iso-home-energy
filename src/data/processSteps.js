/* ========================================
   PROCESS STEPS - ISO HOME ENERGY
   Les 4 étapes du processus
   ======================================== */

import { PROCESS } from './images';

export const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Audit Gratuit',
    subtitle: 'Visite technique à domicile',
    description: 'Un de nos techniciens se déplace gratuitement chez vous pour réaliser un audit complet de votre logement et identifier les travaux prioritaires.',
    icon: 'search',
    image: PROCESS.step1,
    details: [
      'Analyse thermique de votre logement',
      'Identification des déperditions énergétiques',
      'Conseils personnalisés',
      'Prise de mesures précises'
    ],
    duration: '1h - 2h',
    color: '#8DC63F'
  },
  
  {
    id: 2,
    number: '02',
    title: 'Obtention des Subventions',
    subtitle: 'Financement jusqu\'à 100%',
    description: 'Nous nous occupons de toutes les démarches administratives pour obtenir vos aides : MaPrimeRénov\', CEE, Éco-PTZ. Vous n\'avez rien à faire.',
    icon: 'euro',
    image: PROCESS.step2,
    details: [
      'Constitution du dossier de subventions',
      'Démarches MaPrimeRénov\'',
      'Obtention des primes CEE',
      'Montage du dossier Éco-PTZ'
    ],
    duration: '1 - 3 semaines',
    color: '#6FA32E'
  },
  
  {
    id: 3,
    number: '03',
    title: 'Réalisation des Travaux',
    subtitle: 'Intervention de nos équipes',
    description: 'Nos équipes certifiées RGE interviennent dans les délais convenus. Nous respectons votre logement et assurons un chantier propre et soigné.',
    icon: 'hammer',
    image: PROCESS.step3,
    details: [
      'Équipes qualifiées RGE',
      'Respect des délais',
      'Chantier propre et organisé',
      'Suivi quotidien des travaux'
    ],
    duration: 'Selon projet',
    color: '#A8DC5A'
  },
  
  {
    id: 4,
    number: '04',
    title: 'Validation & Attestation',
    subtitle: 'Contrôle qualité indépendant',
    description: 'Un bureau de contrôle indépendant COFRAC valide la bonne réalisation des travaux. Votre dossier est déposé auprès du PNCEE pour finaliser les aides.',
    icon: 'check-circle',
    image: PROCESS.step4,
    details: [
      'Contrôle qualité COFRAC',
      'Attestation de conformité',
      'Dépôt dossier PNCEE',
      'Versement des aides'
    ],
    duration: '2 - 4 semaines',
    color: '#8DC63F'
  }
];

// ========== AVANTAGES DU PROCESSUS ==========

export const processAdvantages = [
  {
    id: 1,
    icon: 'shield-check',
    title: 'Zéro Avance de Frais',
    description: 'Les aides financent vos travaux, vous ne payez que le reste à charge'
  },
  {
    id: 2,
    icon: 'clock',
    title: 'Délais Respectés',
    description: 'Nous nous engageons sur des délais précis et les respectons'
  },
  {
    id: 3,
    icon: 'users',
    title: 'Accompagnement Total',
    description: 'De l\'audit jusqu\'à la validation, nous sommes à vos côtés'
  },
  {
    id: 4,
    icon: 'award',
    title: 'Garantie Qualité',
    description: 'Travaux certifiés RGE avec garanties décennales'
  }
];

// ========== TIMELINE (Pour affichage visuel) ==========

export const processTimeline = {
  totalDuration: '4 à 8 semaines',
  phases: [
    {
      phase: 'Phase 1',
      name: 'Étude',
      steps: [1, 2],
      duration: '2-4 semaines'
    },
    {
      phase: 'Phase 2',
      name: 'Réalisation',
      steps: [3],
      duration: '1-3 semaines'
    },
    {
      phase: 'Phase 3',
      name: 'Validation',
      steps: [4],
      duration: '1-2 semaines'
    }
  ]
};

// ========== HELPER FUNCTIONS ==========

/**
 * Récupérer une étape par son ID
 * @param {number} id - L'ID de l'étape
 * @returns {object|undefined}
 */
export const getStepById = (id) => {
  return processSteps.find(step => step.id === id);
};

/**
 * Récupérer toutes les étapes
 * @returns {array}
 */
export const getAllSteps = () => {
  return processSteps;
};

/**
 * Calculer la durée totale estimée
 * @returns {string}
 */
export const getTotalDuration = () => {
  return processTimeline.totalDuration;
};