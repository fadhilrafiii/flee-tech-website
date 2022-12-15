import Landing from "components/sections/home/landing.section";
import Head from "next/head";
import styles from "styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flee Tech</title>
        <meta name="description" content="Flee Tech | Create your own app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/images/video-callback.jpg" />
      </Head>
      <>
        <Landing />
      </>
    </div>
  );
}
