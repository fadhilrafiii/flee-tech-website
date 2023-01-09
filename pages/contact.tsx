import Head from 'next/head';

import ContactForm from 'components/sections/contact/contact-form.section';
import Landing from 'components/sections/contact/landing.section';
import OtherContact from 'components/sections/contact/other-contact.section';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Flee Tech</title>
        <meta name="description" content="Flee Tech | Create your own app" />
      </Head>
      <div className="relative">
        <Landing />
        <section
          id="contact-us-form"
          className="flex flex-wrap border-2 border-grey divide-y-2 divide-x-0 lg:divide-y-0 lg:divide-x-2 divide-grey"
        >
          <div className="flex-grow min-w-[318px] lg:min-w-[600px] px-5 md:px-10 pt-10 md:pt-20 pb-12 md:pb-20 lg:pb-24">
            <ContactForm />
          </div>
          <div className="flex-grow lg:flex-grow-0 lg:w-[40%] lg:max-w-[588px] px-5 md:px-16 pt-10 md:pt-20 pb-12 md:pb-20 lg:pb-24">
            <OtherContact />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
