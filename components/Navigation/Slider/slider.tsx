"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import { useScrollEffect } from "@/utils/hooks/useScrollEffect/useScrollEffect";
import Image from "next/image";
import styles from "./slider.module.scss";

const photos = [
  "/images/header/mini-radzyn_zielona_gora199.jpeg",
  "/images/header/PiotrChodorski2.jpeg",
  "/images/header/mini-radzyn_zielona_gora61.jpeg",
  "/images/header/radzyn_gloska_2010_sezon33.jpeg",
];

const Slider = () => {
  const scrollValue = useScrollEffect();
  const { scrollY } = useScroll();
  const scaleY = useTransform(scrollY, [0, 600], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((nextIndex) =>
        nextIndex === photos.length - 1 ? 0 : nextIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, 500);

    return () => clearTimeout(timeout);
  }, [nextIndex]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.sliderContainer}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <Image
              className={styles.imagee}
              src={photo}
              alt={`Photo ${index + 1}`}
              width={800}
              height={480}
              priority
            />
          </div>
        ))}
        {scrollValue > 545 ? (
          ""
        ) : (
          <section className={styles.logoTransformWrapper}>
            <motion.div style={{ scale: scaleY }}>
              <div className={styles.flexItem}>
                <div className={styles.item}>L </div>

                <div className={styles.logoImage}>
                  <Image
                    className={styles.logoCircle}
                    src="/images/header/LOZTScircuit.png"
                    alt="Slider Image"
                    width="250"
                    height="250"
                    priority
                  />
                  <Image
                    className={styles.logoNet}
                    src="/images/header/LOZTScenter.png"
                    alt="Slider Image"
                    width={140}
                    height={140}
                    priority
                  />
                </div>
                <div className={styles.item}>Z</div>
                <div className={styles.item}>T</div>
                <div className={styles.item}>S</div>
              </div>
            </motion.div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Slider;
