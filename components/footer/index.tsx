import Link from 'next/link';

// import FacebookOutlineIcon from 'components/icons/facebook-outline';
import InstagramOutlineIcon from 'components/icons/instagram-outline';
import LinkedinOutlineIcon from 'components/icons/linkedin-outline';
import LogoIcon from 'components/icons/logo';
import WhatsappOutlineIcon from 'components/icons/whatsapp-outline';

import { Colors } from 'shared/constants/colors';

import {
  ABOUT_US_LINKS,
  FooterLink,
  TECHNOLOGY_LINKS_1,
  TECHNOLOGY_LINKS_2,
} from './constants';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className="px-6 sm:px-10 pt-6 md:pt-16 pb-3 md:pb-7 flex flex-col overflow-hidden">
      <div className="flex flex-wrap pb-6 md:pb-12">
        <div className="basis-1/2 flex-grow">
          <div
            className={
              'flex gap-3 items-center z-10 mb-6 md:mb-16 ' + styles.logo
            }
          >
            <LogoIcon size={36} color={Colors.Primary} />
            <span
              role="button"
              aria-label="Flee Tech"
              className="text-primary text-xl md:text-3xl"
            >
              Flee Tech
            </span>
          </div>
          <h4 className="capitalize text-xl sm:text-2xl md:text-4xl text-primary max-w-[400px] w-full pr-8 pb-4 md:pb-12">
            We solve problem for design & develop software to increase your
            business value
          </h4>
        </div>
        <div className="flex basis-1/2 pt-4 flex-grow">
          <div className="flex basis-1/3 flex-col">
            <span className="text-black pr-4 mb-3 capitalize font-bold text-[13px] md:text-xl">
              Technologies
            </span>
            {TECHNOLOGY_LINKS_1.map((link: FooterLink) => (
              <Link
                href={link.href}
                key={link.name}
                className="pr-4 capitalize mb-3 text-grey text-[13px] md:text-xl"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex basis-1/3 flex-col">
            {TECHNOLOGY_LINKS_2.map((link: FooterLink) => (
              <Link
                href={link.href}
                key={link.name}
                className="pr-4 capitalize mb-3 text-grey text-[13px] md:text-xl"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex basis-1/3 flex-col">
            <Link
              href="/about-us"
              className="text-black pr-4 mb-3 capitalize font-bold text-[13px] md:text-xl"
            >
              About us
            </Link>
            {ABOUT_US_LINKS.map((link: FooterLink) => (
              <Link
                href={link.href}
                key={link.name}
                className="pr-4 capitalize mb-3 text-grey text-[13px] md:text-xl"
              >
                {link.name}
              </Link>
            ))}
            <span className="text-black pr-4 mb-8 capitalize font-bold text-[13px] md:text-xl">
              {''}
            </span>
            <Link
              href="/portfolio"
              className="text-black pr-4 mb-3 capitalize font-bold text-[13px] md:text-xl"
            >
              Portfolio
            </Link>
            <Link
              href="/contact-us"
              className="text-black pr-4 mb-3 capitalize font-bold text-[13px] md:text-xl"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-grey py-5 md:py-9 flex justify-between items-center">
        <span className="text-xs md:text-base">&#169; 2022 Flee Tech</span>
        <div className="flex gap-5 md:gap-16">
          <Link href="/" className={styles.socialMediaIcon}>
            <InstagramOutlineIcon color="#333333" />
          </Link>
          <Link href="/" className={styles.socialMediaIcon}>
            <WhatsappOutlineIcon color="#333333" />
          </Link>
          {/* <Link href="/" className={styles.socialMediaIcon}>
            <FacebookOutlineIcon color="#333333" />
          </Link> */}
          <Link href="/" className={styles.socialMediaIcon}>
            <LinkedinOutlineIcon color="#333333" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
