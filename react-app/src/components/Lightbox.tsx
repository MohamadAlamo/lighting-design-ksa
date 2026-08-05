import { useCallback, useEffect } from 'react';
import type { GalleryItem } from '@/types';
import { useLenisRef } from '@/lenis-context';

interface Props {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}

export default function Lightbox({ items, index, onClose, onIndex }: Props) {
  const lenisRef = useLenisRef();
  const open = index !== null;

  const step = useCallback(
    (dir: number) => {
      if (index === null || !items.length) return;
      onIndex((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const lenis = lenisRef?.current;
    lenis?.stop();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [open, onClose, step, lenisRef]);

  if (!open || index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(11,8,5,0.94)] backdrop-blur-[14px]"
    >
      <button type="button" aria-label="Close viewer" onClick={onClose} className="absolute inset-0" />

      <img
        src={item.src}
        alt={item.title}
        className="pointer-events-none mb-[6vh] max-h-[72vh] max-w-[min(88vw,1240px)] rounded-[10px] object-contain shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
      />

      <div className="pointer-events-none absolute bottom-[1.7rem] left-1/2 -translate-x-1/2 text-center">
        <span className="block font-display text-[1.4rem] text-cream">{item.title}</span>
        <span className="mt-[0.3rem] block font-sans text-[0.72rem] tracking-[0.22em] text-muted">
          {index + 1} / {items.length}
        </span>
      </div>

      <button
        type="button"
        aria-label="Previous photograph"
        onClick={() => step(-1)}
        className="absolute left-[clamp(0.8rem,3vw,2.4rem)] top-1/2 grid h-[52px] w-[52px] -translate-y-1/2 place-items-center rounded-full border border-[rgba(210,171,110,0.45)] bg-ink/70 text-cream transition-colors hover:bg-copper/25"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next photograph"
        onClick={() => step(1)}
        className="absolute right-[clamp(0.8rem,3vw,2.4rem)] top-1/2 grid h-[52px] w-[52px] -translate-y-1/2 place-items-center rounded-full border border-[rgba(210,171,110,0.45)] bg-ink/70 text-cream transition-colors hover:bg-copper/25"
      >
        →
      </button>
      <button
        type="button"
        aria-label="Close viewer"
        onClick={onClose}
        className="absolute right-[clamp(0.8rem,3vw,2.4rem)] top-[clamp(0.8rem,3vw,2rem)] grid h-[46px] w-[46px] place-items-center rounded-full border border-[rgba(210,171,110,0.45)] bg-ink/70 text-lg text-cream transition-colors hover:bg-copper/25"
      >
        ✕
      </button>
    </div>
  );
}
