import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useRef, useState } from 'react';

import LogoIcon from 'components/icons/logo';

import { Colors } from 'shared/constants/colors';
import ScrollContext from 'shared/context/scroll.context';
import WindowDimensionContext from 'shared/context/window-dimension.context';
import { ScrollState } from 'shared/types/scroll';
import { WindowDimension } from 'shared/types/window';

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
  const { currentPageY, prevPageY }: ScrollState = useContext(ScrollContext);
  const { height: clientHeight }: WindowDimension = useContext(
    WindowDimensionContext,
  );
  const menuRef = useRef<HTMLUListElement>(null);
  const { pathname } = useRouter();
  const [shouldShowMobileMenu, setShouldShowMobileMenu] = useState(false);

  const isWhiteNavbar = [
    'work',
    'technology',
    'insight',
    'development',
  ].includes(pathname.split('/')[1]);

  const onToggleMenu = (state: boolean) => {
    if (menuRef && menuRef.current) {
      if (!state) {
        menuRef.current.classList.add(styles.menuInactive);
        menuRef.current.classList.remove(styles.menuActive);
        setShouldShowMobileMenu(false);
      } else {
        menuRef.current.classList.add(styles.menuActive);
        menuRef.current.classList.remove(styles.menuInactive);
        setShouldShowMobileMenu(true);
      }
    }
  };

  const isScrollingUp = currentPageY < prevPageY && currentPageY > clientHeight;

  return (
    <header
      className={`fixed flex justify-between ${
        currentPageY > prevPageY ||
        (currentPageY <= clientHeight && currentPageY > 0)
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100'
      } ${
        isScrollingUp
          ? 'bg-primary bg-opacity-50'
          : isWhiteNavbar
          ? 'bg-white'
          : ''
      }
      } left-0 right-0 py-4 sm:py-7 px-5 sm:px-11 z-20 items-center w-full transition-all duration-300 will-change-[opacity]`}
    >
      <Link
        href="/"
        onClick={() => onToggleMenu(false)}
        className={'flex gap-3 items-center z-10 ' + styles.logo}
      >
        <LogoIcon
          size={36}
          color={
            isWhiteNavbar && !isScrollingUp ? Colors.Primary : Colors.White
          }
        />
        <span
          role="button"
          aria-label="Flee Tech"
          className={`${
            isWhiteNavbar && !isScrollingUp ? 'text-primary' : 'text-white'
          } text-xl md:text-3xl`}
        >
          Flee Tech
        </span>
      </Link>
      <ul
        ref={menuRef}
        className={
          'flex-grow fixed md:relative md:top-auto flex list-none justify-end ' +
          styles.menu
        }
      >
        {MENU_LIST.map((menu: MenuLink) => (
          <li
            key={menu.href}
            className={`${
              menu.href === '/' ? 'md:hidden' : ''
            } flex overflow-hidden ${
              isWhiteNavbar && !isScrollingUp ? 'text-primary' : 'text-white'
            } text-4xl md:text-2xl rounded-[2.5rem] md:rounded-3xl ${
              pathname === menu.href ? ' border-1-white-10' : ''
            }`}
          >
            <Link
              href={menu.href}
              className={`py-3 md:py-2 px-8 md:px-7 ${
                pathname === menu.href ? 'bg-gradient-white-50-0' : ''
              } font-medium`}
              onClick={() => onToggleMenu(false)}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="inline-block md:hidden">
        <Hamburger
          onClick={() => onToggleMenu(!shouldShowMobileMenu)}
          isActive={shouldShowMobileMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
