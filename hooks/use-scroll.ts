import { useEffect, useState } from 'react';

import { ScrollState } from 'types/scroll';

const useScroll = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    currentPageY: 0,
    prevPageY: 0,
  });

  const handleScrollPage = () => {
    setScrollState((prev: ScrollState) => ({
      prevPageY: prev.currentPageY,
      currentPageY: window.pageYOffset,
    }));
  };

  useEffect(() => {
    if (window) window.addEventListener('scroll', handleScrollPage);

    return () => {
      if (window) window.removeEventListener('scroll', handleScrollPage);
    };
  }, []);

  return scrollState;
};

export default useScroll;
