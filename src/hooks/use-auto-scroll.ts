import { useEffect, useRef, useState } from 'react';

interface UseAutoScrollOptions {
  enabled?: boolean;
  speed?: number; // pixels per scroll
  interval?: number; // milliseconds between scrolls
  delay?: number; // delay before starting auto-scroll
  targetSection?: string; // CSS selector for target section
  stopOnInteraction?: boolean;
}

export const useAutoScroll = (options: UseAutoScrollOptions = {}) => {
  const {
    enabled = true,
    speed = 2,
    interval = 50,
    delay = 2000,
    targetSection,
    stopOnInteraction = true,
  } = options;

  const [isAutoScrolling, setIsAutoScrolling] = useState(enabled);
  const [userInteracted, setUserInteracted] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollPosition = useRef(0);

  // Function to scroll to a specific section
  const scrollToSection = (sectionSelector: string) => {
    const element = document.querySelector(sectionSelector);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Function to start continuous scrolling
  const startContinuousScroll = () => {
    if (!userInteracted && isAutoScrolling) {
      scrollIntervalRef.current = setInterval(() => {
        const currentPosition = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // If we've reached the bottom, stop auto-scrolling
        if (currentPosition + windowHeight >= documentHeight - 10) {
          setIsAutoScrolling(false);
          return;
        }
        
        // Smooth scroll down by specified speed
        window.scrollBy({
          top: speed,
          behavior: 'smooth'
        });
      }, interval);
    }
  };

  // Function to stop auto-scroll
  const stopAutoScroll = () => {
    setUserInteracted(true);
    setIsAutoScrolling(false);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  // Function to restart auto-scroll
  const restartAutoScroll = () => {
    setUserInteracted(false);
    setIsAutoScrolling(true);
    lastScrollPosition.current = window.pageYOffset;
  };

  useEffect(() => {
    if (!enabled) return;

    const startAutoScroll = () => {
      if (targetSection) {
        // Scroll to specific section
        scrollToSection(targetSection);
      } else {
        // Start continuous scrolling
        startContinuousScroll();
      }
    };

    // Start auto-scroll after specified delay
    const timeoutId = setTimeout(startAutoScroll, delay);

    // Handle user interactions
    const handleUserInteraction = () => {
      if (stopOnInteraction) {
        stopAutoScroll();
      }
    };

    // Handle manual scrolling detection
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      // If user scrolls manually (big change in position), stop auto-scroll
      if (Math.abs(currentPosition - lastScrollPosition.current) > 10) {
        if (stopOnInteraction) {
          handleUserInteraction();
        }
      }
      lastScrollPosition.current = currentPosition;
    };

    // Add event listeners for user interactions
    if (stopOnInteraction) {
      window.addEventListener('wheel', handleUserInteraction, { passive: true });
      window.addEventListener('touchstart', handleUserInteraction, { passive: true });
      window.addEventListener('keydown', handleUserInteraction);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      clearTimeout(timeoutId);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      if (stopOnInteraction) {
        window.removeEventListener('wheel', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
        window.removeEventListener('keydown', handleUserInteraction);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [enabled, userInteracted, isAutoScrolling, speed, interval, delay, targetSection, stopOnInteraction]);

  return {
    isAutoScrolling: isAutoScrolling && !userInteracted,
    userInteracted,
    stopAutoScroll,
    restartAutoScroll,
    scrollToSection,
  };
};
