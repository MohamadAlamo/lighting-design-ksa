import { Link } from 'react-router-dom';
import { CONTACT, CREDIT, SOCIALS } from '@/data/site';

const SOCIAL_ICONS = [
  {
    href: SOCIALS.instagram,
    label: 'Instagram',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.8s0 3.5-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.5.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2.2a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3z',
  },
  {
    href: SOCIALS.facebook,
    label: 'Facebook',
    path: 'M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.6V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2h-2.6v2.9h2.6V21h3.2z',
  },
  {
    href: SOCIALS.tiktok,
    label: 'TikTok',
    path: 'M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-2.7v10.7a2.3 2.3 0 1 1-1.7-2.2V8.7a5 5 0 1 0 4.4 5V9.2a6.8 6.8 0 0 0 3.7 1.1V7.6a4.2 4.2 0 0 1-2.7-1.8z',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(176,162,141,0.16)] px-[clamp(1.5rem,5vw,4.5rem)] pb-[5.5rem] pt-[3.5rem]">
      <div className="flex flex-wrap items-start justify-between gap-x-[3rem] gap-y-[2.4rem]">
        <div>
          <Link to="/" className="pl-[0.22em] font-display text-[1.2rem] tracking-[0.22em] text-cream">
            LIGHTING DESIGN
          </Link>
          <p className="mt-[1.1rem] max-w-[22em] text-[0.88rem] leading-[1.75] text-muted">
            Bespoke chandeliers and lighting in alabaster, crystal and brass — designed, made and
            installed since 2008.
          </p>
        </div>

        <div className="flex flex-col gap-[0.6rem] text-[0.88rem] text-muted">
          <a href={`tel:${CONTACT.phone}`} className="transition-colors hover:text-cream">
            {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-cream">
            {CONTACT.email}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_ICONS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              className="grid h-[42px] w-[42px] place-items-center rounded-full border border-[rgba(176,162,141,0.35)] transition-colors duration-[400ms] hover:border-copper hover:bg-copper/10"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-[2.8rem] flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-[rgba(176,162,141,0.16)] pt-[1.6rem] text-[0.74rem] tracking-[0.12em] text-muted/80">
        <span>© {new Date().getFullYear()} Lighting Design. All rights reserved.</span>
        <span>
          Designed &amp; engineered by{' '}
          <a
            href={CREDIT.url}
            target="_blank"
            rel="noopener"
            className="border-b border-[rgba(210,171,110,0.4)] pb-[2px] text-gold transition-colors hover:text-cream"
          >
            {CREDIT.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
