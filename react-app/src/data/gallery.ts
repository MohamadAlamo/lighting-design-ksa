import type { GalleryItem } from '@/types';

export const GALLERY: GalleryItem[] = [
  { src: '/assets/gallery/09.jpg', cat: 'chand', mat: 'crystal', title: 'The bedside drop' },
  { src: '/assets/gallery/04.jpg', cat: 'chand', mat: 'brass', title: 'The gold leaf' },
  { src: '/assets/gallery/06.jpg', cat: 'wall', mat: 'alab', title: 'Alabaster blade' },
  { src: '/assets/gallery/13.jpg', cat: 'chand', mat: 'alab', title: 'The alabaster river' },
  { src: '/assets/gallery/08.jpg', cat: 'wall', mat: 'crystal', title: 'Frosted panels' },
  { src: '/assets/gallery/20.jpg', cat: 'lamp', mat: 'steel', title: 'The desk pair' },
  { src: '/assets/gallery/15.jpg', cat: 'chand', mat: 'alab', title: 'The great hall ring' },
  { src: '/assets/gallery/19.jpg', cat: 'lamp', mat: 'steel', title: 'The reading tree' },
  { src: '/assets/gallery/05.jpg', cat: 'chand', mat: 'brass', title: 'Leaf in gold' },
  { src: '/assets/gallery/07.jpg', cat: 'wall', mat: 'alab', title: 'The entrance blade' },
  { src: '/assets/gallery/22.jpg', cat: 'lamp', mat: 'steel', title: 'The study lamp' },
  { src: '/assets/gallery/21.jpg', cat: 'lamp', mat: 'steel', title: 'The evening pair' },
  { src: '/assets/gallery/12.jpg', cat: 'chand', mat: 'alab', title: 'Alabaster beams' },
  { src: '/assets/gallery/18.jpg', cat: 'lamp', mat: 'steel', title: 'The arc' },
  { src: '/assets/gallery/01.jpg', cat: 'chand', mat: 'brass', title: 'Marasi leaves' },
  { src: '/assets/gallery/14.jpg', cat: 'chand', mat: 'alab', title: 'The triple ring' },
  { src: '/assets/gallery/11.jpg', cat: 'wall', mat: 'brass', title: 'The olive branch' },
  { src: '/assets/gallery/02.jpg', cat: 'chand', mat: 'brass', title: 'Marasi canopy' },
  { src: '/assets/gallery/17.jpg', cat: 'lamp', mat: 'brass', title: 'The laurel lamp' },
  { src: '/assets/gallery/03.jpg', cat: 'chand', mat: 'crystal', title: 'The ice curtain' },
  { src: '/assets/gallery/10.jpg', cat: 'lamp', mat: 'steel', title: 'The night ring' },
  { src: '/assets/gallery/16.jpg', cat: 'chand', mat: 'crystal', title: 'The glacier' },
];

export const TYPE_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'chand', label: 'Chandeliers & pendants' },
  { id: 'wall', label: 'Wall lights' },
  { id: 'lamp', label: 'Table & floor lamps' },
];

export const MATERIAL_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'crystal', label: 'Crystal & glass' },
  { id: 'alab', label: 'Alabaster' },
  { id: 'brass', label: 'Brass & gold' },
  { id: 'steel', label: 'Steel & bronze' },
];
