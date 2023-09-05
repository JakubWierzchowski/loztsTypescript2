import { useMemo, useRef, useEffect, useState } from "react";
import cl from "classnames";

import { Photo, CommonClassProps } from "../types";

import style from "./prev.module.scss";
import Image from "next/image";

interface PreviewGalleryProps extends CommonClassProps {
  photos: Photo[];
  indexActivePhoto: number;
  setNewPhoto: (id: number) => void;
  setActivePhotoId: (id: number) => void;
  activePhotoId: number | null;
  shouldScroll: any;
  setShouldScroll: any;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  photos,
  indexActivePhoto,
  setNewPhoto,
  activePhotoId,
  setActivePhotoId,
  shouldScroll,
  setShouldScroll,
}) => {
  const previewContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!photos.length || !previewContainer.current) {
      return;
    }

    const containerWidth = previewContainer.current.offsetWidth ?? 0;
    const activePhoto = previewContainer.current.querySelector(
      `.${style.active}`
    ) as HTMLElement;

    if (activePhoto) {
      const photoWidth = activePhoto.offsetWidth;

      const centerPhotoIndex = Math.floor(containerWidth / photoWidth);
      let scrollLeft =
        (indexActivePhoto - centerPhotoIndex) * photoWidth +
        containerWidth / 2 -
        photoWidth / 2 +
        photoWidth / 2.6;

      // Ogranicz wartość scrollLeft do zapobieżenia przewijaniu poza granice galerii
      scrollLeft = Math.max(0, scrollLeft);
      scrollLeft = Math.min(
        previewContainer.current.scrollWidth - containerWidth,
        scrollLeft
      );

      previewContainer.current.style.scrollBehavior = "smooth";
      previewContainer.current.scrollLeft = scrollLeft;

      // setTimeout(() => {
      //   previewContainer.current.style.scrollBehavior = "unset";
      // }, 500);
    }
  }, [indexActivePhoto, photos]);

  if (!photos.length) {
    return null;
  }

  return (
    <div className={style.previewGallery}>
      <div className={style.previewGalleryTrack} ref={previewContainer}>
        {photos.map((photo, id) => (
          <div key={photo.id}>
            <div
              className={style.previewGalleryPreview}
              onClick={() => {
                setNewPhoto(id);
                setActivePhotoId(photo.id);
              }}
            >
              <Image
                src={photo.src}
                alt={`${id}`}
                fill
                className={style.previewGalleryImage}
                onClick={() => {
                  setNewPhoto(id);
                  setActivePhotoId(photo.id);
                }}
              />
              <div
                className={`${style.previewGalleryCover} ${
                  activePhotoId === photo.id ? style.active : ""
                }`}
              >
                {indexActivePhoto + 1} / {photos.length}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
