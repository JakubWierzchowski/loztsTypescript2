import { MyEventListenerOptions } from '@/types/hooks/useScroll.type';
import { useEffect, useState } from 'react';

export const useScrollEffect = (): number => {
  const [scrollValue, setScrollValue] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setScrollValue(window.scrollY);

    const options: MyEventListenerOptions = { passive: true };
    window.addEventListener('scroll', onScroll, options);

    return () => {
      window.removeEventListener('scroll', onScroll, options);
    };
  }, []);

  return scrollValue;
};
