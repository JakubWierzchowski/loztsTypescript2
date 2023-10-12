"use client";
import React, { useState } from "react";
import ArchivesDataGallery from "@/data/archivesGallery.json";
import useModal from "@/utils/hooks/useModal/useModal";
import { GallerySeason } from "@/types/archivesGallery.type";
import Image from "next/image";
import styles from "@/components/ArchivesGallery/archivesGalleryTurnament.module.scss";
import GalleryModal from "@/components/newGallery/galleryModal";
import { GalleryTournamentsProps } from "@/types/gallery.type";

export default function GaleriaArchiwum({ params }: GalleryTournamentsProps) {
  const data: GallerySeason[] = ArchivesDataGallery.archiveGallery;

  const [findArchivesGallery] = data
    .map((item) => item.details.find((item) => item.ID === params.turniej))
    .filter((item) => item !== undefined);

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [slideNumber, setSlideNumber] = useState(0);
  const viewImage = (index: number) => {
    setSlideNumber(index);
    handleOpenModal();
  };
  const slider: number = findArchivesGallery?.link.length || 0;
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(slider)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber === slider
      ? setSlideNumber(slider)
      : setSlideNumber(slideNumber + 1);
  };
  const lastSlide = findArchivesGallery?.link.length || 0;

  return (
    <>
      <h1 className={styles.turnamentTitle}>{findArchivesGallery?.text}</h1>
      <section className={styles.wrapper}>
        {findArchivesGallery?.link.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <div className={styles.image}>
              <Image
                src={image.src}
                alt="Galeria Image"
                key={index}
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
                className={styles.images}
                fill
                onClick={() => viewImage(index)}
              />
            </div>
          </div>
        ))}

        <GalleryModal
          images={findArchivesGallery}
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          slideNumber={slideNumber}
        />
      </section>
    </>
  );
}
