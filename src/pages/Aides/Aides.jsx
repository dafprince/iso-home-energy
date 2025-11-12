/* ========================================
   AIDES PAGE - ULTRA PREMIUM
   Page sur les aides financières
   ======================================== */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Section, Container } from '../../components';
import { AIDES_INFO, PROFILS_MAPRIMERENOV } from '../../utils/constants';
import './Aides.css';

const Aides = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aides-page">
      {/* HERO */}
      <Section background="green" padding="large">
        <Container>
          <div className="aides-hero">
            <Badge variant="secondary" size="large">Aides Financières</Badge>
            <h1>Jusqu'à 100% de Financement</h1>
            <p>Découvrez toutes les aides disponibles pour financer vos travaux de rénovation énergétique en 2025.</p>
          </div>
        </Container>
      </Section>

      {/* MAPRIMERENOV */}
      <Section background="white" padding="large">
        <Container>
          <div className="section-header">
            <Badge variant="primary">MaPrimeRénov'</Badge>
            <h2>L'Aide Principale de l'État</h2>
            <p>MaPrimeRénov' est l'aide financière la plus importante pour vos travaux de rénovation énergétique. Son montant varie selon vos revenus.</p>
          </div>

          <div className="profils-grid">
            {Object.entries(PROFILS_MAPRIMERENOV).map(([key, profil]) => (
              <div key={key} className="profil-card" style={{ '--profil-color': profil.color }}>
                <div className="profil-header">
                  <div className="profil-badge" style={{ background: profil.color }}>
                    {profil.name}
                  </div>
                </div>
                <h3>{profil.description}</h3>
                <p className="profil-info">
                  {key === 'bleu' && 'Les ménages aux revenus les plus modestes bénéficient des aides les plus élevées, pouvant atteindre jusqu\'à 90% du montant des travaux.'}
                  {key === 'jaune' && 'Aides importantes pour les ménages modestes, avec des taux de prise en charge allant jusqu\'à 75% selon les travaux.'}
                  {key === 'violet' && 'Aides intermédiaires pour les ménages aux revenus standards, avec une prise en charge pouvant aller jusqu\'à 60%.'}
                  {key === 'rose' && 'Aides réduites pour les ménages aux revenus plus élevés, avec une prise en charge jusqu\'à 40% pour certains travaux.'}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* AUTRES AIDES */}
      <Section background="gray" padding="large">
        <Container>
          <div className="section-header">
            <Badge variant="primary">Autres Aides</Badge>
            <h2>Cumulez les Aides</h2>
            <p>En plus de MaPrimeRénov', vous pouvez bénéficier d'autres aides complémentaires.</p>
          </div>

          <div className="aides-grid">
            {/* CEE */}
            <div className="aide-card">
              <div className="aide-icon">💰</div>
              <h3>{AIDES_INFO.cee.name}</h3>
              <p>{AIDES_INFO.cee.description}</p>
              <ul className="aide-list">
                <li>✓ Prime versée par les fournisseurs d'énergie</li>
                <li>✓ Montant variable selon les travaux</li>
                <li>✓ Cumulable avec MaPrimeRénov'</li>
                <li>✓ Versement rapide après travaux</li>
              </ul>
            </div>

            {/* ECO-PTZ */}
            <div className="aide-card">
              <div className="aide-icon">🏦</div>
              <h3>{AIDES_INFO.ecoPtz.name}</h3>
              <p>{AIDES_INFO.ecoPtz.description}</p>
              <ul className="aide-list">
                <li>✓ Prêt jusqu'à {AIDES_INFO.ecoPtz.montantMax.toLocaleString('fr-FR')} €</li>
                <li>✓ Taux d'intérêt à 0%</li>
                <li>✓ Durée de remboursement jusqu'à 20 ans</li>
                <li>✓ Sans condition de ressources</li>
              </ul>
            </div>

            {/* TVA RÉDUITE */}
            <div className="aide-card">
              <div className="aide-icon">🧾</div>
              <h3>{AIDES_INFO.tva.name}</h3>
              <p>{AIDES_INFO.tva.description}</p>
              <ul className="aide-list">
                <li>✓ TVA à {AIDES_INFO.tva.taux}% au lieu de 20%</li>
                <li>✓ Applicable sur la main d'œuvre</li>
                <li>✓ Applicable sur le matériel</li>
                <li>✓ Économie immédiate sur la facture</li>
              </ul>
            </div>

            {/* CHÈQUE ÉNERGIE */}
            <div className="aide-card">
              <div className="aide-icon">🎫</div>
              <h3>Chèque Énergie</h3>
              <p>Aide nominative pour payer vos factures d'énergie ou vos travaux de rénovation.</p>
              <ul className="aide-list">
                <li>✓ Montant de 48€ à 277€ par an</li>
                <li>✓ Envoyé automatiquement par l'État</li>
                <li>✓ Utilisable pour les travaux</li>
                <li>✓ Selon vos revenus</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SIMULATEUR */}
      <Section background="white" padding="large">
        <Container>
          <div className="aides-simulateur">
            <div className="simulateur-content">
              <h2>Calculez Vos Aides</h2>
              <p>Notre simulateur en ligne vous permet de connaître instantanément le montant des aides auxquelles vous avez droit.</p>
              <ul className="simulateur-avantages">
                <li>✓ Résultat en 2 minutes</li>
                <li>✓ Calcul précis et personnalisé</li>
                <li>✓ Toutes les aides cumulées</li>
                <li>✓ Accompagnement dans les démarches</li>
              </ul>
            </div>
            <div className="simulateur-cta">
              <div className="simulateur-card">
                <div className="simulateur-icon">🎯</div>
                <h3>Test Gratuit</h3>
                <p>Découvrez en quelques clics le montant de vos aides</p>
                <Link to="/eligibilite">
                  <Button variant="primary" size="large" fullWidth>
                    Calculer mes aides
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ACCOMPAGNEMENT */}
      <Section background="green" padding="large">
        <Container>
          <div className="aides-accompagnement">
            <h2>Nous Gérons Toutes Vos Démarches</h2>
            <p>Notre équipe vous accompagne de A à Z pour l'obtention de vos aides financières.</p>
            
            <div className="accompagnement-steps">
              <div className="accompagnement-step">
                <span className="step-number">1</span>
                <h3>Audit Gratuit</h3>
                <p>Nous évaluons votre éligibilité et le montant de vos aides</p>
              </div>
              <div className="accompagnement-step">
                <span className="step-number">2</span>
                <h3>Constitution du Dossier</h3>
                <p>Nous préparons tous les documents nécessaires</p>
              </div>
              <div className="accompagnement-step">
                <span className="step-number">3</span>
                <h3>Dépôt des Demandes</h3>
                <p>Nous déposons vos demandes d'aides auprès des organismes</p>
              </div>
              <div className="accompagnement-step">
                <span className="step-number">4</span>
                <h3>Suivi & Versement</h3>
                <p>Nous suivons vos dossiers jusqu'au versement des aides</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-8)' }}>
              <Link to="/contact">
                <Button variant="secondary" size="large">
                  Demander un accompagnement
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Aides;