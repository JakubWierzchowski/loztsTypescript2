import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArchivesDataGallery from "@/data/archivesGallery.json";
import { GallerySeason } from "@/types/archivesGallery.type";
import styles from "@/components/ArchivesGallery/archivesGallery.module.scss";
import { archivesPropsGallery } from "@/types/archivesGallery.type";

export default async function GaleriaArchiwum({
  params,
}: archivesPropsGallery) {
  const data: GallerySeason[] = ArchivesDataGallery.archiveGallery;

  const findArchivesGallery = data.find(
    (item) => item.sezon === params.galeria
  );
  return (
    <section className={styles.wrapper}>
      {findArchivesGallery?.details.map((item, index) => (
        <Link
          href={`turnaments/${item.ID}`}
          className={styles.articleLink}
          key={item.ID}
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div className={styles.flex}>
            <div className={styles.imageContainter}>
              <Image
                className={styles.image}
                alt={item.text}
                fill
                src={`/${item.firstPhoto}`}
              />
            </div>
            <h2 className={styles.underPhoto}>
              <span className={styles.span}>{item.text}</span>
            </h2>
          </div>
        </Link>
      ))}
    </section>
  );
}
