import Image from 'next/image';

import FeatureWorkBanner from 'public/images/feature-work-banner.jpg';

const Landing = () => {
  return (
    <section
      id="landing"
      className="h-[90vh] max-h-[992px] flex flex-col items-center justify-center relative px-6 bg-black-50"
    >
      <Image
        src={FeatureWorkBanner}
        alt="Porfolio | Flee Tech"
        fill
        quality={100}
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      <h1
        className={
          'text-white text-5xl lg:text-6xl no-underline sm:underline sm:underline-offset-[24px] !leading-[1.2] sm:!leading-normal decoration-white-50 decoration-1 mb-5 sm:mb-7 capitalize md:max-w-[758px] mx-auto text-center'
        }
      >
        Featured Work
      </h1>
      <p className="capitalize text-white text-center text-[18px] sm:text-[30px] max-w-[824px] mx-auto !leading-normal">
        We’d like to feature all our project, but here are some that really show
        off what we do
      </p>
    </section>
  );
};

export default Landing;
