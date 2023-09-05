import React, { useState, useRef, useEffect } from "react";

import { Navigation } from "./Navigation/nav";
import { PreviewGallery } from "./PreviewGallery/prev";
import { TransitionPhoto } from "./TransitionPhoto/transition";

import style from "./index.module.scss";

interface WolfGalleryProps {
  photos: any;
  slideNumber: number;
}

const WolfGallery: React.FC<WolfGalleryProps> = ({ photos, slideNumber }) => {
  const [shouldScroll, setShouldScroll] = useState(true);

  const [indexActivePhoto, setIndexActivePhoto] = useState(slideNumber);
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];
  const [activePhotoId, setActivePhotoId] = useState<number | null>(
    indexActivePhoto + 1
  );

  if (!photos.length) {
    return null;
  }

  return (
    <div className={style.wolfGallery}>
      <div className={style.wolfGalleryContainer}>
        <TransitionPhoto
          className={style.wolfGalleryTransitionPhoto}
          photos={photos}
          indexActivePhoto={indexActivePhoto}
        />
        <Navigation
          className={style.wolfGalleryNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
            setActivePhotoId(indexActivePhoto);
            setShouldScroll(true);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
            setActivePhotoId(indexActivePhoto + 2);
            setShouldScroll(true);
          }}
        />
      </div>
      <PreviewGallery
        className={style.wolfGalleryPreviewList}
        indexActivePhoto={indexActivePhoto}
        photos={photos}
        setNewPhoto={setIndexActivePhoto}
        setActivePhotoId={setActivePhotoId}
        activePhotoId={activePhotoId}
        shouldScroll={shouldScroll}
        setShouldScroll={setShouldScroll}
      />
    </div>
  );
};

export default WolfGallery;
