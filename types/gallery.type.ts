export interface GallerySeason {
  id: string;
  sezon: string;
  data: GalleryDetails[];
}

export interface GalleryDetails {
  ID: string;
  text: string;
  firstPhoto: string;
  link: GalleryDetailsPhotos[];
}

export interface GalleryDetailsPhotos {
  src: string;
}
