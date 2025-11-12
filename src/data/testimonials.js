/* ========================================
   TESTIMONIALS - ISO HOME ENERGY
   Témoignages clients
   ======================================== */

import { TESTIMONIALS_IMAGES } from './images';

export const testimonialsData = [
  {
    id: 1,
    name: 'Marie Dupont',
    location: 'Saint-Léonard',
    avatar: TESTIMONIALS_IMAGES.client1,
    rating: 5,
    service: 'Isolation',
    date: '2024-10-15',
    comment: 'Excellente prestation ! L\'équipe d\'ISO HOME a réalisé l\'isolation de mes combles en 3 jours. Travail soigné, équipe professionnelle et sympathique. Ma facture de chauffage a déjà baissé de 35% !',
    featured: true
  },
  
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    location: 'Épinal',
    avatar: TESTIMONIALS_IMAGES.client2,
    rating: 5,
    service: 'Façade',
    date: '2024-09-28',
    comment: 'Je recommande vivement ! L\'isolation de ma façade par l\'extérieur a complètement transformé ma maison. Le chantier était propre et bien organisé. En plus, les aides ont couvert 80% des travaux.',
    featured: true
  },
  
  {
    id: 3,
    name: 'Sophie Lambert',
    location: 'Remiremont',
    avatar: TESTIMONIALS_IMAGES.client3,
    rating: 5,
    service: 'Pompe à Chaleur',
    date: '2024-11-02',
    comment: 'Installation de pompe à chaleur impeccable. L\'équipe a pris le temps de tout m\'expliquer. Je ne regrette absolument pas cet investissement, ma maison est parfaitement chauffée pour un coût dérisoire !',
    featured: true
  },
  
  {
    id: 4,
    name: 'Michel Rousseau',
    location: 'Gérardmer',
    avatar: TESTIMONIALS_IMAGES.client4,
    rating: 5,
    service: 'Menuiserie',
    date: '2024-08-19',
    comment: 'Changement de toutes mes fenêtres. Finies les fenêtres qui laissent passer le froid ! L\'isolation phonique est également bien meilleure. Équipe ponctuelle et professionnelle. Très satisfait du résultat.',
    featured: false
  },
  
  {
    id: 5,
    name: 'Isabelle Moreau',
    location: 'Saint-Dié-des-Vosges',
    avatar: TESTIMONIALS_IMAGES.client5,
    rating: 5,
    service: 'Isolation',
    date: '2024-07-12',
    comment: 'ISO HOME s\'est occupé de tout : audit, dossier de subventions, travaux. Je n\'ai eu aucun stress et aucune avance de frais à faire. L\'isolation de mes murs a été réalisée en 1 semaine. Parfait !',
    featured: false
  },
  
  {
    id: 6,
    name: 'Patrick Blanc',
    location: 'Vittel',
    avatar: TESTIMONIALS_IMAGES.client1,
    rating: 4,
    service: 'Façade',
    date: '2024-06-05',
    comment: 'Très bon travail sur l\'isolation extérieure. Ma maison a été totalement métamorphosée. Le chantier a duré un peu plus longtemps que prévu à cause de la météo, mais le résultat est au rendez-vous.',
    featured: false
  },
  
  {
    id: 7,
    name: 'Christine Petit',
    location: 'Neufchâteau',
    avatar: TESTIMONIALS_IMAGES.client2,
    rating: 5,
    service: 'Pompe à Chaleur',
    date: '2024-05-20',
    comment: 'Remplacement de ma vieille chaudière par une pompe à chaleur. L\'installation s\'est faite en 2 jours. Les techniciens étaient compétents et m\'ont bien conseillée. Je recommande sans hésiter !',
    featured: false
  },
  
  {
    id: 8,
    name: 'François Garnier',
    location: 'Mirecourt',
    avatar: TESTIMONIALS_IMAGES.client3,
    rating: 5,
    service: 'Isolation',
    date: '2024-04-15',
    comment: 'Isolation de ma toiture et de mes murs. Travaux réalisés dans les temps, chantier propre. ISO HOME a géré toutes les démarches pour les aides. Confort thermique nettement amélioré. Merci !',
    featured: false
  }
];

// ========== STATISTIQUES TÉMOIGNAGES ==========

export const testimonialStats = {
  totalReviews: testimonialsData.length,
  averageRating: 4.9,
  fiveStarPercentage: 88,
  recommendationRate: 98
};

// ========== HELPER FUNCTIONS ==========

/**
 * Récupérer uniquement les témoignages featured (mis en avant)
 * @returns {array}
 */
export const getFeaturedTestimonials = () => {
  return testimonialsData.filter(testimonial => testimonial.featured);
};

/**
 * Récupérer les témoignages par service
 * @param {string} service - Le nom du service
 * @returns {array}
 */
export const getTestimonialsByService = (service) => {
  return testimonialsData.filter(
    testimonial => testimonial.service.toLowerCase() === service.toLowerCase()
  );
};

/**
 * Récupérer un témoignage par son ID
 * @param {number} id - L'ID du témoignage
 * @returns {object|undefined}
 */
export const getTestimonialById = (id) => {
  return testimonialsData.find(testimonial => testimonial.id === id);
};

/**
 * Récupérer les témoignages récents (derniers X)
 * @param {number} count - Nombre de témoignages à récupérer
 * @returns {array}
 */
export const getRecentTestimonials = (count = 3) => {
  return testimonialsData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

/**
 * Récupérer tous les témoignages
 * @returns {array}
 */
export const getAllTestimonials = () => {
  return testimonialsData;
};

/**
 * Calculer la note moyenne
 * @returns {number}
 */
export const getAverageRating = () => {
  const total = testimonialsData.reduce((sum, t) => sum + t.rating, 0);
  return (total / testimonialsData.length).toFixed(1);
};