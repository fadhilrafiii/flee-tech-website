import DevicesOutlineIcon from 'components/icons/devices-outline';
import PencilRulerOutlineIcon from 'components/icons/pencil-ruler-outline';
import WebCodeOutlineIcon from 'components/icons/web-code-outline';

import { Development } from 'shared/types/development';

import MobileImg from 'public/images/mobile.jpeg';
import UIUXImg from 'public/images/uiux.jpeg';
import WebImg from 'public/images/web.jpeg';

export const DEVELOPMENT_CARDS: Development[] = [
  {
    title: 'UI / UX Design',
    Icon: PencilRulerOutlineIcon,
    desc: 'An approach to web and product design that focuses on creating designs that encourage users to take a desired action',
    href: '/development/uiux',
  },
  {
    title: 'web development',
    Icon: WebCodeOutlineIcon,
    desc: 'Creating custom websites that are designed to generate leads and increase sales.',
    href: '/development/web',
  },
  {
    title: 'app development',
    Icon: DevicesOutlineIcon,
    desc: 'Enhancing the flexibility and speed of your business operations through the use of scalable enterprise applications.',
    href: '/development/mobile',
  },
];

export const DEVELOPMENTS: Development[] = [
  {
    title: 'UI / UX Design',
    desc: 'An approach to web and product design that focuses on creating designs that encourage users to take a desired action',
    href: 'uiux',
    banner: UIUXImg,
    headerText:
      "Are you looking to improve the user experience of your company's products or services? we offer top-notch UX design services to help your business succeed.",
    keyPoints: [
      {
        Icon: 'HandsOutlineIcon',
        text: "understand your users' needs, goals, and behaviors",
      },
      {
        Icon: 'ShapesOutlineIcon',
        text: 'enhancing experience with intuitive and user-friendly designs',
      },
      {
        Icon: 'OneHandOutlineIcon',
        text: 'user-centered and data-driven design',
      },
    ],
    footerText:
      "Ready to take your user experience to the next level? check out our portfolio to see some of the impressive projects we've completed for our clients, and see the tangible results they've achieved through our UX design services",
  },
  {
    title: 'web development',
    desc: 'Creating custom websites that are designed to generate leads and increase sales.',
    href: 'web',
    banner: WebImg,
    headerText:
      'The World always growing in digital era, Would you rather stay still? We can help you bring the digital world, starts from the website. Our web development services include:',
    keyPoints: [
      {
        Icon: 'GadgetOutlineIcon',
        text: 'Custom website design and development with responsive design',
      },
      {
        Icon: 'CombineOutlineIcon',
        text: 'Integration with third-party systems and APIs services',
      },
      {
        Icon: 'CopyOutlineIcon',
        text: 'Content management system (CMS) integration',
      },
    ],
  },
  {
    title: 'app development',
    desc: 'Enhancing the flexibility and speed of your business operations through the use of scalable enterprise applications.',
    href: 'mobile',
    banner: MobileImg,
    headerText:
      'With our app development services, you can bring your idea to life on mobile devices. We offer:',
    keyPoints: [
      {
        Icon: 'AnimationOutlineIcon',
        text: 'Native app development for iOS and Android',
      },
      {
        Icon: 'CompareArrowsOutlineIcon',
        text: 'Cross-platform app development using tools like React Native',
      },
      {
        Icon: 'StorefrontOutlineIcon',
        text: 'app Testing and deployment on the App Store and Google Play',
      },
    ],
    footerText:
      'Whatever your needs, our team has the skills and expertise to deliver top-quality solutions that meet your business goals. Contact us today to request a quote and learn more about how our web and app development services can benefit your business.',
  },
];
