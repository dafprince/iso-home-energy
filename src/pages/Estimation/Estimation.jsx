/* ========================================
   PAGE ESTIMATION - ULTRA PREMIUM
   ======================================== */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Section, Container, Button } from '../../components';
import { 
  servicesPrice, 
  qualityLevels, 
  additionalOptions,
  calculateEstimate 
} from '../../data/calculatorData';
import './Estimation.css';

const Estimation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    surface: '',
    service: '',
    quality: '',
    selectedOptions: []
  });
  
  // Result state
  const [result, setResult] = useState(null);

  // Animation state
  const [isAnimating, setIsAnimating] = useState(false);

  // Gérer les options cochées
  const handleOptionToggle = (optionId) => {
    setFormData(prev => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(optionId)
        ? prev.selectedOptions.filter(id => id !== optionId)
        : [...prev.selectedOptions, optionId]
    }));
  };

  // Passer à l'étape suivante
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(step + 1);
      setIsAnimating(false);
    }, 300);
  };

  // Retour étape précédente
  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(step - 1);
      setIsAnimating(false);
    }, 300);
  };

  // Calculer l'estimation
  const handleCalculate = () => {
    const estimation = calculateEstimate(
      parseFloat(formData.surface),
      formData.service,
      formData.quality,
      formData.selectedOptions
    );
    
    if (estimation) {
      setResult(estimation);
      setShowResult(true);
      setStep(1); // Reset pour nouvelle estimation
    }
  };

  // Nouvelle estimation
  const handleNewEstimate = () => {
    setFormData({
      surface: '',
      service: '',
      quality: '',
      selectedOptions: []
    });
    setResult(null);
    setShowResult(false);
    setStep(1);
  };

  // Calcul du total des options en %
  const getTotalOptionsPercentage = () => {
    return formData.selectedOptions.reduce((total, optionId) => {
      const option = additionalOptions.find(opt => opt.id === optionId);
      return total + (option ? option.percentage : 0);
    }, 0);
  };

  // Progress percentage
  const progressPercentage = (step / 4) * 100;

  return (
    <div className="estimation-page">
      {/* HERO */}
      <Section background="green" padding="large">
        <Container>
          <div className="estimation-hero">
            <div className="hero-icon-animated">💰</div>
            <Badge variant="secondary" size="large">
              Estimation Gratuite
            </Badge>
            <h1>Estimez vos Travaux</h1>
            <p>
              Obtenez une estimation personnalisée de vos travaux de rénovation 
              avec notre calculateur intelligent
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Résultat en 2 min</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>100% Gratuit</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FORMULAIRE OU RÉSULTAT */}
      <Section background="white" padding="large">
        <Container>
          {!showResult ? (
            <div className="estimation-form-wrapper">
              {/* PROGRESS BAR */}
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  Étape {step} sur 4
                </div>
              </div>

              {/* FORM CONTAINER */}
              <div className={`form-container ${isAnimating ? 'animating' : ''}`}>
                
                {/* ÉTAPE 1 : SURFACE */}
                {step === 1 && (
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-number">1</span>
                      <h2>Quelle est la surface à rénover ?</h2>
                      <p>Indiquez la surface en mètres carrés</p>
                    </div>
                    <div className="step-content">
                      <div className="input-group-large">
                        <input
                          type="number"
                          value={formData.surface}
                          onChange={(e) => setFormData({...formData, surface: e.target.value})}
                          placeholder="Ex: 80"
                          min="1"
                          className="input-xl"
                        />
                        <span className="input-unit">m²</span>
                      </div>
                    </div>
                    <div className="step-actions">
                      <Button 
                        variant="primary" 
                        size="large"
                        onClick={handleNext}
                        disabled={!formData.surface || formData.surface <= 0}
                      >
                        Continuer →
                      </Button>
                    </div>
                  </div>
                )}

                {/* ÉTAPE 2 : SERVICE */}
                {step === 2 && (
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-number">2</span>
                      <h2>Quel type de travaux ?</h2>
                      <p>Sélectionnez le service souhaité</p>
                    </div>
                    <div className="step-content">
                      <div className="services-grid-select">
                        {Object.keys(servicesPrice).map(key => (
                          <div
                            key={key}
                            className={`service-select-card ${formData.service === key ? 'selected' : ''}`}
                            onClick={() => setFormData({...formData, service: key})}
                          >
                            <span className="service-icon">{servicesPrice[key].icon}</span>
                            <h4>{servicesPrice[key].name}</h4>
                            <p>{servicesPrice[key].description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="step-actions">
                      <Button variant="outline" onClick={handlePrev}>
                        ← Retour
                      </Button>
                      <Button 
                        variant="primary" 
                        size="large"
                        onClick={handleNext}
                        disabled={!formData.service}
                      >
                        Continuer →
                      </Button>
                    </div>
                  </div>
                )}

                {/* ÉTAPE 3 : QUALITÉ */}
                {step === 3 && (
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-number">3</span>
                      <h2>Quel niveau de qualité ?</h2>
                      <p>Choisissez la qualité des matériaux</p>
                    </div>
                    <div className="step-content">
                      <div className="quality-grid">
                        {Object.keys(qualityLevels).map(key => (
                          <div
                            key={key}
                            className={`quality-card ${formData.quality === key ? 'selected' : ''}`}
                            onClick={() => setFormData({...formData, quality: key})}
                          >
                            <span className="quality-badge">{qualityLevels[key].badge}</span>
                            <h4>{qualityLevels[key].name}</h4>
                            <p>{qualityLevels[key].description}</p>
                            <span className="quality-multiplier">
                              x{qualityLevels[key].multiplier}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="step-actions">
                      <Button variant="outline" onClick={handlePrev}>
                        ← Retour
                      </Button>
                      <Button 
                        variant="primary" 
                        size="large"
                        onClick={handleNext}
                        disabled={!formData.quality}
                      >
                        Continuer →
                      </Button>
                    </div>
                  </div>
                )}

                {/* ÉTAPE 4 : OPTIONS */}
                {step === 4 && (
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-number">4</span>
                      <h2>Options additionnelles</h2>
                      <p>Sélectionnez vos options (facultatif)</p>
                    </div>
                    <div className="step-content">
                      <div className="options-grid">
                        {additionalOptions.map(option => (
                          <label key={option.id} className="option-card">
                            <input
                              type="checkbox"
                              checked={formData.selectedOptions.includes(option.id)}
                              onChange={() => handleOptionToggle(option.id)}
                            />
                            <div className="option-card-content">
                              <div className="option-header">
                                <span className="option-icon">{option.icon}</span>
                                <span className="option-badge">+{option.percentage}%</span>
                              </div>
                              <h4>{option.label}</h4>
                              <p>{option.description}</p>
                            </div>
                            <div className="option-check">
                              {formData.selectedOptions.includes(option.id) && '✓'}
                            </div>
                          </label>
                        ))}
                      </div>
                      {formData.selectedOptions.length > 0 && (
                        <div className="options-summary">
                          Total options : +{getTotalOptionsPercentage()}%
                        </div>
                      )}
                    </div>
                    <div className="step-actions">
                      <Button variant="outline" onClick={handlePrev}>
                        ← Retour
                      </Button>
                      <Button 
                        variant="primary" 
                        size="large"
                        onClick={handleCalculate}
                      >
                        Voir mon estimation 💰
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* RÉSULTAT */
            <div className="estimation-result">
              <div className="result-header">
                <div className="result-icon">✨</div>
                <h2>Votre Estimation Personnalisée</h2>
                <p>Basée sur vos critères : {result.surface} m² de {result.service}</p>
              </div>

              <div className="result-cards">
                <div className="result-card result-card-total">
                  <span className="result-label">Coût Total Estimé</span>
                  <span className="result-value">{result.totalPrice.toLocaleString('fr-FR')} €</span>
                </div>

                <div className="result-card result-card-aides">
                  <span className="result-label">Aides Possibles</span>
                  <span className="result-value result-value-green">
                    - {result.estimatedAides.toLocaleString('fr-FR')} €
                  </span>
                </div>

                <div className="result-divider"></div>

                <div className="result-card result-card-remaining">
                  <span className="result-label">Reste à Charge</span>
                  <span className="result-value result-value-final">
                    {result.remainingCost.toLocaleString('fr-FR')} €
                  </span>
                </div>
              </div>

              <div className="result-details">
                <h3>📊 Détails du Calcul</h3>
                <ul>
                  <li>
                    <span>Service :</span>
                    <strong>{result.service} ({result.surface} m²)</strong>
                  </li>
                  <li>
                    <span>Niveau :</span>
                    <strong>{result.quality}</strong>
                  </li>
                  {result.optionsTotal > 0 && (
                    <li>
                      <span>Options :</span>
                      <strong>+{result.optionsTotal.toLocaleString('fr-FR')} €</strong>
                    </li>
                  )}
                </ul>
              </div>

              <div className="result-actions">
                <Link to="/contact">
                  <Button variant="primary" size="large">
                    Demander un devis gratuit
                  </Button>
                </Link>
                <Button variant="outline" size="large" onClick={handleNewEstimate}>
                  Nouvelle estimation
                </Button>
              </div>

              <p className="result-note">
                💡 Cette estimation est indicative. Un devis détaillé sera établi après visite technique.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <Section background="black" padding="large">
        <Container>
          <div className="estimation-cta">
            <h2>Prêt à Démarrer Votre Projet ?</h2>
            <p>Contactez-nous pour un audit gratuit et personnalisé</p>
            <Link to="/contact">
              <Button variant="primary" size="large">
                Demander un devis
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Estimation;