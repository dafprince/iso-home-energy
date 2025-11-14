/* ========================================
   BEFORE AFTER SLIDER - ULTRA PREMIUM
   ======================================== */

import { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ imageBefore, imageAfter, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, sliderPosition]);

  return (
    <div 
      className="before-after-slider" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* IMAGE AFTER (Background) */}
      <div className="slider-image slider-image-after">
        <img src={imageAfter} alt={`${title} - Après`} />
        <div className="slider-label slider-label-after">Après</div>
      </div>

      {/* IMAGE BEFORE (Overlay) */}
      <div 
        className="slider-image slider-image-before"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={imageBefore} alt={`${title} - Avant`} />
        <div className="slider-label slider-label-before">Avant</div>
      </div>

      {/* SLIDER HANDLE */}
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-handle-line"></div>
        <div className="slider-handle-button">
          <span className="handle-arrow handle-arrow-left">‹</span>
          <span className="handle-arrow handle-arrow-right">›</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;