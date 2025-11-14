/* ========================================
   HOME PAGE - ISO HOME ENERGY
   Page d'accueil complète
   ======================================== */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  ServiceCard, 
  TestimonialCard, 
  ProcessStep,
  FAQItem,
  Badge,
  Section,
  Container,
  Calculator
} from '../../components';

import { servicesData, getFeaturedServices } from '../../data/services';
import { getFeaturedTestimonials } from '../../data/testimonials';
import { processSteps } from '../../data/processSteps';
import { getFeaturedFAQ } from '../../data/faq';
import { COMMON_TEXTS, CONTACT, STATS } from '../../utils/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = getFeaturedServices();
  const featuredTestimonials = getFeaturedTestimonials();
  const featuredFAQ = getFeaturedFAQ();

  const heroAnimation = useScrollAnimation('fadeInUp');
  const servicesAnimation = useScrollAnimation('fadeInUp');

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <Section className="hero-section" background="white" padding="large">
        <Container>
          <div className="hero-content" ref={heroAnimation.ref} style={heroAnimation.style}>
            <Badge variant="primary" size="large">
              🏆 Certifié RGE & Qualibat
            </Badge>
            
            <h1 className="hero-title">
              <span className="text-gradient">Rénovation Énergétique</span>
              <br />
              Jusqu'à 100% Financée
            </h1>
            
            <p className="hero-description">
              Expert en isolation, façade, pompe à chaleur et menuiserie. 
              Nous vous accompagnons de A à Z dans vos travaux de rénovation énergétique 
              avec des aides pouvant financer jusqu'à 100% de votre projet.
            </p>

            <div className="hero-actions">
              <Link to="/eligibilite">
                <Button variant="primary" size="large">
                  🎯 Tester mon éligibilité
                </Button>
              </Link>
              <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                <Button variant="outline" size="large">
                  📞 {CONTACT.phones.primary}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">{STATS.experience.value}</div>
                <div className="hero-stat-label">{STATS.experience.label}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">{STATS.projects.value}</div>
                <div className="hero-stat-label">{STATS.projects.label}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">{STATS.satisfaction.value}</div>
                <div className="hero-stat-label">{STATS.satisfaction.label}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">{STATS.savings.value}</div>
                <div className="hero-stat-label">{STATS.savings.label}</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICES SECTION */}
      <Section background="gray" padding="large" id="services">
        <Container>
          <div className="section-header" ref={servicesAnimation.ref} style={servicesAnimation.style}>
            <Badge variant="primary">Nos Services</Badge>
            <h2 className="section-title">
              Des Solutions Complètes pour Votre Rénovation
            </h2>
            <p className="section-description">
              Découvrez nos 6 services d'excellence pour améliorer les performances 
              énergétiques de votre logement et réduire vos factures.
            </p>
          </div>

          <div className="services-grid">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services">
              <Button variant="outline" size="large">
                Voir tous les services
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* PROCESS SECTION */}
      <Section background="white" padding="large" id="processus">
        <Container>
          <div className="section-header">
            <Badge variant="primary">Notre Processus</Badge>
            <h2 className="section-title">
              Un Accompagnement en 4 Étapes
            </h2>
            <p className="section-description">
              De l'audit gratuit jusqu'à la validation finale, nous gérons tout pour vous.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CALCULATEUR SECTION - REMPLACE LA SECTION ELIGIBILITY BANNER */}
      <Calculator />

      {/* TESTIMONIALS SECTION */}
      <Section background="white" padding="large" id="temoignages">
        <Container>
          <div className="section-header">
            <Badge variant="primary">Témoignages</Badge>
            <h2 className="section-title">
              Ils Nous Font Confiance
            </h2>
            <p className="section-description">
              Plus de 500 clients satisfaits dans les Vosges et le Grand Est.
            </p>
          </div>

          <div className="testimonials-grid">
            {featuredTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section background="gray" padding="large" id="faq">
        <Container>
          <div className="section-header">
            <Badge variant="primary">Questions Fréquentes</Badge>
            <h2 className="section-title">
              Vous Avez Des Questions ?
            </h2>
            <p className="section-description">
              Retrouvez les réponses aux questions les plus fréquentes.
            </p>
          </div>

          <div className="faq-list">
            {featuredFAQ.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/contact">
              <Button variant="primary" size="large">
                Une autre question ? Contactez-nous
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CONTACT CTA SECTION */}
      <Section background="black" padding="large">
        <Container>
          <div className="contact-cta">
            <h2 className="contact-cta-title">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="contact-cta-text">
              Contactez-nous dès maintenant pour un audit gratuit et sans engagement.
            </p>
            <div className="contact-cta-actions">
              <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                <Button variant="primary" size="large">
                  📞 {CONTACT.phones.primary}
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="large">
                  Formulaire de contact
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;