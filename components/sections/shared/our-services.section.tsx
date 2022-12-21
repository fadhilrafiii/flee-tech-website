import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

import DevicesOutlineIcon from 'components/icons/devices-outline';
import PencilRulerOutlineIcon from 'components/icons/pencil-ruler-outline';
import { IconProps } from 'components/icons/utils';
import WebCodeOutlineIcon from 'components/icons/web-code-outline';
import LinkButton from 'components/link-button';

import { Colors } from 'shared/constants/colors';

import styles from './shared-section.module.scss';

import DailyAppImg from 'public/images/daily-app.jpg';
import ImbdLikeImg from 'public/images/imbd-like.jpg';
import JinxBoardImg from 'public/images/jinx-board.jpg';
import Mentor2Img from 'public/images/mentor-2.jpg';
import Mentor3Img from 'public/images/mentor-3.jpg';
import PonpesAlhadiImg from 'public/images/ponpes-alhadi.jpg';
import UUImg from 'public/images/uu-app.jpg';
import WebsiteTemplateImg from 'public/images/website-template.jpg';

interface ProjectImage {
  src: StaticImageData;
  alt: string;
}

const PROJECT_IMAGES_FIRST_ROW: ProjectImage[] = [
  {
    src: DailyAppImg,
    alt: 'Daily App Project',
  },
  {
    src: ImbdLikeImg,
    alt: 'IMDB Like Project',
  },
  {
    src: JinxBoardImg,
    alt: 'Jinx Geothermal Dashboard Project',
  },
  {
    src: PonpesAlhadiImg,
    alt: 'Ponpes Alhadi Project',
  },
  {
    src: DailyAppImg,
    alt: 'Daily App Project 2',
  },
  {
    src: ImbdLikeImg,
    alt: 'IMDB Like Project 2',
  },
];

const PROJECT_IMAGES_SECOND_ROW: ProjectImage[] = [
  {
    src: WebsiteTemplateImg,
    alt: 'Instant Website Template Project',
  },
  {
    src: UUImg,
    alt: 'Undang Undang Project',
  },
  {
    src: Mentor2Img,
    alt: 'Mentor 2 Project',
  },
  {
    src: Mentor3Img,
    alt: 'Mentor 3 Project',
  },
  {
    src: WebsiteTemplateImg,
    alt: 'Instant Website Template Project 2',
  },
  {
    src: UUImg,
    alt: 'Undang Undang Project 2',
  },
];

interface OurService {
  Icon: FC<IconProps>;
  title: string;
  body: string;
  href: string;
}

const SERVICES: OurService[] = [
  {
    Icon: PencilRulerOutlineIcon,
    title: 'UI/UX design',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    href: '/',
  },
  {
    Icon: WebCodeOutlineIcon,
    title: 'Web Development',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    href: '/',
  },
  {
    Icon: DevicesOutlineIcon,
    title: 'App Development',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    href: '/',
  },
];

const OurServices = () => {
  return (
    <section
      id="our-services"
      className="pt-14 bg-primary flex flex-col items-center"
    >
      <div className=" text-sm sm:text-xl text-center uppercase text-white-75 tracking-[2px] sm:tracking-[6px] px-6 mb-3">
        services
      </div>
      <h2 className="capitalize text-4xl md:text-6xl px-6 text-white mb-4 text-center">
        create custom solutions
      </h2>
      <p className="text-sm sm:text-base text-white text-center max-w-[632px] px-6">
        We understand your unique problem need a unique solution, we deliver the
        best solution that solving your specific problem
      </p>
      <div className="divide-y divide-white-50 relative w-full overflow-hidden">
        <div className="py-10 mb-14 flex flex-col gap-5 sm:gap-10 overflow-hidden w-full">
          <div className="w-full relative">
            <div
              className={'flex gap-5 sm:gap-10 ' + styles.projectScrollLeft1}
            >
              {PROJECT_IMAGES_FIRST_ROW.map((img: ProjectImage) => (
                <div
                  key={img.alt}
                  className="w-[200px] sm:w-[450px] h-[100px] sm:h-[225px] flex-shrink-0  relative"
                >
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt}
                    placeholder="blur"
                    quality={100}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <div
              className={'flex gap-5 sm:gap-10 ' + styles.projectScrollLeft2}
            >
              {PROJECT_IMAGES_FIRST_ROW.map((img: ProjectImage) => (
                <div
                  key={img.alt}
                  className="w-[200px] sm:w-[450px] h-[100px] sm:h-[225px] flex-shrink-0  relative"
                >
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt}
                    placeholder="blur"
                    quality={100}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative">
            <div
              className={'flex gap-5 sm:gap-10 ' + styles.projectScrollRight1}
            >
              {PROJECT_IMAGES_SECOND_ROW.map((img: ProjectImage) => (
                <div
                  key={img.alt}
                  className="w-[200px] sm:w-[450px] h-[100px] sm:h-[225px] flex-shrink-0  relative"
                >
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt}
                    placeholder="blur"
                    quality={100}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <div
              className={'flex gap-5 sm:gap-10 ' + styles.projectScrollRight2}
            >
              {PROJECT_IMAGES_SECOND_ROW.map((img: ProjectImage) => (
                <div
                  key={img.alt}
                  className="w-[200px] sm:w-[450px] h-[100px] sm:h-[225px] flex-shrink-0  relative"
                >
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt}
                    placeholder="blur"
                    quality={100}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white-50 bg-primary">
          {SERVICES.map(({ Icon, ...service }: OurService, idx: number) => (
            <div
              key={idx}
              className="py-10 sm:py-16 lg:py-20 px-10 md:px-8 lg:px-12 basis-1/3 flex flex-col items-center justify-between"
            >
              <div className={'mb-6 sm:mb-11 ' + styles.serviceIcon}>
                <Icon size={64} color={Colors.White} />
              </div>
              <div>
                <h3 className="font-medium text-2xl sm:text-3xl lg:text-[40px] !leading-snug text-white text-center capitalize mb-6">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-white text-center">
                  {service.body}
                </p>
              </div>
              <LinkButton
                href={service.href}
                className="!justify-center pt-9 !mb-0"
              >
                {''}
              </LinkButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
