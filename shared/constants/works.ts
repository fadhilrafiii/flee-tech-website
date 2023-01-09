import { Work } from 'shared/types/work';

import AdeliaFrozenBannerImg from 'public/images/adelia-frozen-banner.jpg';
import AdeliaFrozenImg from 'public/images/adelia-frozen-img.jpg';
import JinxBoardBannerImg from 'public/images/jinx-board-banner.jpg';
import JinxBoardImg from 'public/images/jinx-board-img.jpg';
import MentorBannerImg from 'public/images/mentor-banner.jpg';
import MentorImg from 'public/images/mentor-img.jpg';
import PonpesAlhadiBannerImg from 'public/images/ponpes-alhadi-banner.jpg';
import PonpesAlhadiImg from 'public/images/ponpes-alhadi-img.jpg';

export const WORKS: Work[] = [
  {
    image: PonpesAlhadiImg,
    banner: PonpesAlhadiBannerImg,
    title: 'Al-Hadi Boarding School',
    subtitle: 'academic system web application',
    href: '/',
    details: [
      {
        align: 'ltr',
        image: {
          aspectRatio: '3/2',
          src: PonpesAlhadiImg,
        },
        content: {
          title: 'Integrated Academic System',
          paragraph: 'Shows the study results of students',
        },
      },
    ],
  },
  {
    image: AdeliaFrozenImg,
    banner: AdeliaFrozenBannerImg,
    title: 'Adelia Frozen Food',
    subtitle: 'E-commerce platform',
    href: '/',
  },
  {
    image: JinxBoardImg,
    banner: JinxBoardBannerImg,
    title: 'Jinx Board',
    subtitle: 'geothermal superapp dashboard',
    href: '/',
  },
  {
    image: MentorImg,
    banner: MentorBannerImg,
    title: 'Mentor - Mencari Tutor',
    subtitle: 'mobile app development',
    href: '/',
  },
];
