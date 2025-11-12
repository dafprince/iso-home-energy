/* ========================================
   CONSTANTS - ISO HOME ENERGY
   Constantes et informations de l'entreprise
   ======================================== */

// ========== INFORMATIONS DE CONTACT ==========

export const CONTACT = {
  phones: {
    primary: '07 88 09 70 70',
    secondary: '06 38 85 34 02',
    tertiary: '03 73 98 21 83',
    // Format international pour WhatsApp
    whatsapp: '33788097070'
  },
  
  email: 'contact@ih-energy.fr',
  
  address: {
    street: '31 rue de la Meurthe',
    postalCode: '88650',
    city: 'Saint-Léonard',
    country: 'France',
    // Format complet pour affichage
    full: '31 rue de la Meurthe, 88650 Saint-Léonard'
  },
  
  // Horaires d'ouverture
  hours: {
    weekdays: 'Lundi - Vendredi : 9h - 18h',
    saturday: 'Samedi : 9h - 12h',
    sunday: 'Dimanche : Fermé'
  }
};

// ========== WHATSAPP ==========

export const WHATSAPP = {
  number: '33788097070', // Format international sans le +
  defaultMessage: 'Bonjour, je souhaite avoir des informations sur vos services ISO HOME ENERGY'
};

// ========== SERVICES ==========

export const SERVICES = {
  isolation: {
    id: 'isolation',
    name: 'Isolation',
    slug: 'isolation',
    description: 'Isolation thermique des toitures, murs et planchers',
    icon: 'home'
  },
  facade: {
    id: 'facade',
    name: 'Façade',
    slug: 'facade',
    description: 'Isolation thermique par l\'extérieur (ITE)',
    icon: 'building'
  },
  pompeChaleur: {
    id: 'pompe-chaleur',
    name: 'Pompe à Chaleur',
    slug: 'pompe-a-chaleur',
    description: 'Installation de pompes à chaleur performantes',
    icon: 'flame'
  },
  menuiserie: {
    id: 'menuiserie',
    name: 'Menuiserie',
    slug: 'menuiserie',
    description: 'Remplacement de fenêtres et portes',
    icon: 'door-open'
  },
  platrerie: {
    id: 'platrerie',
    name: 'Plâtrerie',
    slug: 'platrerie',
    description: 'Travaux de plâtrerie et finitions',
    icon: 'paint-roller'
  },
  peinture: {
    id: 'peinture',
    name: 'Peinture',
    slug: 'peinture',
    description: 'Peinture intérieure et extérieure',
    icon: 'paintbrush'
  }
};

// ========== ROUTES ==========

export const ROUTES = {
  home: '/',
  eligibilite: '/eligibilite',
  services: {
    isolation: '/services/isolation',
    facade: '/services/facade',
    pompeChaleur: '/services/pompe-a-chaleur',
    menuiserie: '/services/menuiserie',
    platrerie: '/services/platrerie',
    peinture: '/services/peinture'
  },
  aPropos: '/a-propos',
  realisations: '/realisations',
  aides: '/aides-financements',
  contact: '/contact'
};

// ========== RÉSEAUX SOCIAUX (optionnel pour plus tard) ==========

// ========== RÉSEAUX SOCIAUX ==========

export const SOCIAL = {
  facebook: 'https://facebook.com/isohomeenergy', // À remplacer par le vrai lien
  instagram: 'https://instagram.com/isohomeenergy', // À remplacer par le vrai lien
  linkedin: 'https://linkedin.com/company/isohomeenergy', // À remplacer par le vrai lien
  // twitter: '', // Si besoin plus tard
  // youtube: '', // Si besoin plus tard
};

// ========== TEXTES COMMUNS ==========

export const COMMON_TEXTS = {
  company: {
    name: 'ISO HOME ENERGY',
    shortName: 'ISO HOME',
    sigle: 'I.H.E',
    baseline: 'IHE pour vos Économies d\'Énergie',
    description: 'Expert en rénovation énergétique et économies d\'énergie'
  },
  
  cta: {
    devisGratuit: 'Devis Gratuit',
    testerEligibilite: 'Tester mon éligibilité',
    nousContacter: 'Nous Contacter',
    enSavoirPlus: 'En savoir plus',
    appelezNous: 'Appelez-nous',
    demander: 'Demander'
  },
  
  messages: {
    loading: 'Chargement en cours...',
    error: 'Une erreur est survenue',
    success: 'Opération réussie !',
    sending: 'Envoi en cours...',
    calculating: 'Calcul en cours...'
  }
};

// ========== AIDES FINANCIÈRES ==========

// ========== AIDES & FINANCEMENTS ========== (← AJOUT ICI)

export const AIDES_INFO = {
  maprimerenov: {
    name: 'MaPrimeRénov\'',
    description: 'Aide de l\'État pour la rénovation énergétique',
    url: 'https://www.maprimerenov.gouv.fr',
  },
  cee: {
    name: 'Certificats d\'Économies d\'Énergie (CEE)',
    description: 'Prime énergie versée par les fournisseurs d\'énergie',
  },
  ecoPtz: {
    name: 'Éco-prêt à taux zéro',
    description: 'Prêt sans intérêts pour financer vos travaux',
    montantMax: 50000,
  },
  tva: {
    name: 'TVA à taux réduit',
    taux: 5.5,
    description: 'TVA réduite à 5,5% pour les travaux de rénovation énergétique',
  }
};

// ========== PROFILS MAPRIMERENOV ========== (← AJOUT ICI)

export const PROFILS_MAPRIMERENOV = {
  bleu: {
    name: 'Bleu',
    color: '#0055A4',
    description: 'Ménages très modestes',
  },
  jaune: {
    name: 'Jaune',
    color: '#FFD700',
    description: 'Ménages modestes',
  },
  violet: {
    name: 'Violet',
    color: '#9370DB',
    description: 'Ménages intermédiaires',
  },
  rose: {
    name: 'Rose',
    color: '#FF69B4',
    description: 'Ménages aisés',
  }
};

// ========== CHIFFRES CLÉS ==========

export const STATS = {
  experience: {
    value: '10+',
    label: 'Ans d\'expérience'
  },
  projects: {
    value: '500+',
    label: 'Projets réalisés'
  },
  satisfaction: {
    value: '98%',
    label: 'Clients satisfaits'
  },
  savings: {
    value: '45%',
    label: 'Économies moyennes'
  }
};

// ========== CERTIFICATIONS ==========

export const CERTIFICATIONS = [
  {
    id: 'rge',
    name: 'RGE',
    fullName: 'Reconnu Garant de l\'Environnement',
    icon: '/images/certifications/rge.png'
  },
  {
    id: 'qualibat',
    name: 'Qualibat',
    fullName: 'Qualification Bâtiment',
    icon: '/images/certifications/qualibat.png'
  }
];

// ========== CONFIGURATION ==========

export const CONFIG = {
  siteName: 'ISO HOME ENERGY',
  siteUrl: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  
  // Pagination
  itemsPerPage: 9,
  
  // Délais animations (ms)
  animationDelay: 100,
  transitionDuration: 300,
  
  // Formulaires
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
};