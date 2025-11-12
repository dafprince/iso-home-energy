/* ========================================
   ELIGIBILITE PAGE - VERSION SIMPLIFIÉE
   ======================================== */

import { useState, useEffect } from 'react';
import { 
  Button, 
  Badge,
  Section,
  Container,
  Input,
  Select
} from '../../components';
import { sendEligibilityEmail } from '../../utils/emailService';
import { useNotification } from '../../hooks/useNotification';
import { calculerEligibilite } from '../../utils/eligibilityCalculator';
import { formatPrice } from '../../utils/formatters';
import { CONTACT } from '../../utils/constants';
import './Eligibilite.css';

const Eligibilite = () => {
  const { showNotification } = useNotification();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  
  const [formData, setFormData] = useState({
    // Étape 1
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    codePostal: '',
    ville: '',
    // Étape 2
    typeLogement: '',
    surface: '',
    statutOccupant: '',
    anneeConstruction: '',
    // Étape 3
    revenuFiscal: '',
    nbPersonnes: '',
    services: []
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, formData[name]);
  };

  const handleServiceToggle = (service) => {
    const currentServices = formData.services || [];
    if (currentServices.includes(service)) {
      setFormData(prev => ({
        ...prev,
        services: currentServices.filter(s => s !== service)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: [...currentServices, service]
      }));
    }
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'nom':
      case 'prenom':
        if (!value.trim()) error = 'Ce champ est obligatoire';
        else if (value.trim().length < 2) error = 'Minimum 2 caractères';
        break;

      case 'email':
        if (!value.trim()) error = 'L\'email est obligatoire';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email invalide';
        break;

      case 'telephone':
        if (!value.trim()) error = 'Le téléphone est obligatoire';
        else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(value)) error = 'Numéro invalide';
        break;

      case 'codePostal':
        if (!value.trim()) error = 'Le code postal est obligatoire';
        else if (!/^\d{5}$/.test(value)) error = 'Code postal invalide (5 chiffres)';
        break;

      case 'ville':
        if (!value.trim()) error = 'La ville est obligatoire';
        break;

      case 'surface':
        if (!value) error = 'La surface est obligatoire';
        else if (value < 20 || value > 500) error = 'Surface entre 20 et 500 m²';
        break;

      case 'revenuFiscal':
        if (!value) error = 'Le revenu fiscal est obligatoire';
        else if (value < 0) error = 'Le revenu doit être positif';
        break;

      case 'nbPersonnes':
        if (!value) error = 'Le nombre de personnes est obligatoire';
        else if (value < 1 || value > 20) error = 'Entre 1 et 20 personnes';
        break;

      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    return error === '';
  };

  const validateStep1 = () => {
    const fields = ['nom', 'prenom', 'email', 'telephone', 'codePostal', 'ville'];
    let isValid = true;

    fields.forEach(field => {
      const valid = validateField(field, formData[field]);
      if (!valid) isValid = false;
      setTouched(prev => ({ ...prev, [field]: true }));
    });

    if (!isValid) {
      showNotification('Veuillez corriger les erreurs', 'error');
    }

    return isValid;
  };

  const validateStep2 = () => {
    const fields = ['typeLogement', 'surface', 'statutOccupant'];
    let isValid = true;

    fields.forEach(field => {
      if (!formData[field]) {
        setErrors(prev => ({ ...prev, [field]: 'Ce champ est obligatoire' }));
        setTouched(prev => ({ ...prev, [field]: true }));
        isValid = false;
      } else {
        validateField(field, formData[field]);
      }
    });

    if (!isValid) {
      showNotification('Veuillez corriger les erreurs', 'error');
    }

    return isValid;
  };

  const validateStep3 = () => {
    const fields = ['revenuFiscal', 'nbPersonnes'];
    let isValid = true;

    fields.forEach(field => {
      const valid = validateField(field, formData[field]);
      if (!valid) isValid = false;
      setTouched(prev => ({ ...prev, [field]: true }));
    });

    if (formData.services.length === 0) {
      showNotification('Veuillez sélectionner au moins un service', 'error');
      return false;
    }

    if (!isValid) {
      showNotification('Veuillez corriger les erreurs', 'error');
    }

    return isValid;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep3()) return;

    setIsSubmitting(true);

    try {
      // Calculer l'éligibilité
      const calculatedResults = calculerEligibilite(formData);
      setResults(calculatedResults);

      // Préparer les données pour l'email
      const emailData = {
        from_name: `${formData.prenom} ${formData.nom}`,
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        adresse: formData.adresse || 'Non renseignée',
        ville: formData.ville,
        codePostal: formData.codePostal,
        typeLogement: formData.typeLogement,
        surface: formData.surface,
        statutOccupant: formData.statutOccupant,
        anneeConstruction: formData.anneeConstruction || 'Non renseignée',
        revenuFiscal: formData.revenuFiscal,
        nbPersonnes: formData.nbPersonnes,
        services: formData.services.join(', '),
        profil: calculatedResults.profil,
        totalMaprimerenov: calculatedResults.totalMaprimerenov || 0,
        totalCEE: calculatedResults.totalCEE || 0,
        ecoPtz: calculatedResults.ecoPtz || 0,
        totalAides: calculatedResults.totalAides,
        tauxFinancement: calculatedResults.tauxFinancement,
        date: new Date().toLocaleString('fr-FR')
      };

      // Envoyer l'email
      await sendEligibilityEmail(emailData);

      // Afficher les résultats
      setShowResults(true);
      showNotification('Test envoyé avec succès ! Nous vous recontacterons rapidement.', 'success');

    } catch (error) {
      console.error('Erreur:', error);
      showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      adresse: '',
      codePostal: '',
      ville: '',
      typeLogement: '',
      surface: '',
      statutOccupant: '',
      anneeConstruction: '',
      revenuFiscal: '',
      nbPersonnes: '',
      services: []
    });
    setTouched({});
    setErrors({});
    setStep(1);
    setShowResults(false);
    setResults(null);
  };

  // AFFICHAGE RÉSULTATS
  if (showResults && results) {
    return (
      <div className="eligibilite-page">
        <Section background="green" padding="large">
          <Container>
            <div className="eligibilite-results">
              <Badge variant="secondary" size="large">Résultats</Badge>
              <h1>Votre Éligibilité</h1>
              <p>Merci {formData.prenom} ! Voici vos résultats</p>

              <div className="results-grid">
                <div className="result-card">
                  <div className="result-card-icon">💰</div>
                  <div className="result-card-label">MaPrimeRénov'</div>
                  <div className="result-card-value">{formatPrice(results.totalMaprimerenov)}</div>
                </div>

                <div className="result-card">
                  <div className="result-card-icon">⚡</div>
                  <div className="result-card-label">Prime CEE</div>
                  <div className="result-card-value">{formatPrice(results.totalCEE)}</div>
                </div>

                <div className="result-card">
                  <div className="result-card-icon">🏦</div>
                  <div className="result-card-label">Éco-PTZ</div>
                  <div className="result-card-value">{formatPrice(results.ecoPtz)}</div>
                </div>

                <div className="result-card result-card-total">
                  <div className="result-card-icon">🎯</div>
                  <div className="result-card-label">Total Aides</div>
                  <div className="result-card-value">{formatPrice(results.totalAides)}</div>
                </div>
              </div>

              <div className="results-financing">
                <p>Taux de financement</p>
                <h2>{results.tauxFinancement}%</h2>
              </div>

              <div className="results-message">
                <p>✅ Vos informations ont été envoyées avec succès !</p>
                <p>Nous vous contacterons au <strong>{formData.telephone}</strong> dans les plus brefs délais.</p>
              </div>

              <div className="results-actions">
                <Button variant="primary" size="large" onClick={handleReset}>
                  Faire un nouveau test
                </Button>
                <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                  <Button variant="outline" size="large">
                    Nous appeler maintenant
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    );
  }

  // FORMULAIRE
  return (
    <div className="eligibilite-page">
      {/* HERO */}
      <Section background="green" padding="large">
        <Container>
          <div className="eligibilite-hero">
            <Badge variant="secondary" size="large">Test d'Éligibilité</Badge>
            <h1>Calculez Vos Aides en 2 Minutes</h1>
            <p>Découvrez gratuitement le montant des aides auxquelles vous avez droit</p>
          </div>
        </Container>
      </Section>

      {/* FORMULAIRE */}
      <Section background="white" padding="large">
        <Container>
          <div className="eligibilite-form-wrapper">
            {/* Progress */}
            <div className="eligibilite-progress">
              <div className="progress-steps">
                <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                  <span>1</span> Vos infos
                </div>
                <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                  <span>2</span> Logement
                </div>
                <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                  <span>3</span> Financement
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="eligibilite-form">
              {/* ÉTAPE 1 */}
              {step === 1 && (
                <div className="form-step">
                  <h2>Vos Coordonnées</h2>
                  
                  <div className="form-row">
                    <Input
                      name="nom"
                      label="Nom"
                      value={formData.nom}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.nom}
                      touched={touched.nom}
                      required
                      placeholder="Votre nom"
                    />
                    <Input
                      name="prenom"
                      label="Prénom"
                      value={formData.prenom}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.prenom}
                      touched={touched.prenom}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>

                  <div className="form-row">
                    <Input
                      type="email"
                      name="email"
                      label="Email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email}
                      touched={touched.email}
                      required
                      placeholder="votre@email.com"
                    />
                    <Input
                      type="tel"
                      name="telephone"
                      label="Téléphone"
                      value={formData.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.telephone}
                      touched={touched.telephone}
                      required
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <Input
                    name="adresse"
                    label="Adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    placeholder="Numéro et rue (optionnel)"
                  />

                  <div className="form-row">
                    <Input
                      name="codePostal"
                      label="Code Postal"
                      value={formData.codePostal}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.codePostal}
                      touched={touched.codePostal}
                      required
                      placeholder="88000"
                    />
                    <Input
                      name="ville"
                      label="Ville"
                      value={formData.ville}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.ville}
                      touched={touched.ville}
                      required
                      placeholder="Épinal"
                    />
                  </div>

                  <Button type="button" variant="primary" size="large" fullWidth onClick={handleNextStep}>
                    Étape suivante →
                  </Button>
                </div>
              )}

              {/* ÉTAPE 2 */}
              {step === 2 && (
                <div className="form-step">
                  <h2>Votre Logement</h2>

                  <Select
                    name="typeLogement"
                    label="Type de logement"
                    value={formData.typeLogement}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.typeLogement}
                    touched={touched.typeLogement}
                    required
                    options={[
                      { value: 'maison', label: 'Maison individuelle' },
                      { value: 'appartement', label: 'Appartement' }
                    ]}
                  />

                  <div className="form-row">
                    <Input
                      type="number"
                      name="surface"
                      label="Surface habitable (m²)"
                      value={formData.surface}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.surface}
                      touched={touched.surface}
                      required
                      placeholder="120"
                    />
                    <Input
                      type="number"
                      name="anneeConstruction"
                      label="Année de construction"
                      value={formData.anneeConstruction}
                      onChange={handleChange}
                      placeholder="1990 (optionnel)"
                    />
                  </div>

                  <Select
                    name="statutOccupant"
                    label="Vous êtes"
                    value={formData.statutOccupant}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.statutOccupant}
                    touched={touched.statutOccupant}
                    required
                    options={[
                      { value: 'proprietaire', label: 'Propriétaire occupant' },
                      { value: 'locataire', label: 'Locataire' }
                    ]}
                  />

                  <div className="form-actions">
                    <Button type="button" variant="outline" size="large" onClick={() => setStep(1)}>
                      ← Retour
                    </Button>
                    <Button type="button" variant="primary" size="large" onClick={handleNextStep}>
                      Étape suivante →
                    </Button>
                  </div>
                </div>
              )}

              {/* ÉTAPE 3 */}
              {step === 3 && (
                <div className="form-step">
                  <h2>Situation Fiscale & Services</h2>

                  <div className="form-row">
                    <Input
                      type="number"
                      name="revenuFiscal"
                      label="Revenu fiscal de référence (€)"
                      value={formData.revenuFiscal}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.revenuFiscal}
                      touched={touched.revenuFiscal}
                      required
                      placeholder="25000"
                    />
                    <Input
                      type="number"
                      name="nbPersonnes"
                      label="Nombre de personnes"
                      value={formData.nbPersonnes}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.nbPersonnes}
                      touched={touched.nbPersonnes}
                      required
                      placeholder="3"
                    />
                  </div>

                  <div className="form-group">
                    <label>Services souhaités *</label>
                    <div className="services-checkboxes">
                      {[
                        { id: 'isolation', label: '🏠 Isolation', value: 'Isolation thermique' },
                        { id: 'ite', label: '🏗️ ITE', value: 'Isolation par l\'extérieur' },
                        { id: 'pac', label: '♨️ Pompe à chaleur', value: 'Pompe à chaleur' },
                        { id: 'facade', label: '🎨 Façade', value: 'Ravalement de façade' },
                        { id: 'menuiserie', label: '🪟 Menuiserie', value: 'Fenêtres et portes' }
                      ].map(service => (
                        <label key={service.id} className={`service-checkbox ${formData.services.includes(service.value) ? 'selected' : ''}`}>
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.value)}
                            onChange={() => handleServiceToggle(service.value)}
                          />
                          <span>{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-actions">
                    <Button type="button" variant="outline" size="large" onClick={() => setStep(2)}>
                      ← Retour
                    </Button>
                    <Button type="submit" variant="primary" size="large" disabled={isSubmitting}>
                      {isSubmitting ? 'Calcul en cours...' : 'Calculer mes aides'}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Eligibilite;