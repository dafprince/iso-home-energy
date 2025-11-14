/* ========================================
   CALCULATOR - COMPOSANT PRINCIPAL
   ======================================== */

import { useState } from 'react';
import { 
  servicesPrice, 
  qualityLevels, 
  additionalOptions,
  calculateEstimate 
} from '../../data/calculatorData';
import './Calculator.css';

const Calculator = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  // Form state
  const [surface, setSurface] = useState('');
  const [service, setService] = useState('');
  const [quality, setQuality] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  // Result state
  const [result, setResult] = useState(null);

  // Gérer l'affichage du formulaire
  const handleShowForm = () => {
    setIsFormVisible(true);
    setShowResult(false);
  };

  // Gérer les options cochées
  const handleOptionToggle = (optionId) => {
    setSelectedOptions(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      } else {
        return [...prev, optionId];
      }
    });
  };

  // Calculer l'estimation
  const handleCalculate = (e) => {
    e.preventDefault();
    
    const estimation = calculateEstimate(
      parseFloat(surface),
      service,
      quality,
      selectedOptions
    );
    
    if (estimation) {
      setResult(estimation);
      setShowResult(true);
      setIsFormVisible(false);
    }
  };

  // Nouvelle estimation
  const handleNewEstimate = () => {
    setSurface('');
    setService('');
    setQuality('');
    setSelectedOptions([]);
    setResult(null);
    setShowResult(false);
    setIsFormVisible(true);
  };

  // Calcul du total des options en %
  const getTotalOptionsPercentage = () => {
    return selectedOptions.reduce((total, optionId) => {
      const option = additionalOptions.find(opt => opt.id === optionId);
      return total + (option ? option.percentage : 0);
    }, 0);
  };

  return (
    <div className="calculator">
      <div className="container">
        {/* INITIAL VIEW - BOUTON CTA */}
        {!isFormVisible && !showResult && (
          <div className="calculator-initial">
            <div className="calculator-icon">💰</div>
            <h2 className="calculator-title">Calculateur de Coût</h2>
            <p className="calculator-subtitle">
              Obtenez une estimation personnalisée en 2 minutes
            </p>
            <button 
              className="calculator-cta"
              onClick={handleShowForm}
            >
              <span>Obtenir mon estimation</span>
              <span className="cta-arrow">→</span>
            </button>
            <p className="calculator-note">
              ✓ Gratuit et sans engagement ✓ Résultat immédiat
            </p>
          </div>
        )}

        {/* FORMULAIRE */}
        {isFormVisible && (
          <div className="calculator-form-container">
            <div className="calculator-form-header">
              <h3>📝 Votre Projet en Détail</h3>
              <p>Remplissez les informations pour obtenir votre estimation</p>
            </div>

            <form className="calculator-form" onSubmit={handleCalculate}>
              {/* SURFACE */}
              <div className="form-group">
                <label htmlFor="surface">
                  <span className="label-icon">📏</span>
                  Surface à rénover (m²)
                </label>
                <input
                  type="number"
                  id="surface"
                  value={surface}
                  onChange={(e) => setSurface(e.target.value)}
                  placeholder="Ex: 80"
                  min="1"
                  required
                />
              </div>

              {/* SERVICE */}
              <div className="form-group">
                <label htmlFor="service">
                  <span className="label-icon">🔨</span>
                  Type de service
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  {Object.keys(servicesPrice).map(key => (
                    <option key={key} value={key}>
                      {servicesPrice[key].icon} {servicesPrice[key].name}
                    </option>
                  ))}
                </select>
              </div>

              {/* QUALITÉ */}
              <div className="form-group">
                <label htmlFor="quality">
                  <span className="label-icon">⭐</span>
                  Niveau de qualité
                </label>
                <select
                  id="quality"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  required
                >
                  <option value="">Choisissez le niveau</option>
                  {Object.keys(qualityLevels).map(key => (
                    <option key={key} value={key}>
                      {qualityLevels[key].badge} {qualityLevels[key].name} - {qualityLevels[key].description}
                    </option>
                  ))}
                </select>
              </div>

              {/* OPTIONS */}
              <div className="form-group form-group-options">
                <label>
                  <span className="label-icon">✨</span>
                  Services additionnels (optionnel)
                </label>
                <div className="options-grid">
                  {additionalOptions.map(option => (
                    <label key={option.id} className="option-item">
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option.id)}
                        onChange={() => handleOptionToggle(option.id)}
                      />
                      <div className="option-content">
                        <div className="option-header">
                          <span className="option-icon">{option.icon}</span>
                          <span className="option-label">{option.label}</span>
                          <span className="option-badge">+{option.percentage}%</span>
                        </div>
                        <p className="option-description">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
                {selectedOptions.length > 0 && (
                  <div className="options-total">
                    Total options : +{getTotalOptionsPercentage()}%
                  </div>
                )}
              </div>

              {/* BOUTONS */}
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => setIsFormVisible(false)}
                >
                  Annuler
                </button>
                <button type="submit" className="btn-primary">
                  <span>Calculer mon estimation</span>
                  <span>💰</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* RÉSULTAT */}
        {showResult && result && (
          <div className="calculator-result">
            <div className="result-header">
              <div className="result-icon">✨</div>
              <h3>Votre Estimation Personnalisée</h3>
            </div>

            <div className="result-main">
              <div className="result-card result-card-total">
                <span className="result-label">Coût Total Estimé</span>
                <span className="result-value">{result.totalPrice.toLocaleString('fr-FR')} €</span>
              </div>

              <div className="result-card result-card-aides">
                <span className="result-label">Aides Possibles</span>
                <span className="result-value result-value-aides">- {result.estimatedAides.toLocaleString('fr-FR')} €</span>
              </div>

              <div className="result-divider"></div>

              <div className="result-card result-card-remaining">
                <span className="result-label">Reste à Charge</span>
                <span className="result-value result-value-remaining">{result.remainingCost.toLocaleString('fr-FR')} €</span>
              </div>
            </div>

            <div className="result-details">
              <h4>📊 Détails du Calcul</h4>
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
                    <strong>+{result.optionsTotal.toLocaleString('fr-FR')} € (+{getTotalOptionsPercentage()}%)</strong>
                  </li>
                )}
              </ul>
            </div>

            <div className="result-actions">
              <button className="btn-primary" onClick={() => window.location.href = '/contact'}>
                <span>Demander un devis gratuit</span>
                <span>📋</span>
              </button>
              <button className="btn-secondary" onClick={handleNewEstimate}>
                <span>Nouvelle estimation</span>
                <span>🔄</span>
              </button>
            </div>

            <p className="result-note">
              💡 Cette estimation est indicative. Un devis détaillé sera établi après visite technique.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;