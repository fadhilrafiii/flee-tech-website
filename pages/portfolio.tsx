import Head from 'next/head';

import Landing from 'components/sections/portfolio/landing.section';
import WorkSection from 'components/sections/portfolio/work.section';
import ContactUsSection from 'components/sections/shared/contact-us.section';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Our Portfolio | Flee Tech</title>
        <meta name="description" content="Flee Tech | Create your own app" />
      </Head>
      <div className="relative">
        <Landing />
        <div className="border-b-2 border-grey divide-y divide-grey">
          <WorkSection />
          <ContactUsSection />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
