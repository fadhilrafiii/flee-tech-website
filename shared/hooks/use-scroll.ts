import { useEffect, useState } from 'react';

import { ScrollState } from 'shared/types/scroll';

const useScroll = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    currentPageY: 0,
    prevPageY: 0,
  });

  useEffect(() => {
    const handleScrollPage = () => {
      setScrollState((prev: ScrollState) => ({
        ...prev,
        prevPageY: prev.currentPageY,
        currentPageY: window.pageYOffset,
      }));
    };

    if (window) window.addEventListener('scroll', handleScrollPage);

    return () => {
      if (window) window.removeEventListener('scroll', handleScrollPage);
    };
  }, []);

  return scrollState;
};

export default useScroll;
