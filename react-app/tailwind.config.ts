import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14100c',
        ink2: '#1e1812',
        inkDeep: '#0f0b08',
        cream: '#f1e9db',
        sand: '#e2d5bd',
        muted: '#b0a28d',
        gold: '#d2ab6e',
        copper: '#b3784a',
        copperDeep: '#6f4525',
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'serif'],
        sans: ["'Jost'", 'sans-serif'],
        arabic: ["'Tajawal'", 'sans-serif'],
      },
      letterSpacing: { brand: '0.22em', eyebrow: '0.34em', label: '0.2em' },
      borderColor: { line: 'rgba(176,162,141,0.16)', line2: 'rgba(176,162,141,0.35)' },
      transitionTimingFunction: { cine: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
} satisfies Config;
