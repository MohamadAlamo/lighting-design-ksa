import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import GalleryPage from '@/pages/GalleryPage';
import { LenisContext } from '@/lenis-context';
import { useLenis } from '@/hooks/useLenis';

export default function App() {
  const lenis = useLenis();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <LenisContext.Provider value={lenis}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </LenisContext.Provider>
  );
}
