import React from "react";
import Link from "next/link";
import Image from "next/image";
import DataGallery from "@/data/gallery.json";
import { GallerySeason } from "@/types/gallery.type";
import styles from "@/components/newGallery/gallery.module.scss";
import { staticBlurDataUrl } from "@/utils/staticBlurDataURL";

export default async function GaleriaArchiwum() {
  const data: GallerySeason[] = DataGallery.allData;

  return (
    <section className={styles.layout}>
      <div className={styles.wrapper}>
        {data?.map(({ data }) =>
          data.map((item, index) => (
            <Link
              href={`galeria/${item.ID}`}
              key={item.ID}
              className={styles.articleLink}
            >
              <div className={styles.flex}>
                <div className={styles.imageContainter}>
                  <Image
                    className={styles.image}
                    alt={item.text}
                    fill
                    src={`/${item.firstPhoto}`}
                    priority={index <= 0 ? true : false}
                    placeholder="blur"
                    blurDataURL={staticBlurDataUrl()}
                  />
                </div>
                <h2 className={styles.underPhoto}>
                  <span className={styles.span}>{item.text}</span>
                </h2>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
