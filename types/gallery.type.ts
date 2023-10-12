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

export interface galleryProps {
  params: { gallery: string };
}

export interface GalleryTournamentsProps {
  params: { turniej: string };
}
