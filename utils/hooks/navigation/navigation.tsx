import { useCallback, useMemo, useState } from 'react';
import { OpenIndexes, HandleOpenSubmenuArgs } from '@/types/navigation/navBar.types';
import { useScrollEffect } from '../useScrollEffect/useScrollEffect';

interface UseNavigationProps {
  pathName: string;
}

function useNavigation({ pathName }: UseNavigationProps) {
  const [openIndexes, setOpenIndexes] = useState<OpenIndexes>({});
  const [menuValue, setMenuValue] = useState(false);
  const handleOpenSubmenu = useCallback(
    ({ levelIndex, itemIndex }: HandleOpenSubmenuArgs) => {
      setOpenIndexes((prevOpenIndexes: OpenIndexes) => ({
        ...prevOpenIndexes,
        [levelIndex]: prevOpenIndexes[levelIndex] === itemIndex ? null : itemIndex,
      }));
    },
    [setOpenIndexes]
  );

  const toggleMenuValue = useCallback(() => {
    setMenuValue((prevMenuValue) => !prevMenuValue);
  }, [setMenuValue]);

  const scrollValue = useScrollEffect();
  const scrollPath = useMemo(() => (pathName === '/' ? 598 : 12), [pathName]);
  const backgroundColor = useMemo(
    () => (scrollValue < scrollPath ? '#f0f3f500' : '#ffffff'),
    [scrollValue, scrollPath]
  );
  const navPaddingTop = useMemo(() => (scrollValue < scrollPath ? '50px' : '20px'), [scrollValue, scrollPath]);

  const spanColor = scrollValue < scrollPath ? 'light' : 'dark';

  return {
    scrollValue,
    handleOpenSubmenu,
    toggleMenuValue,
    scrollPath,
    backgroundColor,
    navPaddingTop,
    spanColor,
    openIndexes,
    menuValue,
    setMenuValue,
  };
}

export default useNavigation;
