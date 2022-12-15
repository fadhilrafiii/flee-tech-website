import LogoIcon from "components/icons/logo";
import Link from "next/link";
import { useRouter } from "next/router";

export interface MenuLink {
  label: string;
  href: string;
}

export const MENU_LIST: MenuLink[] = [
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <header className="fixed flex justify-between top-0 left-0 right-0 py-8 px-11 z-20 items-center w-full">
      <Link href="/" className="flex gap-3 items-center">
        <LogoIcon size={40} />
        <span
          role="button"
          aria-label="Flee Tech"
          className="text-white text-3xl"
        >
          Flee Tech
        </span>
      </Link>
      <ul className="flex-grow flex list-none justify-end">
        {MENU_LIST.map((menu: MenuLink) => (
          <li
            key={menu.href}
            className={`flex overflow-hidden font-medium text-white text-2xl rounded-3xl ${
              pathname.indexOf(menu.href) > -1 ? " border-1-white-10" : ""
            }`}
          >
            <Link
              href={menu.href}
              className={`py-2 px-7 ${
                pathname.indexOf(menu.href) > -1 ? "bg-gradient-white-50-0" : ""
              }`}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
