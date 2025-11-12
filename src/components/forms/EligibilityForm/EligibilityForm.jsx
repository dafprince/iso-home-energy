import React, { useState } from 'react';
import Step1 from './steps/Step1';
// importer Step2, Step3 ... Step6 ensuite
import './EligibilityForm.css';

const EligibilityForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    propertyType: '',
    constructionYear: '',
    area: '',
    postalCode: '',
    occupants: '',
    fiscalSituation: '',
    income: '',
    socialAid: '',
    civility: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    availability: '',
  });

  const [errors, setErrors] = useState({});

  // Mise à jour générique des données
  const updateData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validation par étape basique (exemple Step1)
  const validateStep = () => {
    const stepErrors = {};
    if (step === 1) {
      if (!formData.projectType) stepErrors.projectType = 'Veuillez choisir un projet';
    }
    // TODO : ajouter validation autres étapes
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="eligibility-form">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(step / 6) * 100}%` }}
        />
      </div>
      {step === 1 && (
        <Step1
          data={formData}
          updateData={updateData}
          errors={errors}
          nextStep={nextStep}
        />
      )}
      {/* Ajouter ici le rendu conditionnel des steps 2 à 6 */}
      <div className="form-navigation">
        {step > 1 && <button onClick={prevStep}>Précédent</button>}
        <button onClick={nextStep}>Suivant</button>
      </div>
    </div>
  );
};

export default EligibilityForm;
