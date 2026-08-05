export type GalleryCat = 'chand' | 'wall' | 'lamp';
export type GalleryMat = 'crystal' | 'alab' | 'brass' | 'steel';

export interface GalleryItem {
  src: string;
  cat: GalleryCat;
  mat: GalleryMat;
  title: string;
}

export interface Project {
  cat: string;
  name: string;
  img: string;
  imgs: string[];
  loc: string;
  year: string;
  scope: string;
  fin: string;
  desc: string;
}

export interface Piece {
  name: string;
  cat: string;
  spec: string;
  img: string;
}

export interface Collection {
  num: string;
  title: string;
  blurb: string;
  img: string;
  cat: GalleryCat;
  wide?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  branch?: string;
  phone?: string;
  photo: string;
  lead?: boolean;
}

export interface Branch {
  name: string;
  city: string;
  address: string;
  mapUrl: string;
  hours: string;
}

export interface Material {
  name: string;
  blurb: string;
  img: string;
}
