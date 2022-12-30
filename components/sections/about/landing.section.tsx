import Image from 'next/image';

import SpaceImg from 'public/images/space.jpg';

const Landing = () => {
  return (
    <section
      id="landing"
      className="h-screen max-h-[992px] flex flex-col items-center justify-center relative px-6"
    >
      <Image
        src={SpaceImg}
        alt="About Us | Flee Tech"
        fill
        quality={100}
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      <h1
        className={
          'text-white text-5xl lg:text-6xl no-underline sm:underline underline-offset-[12px] sm:underline-offset-[24px] !leading-[1.2] sm:!leading-normal decoration-white-50 decoration-1 mb-4 sm:mb-7 capitalize md:max-w-[758px] mx-auto text-center'
        }
      >
        we are flee tech
      </h1>
      <p className="capitalize text-white text-center text-[18px] sm:text-[30px] max-w-[824px] mx-auto !leading-normal">
        we design and build custom solution for your business
      </p>
    </section>
  );
};

export default Landing;
