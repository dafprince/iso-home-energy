/* ========================================
   CONTACT PAGE - VERSION FINALE
   ======================================== */

import { useState } from 'react';
import { Section, Container, Badge, Input, Textarea, Button } from '../../components';
import { CONTACT } from '../../utils/constants';
import { sendContactEmail } from '../../utils/emailService';
import { useNotification } from '../../hooks/useNotification';
import './Contact.css';

const Contact = () => {
  const { showNotification } = useNotification();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});
  
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

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

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'nom':
      case 'prenom':
        if (!value.trim()) {
          error = 'Ce champ est obligatoire';
        } else if (value.trim().length < 2) {
          error = 'Minimum 2 caractères';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'L\'email est obligatoire';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Email invalide';
        }
        break;

      case 'telephone':
        if (!value.trim()) {
          error = 'Le téléphone est obligatoire';
        } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(value)) {
          error = 'Numéro invalide (ex: 06 12 34 56 78)';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Le message est obligatoire';
        } else if (value.trim().length < 10) {
          error = 'Minimum 10 caractères';
        }
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

  const validateAllFields = () => {
    let isValid = true;

    Object.keys(formData).forEach(key => {
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
    });

    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAllFields()) {
      showNotification('Veuillez corriger les erreurs dans le formulaire', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        from_name: `${formData.prenom} ${formData.nom}`,
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        message: formData.message,
        date: new Date().toLocaleString('fr-FR')
      };

      await sendContactEmail(emailData);

      showNotification('Message envoyé avec succès ! Nous vous répondrons rapidement.', 'success');
      
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      });
      setTouched({});
      setErrors({});

    } catch (error) {
      console.error('Erreur envoi:', error);
      showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <Section background="green" padding="large">
        <Container>
          <div className="contact-hero">
            <Badge variant="secondary" size="large">Contact</Badge>
            <h1>Parlons de Votre Projet</h1>
            <p>Contactez-nous pour un audit gratuit et un devis personnalisé</p>
          </div>
        </Container>
      </Section>

      {/* FORMULAIRE */}
      <Section background="white" padding="large">
        <Container>
          <div className="contact-content">
            {/* Formulaire */}
            <div className="contact-form-wrapper">
              <h2>Envoyez-nous un Message</h2>
              <p className="contact-form-desc">
                Remplissez ce formulaire et nous vous répondrons dans les 24h
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
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

                <Textarea
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  touched={touched.message}
                  required
                  rows={6}
                  maxLength={1000}
                  placeholder="Décrivez votre projet..."
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>

            {/* Informations */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <h3>Téléphone</h3>
                <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                  {CONTACT.phones.primary}
                </a>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📧</div>
                <h3>Email</h3>
                <a href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <h3>Adresse</h3>
                <p>{CONTACT.address.full}</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">🕐</div>
                <h3>Horaires</h3>
                <p>{CONTACT.hours.weekdays}</p>
                <p>{CONTACT.hours.saturday}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;