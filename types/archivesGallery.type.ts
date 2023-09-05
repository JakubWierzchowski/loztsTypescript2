export interface GallerySeason {
  sezon: string;
  details: GalleryDetails[];
}

export interface GalleryDetails {
  ID: string;
  text: string;
  firstPhoto: string;
  link: GalleryDetailsPhotos[];
}

export interface GalleryDetailsPhotos {
  id: number;
  src: string;
}
