import Link from 'next/link';

import styles from './home.module.scss';

const ContactUsSection = () => {
  return (
    <section
      id="contact-us"
      className="px-14 md:px-20 py-10 md:py-20 flex flex-col justify-center items-center min-h-[64vh]"
    >
      <div className="flex flex-col justify-center items-center max-w-[812px]">
        <h2 className="text-center text-black capitalize text-2xl sm:text-5xl !leading-snug">
          Ready to transform your business?
        </h2>
        <h2 className="text-center text-black-50 capitalize text-2xl sm:text-5xl !leading-snug mb-5 sm:mb-10">
          Explore the faster way to get software done
        </h2>
        <Link
          href="/"
          className={
            'rounded-[24.5px] font-bold capitalize bg-gradient-to-t from-black to-dark-grey text-white text-xs sm:text-2xl py-[6px] sm:py-[10px] px-6 sm:px-11 ring-1 ring-black ' +
            styles.buttonShadow
          }
        >
          contact us
        </Link>
      </div>
    </section>
  );
};

export default ContactUsSection;
