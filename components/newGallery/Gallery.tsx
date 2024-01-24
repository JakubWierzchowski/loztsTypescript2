import React, { useState } from 'react';
import { Navigation } from './Navigation/nav';
import { PreviewGallery } from './PreviewGallery/prev';
import { TransitionPhoto } from './TransitionPhoto/transition';
import { GalleryProps } from '../../types/newGallery';
import style from './index.module.scss';

const Gallery: React.FC<GalleryProps> = ({ photos, slideNumber, handleCloseModal }) => {
  const [shouldScroll, setShouldScroll] = useState(true);

  const [indexActivePhoto, setIndexActivePhoto] = useState(slideNumber);
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];
  const [activePhotoId, setActivePhotoId] = useState<number | null>(indexActivePhoto + 1);

  if (!photos.length) {
    return null;
  }

  return (
    <>
      <div className={style.gallery}>
        <div className={style.galleryContainer}>
          <TransitionPhoto
            className={style.galleryTransitionPhoto}
            photos={photos}
            indexActivePhoto={indexActivePhoto}
            handleCloseModal={handleCloseModal}
          />
          <Navigation
            className={style.galleryNavigation}
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
          {/* <h1 style={{ color: '#ffff' }}>tekst</h1> */}
        </div>
        <PreviewGallery
          className={style.galleryPreviewList}
          indexActivePhoto={indexActivePhoto}
          photos={photos}
          setNewPhoto={setIndexActivePhoto}
          setActivePhotoId={setActivePhotoId}
          activePhotoId={activePhotoId}
          shouldScroll={shouldScroll}
          setShouldScroll={setShouldScroll}
        />
      </div>
    </>
  );
};

export default Gallery;
