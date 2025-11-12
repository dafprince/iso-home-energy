/* ========================================
   USE SCROLL ANIMATION - ISO HOME ENERGY
   Hook pour animer les éléments au scroll
   ======================================== */

import { useState, useEffect, useRef } from 'react';

/**
 * Hook pour détecter si un élément est visible dans le viewport
 * @param {object} options - Options de l'IntersectionObserver
 * @returns {array} - [ref, isVisible]
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      triggerOnce: false,
      ...options
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Si triggerOnce, on arrête d'observer
          if (defaultOptions.triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!defaultOptions.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

/**
 * Hook pour animer au scroll avec différents effets
 * @param {string} animation - Type d'animation ('fadeIn', 'slideUp', etc.)
 * @param {object} options - Options
 * @returns {object} - { ref, style }
 */
export const useScrollAnimation = (animation = 'fadeIn', options = {}) => {
  const [ref, isVisible] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options
  });

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    fadeInUp: {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeInDown: {
      initial: { opacity: 0, transform: 'translateY(-40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    slideInLeft: {
      initial: { opacity: 0, transform: 'translateX(-60px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    slideInRight: {
      initial: { opacity: 0, transform: 'translateX(60px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    scaleIn: {
      initial: { opacity: 0, transform: 'scale(0.8)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    },
    rotateIn: {
      initial: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
      animate: { opacity: 1, transform: 'rotate(0deg) scale(1)' }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeIn;

  const style = {
    ...selectedAnimation[isVisible ? 'animate' : 'initial'],
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'opacity, transform'
  };

  return { ref, style, isVisible };
};

/**
 * Hook pour obtenir la position du scroll
 * @returns {object} - { scrollY, scrollX, scrollDirection }
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: 'down'
  });

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      setScrollPosition({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        scrollDirection: currentScrollY > lastScrollY ? 'down' : 'up'
      });

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollPosition;
};

/**
 * Hook pour détecter si on a scrollé au-delà d'un seuil
 * @param {number} threshold - Seuil en pixels
 * @returns {boolean}
 */
export const useScrollThreshold = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, isScrolled]);

  return isScrolled;
};

/**
 * Hook pour détecter si on est en haut de la page
 * @returns {boolean}
 */
export const useIsAtTop = () => {
  return useScrollThreshold(10) === false;
};

/**
 * Hook pour détecter si on est en bas de la page
 * @param {number} offset - Offset en pixels
 * @returns {boolean}
 */
export const useIsAtBottom = (offset = 100) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      const atBottom = scrollTop + clientHeight >= scrollHeight - offset;
      
      if (atBottom !== isAtBottom) {
        setIsAtBottom(atBottom);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset, isAtBottom]);

  return isAtBottom;
};

/**
 * Hook pour smooth scroll vers un élément
 * @returns {function}
 */
export const useSmoothScroll = () => {
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return { scrollToElement, scrollToTop, scrollToBottom };
};

/**
 * Hook pour parallax effect
 * @param {number} speed - Vitesse du parallax (0-1)
 * @returns {object} - { ref, style }
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const elementTop = ref.current.getBoundingClientRect().top;
      const scrolled = window.scrollY;
      const rate = scrolled * speed;

      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const style = {
    transform: `translateY(${offset}px)`,
    willChange: 'transform'
  };

  return { ref, style };
};

/**
 * Hook pour animer un compteur au scroll
 * @param {number} end - Valeur finale
 * @param {number} duration - Durée en ms
 * @returns {object} - { ref, count }
 */
export const useCountUp = (end, duration = 2000) => {
  const [ref, isVisible] = useInView({ threshold: 0.5, triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return { ref, count };
};

// Export par défaut
export default useScrollAnimation;