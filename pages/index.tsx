import Head from 'next/head';

import Landing from 'components/sections/home/landing.section';
import OurClient from 'components/sections/home/our-client.section';
import OurWorks from 'components/sections/home/our-work.section';
import ContactUsSection from 'components/sections/shared/contact-us.section';
import OurInsights from 'components/sections/shared/our-insight.section';
import OurServices from 'components/sections/shared/our-services.section';
import OurValues from 'components/sections/shared/our-value.section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flee Tech Industry</title>
        <meta
          name="description"
          content="Work together with us, Flee Tech. Improve your business with a world class technology. As a IT Consultant, we'll help you to win your business competition"
        />
        <link rel="preload" href="/images/video-callback.webp" as="image" />
        <meta property="og:title" content="Flee Tech Industry" />
        <meta
          property="og:description"
          content="Work together with us, Flee Tech. Improve your business with a world class technology. As a IT Consultant, we'll help you to win your business competition"
        />
      </Head>
      <div className="relative">
        <Landing />
        <div className="border border-grey divide-y divide-grey">
          <OurClient />
          <OurValues />
        </div>
        <OurServices />
        <div className="border-b-2 border-grey divide-y divide-grey">
          <OurWorks />
          <OurInsights />
          <ContactUsSection />
        </div>
      </div>
    </>
  );
}
