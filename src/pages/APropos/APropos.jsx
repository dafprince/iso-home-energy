/* ========================================
   À PROPOS PAGE - ULTRA PREMIUM SANS BUGS
   ======================================== */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Section, Container } from '../../components';
import './APropos.css';

const APropos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    'RGE Isolation',
    'RGE Pompe à Chaleur',
    'Qualibat 7131',
    'Qualibat 7132'
  ];

  return (
    <div className="apropos-page">
      {/* HERO */}
      <Section background="green" padding="large">
        <Container>
          <div className="apropos-hero">
            <Badge variant="secondary" size="large">À Propos</Badge>
            <h1>Votre Expert en Rénovation Énergétique</h1>
            <p>Depuis plus de 15 ans, nous accompagnons les particuliers dans leurs projets de rénovation énergétique dans les Vosges et le Grand Est.</p>
          </div>
        </Container>
      </Section>

      {/* NOTRE HISTOIRE */}
      <Section background="white" padding="large">
        <Container>
          <div className="apropos-content">
            <div className="apropos-text">
              <h2>Notre Histoire</h2>
              <p>Fondée en 2009, ISO HOME ENERGY est née de la volonté de rendre la rénovation énergétique accessible à tous. Nos fondateurs, passionnés par l'efficacité énergétique et le développement durable, ont créé une entreprise qui allie expertise technique et accompagnement personnalisé.</p>
              <p>Aujourd'hui, avec plus de 500 projets réalisés et une équipe de 12 experts certifiés RGE, nous sommes fiers d'être devenus la référence en rénovation énergétique dans notre région.</p>
            </div>
            <div className="apropos-image">
              <div className="apropos-image-placeholder">
                <span>🏢</span>
                <p>Équipe ISO HOME ENERGY</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* VALEURS */}
      <Section background="gray" padding="large">
        <Container>
          <div className="section-header">
            <Badge variant="primary">Nos Valeurs</Badge>
            <h2>Ce Qui Nous Anime</h2>
          </div>
          
          <div className="valeurs-grid">
            <div className="valeur-card">
              <span className="valeur-icon">🎯</span>
              <h3>Excellence</h3>
              <p>Nous visons l'excellence dans chaque projet, avec des matériaux de qualité et un savoir-faire reconnu.</p>
            </div>
            <div className="valeur-card">
              <span className="valeur-icon">🤝</span>
              <h3>Transparence</h3>
              <p>Devis détaillés, suivi en temps réel et communication claire à chaque étape.</p>
            </div>
            <div className="valeur-card">
              <span className="valeur-icon">🌱</span>
              <h3>Écologie</h3>
              <p>Solutions durables et respectueuses de l'environnement pour un avenir meilleur.</p>
            </div>
            <div className="valeur-card">
              <span className="valeur-icon">💚</span>
              <h3>Engagement</h3>
              <p>Accompagnement total jusqu'à l'obtention de vos aides financières.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* STATS */}
      <Section background="white" padding="large">
        <Container>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">15+</div>
              <div className="stat-label">Ans d'Expérience</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Projets Réalisés</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">98%</div>
              <div className="stat-label">Clients Satisfaits</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">12</div>
              <div className="stat-label">Experts Qualifiés</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CERTIFICATIONS */}
      <Section background="gray" padding="large">
        <Container>
          <div className="section-header">
            <Badge variant="primary">Certifications</Badge>
            <h2>Nos Garanties Qualité</h2>
          </div>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-badge">
                <span className="certification-icon">🏆</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="green" padding="medium">
        <Container>
          <div className="apropos-cta">
            <h2>Prêt à Démarrer Votre Projet ?</h2>
            <p>Contactez-nous pour un audit gratuit et sans engagement.</p>
            <div className="apropos-cta-actions">
              <Link to="/eligibilite">
                <Button variant="secondary" size="large">Tester mon éligibilité</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">Nous contacter</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default APropos;