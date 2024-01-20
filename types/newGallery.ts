export interface Photo {
  id: number;
  src: string;
  preview: string;
  description: string;
}

export interface CommonClassProps {
  className?: string;
}

export interface GalleryProps {
  photos: any;
  slideNumber: number;
  handleCloseModal: () => void;
}

export interface TransitionPhotoProps extends CommonClassProps {
  photos: Photo[];
  indexActivePhoto: number;
  handleCloseModal: () => void;
}

export interface NavigationProps extends CommonClassProps {
  disabledPrev?: boolean;
  disabledNext?: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export interface PreviewGalleryProps extends CommonClassProps {
  photos: Photo[];
  indexActivePhoto: number;
  setNewPhoto: (id: number) => void;
  setActivePhotoId: (id: number) => void;
  activePhotoId: number | null;
  shouldScroll: any;
  setShouldScroll: any;
}
