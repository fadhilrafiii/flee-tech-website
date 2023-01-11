import { Colors } from 'shared/constants/colors';
import { Work } from 'shared/types/work';

import AdeliaFrozenBannerImg from 'public/images/adelia-frozen-banner.jpg';
import AdeliaFrozenImg2 from 'public/images/adelia-frozen-img-2.jpg';
import AdeliaFrozenImg3 from 'public/images/adelia-frozen-img-3.jpg';
import AdeliaFrozenImg4 from 'public/images/adelia-frozen-img-4.jpg';
import AdeliaFrozenImg from 'public/images/adelia-frozen-img.jpg';
import JinxBoardBannerImg from 'public/images/jinx-board-banner.jpg';
import JinxBoardImg1 from 'public/images/jinx-board-img-1.jpg';
import JinxBoardImg2 from 'public/images/jinx-board-img-2.jpg';
import JinxBoardImg3 from 'public/images/jinx-board-img-3.jpg';
import JinxBoardImg from 'public/images/jinx-board-img.jpg';
import MentorBannerImg from 'public/images/mentor-banner.jpg';
import MentorImg1 from 'public/images/mentor-img-1.jpg';
import MentorImg2 from 'public/images/mentor-img-2.jpg';
import MentorImg from 'public/images/mentor-img.jpg';
import PonpesAlhadiBannerImg from 'public/images/ponpes-alhadi-banner.jpg';
import PonpesAlhadiImg2 from 'public/images/ponpes-alhadi-img-2.jpg';
import PonpesAlhadiImg3 from 'public/images/ponpes-alhadi-img-3.jpg';
import PonpesAlhadiImg from 'public/images/ponpes-alhadi-img.jpg';

export const WORKS: Work[] = [
  {
    image: PonpesAlhadiImg,
    banner: PonpesAlhadiBannerImg,
    title: 'Al-Hadi Boarding School',
    subtitle: 'academic system web application',
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
      {
        align: 'rtl',
        image: {
          aspectRatio: '3/2',
          src: PonpesAlhadiImg2,
        },
        content: {
          title: 'Teachers can input Grades for the subjects taught',
        },
      },
      {
        align: 'ltr',
        image: {
          aspectRatio: '3/2',
          src: PonpesAlhadiImg3,
        },
        content: {
          title:
            'Students can see the progress of their studies during the lessons taken',
          paragraph:
            'In addition, the transcripts of the grades for each subject can also be seen',
        },
      },
      {
        align: 'highlight',
        highlightedColor: Colors.GreenPonpes,
        content: {
          title:
            'Al-Hadi Islamic Boarding School needs a more efficient and effective way to show the results of their students’ studies to their parents',
          paragraph:
            'To help achieve this goal, we propose a website-based platform that is integrated exclusively between teachers and students for the Al Hadi Islamic Boarding School',
        },
      },
    ],
    client: 'Al-Hadi Islamic Boarding School',
    url: 'https://alhadi.ponpes.id',
  },
  {
    image: AdeliaFrozenImg,
    banner: AdeliaFrozenBannerImg,
    title: 'Adelia Frozen Food',
    subtitle: 'E-commerce platform',
    details: [
      {
        align: 'ltr',
        image: {
          aspectRatio: '3/2',
          src: AdeliaFrozenImg,
        },
        content: {
          title: 'Changing the Face of Adelia Frozen Food',
          paragraph:
            'A full e-commerce site for the local frozen food brand, Adelia Frozen Food. As a first step towards becoming a global frozen food brand, we propose to build an online presence reflective of the quality brand',
        },
      },
      {
        align: 'rtl',
        image: {
          aspectRatio: '3/2',
          src: AdeliaFrozenImg2,
        },
        content: {
          title: 'Easy access, All your orders in one place',
          paragraph:
            'Selling online is made easier through an integrated e-commerce platform with advanced and reliable features',
        },
      },
      {
        align: 'ltr',
        image: {
          aspectRatio: '3/2',
          src: AdeliaFrozenImg3,
        },
        content: {
          title: 'Excellent Choice',
          paragraph:
            'When there’s so much choice frozen food, where do you even begin? Adelia Frozen Food sticky filters are designed for both the new and seasoned customer',
        },
      },
      {
        align: 'rtl',
        image: {
          aspectRatio: '3/2',
          src: AdeliaFrozenImg4,
        },
        content: {
          title: 'Out of sight, but on your mind',
          paragraph:
            'We make integrated systems for customer want to buy via WA',
        },
      },
    ],
    client: 'Adelia Frozen Food',
    url: 'https://adeliafrozen.com',
  },
  {
    image: JinxBoardImg,
    banner: JinxBoardBannerImg,
    title: 'Jinx Board',
    subtitle: 'geothermal superapp dashboard',
    details: [
      {
        align: 'ltr',
        image: {
          aspectRatio: '3/2',
          src: JinxBoardImg1,
        },
        content: {
          title: 'One Stop Solution',
          paragraph:
            'For optimizing operational efficiency and ensuring safe operations in Geothermal',
        },
      },
      {
        align: 'rtl',
        image: {
          aspectRatio: '3/2',
          src: JinxBoardImg2,
        },
        content: {
          title: 'JinXPro integrated system with other Apps',
          paragraph:
            'The client-side application called JinXBoard which will display data, inform problem, giving insight, also providing other interaction in scope of the three topics supported by this apps',
        },
      },
      {
        align: 'ltr',
        image: {
          aspectRatio: '3/2',
          src: JinxBoardImg3,
        },
        content: {
          title: 'Why Jinx Board?',
          paragraph:
            'Our goals is to get more efficient data collecting, smarter interpretation, swiffer decision making, and optimized operation',
        },
      },
    ],
    client: 'Schlumberger',
    url: 'http://jinxpro-board.surge.sh/',
  },
  {
    image: MentorImg,
    banner: MentorBannerImg,
    title: 'Mentor - Mencari Tutor',
    subtitle: 'mobile app development',
    href: '/',
    details: [
      {
        align: 'ltr',
        image: {
          aspectRatio: '3/2',
          src: MentorImg1,
        },
        content: {
          title: 'Finding tutor with ease',
          paragraph:
            'Marketplace for tutors, freelancer educator, and the general public',
        },
      },
      {
        align: 'rtl',
        image: {
          aspectRatio: '3/2',
          src: MentorImg2,
        },
        content: {
          title: 'education presence in one place',
          paragraph:
            'Mentor is a mobile-based application that can present a marketplace for tutors, freelancers, as well as fresh graduates and the general public. The desired end users of this system are parents, high school students and graduates, and tutors such as tutors, freelancers, and fresh graduates who have the ability in education such as teaching to be able to provide tutorials on solving a problem in a problem.',
        },
      },
    ],
    client: 'Mentor',
    url: 'https://play.google.com/store/apps/details?id=com.mider.mentor',
  },
];
