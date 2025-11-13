import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Button,
  Badge,
  Section,
  Container
} from '../../components';
import { getServiceBySlug, servicesData } from '../../data/services';

import { CONTACT } from '../../utils/constants';
import './ServicePage.css';
import ServiceCard from '../../components/sections/Services/ServiceCard';

const ServicePage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) {
    // Pas de slug : afficher la liste complète des services (version premium)
    return (
      <Section padding="large" background="white">
        <Container>
          <Badge variant="primary" style={{ marginBottom: 16 }}>Nos Services</Badge>
          <h1 className="section-title-premium">Des solutions pour votre rénovation</h1>
          <p className="section-subtitle-premium mb-40">
            Découvrez notre expertise dans chacun de nos services pour maximiser votre confort et vos économies.
          </p>
          <div className="services-grid-premium">
            {servicesData.map(service => (
              <ServiceCard key={service.id} service={service} premium />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  // Avec slug : afficher une page service individuelle
  const service = getServiceBySlug(slug);
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="service-page">
      {/* HERO */}
      <Section
        background="green"
        padding="large"
        style={{
          backgroundImage: `linear-gradient(rgba(141, 198, 63, 0.9), rgba(141, 198, 63, 0.9)), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container>
          <div className="service-hero">
            <Badge variant="secondary" size="large">{service.name}</Badge>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="service-hero-actions">
              <Link to="/eligibilite">
                <Button variant="secondary" size="large">
                  Tester mon éligibilité
                </Button>
              </Link>
              <a href={`tel:${CONTACT.phones.primary.replace(/\s/g, '')}`}>
                <Button variant="outline" size="large">
                  📞 Nous appeler
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* AVANTAGES */}
      <Section background="white" padding="large">
        <Container>
          <h2 className="section-title">Les Avantages</h2>
          <div className="advantages-grid">
            {service.avantages.map((avantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">✓</div>
                <p>{avantage}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TYPES */}
      {service.types && service.types.length > 0 && (
        <Section background="gray" padding="large">
          <Container>
            <h2 className="section-title">Nos Solutions</h2>
            <div className="types-grid">
              {service.types.map((type, index) => (
                <div key={index} className="type-card">
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* INFOS & AIDES */}
      <Section background="white" padding="large">
        <Container>
          <div className="service-info-grid">
            <div className="service-info-card">
              <h3>⏱️ Durée du Chantier</h3>
              <p>{service.dureeChantier}</p>
            </div>
            <div className="service-info-card">
              <h3>🛡️ Garantie</h3>
              <p>{service.garantie}</p>
            </div>
            <div className="service-info-card">
              <h3>💰 Aides Disponibles</h3>
              <div className="aides-badges">
                {service.aidesDisponibles.map((aide, index) => (
                  <Badge key={index} variant="primary">{aide}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="green" padding="medium">
        <Container>
          <div className="service-cta">
            <h2>Intéressé par {service.name} ?</h2>
            <p>Testez votre éligibilité gratuitement ou contactez-nous pour plus d'informations.</p>
            <div className="service-cta-actions">
              <Link to="/eligibilite">
                <Button variant="secondary" size="large">
                  Tester mon éligibilité
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ServicePage;
