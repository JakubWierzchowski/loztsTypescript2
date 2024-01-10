'use client';
import { useScrollEffect } from '@/utils/hooks/useScrollEffect/useScrollEffect';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react';
import styles from './slider.module.scss';
import photosData from '@/data/HeaderSlider/images.json';
import Image from 'next/image';
interface PropsValue {
  children: ReactNode;
}
function Scroll({ children }: PropsValue) {
  const scrollValue = useScrollEffect();
  const { scrollY } = useScroll();
  const scaleY = useTransform(scrollY, [0, 600], [1, 0.1]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === photosData.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [photosData.length]);

  return (
    <>
      {photosData.map((photo, index) => (
        <div key={photo.path} className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}>
          <Image className={styles.imagee} src={photo.path} alt={photo.alt} width={800} height={480} priority />
        </div>
      ))}
      <section className={styles.logoTransformWrapper}>
        <motion.div style={{ scale: scaleY }}>{scrollValue > 600 ? null : children}</motion.div>
      </section>
    </>
  );
}

export default Scroll;
