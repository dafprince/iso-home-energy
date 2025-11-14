/* ========================================
   CALCULATOR DATA - PRIX & OPTIONS
   ======================================== */

// Prix de base par service (€/m² ou €/unité)
export const servicesPrice = {
  isolation: {
    name: 'Isolation Thermique',
    icon: '🏠',
    pricePerM2: 85,
    unit: 'm²',
    description: 'Isolation complète des combles, murs et sols'
  },
  facade: {
    name: 'Ravalement de Façade',
    icon: '🏗️',
    pricePerM2: 115,
    unit: 'm²',
    description: 'Ravalement complet avec ITE'
  },
  'pompe-chaleur': {
    name: 'Pompe à Chaleur',
    icon: '♨️',
    pricePerM2: 150,
    unit: 'm²',
    description: 'Installation complète avec radiateurs'
  },
  menuiserie: {
    name: 'Menuiserie',
    icon: '🪟',
    pricePerM2: 350,
    unit: 'm²',
    description: 'Remplacement fenêtres et portes'
  },
  platrerie: {
    name: 'Plâtrerie',
    icon: '🔨',
    pricePerM2: 45,
    unit: 'm²',
    description: 'Placo, cloisons et finitions'
  },
  peinture: {
    name: 'Peinture',
    icon: '🎨',
    pricePerM2: 30,
    unit: 'm²',
    description: 'Peinture intérieure et extérieure'
  }
};

// Niveaux de qualité
export const qualityLevels = {
  standard: {
    name: 'Standard',
    multiplier: 1.0,
    description: 'Matériaux de qualité standard',
    badge: '⭐'
  },
  confort: {
    name: 'Confort',
    multiplier: 1.3,
    description: 'Matériaux de qualité supérieure',
    badge: '⭐⭐'
  },
  premium: {
    name: 'Premium',
    multiplier: 1.6,
    description: 'Matériaux haut de gamme',
    badge: '⭐⭐⭐'
  }
};

// Options additionnelles
export const additionalOptions = [
  {
    id: 'conseil',
    label: 'Conseil personnalisé',
    description: 'Accompagnement sur-mesure par un expert',
    percentage: 15,
    icon: '💡'
  },
  {
    id: 'express',
    label: 'Délai express (-30 jours)',
    description: 'Réalisation prioritaire sous 30 jours',
    percentage: 20,
    icon: '⚡'
  },
  {
    id: 'garantie',
    label: 'Garantie étendue 10 ans',
    description: 'Extension de garantie décennale',
    percentage: 8,
    icon: '🛡️'
  },
  {
    id: 'maintenance',
    label: 'Contrat maintenance annuel',
    description: 'Entretien et suivi annuel inclus',
    percentage: 12,
    icon: '🔧'
  }
];

// Estimation des aides (pourcentage du coût total)
export const aidesEstimation = {
  low: 0.4,      // 40% (revenus élevés)
  medium: 0.6,   // 60% (revenus moyens)
  high: 0.8      // 80% (revenus modestes)
};

// Fonction de calcul
export const calculateEstimate = (surface, serviceKey, qualityKey, selectedOptions = []) => {
  // Validation
  if (!surface || surface <= 0) return null;
  if (!servicesPrice[serviceKey]) return null;
  if (!qualityLevels[qualityKey]) return null;

  // Prix de base
  const basePrice = servicesPrice[serviceKey].pricePerM2 * surface;
  
  // Multiplicateur qualité
  const qualityMultiplier = qualityLevels[qualityKey].multiplier;
  
  // Prix avec qualité
  let totalPrice = basePrice * qualityMultiplier;
  
  // Options additionnelles
  let optionsTotal = 0;
  selectedOptions.forEach(optionId => {
    const option = additionalOptions.find(opt => opt.id === optionId);
    if (option) {
      optionsTotal += (totalPrice * option.percentage) / 100;
    }
  });
  
  // Prix final
  const finalPrice = totalPrice + optionsTotal;
  
  // Estimation des aides (moyenne 60%)
  const estimatedAides = finalPrice * aidesEstimation.medium;
  
  // Reste à charge
  const remainingCost = finalPrice - estimatedAides;
  
  return {
    basePrice: Math.round(basePrice),
    qualityMultiplier,
    optionsTotal: Math.round(optionsTotal),
    totalPrice: Math.round(finalPrice),
    estimatedAides: Math.round(estimatedAides),
    remainingCost: Math.round(remainingCost),
    service: servicesPrice[serviceKey].name,
    quality: qualityLevels[qualityKey].name,
    surface
  };
};