import Image, { StaticImageData } from 'next/image';
import { useContext, useMemo } from 'react';

import { Autoplay, FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import LinkButton from 'components/link-button';

import { Colors } from 'shared/constants/colors';
import WindowDimensionContext from 'shared/context/window-dimension.context';

import DummyInsightImg from 'public/images/dummy-insight.jpg';

interface OurInsight {
  date: string;
  title: string;
  href: string;
  image: StaticImageData;
}

const INSIGHTS: OurInsight[] = [
  {
    date: '12/12/2022',
    title: 'lorem ipsum dolor sit amet',
    href: '/',
    image: DummyInsightImg,
  },
  {
    date: '12/12/2022',
    title: 'lorem ipsum dolor sit amet',
    href: '/',
    image: DummyInsightImg,
  },
  {
    date: '12/12/2022',
    title: 'lorem ipsum dolor sit amet',
    href: '/',
    image: DummyInsightImg,
  },
];

const OurInsights = () => {
  const { width: clientWidth } = useContext(WindowDimensionContext);

  const swiperModules = useMemo(() => {
    if (clientWidth < 480) return [FreeMode, Autoplay, Pagination];
    else return [FreeMode, Autoplay];
  }, [clientWidth]);

  const paginationConfig = useMemo(() => {
    if (clientWidth < 480)
      return {
        clickable: true,
      };
  }, [clientWidth]);

  const slidesPerView = useMemo(() => {
    if (clientWidth >= 1024)
      return ((clientWidth > 1440 ? 1440 : clientWidth) - 380) / 439;
    else if (clientWidth >= 480) return (clientWidth - 80) / 372;
    else return 1;
  }, [clientWidth]);

  return (
    <section
      id="our-insight"
      className="px-8 lg:px-20 py-10 sm:py-[72px] overflow-hidden flex flex-wrap lg:flex-nowrap items-center justify-center gap-12 gap-y-8 md:gap-y-12"
    >
      <div className="lg:max-w-[300px]">
        <h3 className="text-center lg:text-left capitalize text-4xl md:text-6xl text-primary mb-2 sm:mb-6 !leading-snug">
          our recent insight
        </h3>
        <p className="text-center lg:text-left text-xs sm:text-base text-primary">
          Technology and Business Issues that Matters for Us All
        </p>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={clientWidth > 1024 ? 56 : 20}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={clientWidth < 480}
        freeMode={clientWidth >= 480}
        className="!p-2 !pb-16 sm:!pb-2 lg:!ml-10 max-w-[1080px] !m-0"
        pagination={paginationConfig}
        modules={swiperModules}
      >
        {INSIGHTS.map((ins: OurInsight, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden rounded-[11px] ring-1 ring-black relative mx-auto min-w-[240px] xs:min-w-[258px] sm:min-w-[320px] lg:min-w-[383px] max-w-[320px] sm:max-w-[340px] lg:max-w-[383px]">
              <div className="aspect-[9/5] w-full relative select-none">
                <Image
                  style={{
                    objectFit: 'cover',
                  }}
                  src={ins.image}
                  alt={ins.title}
                  fill
                />
              </div>
              <div className="flex flex-col item-start p-6 select-none">
                <span className="leading-loose text-grey text-xs">
                  {ins.date}
                </span>
                <h3 className="text-2xl xs:text-3xl lg:text-[40px] text-black capitalize !leading-snug mb-4">
                  {ins.title}
                </h3>
                <LinkButton
                  href={ins.href}
                  className="w-full !m-0 !max-w-none"
                  iconColor={Colors.Black}
                >
                  <span className="text-grey font-normal text-base">
                    Read More{' '}
                  </span>
                </LinkButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurInsights;
