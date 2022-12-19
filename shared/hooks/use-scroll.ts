import { useEffect, useState } from 'react';

import { ScrollState } from 'types/scroll';

const useScroll = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    currentPageY: 0,
    prevPageY: 0,
    clientHeight: 0,
  });

  useEffect(() => {
    const setClientHeight = () => {
      setScrollState((prev: ScrollState) => ({
        ...prev,
        clientHeight: window.innerHeight,
      }));
    };

    setClientHeight();
  }, []);

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
