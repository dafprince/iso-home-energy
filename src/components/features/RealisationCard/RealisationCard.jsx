/* ========================================
   REALISATION CARD - ULTRA PREMIUM
   ======================================== */

import { useState } from 'react';
import BeforeAfterSlider from '../BeforeAfterSlider';
import './RealisationCard.css';

const RealisationCard = ({ realisation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    isolation: '#8dc63f',
    facade: '#3b82f6',
    'pompe-chaleur': '#ef4444',
    menuiserie: '#f59e0b',
    platrerie: '#8b5cf6',
    peinture: '#ec4899'
  };

  return (
    <div 
      className="realisation-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SLIDER AVANT/APRÈS */}
      <div className="realisation-slider">
        <BeforeAfterSlider
          imageBefore={realisation.imageBefore}
          imageAfter={realisation.imageAfter}
          title={realisation.title}
        />
      </div>

      {/* CONTENT */}
      <div className="realisation-content">
        {/* HEADER */}
        <div className="realisation-header">
          <span 
            className="realisation-badge"
            style={{ 
              background: categoryColors[realisation.category],
              borderColor: categoryColors[realisation.category]
            }}
          >
            {realisation.category === 'isolation' && '🏠 Isolation'}
            {realisation.category === 'facade' && '🏗️ Façade'}
            {realisation.category === 'pompe-chaleur' && '♨️ Pompe à Chaleur'}
            {realisation.category === 'menuiserie' && '🪟 Menuiserie'}
            {realisation.category === 'platrerie' && '🔨 Plâtrerie'}
            {realisation.category === 'peinture' && '🎨 Peinture'}
          </span>
          {realisation.year === 2024 && (
            <span className="realisation-new">Nouveau</span>
          )}
        </div>

        {/* TITLE */}
        <h3 className="realisation-title">{realisation.title}</h3>

        {/* DESCRIPTION */}
        <p className="realisation-description">{realisation.description}</p>

        {/* STATS */}
        <div className="realisation-stats">
          <div className="realisation-stat">
            <span className="stat-icon">⏱️</span>
            <div className="stat-content">
              <span className="stat-label">Durée</span>
              <span className="stat-value">{realisation.duration}</span>
            </div>
          </div>

          <div className="realisation-stat">
            <span className="stat-icon">📏</span>
            <div className="stat-content">
              <span className="stat-label">Surface</span>
              <span className="stat-value">{realisation.surface}</span>
            </div>
          </div>

          <div className="realisation-stat realisation-stat-location">
            <span className="stat-icon">📍</span>
            <div className="stat-content">
              <span className="stat-label">Lieu</span>
              <span className="stat-value">{realisation.location}</span>
            </div>
          </div>
        </div>

        {/* TAGS */}
        {realisation.tags && realisation.tags.length > 0 && (
          <div className="realisation-tags">
            {realisation.tags.map((tag, index) => (
              <span key={index} className="realisation-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RealisationCard;