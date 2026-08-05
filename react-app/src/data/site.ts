import type { Branch } from '@/types';

export const CONTACT = {
  phone: '+966540537677',
  phoneDisplay: '+966 54 053 7677',
  email: 'info@lightingdesign-ksa.com',
  whatsapp:
    'https://wa.me/966540537677?text=Hello%20Lighting%20Design%2C%20I%27d%20like%20to%20enquire%20about%20a%20piece.',
} as const;

export const SOCIALS = {
  instagram: 'https://www.instagram.com/lighting_design',
  facebook: 'https://www.facebook.com/anasakellabomalik',
  tiktok: 'https://www.tiktok.com/@lighting.design0',
} as const;

export const CREDIT = {
  name: 'Mohamad Alamo',
  url: 'https://www.linkedin.com/in/mohamad-alamo/',
} as const;

export const NAV = [
  { label: 'Collections', href: '#collections' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '#about' },
  { label: 'Showrooms', href: '#visit' },
] as const;

export const BRANCHES: Branch[] = [
  {
    name: 'Lighting Design (Main)',
    city: 'Al Khobar',
    address: 'North Al Khobar, King Khalid Street, Intersection 16',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Lighting+Design+King+Khalid+Street+Al+Khobar',
    hours: 'Sat–Thu · 10:00 – 22:00',
  },
  {
    name: 'Lighting Design +',
    city: 'Al Bandariyah, Al Khobar',
    address: 'King Faisal Ibn Abd Al Aziz Road, Al Bandariyah 31952',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Lighting+Design+Al+Bandariyah+Al+Khobar',
    hours: 'Sat–Thu · 10:00 – 22:00',
  },
  {
    name: 'Lighting Design +',
    city: 'Riyadh',
    address: 'Al Takhassusi Street, Riyadh',
    mapUrl: 'https://maps.app.goo.gl/t5qVH1Ysrp1WDvD39',
    hours: 'Sat–Thu · 10:00 – 22:00',
  },
];
