import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { GALLERY, MATERIAL_FILTERS, TYPE_FILTERS } from '@/data/gallery';
import type { GalleryItem } from '@/types';
import Lightbox from '@/components/Lightbox';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Floaters from '@/components/Floaters';
import { useReveal } from '@/hooks/useReveal';

const PAGE_SIZE = 12;

function Chip({
  active,
  count,
  label,
  onClick,
}: {
  active: boolean;
  count?: number;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-[1.1rem] py-[0.6rem] font-sans text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-[400ms] ${
        active
          ? 'border-gold bg-copper/20 text-cream'
          : 'border-[rgba(176,162,141,0.28)] text-muted hover:border-copper hover:text-cream'
      }`}
    >
      {label}
      {typeof count === 'number' ? (
        <span className="ml-[0.5rem] font-display text-[0.85rem] text-gold">{count}</span>
      ) : null}
    </button>
  );
}

export default function GalleryPage() {
  const [params, setParams] = useSearchParams();
  const [type, setType] = useState<string>(params.get('cat') ?? 'all');
  const [mat, setMat] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const cat = params.get('cat');
    if (cat && cat !== type) setType(cat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => setPage(1), [type, mat, query]);

  const filtered = useMemo<GalleryItem[]>(
    () =>
      GALLERY.filter((item) => {
        if (type !== 'all' && item.cat !== type) return false;
        if (mat !== 'all' && item.mat !== mat) return false;
        if (query && !item.title.toLowerCase().includes(query.trim().toLowerCase())) return false;
        return true;
      }),
    [type, mat, query],
  );

  const shown = filtered.slice(0, page * PAGE_SIZE);
  useReveal([shown.length]);

  const typeCount = (id: string) =>
    id === 'all' ? GALLERY.length : GALLERY.filter((i) => i.cat === id).length;
  const matCount = (id: string) =>
    id === 'all' ? GALLERY.length : GALLERY.filter((i) => i.mat === id).length;

  const pickType = (id: string) => {
    setType(id);
    if (id === 'all') params.delete('cat');
    else params.set('cat', id);
    setParams(params, { replace: true });
  };

  const clear = () => {
    setType('all');
    setMat('all');
    setQuery('');
    params.delete('cat');
    setParams(params, { replace: true });
  };

  return (
    <>
      <Nav />
      <header className="px-[clamp(1.5rem,5vw,4.5rem)] pb-[2.4rem] pt-[clamp(7rem,16vh,10rem)]">
        <Link
          to="/"
          className="mb-[1.6rem] inline-flex items-center gap-[0.7rem] text-[0.74rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-cream"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <h1 className="font-display text-[clamp(2.6rem,7vw,5.2rem)] font-light leading-[1] tracking-[-0.015em] text-cream">
          The gallery
        </h1>

        <div className="mt-[2.4rem] flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[34em] text-[0.95rem] leading-[1.8] text-muted">
            Chandeliers, sconces and lamps photographed where they belong — installed in homes,
            majlis and restaurants across Al Khobar and Riyadh.
          </p>
          <span className="whitespace-nowrap font-display text-[1.2rem] italic text-muted">
            {GALLERY.length} photographs
          </span>
        </div>

        <div className="mt-[2rem] flex max-w-[26rem] items-center gap-3 border-b border-[rgba(176,162,141,0.28)] pb-[0.7rem]">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="#b0a28d" strokeWidth="1.4" />
            <path d="M13 13 L17 17" stroke="#b0a28d" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the gallery"
            aria-label="Search the gallery"
            className="w-full bg-transparent font-sans text-[0.9rem] text-cream outline-none placeholder:text-muted/70"
          />
        </div>

        <div role="group" aria-label="Filter by type" className="mt-[1.6rem] flex flex-wrap items-center gap-[0.7rem]">
          <span className="mr-[0.4rem] flex-none text-[0.64rem] uppercase tracking-[0.26em] text-muted/70">
            Type
          </span>
          {TYPE_FILTERS.map((t) => (
            <Chip
              key={t.id}
              label={t.label}
              count={typeCount(t.id)}
              active={type === t.id}
              onClick={() => pickType(t.id)}
            />
          ))}
        </div>

        <div role="group" aria-label="Filter by material" className="mt-[0.9rem] flex flex-wrap items-center gap-[0.7rem]">
          <span className="mr-[0.4rem] flex-none text-[0.64rem] uppercase tracking-[0.26em] text-muted/70">
            Material
          </span>
          {MATERIAL_FILTERS.map((m) => (
            <Chip
              key={m.id}
              label={m.label}
              count={matCount(m.id)}
              active={mat === m.id}
              onClick={() => setMat(m.id)}
            />
          ))}
        </div>
      </header>

      <div className="px-[clamp(1.5rem,5vw,4.5rem)] pb-[clamp(4rem,10vh,7rem)]">
        {shown.length ? (
          <div data-stagger className="[column-gap:1.4rem] [columns:270px_3]">
            {shown.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group mb-[1.4rem] block w-full break-inside-avoid text-left"
              >
                <span className="relative block overflow-hidden rounded-[14px] border border-[rgba(176,162,141,0.14)] bg-ink2">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="block w-full transition-transform duration-[1100ms] ease-cine group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-[1rem] pt-[3rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="block font-display text-[1.1rem] text-cream">{item.title}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-[4rem] text-center">
            <p className="mb-[1.6rem] font-display text-[1.5rem] italic text-muted">
              Nothing matches your search.
            </p>
            <button
              type="button"
              onClick={clear}
              className="rounded-full border border-[rgba(210,171,110,0.45)] px-[2rem] py-[0.9rem] font-sans text-[0.74rem] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-copper/20"
            >
              Clear filters
            </button>
          </div>
        )}

        {shown.length < filtered.length ? (
          <div className="mt-[1rem] flex justify-center">
            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className="border border-copper bg-copper/10 px-[2.2rem] py-[1rem] font-sans text-[0.76rem] uppercase tracking-[0.2em] text-cream transition-[background,letter-spacing] duration-[450ms] hover:bg-copper/25 hover:tracking-[0.24em]"
            >
              Load more — {filtered.length - shown.length} left
            </button>
          </div>
        ) : null}
      </div>

      <Lightbox
        items={shown}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndex={setOpenIndex}
      />
      <Footer />
      <Floaters />
    </>
  );
}
