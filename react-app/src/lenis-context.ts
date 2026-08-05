import { createContext, useContext } from 'react';
import type Lenis from 'lenis';
import type { MutableRefObject } from 'react';

export const LenisContext = createContext<MutableRefObject<Lenis | null> | null>(null);

export function useLenisRef() {
  return useContext(LenisContext);
}
