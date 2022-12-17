import ArrowDownIcon from 'components/icons/arrow-down';
import LinkButton from 'components/link-button';

import styles from './home.module.scss';

interface LandingMenu {
  title: string;
  linkText: string;
  href: string;
  body: string;
}

const LANDING_MENUS: LandingMenu[] = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    linkText: 'Lorem ipsum dolor',
    href: '/',
    body: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    linkText: 'Lorem ipsum dolor',
    href: '/',
    body: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    linkText: 'Lorem ipsum dolor',
    href: '/',
    body: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus',
  },
];

const Landing = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen justify-center items-center">
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
            'text-white text-[2.75rem] sm:text-5xl lg:text-6xl text-center lg:text-left capitalize md:max-w-[758px] my-auto md:pt-[86px] ' +
            styles.landingHeading
          }
        >
          We solve problem for design & develop software to increase your
          business value
        </h1>
      </div>
      <div className="relative hidden md:flex flex-wrap z-10">
        <div className="flex-grow p-10 blur-22-white-10 basis-[40%] min-w-[360px] lg:min-w-[450px] w-full">
          <h3 className="text-white text-3xl mb-14">
            Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus ut
            morbi egestas.
          </h3>
          <LinkButton href="/">Lorem ipsum dolor</LinkButton>
        </div>
        <div className="flex-grow flex basis-[60%] w-full">
          {LANDING_MENUS.map((menu: LandingMenu, idx: number) => (
            <div key={idx} className="flex flex-col min-w-[220px]">
              <div className="flex-grow p-5 blur-22-white-10 text-white text-2xl">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div className="p-5 text-white text-2xl blur-5-white-10">
                <LinkButton href="/" className="mb-4">
                  Lorem ipsum dolor
                </LinkButton>
                <div>
                  Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus{' '}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="inset-x-center bottom-0 m-auto inline-block md:hidden p-4">
        <ArrowDownIcon size={24} />
      </span>
    </div>
  );
};

export default Landing;
