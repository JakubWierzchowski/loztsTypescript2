import { useMemo, useRef, useLayoutEffect, useState } from 'react';

import { TransitionPhotoProps } from '../../../types/newGallery';

import style from './transition.module.scss';
import Image from 'next/image';

type RefT = React.MutableRefObject<HTMLDivElement | null>;
const getPhotoByRef = (ref: RefT, index: number): HTMLElement | null =>
  ref.current!.querySelector(`img:nth-of-type(${index + 1})`);

const hidePhoto = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }

  element.dataset.active = 'false';
  if (element.previousSibling) {
    // @ts-ignore
    element.previousSibling.dataset.active = 'false';
  }
  if (element.nextSibling) {
    // @ts-ignore
    element.nextSibling.dataset.active = 'false';
  }
};

const showPhoto = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }

  element.dataset.active = 'true';
  // @ts-ignore
  element.src = element.dataset.src;
  if (element.previousSibling) {
    // @ts-ignore
    element.previousSibling.dataset.active = 'prepared';
    // @ts-ignore
    element.previousSibling.src = element.previousSibling.dataset.src;
  }
  if (element.nextSibling) {
    // @ts-ignore
    element.nextSibling.dataset.active = 'prepared';
    // @ts-ignore
    element.nextSibling.src = element.nextSibling.dataset.src;
  }
};

export const TransitionPhoto: React.FC<TransitionPhotoProps> = ({
  className,
  photos,
  indexActivePhoto,
  handleCloseModal,
}) => {
  const [prevActiveIndexPhoto, setPrevActiveIndexPhoto] = useState(indexActivePhoto);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const activePhoto = getPhotoByRef(containerRef, prevActiveIndexPhoto);
    const nextActivePhoto = getPhotoByRef(containerRef, indexActivePhoto);

    if (prevActiveIndexPhoto !== indexActivePhoto) {
      hidePhoto(activePhoto);
      showPhoto(nextActivePhoto);
    } else {
      showPhoto(activePhoto);
    }

    setPrevActiveIndexPhoto(indexActivePhoto);
  }, [indexActivePhoto]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Sprawdź, czy kliknięcie nastąpiło na Image
    if ((e.target as HTMLElement).classList.contains(style.transitionPhotoImage)) {
      console.log('image');
    } else {
      console.log('parent');
    }
  };

  const handlediv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    handleCloseModal();
  };

  return useMemo(
    () => (
      <>
        <div className={`${style.transitionPhoto} ${className}`} ref={containerRef} onClick={handleContainerClick}>
          {photos.map((photo, id) => (
            <>
              <Image
                className={style.transitionPhotoImage}
                key={photo.id}
                data-active={id === indexActivePhoto}
                data-src={photo.src}
                src={photo.src}
                alt={`${id}`}
                fill
              />
            </>
          ))}
          <div className={style.galeryClose} onClick={handlediv}></div>
        </div>
      </>
    ),
    []
  );
};
