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

export interface archivesPropsGallery {
  params: { galeria: string };
}

export interface archivesPropsGalleryTurnament {
  params: { turniej: string };
}

export interface ArchivesGalleryGalleryModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  images: GalleryDetails | undefined;
  prevSlide: () => void;
  nextSlide: () => void;
  lastSlide: number;
  slideNumber: number;
}
