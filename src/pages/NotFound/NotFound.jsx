/* ========================================
   NOT FOUND PAGE - ISO HOME ENERGY
   Page 404
   ======================================== */

import { Link } from 'react-router-dom';
import { Button, Section, Container } from '../../components';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <Section background="white" padding="large">
        <Container>
          <div className="notfound-content">
            <div className="notfound-number">404</div>
            <h1>Page Non Trouvée</h1>
            <p>
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <div className="notfound-actions">
              <Link to="/">
                <Button variant="primary" size="large">
                  Retour à l'accueil
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

export default NotFound;