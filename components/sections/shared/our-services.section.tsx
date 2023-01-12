import Image, { StaticImageData } from 'next/image';
import React from 'react';

import LinkButton from 'components/link-button';

import { Colors } from 'shared/constants/colors';
import { DEVELOPMENT_CARDS } from 'shared/constants/developments';
import { Development } from 'shared/types/development';

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

const OurServices = () => {
  return (
    <section
      id="our-services"
      className="pt-14 bg-primary flex flex-col items-center"
    >
      <div className=" text-sm sm:text-base text-center uppercase text-white tracking-[2px] sm:tracking-[6px] px-6 mb-3">
        services
      </div>
      <h2 className="capitalize text-4xl md:text-6xl px-6 text-white mb-4 text-center !leading-snug">
        create custom solutions
      </h2>
      <p className="text-sm sm:text-base text-white text-center max-w-[800px] px-6">
        We believe that the power of design, creativity, and emotion helps
        businesses to involve people in their products and services, multiplying
        their consumer characteristics
      </p>
      <div className="divide-y divide-white-50 relative w-full overflow-hidden">
        <div className="py-12 mb-14 flex flex-col gap-5 sm:gap-10 overflow-hidden w-full">
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
          {DEVELOPMENT_CARDS.map(
            ({ Icon, ...dev }: Development, idx: number) => (
              <div
                key={idx}
                className="p-10 md:p-12 lg:p-16 md:px-8 lg:px-12 basis-1/3 flex flex-col items-center justify-between"
              >
                {Icon && (
                  <div className={'mb-6 sm:mb-11 ' + styles.serviceIcon}>
                    <Icon size={64} color={Colors.White} />
                  </div>
                )}
                <div>
                  <h3 className="font-medium text-2xl sm:text-3xl lg:text-[40px] !leading-snug text-white text-center capitalize mb-6">
                    {dev.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white text-center">
                    {dev.desc}
                  </p>
                </div>
                <LinkButton
                  href={dev.href}
                  className="!justify-center pt-9 !mb-0"
                >
                  {''}
                </LinkButton>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
