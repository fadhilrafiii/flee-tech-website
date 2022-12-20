import Head from 'next/head';

import ContactUsSection from 'components/sections/home/contact-us.section';
import Landing from 'components/sections/home/landing.section';
import OurClient from 'components/sections/home/our-client.section';
import OurInsights from 'components/sections/home/our-insight.section';
import OurServices from 'components/sections/home/our-services.section';
import OurValues from 'components/sections/home/our-value.section';
import OurWorks from 'components/sections/home/our-work.section';

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
        <div className="border border-grey divide-y divide-grey">
          <OurClient />
          <OurValues />
        </div>
        <OurServices />
        <div className="border border-grey divide-y divide-grey">
          <OurWorks />
          <OurInsights />
          <ContactUsSection />
        </div>
      </div>
    </div>
  );
}
