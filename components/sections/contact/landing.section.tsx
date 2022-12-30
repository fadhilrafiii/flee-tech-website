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
          'text-white text-5xl lg:text-6xl no-underline sm:underline underline-offset-[12px] sm:underline-offset-[24px] !leading-normal decoration-white-50 decoration-1 mb-4 sm:mb-7 capitalize md:max-w-[1125px] mx-auto text-left sm:text-center'
        }
      >
        we’d love to work with you
      </h1>
      <p className="capitalize text-white text-left sm:text-center text-[18px] sm:text-[30px] max-w-[824px] mr-auto sm:mx-auto !leading-normal">
        We’ve worked with clients of all sizes, from startups to enterprise
        brands. Let’s talk about your project and how we can help provide value
      </p>
    </section>
  );
};

export default Landing;
