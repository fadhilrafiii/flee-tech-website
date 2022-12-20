import { createContext } from 'react';

import { WindowDimension } from 'shared/types/window';

const WindowDimensionContext = createContext<WindowDimension>({
  height: 0,
  width: 0,
});

export const WindowDimensionContextProvider = WindowDimensionContext.Provider;

export default WindowDimensionContext;
