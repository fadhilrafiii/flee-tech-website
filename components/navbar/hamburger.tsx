import React from 'react';

import styles from './navbar.module.scss';

interface HamburgerProps {
  onClick: (e: React.MouseEvent) => void;
  isActive: boolean;
}

const Hamburger = ({ isActive, onClick }: HamburgerProps) => {
  return (
    <span
      role="button"
      onClick={onClick}
      className={
        'bg-white rounded-full w-10 h-10 flex items-center justify-center ' +
        (isActive ? styles.activeHamburger : styles.hamburger)
      }
    >
      <span className="flex flex-col items-end justify-center  gap-1">
        <span />
        <span />
        <span />
      </span>
    </span>
  );
};

export default Hamburger;
