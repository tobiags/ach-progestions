"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

interface ScrollCraftContextType {
  scrollY: number;
  mousePos: { x: number; y: number }; // normalized -1 to 1
  isReducedMotion: boolean;
}

const ScrollCraftContext = createContext<ScrollCraftContextType>({
  scrollY: 0,
  mousePos: { x: 0, y: 0 },
  isReducedMotion: false,
});

export const useScrollCraft = () => useContext(ScrollCraftContext);

export const ScrollCraftProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleMediaChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    // Throttled rAF scroll listener
    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId.current = null;
      });
    };

    // Smooth pointer tracker for desktop depth
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; // Skip on mobile
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x: nx, y: ny });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <ScrollCraftContext.Provider value={{ scrollY, mousePos, isReducedMotion }}>
      {children}
    </ScrollCraftContext.Provider>
  );
};
