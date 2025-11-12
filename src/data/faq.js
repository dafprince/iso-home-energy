/* ========================================
   FAQ - ISO HOME ENERGY
   Questions fréquemment posées
   ======================================== */

export const faqData = [
  {
    id: 1,
    category: 'Général',
    question: 'Quels sont les services proposés par ISO HOME ENERGY ?',
    answer: 'Nous proposons 6 services principaux : l\'isolation thermique (combles, murs, planchers), l\'isolation de façade par l\'extérieur (ITE), l\'installation de pompes à chaleur, le remplacement de menuiseries (fenêtres et portes), la plâtrerie et la peinture intérieure et extérieure.',
    featured: true
  },
  
  {
    id: 2,
    category: 'Aides',
    question: 'Quelles aides financières puis-je obtenir pour mes travaux ?',
    answer: 'Vous pouvez bénéficier de plusieurs aides : MaPrimeRénov\' (jusqu\'à 15 000€), les Certificats d\'Économies d\'Énergie (CEE), l\'Éco-Prêt à Taux Zéro (jusqu\'à 30 000€) et la TVA réduite à 5,5%. ISO HOME s\'occupe de toutes les démarches pour vous.',
    featured: true
  },
  
  {
    id: 3,
    category: 'Aides',
    question: 'Est-ce que je dois avancer les frais des travaux ?',
    answer: 'Non ! Grâce au système de tiers-payant et aux aides financières, vous ne payez que le reste à charge. Dans certains cas, les aides peuvent financer jusqu\'à 100% de vos travaux. Nous nous occupons de tout le montage financier.',
    featured: true
  },
  
  {
    id: 4,
    category: 'Processus',
    question: 'Comment se déroule le processus de A à Z ?',
    answer: 'Notre processus comprend 4 étapes : 1) Audit gratuit à domicile, 2) Obtention des subventions (nous gérons toutes les démarches), 3) Réalisation des travaux par nos équipes certifiées RGE, 4) Validation par un organisme indépendant COFRAC et versement des aides.',
    featured: true
  },
  
  {
    id: 5,
    category: 'Délais',
    question: 'Combien de temps durent les travaux ?',
    answer: 'Cela dépend du type de travaux : l\'isolation de combles prend 2-3 jours, une façade ITE 2-4 semaines, l\'installation d\'une pompe à chaleur 2-3 jours, le remplacement de fenêtres 1-2 jours. Nous vous donnons un planning précis dès le début.',
    featured: false
  },
  
  {
    id: 6,
    category: 'Éligibilité',
    question: 'Comment savoir si je suis éligible aux aides ?',
    answer: 'Vous pouvez tester votre éligibilité gratuitement sur notre site en remplissant le formulaire dédié. Vous obtiendrez une estimation instantanée des aides auxquelles vous pouvez prétendre. Sinon, appelez-nous au 07 88 09 70 70 pour un diagnostic personnalisé.',
    featured: true
  },
  
  {
    id: 7,
    category: 'Certifications',
    question: 'Êtes-vous certifiés RGE ?',
    answer: 'Oui, ISO HOME ENERGY est certifié RGE (Reconnu Garant de l\'Environnement) et Qualibat. Ces certifications sont obligatoires pour que vous puissiez bénéficier des aides publiques et garantissent la qualité de nos interventions.',
    featured: false
  },
  
  {
    id: 8,
    category: 'Garanties',
    question: 'Quelles garanties avez-vous sur les travaux ?',
    answer: 'Tous nos travaux sont garantis : garantie décennale sur l\'isolation et les façades (10 ans), garantie biennale sur les équipements (2 ans), et garantie constructeur sur les pompes à chaleur (5 ans). Vous êtes totalement protégé.',
    featured: false
  },
  
  {
    id: 9,
    category: 'Zone',
    question: 'Dans quelle zone intervenez-vous ?',
    answer: 'Nous intervenons principalement dans les Vosges et le Grand Est : Saint-Léonard, Épinal, Gérardmer, Remiremont, Saint-Dié-des-Vosges, Vittel, Neufchâteau et les communes alentours. Contactez-nous pour confirmer votre secteur.',
    featured: false
  },
  
  {
    id: 10,
    category: 'Devis',
    question: 'Le devis est-il vraiment gratuit ?',
    answer: 'Oui, absolument ! Le devis est 100% gratuit et sans engagement. Nous nous déplaçons chez vous pour réaliser un audit complet, vous conseiller et vous fournir un devis détaillé. Vous êtes libre d\'accepter ou de refuser notre proposition.',
    featured: true
  },
  
  {
    id: 11,
    category: 'Économies',
    question: 'Combien puis-je économiser sur ma facture de chauffage ?',
    answer: 'Cela dépend de vos travaux : l\'isolation des combles permet d\'économiser jusqu\'à 30% sur votre facture, l\'isolation des murs 20-25%, et une pompe à chaleur peut diviser votre facture par 3 ou 4. En moyenne, nos clients économisent 45% sur leurs dépenses énergétiques.',
    featured: false
  },
  
  {
    id: 12,
    category: 'Contact',
    question: 'Comment vous contacter ?',
    answer: 'Vous pouvez nous contacter par téléphone au 07 88 09 70 70, par email à contact@ih-energy.fr, via le formulaire de contact sur notre site, ou directement par WhatsApp. Nous sommes disponibles du lundi au vendredi de 9h à 18h et le samedi de 9h à 12h.',
    featured: false
  }
];

// ========== CATÉGORIES FAQ ==========

export const faqCategories = [
  { id: 'general', name: 'Général', icon: 'info' },
  { id: 'aides', name: 'Aides & Financements', icon: 'euro' },
  { id: 'processus', name: 'Processus', icon: 'list' },
  { id: 'eligibilite', name: 'Éligibilité', icon: 'check-circle' },
  { id: 'delais', name: 'Délais', icon: 'clock' },
  { id: 'certifications', name: 'Certifications', icon: 'award' },
  { id: 'garanties', name: 'Garanties', icon: 'shield' },
  { id: 'zone', name: 'Zone d\'intervention', icon: 'map-pin' },
  { id: 'devis', name: 'Devis', icon: 'file-text' },
  { id: 'economies', name: 'Économies', icon: 'trending-down' },
  { id: 'contact', name: 'Contact', icon: 'phone' }
];

// ========== HELPER FUNCTIONS ==========

/**
 * Récupérer uniquement les questions featured (mises en avant)
 * @returns {array}
 */
export const getFeaturedFAQ = () => {
  return faqData.filter(faq => faq.featured);
};

/**
 * Récupérer les questions par catégorie
 * @param {string} category - La catégorie
 * @returns {array}
 */
export const getFAQByCategory = (category) => {
  return faqData.filter(
    faq => faq.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Récupérer une question par son ID
 * @param {number} id - L'ID de la question
 * @returns {object|undefined}
 */
export const getFAQById = (id) => {
  return faqData.find(faq => faq.id === id);
};

/**
 * Récupérer toutes les questions
 * @returns {array}
 */
export const getAllFAQ = () => {
  return faqData;
};

/**
 * Rechercher dans les questions/réponses
 * @param {string} query - Terme de recherche
 * @returns {array}
 */
export const searchFAQ = (query) => {
  const lowerQuery = query.toLowerCase();
  return faqData.filter(
    faq =>
      faq.question.toLowerCase().includes(lowerQuery) ||
      faq.answer.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Récupérer les catégories uniques
 * @returns {array}
 */
export const getUniqueCategories = () => {
  return [...new Set(faqData.map(faq => faq.category))];
};