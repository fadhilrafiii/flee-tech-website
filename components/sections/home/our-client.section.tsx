import Image from 'next/image';

import AdeliaLogoImg from 'public/images/adelia-logo-bw.png';
import PonpesAlhadiLogoImg from 'public/images/ponpes-alhadi-logo-bw.png';

const OurClient = () => {
  return (
    <section
      id="our-client"
      className="flex items-center gap-y-8 md:gap-y-10 gap-x-16 lg:gap-x-20 py-8 sm:py-11 px-8 sm:px-14 flex-wrap"
    >
      <h3 className="text-2xl md:text-4xl font-medium font-secondary min-w-fit">
        They Used Our Service
      </h3>
      <div className="relative flex-grow">
        <div className="flex justify-startflex-wrap md:flex-nowrap -mx-4 md:-mx-12">
          <div className="text-3xl text-center basis-1/4 px-4 md:px-12 flex-grow-0 flex items-center justify-center">
            <Image
              src={PonpesAlhadiLogoImg}
              alt="Pondok Pesantren Al Hadi"
              className="w-full min-w-[40px] md:min-w-[64px]"
            />
          </div>
          <div className="text-3xl text-center basis-1/4 px-4 md:px-12 flex-grow-0 flex items-center justify-center">
            <Image
              src={AdeliaLogoImg}
              alt="Adelia Frozen Food"
              className="w-full min-w-[40px] md:min-w-[64px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
