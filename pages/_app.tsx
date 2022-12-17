import type { AppProps } from 'next/app';

import { Lora } from '@next/font/google';
import localFont from '@next/font/local';

import Navbar from 'components/navbar';

import '../styles/globals.scss';

const LORA_FONT = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--primary-font',
  preload: true,
  display: 'swap',
});

const SFPRO_FONT = localFont({
  src: '../public/fonts/SF-Pro.ttf',
  variable: '--secondary-font',
  preload: true,
  fallback: ['Arial'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${LORA_FONT.variable} ${SFPRO_FONT.variable}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
