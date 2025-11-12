/* ========================================
   useForm Hook - CORRIGÉ
   ======================================== */

import { useState } from 'react';

export const useForm = (initialValues, onSubmitCallback, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setValues(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Valider si le champ a été touché
    if (touched[name] && validate) {
      const validationErrors = validate({ ...values, [name]: newValue });
      setErrors(validationErrors.errors || {});
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Valider le champ
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors.errors || {});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Marquer tous les champs comme touchés
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Valider
    if (validate) {
      const validationResult = validate(values);
      setErrors(validationResult.errors || {});
      
      if (!validationResult.valid) {
        return;
      }
    }

    // Soumettre
    setIsSubmitting(true);
    try {
      await onSubmitCallback(values);
    } catch (error) {
      console.error('Erreur soumission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const setValue = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    setValues,
    setErrors,
    setTouched,  // ← IMPORTANT : Exporter setTouched
    resetForm
  };
};