export type GalleryCat = 'chand' | 'wall' | 'lamp';
export type GalleryMat = 'crystal' | 'alab' | 'brass' | 'steel';

export interface GalleryItem {
  src: string;
  cat: GalleryCat;
  mat: GalleryMat;
  title: string;
}
