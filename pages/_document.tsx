import { AppType } from "next/dist/shared/lib/utils";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import * as React from "react";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link rel="preload" href="/fonts/SF-Pro.ttf" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Lora&display=swap"
          as="style"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: AppType) => App,
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
  };
};

export default MyDocument;
