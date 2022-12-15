import "../styles/globals.scss";
import { Lora } from "@next/font/google";
import localFont from "@next/font/local";
import Navbar from "components/navbar";
import type { AppProps } from "next/app";

const LORA_FONT = Lora({
  subsets: ["latin"],
});

const SFPRO_FONT = localFont({ src: "../public/fonts/SF-Pro.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --primary-font: ${LORA_FONT.style.fontFamily};
            --secondary-font: ${SFPRO_FONT.style.fontFamily};
          }
        `}
      </style>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
