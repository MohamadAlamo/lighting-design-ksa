import { useEffect, useState } from 'react';
import HomeMarkup from '@/legacy/HomeMarkup';
import { mountLegacyMotion } from '@/legacy/motion';

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return true;
    }
  });

  useEffect(() => mountLegacyMotion({ onIntroDone: () => setShowIntro(false) }), []);

  return <HomeMarkup showIntro={showIntro} dismissIntro={() => setShowIntro(false)} />;
}
