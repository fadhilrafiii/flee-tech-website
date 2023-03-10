import Link from 'next/link';

import styles from './shared-section.module.scss';

const ContactUsSection = () => {
  return (
    <section
      id="contact-us"
      className="px-11 sm:px-14 md:px-20 py-16 md:py-24 lg:py-36 flex flex-col justify-center items-center min-h-[60vh]"
    >
      <div className="flex flex-col justify-center items-center max-w-[812px]">
        <h2 className="text-center text-black text-2xl sm:text-3xl md:text-5xl !leading-snug">
          Ready to transform your business?
        </h2>
        <h2 className="text-center text-black-50 text-2xl sm:text-3xl md:text-5xl !leading-snug mb-5 sm:mb-10">
          Explore the faster way to get software done
        </h2>
        <Link
          href="/contact"
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
