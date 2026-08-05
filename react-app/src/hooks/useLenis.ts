import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from './useReducedMotion';

/**
 * Inertial smooth scrolling. Returns a ref holding the instance so callers can
 * drive programmatic scrolls (anchor links, back-to-top) through the same easing.
 * Under prefers-reduced-motion nothing is created and native scrolling stays.
 */
export function useLenis() {
  const ref = useRef<Lenis | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    ref.current = lenis;

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ref.current = null;
    };
  }, [reduced]);

  return ref;
}

export function scrollToTarget(lenis: Lenis | null, target: string | number, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2 });
    return;
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
    return;
  }
  const el = document.querySelector(target);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: 'smooth' });
}
