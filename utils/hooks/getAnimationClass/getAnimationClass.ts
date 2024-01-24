'use client';
import { useInView } from 'react-intersection-observer';
import styles from './getAnimationStyles.module.scss';
export const AnimationClassHook = (slideInFirst: string, slideInSecond: string) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const getAnimationClass = (index: number) => {
    if (inView) {
      return index % 2 === 0 ? styles[slideInFirst] : styles[slideInSecond];
    }
    return '';
  };

  const getShowAnimationClass = () => {
    if (inView) {
      return styles[slideInFirst];
    }
    return '';
  };

  return {
    ref,
    getAnimationClass,
    getShowAnimationClass,
  };
};

export default AnimationClassHook;
