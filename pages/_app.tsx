import type { AppProps } from 'next/app';

import { Inter, Lora } from '@next/font/google';
import { ScrollContextProvider } from 'context/scroll.context';
import useScroll from 'hooks/use-scroll';

import Navbar from 'components/navbar';

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

  return (
    <ScrollContextProvider value={scrollState}>
      <div className={`${LORA_FONT.variable} ${INTER_FONT.variable}`}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ScrollContextProvider>
  );
}
