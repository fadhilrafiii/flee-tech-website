import { useContext, useMemo } from 'react';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import WorkCard from 'components/work-card';

import { WORKS as _WORKS } from 'shared/constants/works';
import WindowDimensionContext from 'shared/context/window-dimension.context';
import { Work } from 'shared/types/work';

const WORKS = _WORKS.filter(
  (work: Work) => work.title !== 'Adelia Frozen Food',
);

interface OurWorksProps {
  inWorkPage?: boolean;
  works?: Work[];
}

const OurWorks = ({ inWorkPage, works = WORKS }: OurWorksProps) => {
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
      className="py-12 md:py-20 px-2 sm:px-8 lg:px-12 flex flex-col items-center justify-center"
    >
      <div className="px-4 sm:px-0">
        <div className="text-center text-sm sm:text-base uppercase text-primary tracking-[2px] sm:tracking-[6px] px-6 mb-3">
          work / review
        </div>
        <h2 className="text-primary text-4xl md:text-6xl mb-4 text-center capitalize !leading-snug">
          {inWorkPage ? 'another' : 'the'} highlight
        </h2>
        <p className="text-xs md:text-base text-primary text-center mb-9 max-w-[826px]">
          We help our enterprise clients drive business value through the use of
          cutting-edge technology. Explore our work to see how technology can
          help transform your business
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 1500,
        }}
        loop
        loopFillGroupWithBlank
        pagination
        className="!p-2 !pb-16 w-full max-w-[1650px] !m-0"
        modules={[Autoplay, Pagination]}
        breakpoints={workSwiperBreakpoints}
      >
        {works.map((work: Work, idx: number) => (
          <SwiperSlide key={idx}>
            <WorkCard work={work} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurWorks;
