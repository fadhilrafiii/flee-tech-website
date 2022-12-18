import { createContext } from 'react';

import { ScrollState } from 'types/scroll';

const ScrollContext = createContext<ScrollState>({
  currentPageY: 0,
  prevPageY: 0,
});

export const ScrollContextProvider = ScrollContext.Provider;

export default ScrollContext;
