import type { AppProps } from 'next/app';

import { Inter, Lora } from '@next/font/google';

import Footer from 'components/footer';
import Navbar from 'components/navbar';

import { ScrollContextProvider } from 'shared/context/scroll.context';
import { WindowDimensionContextProvider } from 'shared/context/window-dimension.context';
import useScroll from 'shared/hooks/use-scroll';
import useWindowDimension from 'shared/hooks/use-window-dimension';

import '../styles/globals.scss';

const LORA_FONT = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--primary-font',
  preload: true,
  display: 'swap',
});

const INTER_FONT = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--secondary-font',
  preload: true,
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const scrollState = useScroll();
  const windowDimension = useWindowDimension();

  return (
    <WindowDimensionContextProvider value={windowDimension}>
      <ScrollContextProvider value={scrollState}>
        <div className={`${LORA_FONT.variable} ${INTER_FONT.variable}`}>
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ScrollContextProvider>
    </WindowDimensionContextProvider>
  );
}
