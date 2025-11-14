/* ========================================
   RÉALISATIONS PAGE - ULTRA PREMIUM
   ======================================== */

import { useState, useEffect } from 'react';
import { Badge, Section, Container } from '../../components';
import RealisationCard from '../../components/features/RealisationCard';
import { 
  realisationsData, 
  categories, 
  getRealisationsByCategory,
  getCountByCategory 
} from '../../data/realisations';
import './Realisations.css';

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredRealisations, setFilteredRealisations] = useState(realisationsData);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setIsAnimating(true);
    setActiveCategory(categoryId);
    
    setTimeout(() => {
      const filtered = getRealisationsByCategory(categoryId);
      setFilteredRealisations(filtered);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="realisations-page">
      {/* HERO */}
      <Section background="green" padding="large">
        <Container>
          <div className="realisations-hero">
            <Badge variant="secondary" size="large">
              🏆 Nos Réalisations
            </Badge>
            <h1>Plus de 500 Projets Réalisés</h1>
            <p>
              Découvrez nos chantiers avant/après et laissez-vous inspirer pour votre projet 
              de rénovation énergétique.
            </p>
          </div>
        </Container>
      </Section>

      {/* FILTERS */}
      <Section background="white" padding="medium">
        <Container>
          <div className="realisations-filters">
            {categories.map(category => {
              const count = getCountByCategory(category.id);
              return (
                <button
                  key={category.id}
                  className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  <span className="filter-name">{category.name}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* GRID */}
      <Section background="gray" padding="large">
        <Container>
          {/* COUNTER */}
          <div className="realisations-counter">
            <p>
              <strong>{filteredRealisations.length}</strong> réalisation{filteredRealisations.length > 1 ? 's' : ''} 
              {activeCategory !== 'all' && ` en ${categories.find(c => c.id === activeCategory)?.name}`}
            </p>
          </div>

          {/* GRID */}
          <div className={`realisations-grid ${isAnimating ? 'animating' : ''}`}>
            {filteredRealisations.map(realisation => (
              <RealisationCard 
                key={realisation.id} 
                realisation={realisation}
              />
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredRealisations.length === 0 && (
            <div className="realisations-empty">
              <div className="empty-icon">🔍</div>
              <h3>Aucune réalisation trouvée</h3>
              <p>Essayez un autre filtre</p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <Section background="black" padding="large">
        <Container>
          <div className="realisations-cta">
            <h2>Votre Projet en Tête ?</h2>
            <p>
              Contactez-nous pour un devis gratuit et personnalisé
            </p>
            <a href="/contact" className="cta-button">
              Demander un devis
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Realisations;