import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV } from '@/data/site';
import { useLenisRef } from '@/lenis-context';
import { scrollToTarget } from '@/hooks/useLenis';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const lenisRef = useLenisRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => (e: MouseEvent) => {
    setOpen(false);
    if (!href.startsWith('#')) return;
    e.preventDefault();
    if (pathname !== '/') {
      navigate('/' + href);
      return;
    }
    scrollToTarget(lenisRef?.current ?? null, href);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 px-[clamp(1.5rem,5vw,4.5rem)] py-[1.4rem] transition-colors duration-500 ${
          solid ? 'bg-inkDeep/85 backdrop-blur-md' : 'bg-gradient-to-b from-inkDeep/85 to-transparent'
        }`}
      >
        <Link
          to="/"
          className="whitespace-nowrap pl-[0.22em] font-display text-[1.15rem] font-medium tracking-[0.22em] text-cream"
        >
          LIGHTING DESIGN
        </Link>

        <div className="hidden items-center gap-[2.2rem] md:flex">
          {NAV.map((item) =>
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={go(item.href)}
                className="text-[0.74rem] uppercase tracking-[0.2em] text-muted transition-colors duration-[400ms] hover:text-cream"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-[0.74rem] uppercase tracking-[0.2em] text-muted transition-colors duration-[400ms] hover:text-cream"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] border border-[rgba(176,162,141,0.35)] md:hidden"
        >
          <span className="block h-px w-5 bg-gold" />
          <span className="block h-px w-5 bg-gold" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-inkDeep/97 px-[clamp(1.5rem,6vw,4rem)] py-[1.4rem] backdrop-blur-lg transition-opacity duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="pl-[0.22em] font-display text-[1.15rem] tracking-[0.22em] text-cream">
            LIGHTING DESIGN
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center border border-[rgba(176,162,141,0.35)] text-lg text-cream"
          >
            ✕
          </button>
        </div>

        <div className="mt-[3.5rem] flex flex-col gap-[1.6rem]">
          {NAV.map((item, i) =>
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={go(item.href)}
                style={{ transitionDelay: `${80 + i * 60}ms` }}
                className={`font-display text-[2.1rem] leading-none text-cream transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${80 + i * 60}ms` }}
                className={`font-display text-[2.1rem] leading-none text-cream transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </>
  );
}
