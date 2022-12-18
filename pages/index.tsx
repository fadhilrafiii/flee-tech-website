import Head from 'next/head';

import Landing from 'components/sections/home/landing.section';
import OurClient from 'components/sections/home/our-client.section';
import OurValue from 'components/sections/home/our-value.section';

import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flee Tech</title>
        <meta name="description" content="Flee Tech | Create your own app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/images/video-callback.webp" as="image" />
      </Head>
      <div className="relative">
        <Landing />
        <OurClient />
        <OurValue />
      </div>
    </div>
  );
}
