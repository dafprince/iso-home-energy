/* ========================================
   RÉALISATIONS PAGE - ULTRA PREMIUM
   ======================================== */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Section, Container } from '../../components';
import { REALISATIONS } from '../../data/images';
import './Realisations.css';

const Realisations = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredRealisations = filter === 'all' 
    ? REALISATIONS 
    : REALISATIONS.filter(r => r.service === filter);

  return (
    <div className="realisations-page">
      {/* HERO */}
      <Section background="green" padding="large">
        <Container>
          <div className="realisations-hero">
            <Badge variant="secondary" size="large">Nos Réalisations</Badge>
            <h1>Portfolio Avant / Après</h1>
            <p>Découvrez quelques-unes de nos plus belles transformations réalisées dans les Vosges et le Grand Est.</p>
          </div>
        </Container>
      </Section>

      {/* FILTRES */}
      <Section background="white" padding="medium">
        <Container>
          <div className="realisations-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Tous les projets
            </button>
            <button 
              className={`filter-btn ${filter === 'isolation' ? 'active' : ''}`}
              onClick={() => setFilter('isolation')}
            >
              🏠 Isolation
            </button>
            <button 
              className={`filter-btn ${filter === 'facade' ? 'active' : ''}`}
              onClick={() => setFilter('facade')}
            >
              🏗️ Façade
            </button>
            <button 
              className={`filter-btn ${filter === 'menuiserie' ? 'active' : ''}`}
              onClick={() => setFilter('menuiserie')}
            >
              🪟 Menuiserie
            </button>
          </div>
        </Container>
      </Section>

      {/* GRILLE RÉALISATIONS */}
      <Section background="gray" padding="large">
        <Container>
          <div className="realisations-grid">
            {filteredRealisations.map((realisation) => (
              <div key={realisation.id} className="realisation-card">
                <div className="realisation-images">
                  <div className="realisation-image avant">
                    <img src={realisation.avant} alt={`${realisation.titre} - Avant`} />
                    <span className="realisation-label">Avant</span>
                  </div>
                  <div className="realisation-divider">
                    <span className="realisation-arrow">→</span>
                  </div>
                  <div className="realisation-image apres">
                    <img src={realisation.apres} alt={`${realisation.titre} - Après`} />
                    <span className="realisation-label apres-label">Après</span>
                  </div>
                </div>
                <div className="realisation-info">
                  <h3>{realisation.titre}</h3>
                  <Badge variant="primary">{realisation.service}</Badge>
                </div>
              </div>
            ))}
          </div>

          {filteredRealisations.length === 0 && (
            <div className="realisations-empty">
              <p>Aucune réalisation dans cette catégorie pour le moment.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <Section background="green" padding="medium">
        <Container>
          <div className="realisations-cta">
            <h2>Votre Projet Sera Le Prochain !</h2>
            <p>Contactez-nous pour transformer votre logement.</p>
            <div className="realisations-cta-actions">
              <Link to="/eligibilite">
                <Button variant="secondary" size="large">Tester mon éligibilité</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">Demander un devis</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Realisations;