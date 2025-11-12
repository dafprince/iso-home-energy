import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

/**
 * Hero Section Premium ISO HOME ENERGY
 */
const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="hero-title">
          Économisez votre énergie, <br /> transformez votre maison
        </h1>
        <p className="hero-subtitle">Rénovation énergétique performante et durable</p>
        
        <div className="hero-ctas">
          <button className="btn btn-primary">Devis Gratuit</button>
          <button className="btn btn-ghost">Tester mon éligibilité</button>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
          alt="Maison rénovée"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
