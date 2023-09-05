"use client";
import React, { useState } from "react";
import DataGallery from "@/data/gallery.json";
import useModal from "@/utils/hooks/useModal/useModal";
import { GallerySeason } from "@/types/gallery.type";
import Image from "next/image";
import styles from "@/components/Gallery/galleryTurnament.module.scss";
import GalleryModal from "@/components/ArchivesGallery/ArchivesGalleryModal";
import { staticBlurDataUrl } from "@/utils/staticBlurDataURL";
interface pageProps {
  params: { gallery: string };
}

export default function Gallery({ params }: pageProps) {
  const data: GallerySeason[] = DataGallery.allData;

  const [findTurnament] = data.map((item) =>
    item.data.find((item) => item.ID === params.gallery)
  );

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [slideNumber, setSlideNumber] = useState(0);
  const viewImage = (index: number) => {
    setSlideNumber(index);
    handleOpenModal();
  };

  // const imgMapping = findTurnament?.link[slideNumber]?.img || "";

  const slider: number = findTurnament?.link.length || 0;
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

  const lastSlide = findTurnament?.link.length || 0;

  return (
    <>
      <h1 className={styles.turnamentTitle}>{findTurnament?.text}</h1>
      <section className={styles.wrapper}>
        {findTurnament?.link.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            style={{ animationDelay: `${0.01 * index}s` }}
          >
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
                placeholder="blur"
                blurDataURL={staticBlurDataUrl()}
              />
            </div>
          </div>
        ))}

        <GalleryModal
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          images={findTurnament}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          lastSlide={lastSlide}
          slideNumber={slideNumber}
        />
      </section>
    </>
  );
}
