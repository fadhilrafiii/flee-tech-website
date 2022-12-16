import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import LogoIcon from 'components/icons/logo';

import Hamburger from './hamburger';

import styles from './navbar.module.scss';

export interface MenuLink {
  label: string;
  href: string;
}

export const MENU_LIST: MenuLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const [shouldShowMobileMenu, setShouldShowMobileMenu] = useState(false);

  return (
    <header className="fixed flex justify-between top-0 left-0 right-0 py-4 sm:py-8 px-5 sm:px-11 z-20 items-center w-full">
      <Link href="/" className={'flex gap-3 items-center z-10 ' + styles.logo}>
        <LogoIcon size={36} />
        <span
          role="button"
          aria-label="Flee Tech"
          className="text-white text-xl md:text-3xl"
        >
          Flee Tech
        </span>
      </Link>
      <ul
        className={
          'flex-grow fixed md:relative md:top-auto flex list-none justify-end ' +
          (shouldShowMobileMenu ? styles.menuActive : styles.menu)
        }
      >
        {MENU_LIST.map((menu: MenuLink) => (
          <li
            key={menu.href}
            className={`${
              menu.href === '/' ? 'md:hidden' : ''
            } flex overflow-hidden font-medium text-white text-4xl md:text-2xl rounded-3xl ${
              pathname.indexOf(menu.href) > -1 ? ' border-1-white-10' : ''
            }`}
          >
            <Link
              href={menu.href}
              className={`py-3 md:py-2 px-7 ${
                pathname.indexOf(menu.href) > -1 ? 'bg-gradient-white-50-0' : ''
              }`}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="inline-block md:hidden">
        <Hamburger
          onClick={() => setShouldShowMobileMenu((prev) => !prev)}
          isActive={shouldShowMobileMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
