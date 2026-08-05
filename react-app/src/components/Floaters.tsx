import { useEffect, useState } from 'react';
import { CONTACT } from '@/data/site';
import { useLenisRef } from '@/lenis-context';
import { scrollToTarget } from '@/hooks/useLenis';

export default function Floaters() {
  const [show, setShow] = useState(false);
  const lenisRef = useLenisRef();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] z-[60] flex items-center gap-3">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => scrollToTarget(lenisRef?.current ?? null, 0)}
        className={`grid h-[52px] w-[52px] place-items-center rounded-full border border-[rgba(210,171,110,0.5)] bg-ink/85 backdrop-blur transition-all duration-[450ms] hover:bg-copper/25 ${
          show ? 'pointer-events-auto translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 16 V4 M4.5 9.5 L10 4 L15.5 9.5" stroke="#d2ab6e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Lighting Design on WhatsApp"
        className="pointer-events-auto grid h-[56px] w-[56px] place-items-center rounded-full border border-[rgba(210,171,110,0.5)] bg-[#1e1812] shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-[background,transform,border-color] duration-[400ms] hover:-translate-y-[3px] hover:border-[#d2ab6e] hover:bg-[rgba(179,120,74,0.35)]"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.2 3.9zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z" />
        </svg>
      </a>
    </div>
  );
}
