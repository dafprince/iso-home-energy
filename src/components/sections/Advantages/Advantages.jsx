import React from 'react';
import './Advantages.css';

const advantagesList = [
  {
    id: 1,
    icon: '⚡️',
    title: 'Efficacité énergétique garantie',
    description: "Réduisez durablement vos factures d'énergie grâce à nos solutions sur mesure.",
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Installation rapide',
    description: 'Intervention sous 72h avec suivi personnalisé de votre chantier.',
  },
  {
    id: 3,
    icon: '🌱',
    title: 'Engagement écologique',
    description: 'Des matériaux respectueux de l’environnement et des techniques durables.',
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Accompagnement client premium',
    description: 'Conseils personnalisés, service après-vente réactif et proximité.',
  },
];

const Advantages = () => (
  <section className="advantages-section">
    <h2 className="section-title">Nos Avantages</h2>
    <div className="advantages-grid">
      {advantagesList.map(({ id, icon, title, description }) => (
        <div key={id} className="advantage-item">
          <div className="advantage-icon">{icon}</div>
          <h3 className="advantage-title">{title}</h3>
          <p className="advantage-description">{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages;
