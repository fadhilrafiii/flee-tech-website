import { useContext } from 'react';

import ArrowDownIcon from 'components/icons/arrow-down';
import LinkButton from 'components/link-button';

import WindowDimensionContext from 'shared/context/window-dimension.context';

import styles from './home.module.scss';

interface LandingMenu {
  title: string;
  linkText: string;
  href: string;
  body: string;
}

const LANDING_MENUS: LandingMenu[] = [
  {
    title:
      'Expanding into new markets through the use of innovative solutions.',
    linkText: 'Product Development',
    href: '/',
    body: 'Utilizing our expertise in application development to create new products',
  },
  {
    title: 'Generating demand quickly by establishing a strong brand identity',
    linkText: 'Digital Strategy',
    href: '/',
    body: 'Using our expertise in web design and development to implement digital brand strategy',
  },
  {
    title: 'Improving lead generation by creating more effective sales funnels',
    linkText: 'Software Development',
    href: '/',
    body: 'Improving the agility of your business through the use of scalable enterprise applicationss',
  },
];

const Landing = () => {
  const { height: clientHeight } = useContext(WindowDimensionContext);

  const scrollAfterLandingSection = () => {
    window.scrollTo({ top: clientHeight });
  };

  return (
    <section
      id="landing"
      className="relative flex flex-col w-full min-h-screen justify-center items-center"
    >
      <div className="h-100-parent">
        <video
          poster="/images/video-callback.webp"
          className="h-full w-full object-cover"
          loop
          autoPlay
          playsInline
          preload="metadata"
          muted
        >
          <source src="videos/landing.mp4#t=0.2" type="video/mp4" />
          Your browser does not support video
        </video>
      </div>
      <div className="h-100-parent bg-black bg-opacity-30" />
      <div className="relative w-full p-11 lg:p-10 flex-grow flex flex-col justify-center items-center lg:items-start min-h-[60vh]">
        <h1
          className={
            'text-white text-4xl xs:text-[2.75rem] sm:text-5xl lg:text-6xl text-center lg:text-left capitalize md:max-w-[758px] my-auto md:pt-[86px] pb-12 md:pb-0 ' +
            styles.landingHeading
          }
        >
          We solve problem for designing & developing software to increase your
          business value
        </h1>
      </div>
      <div className="relative hidden md:flex flex-wrap z-10 border border-white-50">
        <div
          className={
            'flex-grow p-10 blur-12-white-10 basis-[40%] min-w-[360px] lg:min-w-[450px] w-full ' +
            styles.landingBigBoxMenu
          }
        >
          <h3 className="text-white text-3xl mb-14 font-secondary">
            Which business outcomes are you seeking to achieve?
          </h3>
          <LinkButton className="capitalize" href="/portfolio">
            Explore our services
          </LinkButton>
        </div>
        <div className="flex-grow flex flex-col basis-[60%] w-full divide-y divide-white-50">
          <div className="flex blur-12-white-10 divide-x divide-white-50">
            {LANDING_MENUS.map((menu: LandingMenu, idx: number) => (
              <div key={idx} className="flex flex-col min-w-[220px] basis-1/3">
                <div className="flex-grow p-5 text-white text-[18px] font-medium">
                  {menu.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex blur-5-white-10 divide-x divide-white-50 basis-1/3">
            {LANDING_MENUS.map((menu: LandingMenu, idx: number) => (
              <div key={idx} className="basis-1/3 p-5 text-white text-2xl">
                <LinkButton
                  href="/contact"
                  className="mb-3 text-2xl !items-start"
                >
                  {menu.linkText}
                </LinkButton>
                <div className="text-[18px] font-medium !leading-normal">
                  {menu.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span
        className="inset-x-center bottom-14 m-auto inline-block md:hidden p-4"
        role="button"
        onClick={scrollAfterLandingSection}
      >
        <ArrowDownIcon size={24} />
      </span>
    </section>
  );
};

export default Landing;
