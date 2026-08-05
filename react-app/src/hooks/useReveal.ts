import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Scroll reveals. Elements marked [data-reveal] fade + rise once; containers
 * marked [data-stagger] cascade their direct children ~90ms apart.
 */
export function useReveal(deps: unknown[] = []) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const staggerItems = Array.from(document.querySelectorAll<HTMLElement>('[data-stagger]'));
    const wipeItems = Array.from(document.querySelectorAll<HTMLElement>('[data-wipe]'));

    if (reduced) {
      revealItems.forEach((el) => el.classList.add('reveal-in'));
      staggerItems.forEach((wrap) =>
        Array.from(wrap.children).forEach((c) => (c as HTMLElement).classList.add('reveal-in')),
      );
      wipeItems.forEach((el) => el.classList.add('wipe-in'));
      return;
    }

    revealItems.forEach((el) => el.classList.add('reveal'));
    staggerItems.forEach((wrap) =>
      Array.from(wrap.children).forEach((c) => (c as HTMLElement).classList.add('reveal')),
    );
    wipeItems.forEach((el) => el.classList.add('wipe'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          if (el.hasAttribute('data-stagger')) {
            Array.from(el.children).forEach((child, i) => {
              window.setTimeout(() => (child as HTMLElement).classList.add('reveal-in'), i * 90);
            });
          } else if (el.hasAttribute('data-wipe')) {
            el.classList.add('wipe-in');
          } else {
            el.classList.add('reveal-in');
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    [...revealItems, ...staggerItems, ...wipeItems].forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...deps]);
}
