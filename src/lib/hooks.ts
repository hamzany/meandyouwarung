"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hook for scroll-reveal animations using Intersection Observer
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
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

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Hook for navbar scroll behavior (transparent → solid)
 */
export function useNavbarScroll(scrollThreshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return isScrolled;
}

/**
 * Hook for parallax effect
 */
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
}

/**
 * Hook for lightbox gallery
 */
export function useLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const next = useCallback((total: number) => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, []);

  const prev = useCallback((total: number) => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, []);

  return { isOpen, currentIndex, open, close, next, prev };
}
