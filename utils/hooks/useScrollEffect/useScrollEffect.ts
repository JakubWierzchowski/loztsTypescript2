import { useEffect, useState } from "react";

interface MyEventListenerOptions extends EventListenerOptions {
  passive?: boolean;
}

export const useScrollEffect = (): number => {
  const [scrollValue, setScrollValue] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setScrollValue(window.scrollY);

    const options: MyEventListenerOptions = { passive: true };
    window.addEventListener("scroll", onScroll, options);

    return () => {
      window.removeEventListener("scroll", onScroll, options);
    };
  }, []);

  return scrollValue;
};
