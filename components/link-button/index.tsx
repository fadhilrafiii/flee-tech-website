import Link from 'next/link';
import { HTMLAttributes } from 'react';

import ArrowRightFilledIcon from '../icons/arrow-right-filled';

export interface LinkButtonProps extends HTMLAttributes<HTMLDivElement> {
  href?: string;
  children: React.ReactNode | React.ReactNode[] | string;
  iconColor?: string;
}

const LinkButton = ({
  href = '/',
  children,
  className = '',
  iconColor = '#fff',
}: LinkButtonProps) => {
  return (
    <Link href={href}>
      <div
        className={`flex mb-4 items-center justify-between max-w-[320px] gap-2 ${className}`}
      >
        <span className="font-bold text-white text-2xl">{children}</span>
        <span className="flex items-center">
          <ArrowRightFilledIcon size={28} color={iconColor} />
        </span>
      </div>
    </Link>
  );
};

export default LinkButton;
