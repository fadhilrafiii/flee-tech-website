import { useContext, useMemo } from 'react';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import WorkCard from 'components/work-card';

import WindowDimensionContext from 'shared/context/window-dimension.context';
import { WorkCardType } from 'shared/types/work';

import SpaceImage from 'public/images/space.jpg';

const WORKS: WorkCardType[] = [
  {
    image: SpaceImage,
    title: 'Al-Hadi Boarding School',
    subtitle: 'academic system web application',
    href: '/',
  },
  {
    image: SpaceImage,
    title: 'instant web template',
    subtitle: 'websites for various industry',
    href: '/',
  },
  {
    image: SpaceImage,
    title: 'Jinx Board',
    subtitle: 'geothermal superapp dashboard',
    href: '/',
  },
  {
    image: SpaceImage,
    title: 'Mentor - mencari tutor',
    subtitle: 'mobile app development',
    href: '/',
  },
];

const OurWorks = () => {
  const { height: isWindowReady } = useContext(WindowDimensionContext);

  const workSwiperBreakpoints = useMemo(
    () => ({
      480: {
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 44,
      },
      1720: {
        slidesPerView: 3,
      },
    }),
    [],
  );

  if (!isWindowReady) return null;

  return (
    <section
      id="our-work"
      className="py-12 md:py-20 px-8 lg:px-12 flex flex-col items-center justify-center"
    >
      <div className="text-center text-sm sm:text-xl uppercase text-primary tracking-[2px] sm:tracking-[6px] px-6 mb-3">
        work / review
      </div>
      <h2 className="text-primary text-4xl md:text-6xl mb-4 text-center capitalize">
        Lorem Ipsum
      </h2>
      <p className="text-base text-primary text-center mb-9">
        Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since
        the 1500s
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop
        loopFillGroupWithBlank
        pagination
        className="!p-2 !pb-16 w-full max-w-[1650px] !m-0"
        modules={[Autoplay, Pagination]}
        breakpoints={workSwiperBreakpoints}
      >
        {WORKS.map((work: WorkCardType, idx: number) => (
          <SwiperSlide key={idx}>
            <WorkCard
              title={work.title}
              subtitle={work.subtitle}
              image={work.image}
              href={work.href}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurWorks;
