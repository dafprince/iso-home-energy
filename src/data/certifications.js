/* ========================================
   CERTIFICATIONS - ISO HOME ENERGY
   Certifications et labels de qualité
   ======================================== */

import { CERTIFICATIONS_IMAGES } from './images';

export const certificationsData = [
  {
    id: 1,
    name: 'RGE',
    fullName: 'Reconnu Garant de l\'Environnement',
    description: 'La certification RGE est un gage de qualité et d\'expertise dans les travaux de rénovation énergétique. Elle est obligatoire pour que vos clients puissent bénéficier des aides publiques (MaPrimeRénov\', CEE, Éco-PTZ).',
    image: CERTIFICATIONS_IMAGES.rge,
    icon: 'award',
    color: '#8DC63F',
    year: '2018',
    featured: true,
    benefits: [
      'Éligibilité aux aides publiques pour vos clients',
      'Garantie de compétence technique',
      'Formation continue obligatoire',
      'Contrôles réguliers de qualité'
    ]
  },
  
  {
    id: 2,
    name: 'Qualibat',
    fullName: 'Qualification Bâtiment',
    description: 'Qualibat est la référence de la qualification professionnelle dans le bâtiment. Elle atteste de nos compétences techniques, de nos moyens humains et matériels, ainsi que de notre santé financière.',
    image: CERTIFICATIONS_IMAGES.qualibat,
    icon: 'building',
    color: '#6FA32E',
    year: '2019',
    featured: true,
    benefits: [
      'Gage de professionnalisme',
      'Qualification par métier',
      'Contrôles annuels',
      'Assurances vérifiées'
    ]
  },
  
  {
    id: 3,
    name: 'MaPrimeRénov\'',
    fullName: 'Partenaire MaPrimeRénov\'',
    description: 'En tant que partenaire officiel MaPrimeRénov\', nous accompagnons nos clients dans toutes leurs démarches pour obtenir cette aide de l\'État. Nous montons les dossiers et assurons le suivi jusqu\'au versement.',
    image: CERTIFICATIONS_IMAGES.maprimerenov,
    icon: 'home',
    color: '#A8DC5A',
    year: '2020',
    featured: true,
    benefits: [
      'Accompagnement complet',
      'Montage des dossiers inclus',
      'Tiers-payant possible',
      'Suivi jusqu\'au versement'
    ]
  },
  
  {
    id: 4,
    name: 'Artisan',
    fullName: 'Entreprise Artisanale',
    description: 'ISO HOME ENERGY est une entreprise artisanale inscrite au répertoire des métiers. Nous privilégions la proximité, la qualité et le savoir-faire traditionnel.',
    image: CERTIFICATIONS_IMAGES.artisan,
    icon: 'tool',
    color: '#8DC63F',
    year: '2017',
    featured: false,
    benefits: [
      'Savoir-faire artisanal',
      'Proximité et écoute',
      'Travaux soignés',
      'Entreprise locale'
    ]
  }
];

// ========== CHIFFRES CLÉS CERTIFICATIONS ==========

export const certificationStats = {
  totalCertifications: certificationsData.length,
  yearsExperience: new Date().getFullYear() - 2017, // Depuis 2017
  projectsCompleted: 500,
  satisfactionRate: 98
};

// ========== ORGANISMES PARTENAIRES ==========

export const partners = [
  {
    id: 1,
    name: 'ANAH',
    fullName: 'Agence Nationale de l\'Habitat',
    description: 'Organisme qui gère MaPrimeRénov\'',
    logo: 'https://via.placeholder.com/150x80/8DC63F/000000?text=ANAH'
  },
  {
    id: 2,
    name: 'ADEME',
    fullName: 'Agence de l\'Environnement et de la Maîtrise de l\'Énergie',
    description: 'Accompagnement transition énergétique',
    logo: 'https://via.placeholder.com/150x80/8DC63F/000000?text=ADEME'
  },
  {
    id: 3,
    name: 'PNCEE',
    fullName: 'Pôle National des Certificats d\'Économies d\'Énergie',
    description: 'Validation des CEE',
    logo: 'https://via.placeholder.com/150x80/8DC63F/000000?text=PNCEE'
  }
];

// ========== ASSURANCES ==========

export const insurances = [
  {
    id: 1,
    type: 'Décennale',
    description: 'Garantie décennale couvrant les travaux d\'isolation et de façade pendant 10 ans',
    coverage: '10 ans',
    icon: 'shield-check'
  },
  {
    id: 2,
    type: 'Responsabilité Civile',
    description: 'Assurance RC Professionnelle couvrant tous les dommages causés aux tiers',
    coverage: 'Illimitée',
    icon: 'shield'
  },
  {
    id: 3,
    type: 'Biennale',
    description: 'Garantie de bon fonctionnement des équipements pendant 2 ans',
    coverage: '2 ans',
    icon: 'check-circle'
  }
];

// ========== HELPER FUNCTIONS ==========

/**
 * Récupérer uniquement les certifications featured
 * @returns {array}
 */
export const getFeaturedCertifications = () => {
  return certificationsData.filter(cert => cert.featured);
};

/**
 * Récupérer une certification par son ID
 * @param {number} id - L'ID de la certification
 * @returns {object|undefined}
 */
export const getCertificationById = (id) => {
  return certificationsData.find(cert => cert.id === id);
};

/**
 * Récupérer toutes les certifications
 * @returns {array}
 */
export const getAllCertifications = () => {
  return certificationsData;
};

/**
 * Récupérer les certifications par année
 * @param {string} year - L'année
 * @returns {array}
 */
export const getCertificationsByYear = (year) => {
  return certificationsData.filter(cert => cert.year === year);
};

/**
 * Vérifier si une certification est active
 * @param {number} id - L'ID de la certification
 * @returns {boolean}
 */
export const isCertificationActive = (id) => {
  const cert = getCertificationById(id);
  return cert ? true : false;
};