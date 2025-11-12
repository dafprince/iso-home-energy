/* ========================================
   REVEAL ON SCROLL - ULTRA PREMIUM
   Animations avancées au scroll
   ======================================== */

import { useEffect, useRef, useState } from 'react';
import './RevealOnScroll.css';

const RevealOnScroll = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} reveal-${animation}`}
      style={{
        '--reveal-delay': `${delay}s`,
        '--reveal-duration': `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;