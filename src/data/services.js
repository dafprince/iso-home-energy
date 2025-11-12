/* ========================================
   SERVICES DATA - ISO HOME ENERGY
   Données des 6 services
   ======================================== */

import { SERVICES_IMAGES } from './images';

export const servicesData = [
  // ========== SERVICE 1 : ISOLATION ==========
  {
    id: 1,
    slug: 'isolation',
    name: 'Isolation',
    title: 'Isolation Thermique',
    shortDescription: 'Isolation des combles, murs et planchers pour réduire vos factures d\'énergie.',
    description: 'Nous isolons votre logement (combles, murs, planchers) pour améliorer votre confort thermique et réduire vos factures de chauffage jusqu\'à 30%.',
    image: SERVICES_IMAGES.isolation.main,
    thumbnail: SERVICES_IMAGES.isolation.thumb,
    icon: '🏠',
    featured: true,
    route: '/services/isolation',
    
    avantages: [
      'Réduction des factures de chauffage jusqu\'à 30%',
      'Amélioration du confort thermique été comme hiver',
      'Valorisation de votre bien immobilier',
      'Réduction des émissions de CO2',
      'Meilleure isolation acoustique',
      'Retour sur investissement rapide'
    ],
    
    types: [
      {
        name: 'Isolation des combles perdus',
        description: 'Par soufflage de laine minérale, solution la plus économique et rapide.'
      },
      {
        name: 'Isolation des combles aménageables',
        description: 'Par rouleaux ou panneaux sous rampants pour conserver l\'espace habitable.'
      },
      {
        name: 'Isolation des murs intérieurs',
        description: 'Par doublage collé ou sur ossature pour une isolation performante.'
      },
      {
        name: 'Isolation des planchers',
        description: 'Par projection ou panneaux sous plancher pour limiter les déperditions.'
      }
    ],
    
    dureeChantier: '1 à 3 jours',
    garantie: '10 ans',
    
    aidesDisponibles: [
      'MaPrimeRénov\'',
      'CEE',
      'Éco-PTZ',
      'TVA 5.5%',
      'Chèque Énergie'
    ],
    
    eligibilite: {
      maprimerenov: {
        bleu: 25,
        jaune: 20,
        violet: 15,
        rose: 7
      },
      cee: 20
    }
  },

  // ========== SERVICE 2 : FAÇADE ==========
  {
    id: 2,
    slug: 'facade',
    name: 'Façade',
    title: 'Isolation Façade Extérieure',
    shortDescription: 'Isolation thermique par l\'extérieur (ITE) pour embellir et isoler votre façade.',
    description: 'L\'isolation thermique par l\'extérieur (ITE) permet d\'isoler votre maison tout en rénovant votre façade, sans perdre d\'espace intérieur.',
    image: SERVICES_IMAGES.facade.main,
    thumbnail: SERVICES_IMAGES.facade.thumb,
    icon: '🏗️',
    featured: true,
    route: '/services/facade',
    
    avantages: [
      'Traitement des ponts thermiques',
      'Pas de perte d\'espace habitable',
      'Ravalement et isolation en une seule opération',
      'Amélioration de l\'esthétique de la façade',
      'Protection des murs contre les intempéries',
      'Jusqu\'à 25% d\'économies d\'énergie'
    ],
    
    types: [
      {
        name: 'ITE sous enduit',
        description: 'Finition lisse ou grattée, large choix de couleurs, solution la plus économique.'
      },
      {
        name: 'ITE sous bardage',
        description: 'Aspect bois, composite ou PVC, moderne et durable.'
      },
      {
        name: 'ITE sous vêture',
        description: 'Panneaux préfabriqués, pose rapide, finition soignée.'
      }
    ],
    
    dureeChantier: '2 à 4 semaines',
    garantie: '10 ans',
    
    aidesDisponibles: [
      'MaPrimeRénov\'',
      'CEE',
      'Éco-PTZ',
      'TVA 5.5%'
    ],
    
    eligibilite: {
      maprimerenov: {
        bleu: 75,
        jaune: 60,
        violet: 40,
        rose: 15
      },
      cee: 30
    }
  },

  // ========== SERVICE 3 : POMPE À CHALEUR ==========
  {
    id: 3,
    slug: 'pompe-a-chaleur',
    name: 'Pompe à Chaleur',
    title: 'Pompe à Chaleur Air/Eau & Air/Air',
    shortDescription: 'Installation de pompes à chaleur performantes pour chauffer et climatiser.',
    description: 'Nous installons des pompes à chaleur haute performance pour chauffer votre logement en hiver et le rafraîchir en été, tout en divisant vos factures par 3.',
    image: SERVICES_IMAGES.pompeChaleur.main,
    thumbnail: SERVICES_IMAGES.pompeChaleur.thumb,
    icon: '♨️',
    featured: true,
    route: '/services/pompe-a-chaleur',
    
    avantages: [
      'Jusqu\'à 70% d\'économies sur le chauffage',
      'Chauffage en hiver et climatisation en été',
      'Énergie renouvelable et écologique',
      'Confort thermique optimal',
      'Éligible aux aides MaPrimeRénov\'',
      'Faible coût d\'exploitation'
    ],
    
    types: [
      {
        name: 'Pompe à chaleur Air/Eau',
        description: 'Se raccorde sur vos radiateurs ou plancher chauffant existants.'
      },
      {
        name: 'Pompe à chaleur Air/Air',
        description: 'Diffusion de l\'air par splits muraux, solution réversible.'
      },
      {
        name: 'Pompe à chaleur Hybride',
        description: 'Couplée à une chaudière gaz pour optimiser les performances.'
      }
    ],
    
    dureeChantier: '2 à 5 jours',
    garantie: '5 ans',
    
    aidesDisponibles: [
      'MaPrimeRénov\'',
      'CEE',
      'Éco-PTZ',
      'TVA 5.5%'
    ],
    
    eligibilite: {
      maprimerenov: {
        bleu: 5000,
        jaune: 4000,
        violet: 3000,
        rose: 0
      },
      cee: 4000
    }
  },

  // ========== SERVICE 4 : MENUISERIE ==========
  {
    id: 4,
    slug: 'menuiserie',
    name: 'Menuiserie',
    title: 'Menuiserie & Fenêtres',
    shortDescription: 'Remplacement de fenêtres, portes et volets pour une meilleure isolation.',
    description: 'Nous installons des menuiseries performantes (fenêtres, portes, volets) pour améliorer l\'isolation thermique et acoustique de votre logement.',
    image: SERVICES_IMAGES.menuiserie.main,
    thumbnail: SERVICES_IMAGES.menuiserie.thumb,
    icon: '🪟',
    featured: true,
    route: '/services/menuiserie',
    
    avantages: [
      'Réduction des déperditions thermiques jusqu\'à 15%',
      'Amélioration du confort acoustique',
      'Valorisation de votre bien immobilier',
      'Sécurité renforcée',
      'Entretien facile et durabilité',
      'Large choix de matériaux (PVC, alu, bois)'
    ],
    
    types: [
      {
        name: 'Fenêtres double vitrage',
        description: 'Isolation thermique et acoustique optimale avec coefficient Uw performant.'
      },
      {
        name: 'Fenêtres triple vitrage',
        description: 'Performance maximale pour les zones très froides ou bruyantes.'
      },
      {
        name: 'Portes d\'entrée isolantes',
        description: 'Sécurité et isolation thermique renforcées.'
      },
      {
        name: 'Volets roulants',
        description: 'Protection solaire et isolation complémentaire.'
      }
    ],
    
    dureeChantier: '1 à 3 jours',
    garantie: '10 ans',
    
    aidesDisponibles: [
      'MaPrimeRénov\'',
      'CEE',
      'Éco-PTZ',
      'TVA 5.5%'
    ],
    
    eligibilite: {
      maprimerenov: {
        bleu: 100,
        jaune: 80,
        violet: 40,
        rose: 0
      },
      cee: 50
    }
  },

  // ========== SERVICE 5 : PLÂTRERIE ==========
  {
    id: 5,
    slug: 'platrerie',
    name: 'Plâtrerie',
    title: 'Plâtrerie & Doublage',
    shortDescription: 'Doublage des murs, cloisons et plafonds pour une isolation intérieure optimale.',
    description: 'Nos experts réalisent vos travaux de plâtrerie avec doublage isolant pour améliorer le confort thermique et acoustique de votre intérieur.',
    image: SERVICES_IMAGES.platrerie.main,
    thumbnail: SERVICES_IMAGES.platrerie.thumb,
    icon: '🧱',
    featured: true,
    route: '/services/platrerie',
    
    avantages: [
      'Amélioration de l\'isolation thermique',
      'Isolation acoustique renforcée',
      'Correction des défauts des murs',
      'Surface lisse prête à peindre',
      'Gain d\'espace optimisé',
      'Mise aux normes électriques facilitée'
    ],
    
    types: [
      {
        name: 'Doublage sur ossature métallique',
        description: 'Solution performante avec isolation intégrée, idéale pour tous types de murs.'
      },
      {
        name: 'Doublage collé',
        description: 'Mise en œuvre rapide sur murs plans avec plaques isolantes collées.'
      },
      {
        name: 'Cloisons séparatives',
        description: 'Création d\'espaces avec isolation phonique renforcée.'
      },
      {
        name: 'Faux plafonds isolants',
        description: 'Isolation thermique et acoustique par le plafond avec finition soignée.'
      }
    ],
    
    dureeChantier: '3 à 10 jours',
    garantie: '10 ans',
    
    aidesDisponibles: [
      'MaPrimeRénov\'',
      'CEE',
      'Éco-PTZ',
      'TVA 5.5%'
    ],
    
    eligibilite: {
      maprimerenov: {
        bleu: 25,
        jaune: 20,
        violet: 15,
        rose: 0
      },
      cee: 20
    }
  },

  // ========== SERVICE 6 : PEINTURE ==========
  {
    id: 6,
    slug: 'peinture',
    name: 'Peinture',
    title: 'Peinture Intérieure & Extérieure',
    shortDescription: 'Travaux de peinture intérieure et extérieure pour une finition parfaite.',
    description: 'Nos peintres professionnels réalisent tous vos travaux de peinture avec des produits de qualité pour un rendu impeccable et durable.',
    image: SERVICES_IMAGES.peinture.main,
    thumbnail: SERVICES_IMAGES.peinture.thumb,
    icon: '🎨',
    featured: true,
    route: '/services/peinture',
    
    avantages: [
      'Finition professionnelle de qualité',
      'Protection durable des supports',
      'Large choix de couleurs et finitions',
      'Préparation soignée des surfaces',
      'Produits écologiques disponibles',
      'Valorisation esthétique de votre bien'
    ],
    
    types: [
      {
        name: 'Peinture intérieure',
        description: 'Murs, plafonds, boiseries avec préparation complète des supports.'
      },
      {
        name: 'Peinture extérieure',
        description: 'Façades, volets, portails avec produits résistants aux intempéries.'
      },
      {
        name: 'Peintures spéciales',
        description: 'Peintures isolantes, anti-humidité, dépolluantes pour besoins spécifiques.'
      },
      {
        name: 'Enduits décoratifs',
        description: 'Effets texturés, stucs, patines pour personnaliser vos espaces.'
      }
    ],
    
    dureeChantier: '2 à 7 jours',
    garantie: '2 ans',
    
    aidesDisponibles: [
      'TVA 10%'
    ],
    
    eligibilite: {
      maprimerenov: {
        bleu: 0,
        jaune: 0,
        violet: 0,
        rose: 0
      },
      cee: 0
    }
  }
];

// ========== FONCTIONS HELPER ==========

/**
 * Récupérer un service par son slug
 */
export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

/**
 * Récupérer les services en vedette
 */
export const getFeaturedServices = () => {
  return servicesData.filter(service => service.featured);
};

/**
 * Récupérer un service par son ID
 */
export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};

export default servicesData;