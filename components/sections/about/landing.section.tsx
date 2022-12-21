import Image from 'next/image';

import SpaceImg from 'public/images/space.webp';

const Landing = () => {
  return (
    <section
      id="landing"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      <Image
        src={SpaceImg}
        alt="About Us | Flee Tech"
        fill
        className="absolute inset-0 -z-10"
        priority
      />
      <h1
        className={
          'text-white text-[2.75rem] sm:text-5xl lg:text-6xl sm:border-b sm:border-white-50 pb-5 mb-4 sm:mb-7 capitalize md:max-w-[758px] mx-auto text-center'
        }
        pb-12
      >
        we are flee tech
      </h1>
      <p className="capitalize text-white text-center text-2xl sm:text-[30px] max-w-[824px] mx-auto">
        we design and build custom solution for your business
      </p>
    </section>
  );
};

export default Landing;
