import Head from 'next/head';

import Landing from 'components/sections/about/landing.section';
import ContactUsSection from 'components/sections/shared/contact-us.section';
import OurServices from 'components/sections/shared/our-services.section';
import OurValues from 'components/sections/shared/our-value.section';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Flee Tech</title>
        <meta name="description" content="Flee Tech | Create your own app" />
      </Head>
      <div className="relative">
        <Landing />
        <OurValues forAboutPage />
        <OurServices />
        <div className="border-b-2 border-grey">
          <ContactUsSection />
        </div>
        {/* <div className="border border-grey divide-y divide-grey">
      <OurClient />
      <OurValues />
    </div>
    <OurServices />
      <OurWorks />
      <OurInsights />
      <ContactUsSection />
    </div> */}
      </div>
    </>
  );
};

export default AboutUs;
