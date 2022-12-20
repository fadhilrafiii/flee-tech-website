import { useEffect, useState } from 'react';

import { WindowDimension } from 'shared/types/window';

const useWindowDimension = () => {
  const [windowDimension, setWindowDimension] = useState<WindowDimension>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleChangeWindowDimension = () => {
      if (window) {
        setWindowDimension({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }
    };

    handleChangeWindowDimension();
    if (window) window.addEventListener('resize', handleChangeWindowDimension);

    return () => {
      if (window)
        window.removeEventListener('resize', handleChangeWindowDimension);
    };
  }, []);

  return windowDimension;
};

export default useWindowDimension;
