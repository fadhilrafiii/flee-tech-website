import Image, { StaticImageData } from 'next/image';
import { useContext, useMemo } from 'react';

import { Colors } from 'shared/constants/colors';
import WindowDimensionContext from 'shared/context/window-dimension.context';
import { FreeMode } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import LinkButton from 'components/link-button';

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

  const slidesPerView = useMemo(() => {
    // > 1440 => 2.5
    if (clientWidth >= 1024)
      return ((clientWidth > 1440 ? 1440 : clientWidth) - 360) / 439;
    else if (clientWidth >= 480) return (clientWidth - 80) / 372;
    else return 1;
  }, [clientWidth]);

  return (
    <section
      id="our-insight"
      className="px-5 sm:px-10 lg:px-20 py-[72px] overflow-hidden flex flex-wrap lg:flex-nowrap items-center justify-center gap-14"
    >
      <div className="lg:max-w-[260px]">
        <h3 className="text-center lg:text-left capitalize text-4xl md:text-6xl text-primary mb-6 !leading-tight">
          our recent insight
        </h3>
        <p className="text-center lg:text-left text-base text-primary">
          Technology and Business Issues that Matters for Us All
        </p>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={clientWidth > 1024 ? 56 : 20}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={clientWidth < 480}
        freeMode={clientWidth >= 480}
        className="!p-2 lg:!pl-10 max-w-[1080px] !m-0"
        modules={[FreeMode]}
      >
        {INSIGHTS.map((ins: OurInsight, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden rounded-[11px] ring-1 ring-black relative mx-auto min-w-[320px] sm:min-w-[340px] lg:min-w-[383px] max-w-[320px] sm:max-w-[340px] lg:max-w-[383px]">
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
                <h3 className="text-3xl lg:text-[40px] text-black capitalize !leading-snug mb-4">
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
