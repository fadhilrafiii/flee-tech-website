import ArrowRightFilledIcon from "../icons/arrow-right-filled";
import Link from "next/link";
import { HTMLAttributes } from "react";

export interface LinkButtonProps extends HTMLAttributes<HTMLDivElement> {
  href?: string;
  children: React.ReactNode | React.ReactNode[] | string;
}

const LinkButton = ({
  href = "/",
  children,
  className = "",
}: LinkButtonProps) => {
  return (
    <Link href={href}>
      <div
        className={`${className} flex mb-4 items-center justify-between max-w-[320px] gap-2`}
      >
        <span className="font-bold text-white text-2xl">{children}</span>
        <span className="flex items-center">
          <ArrowRightFilledIcon size={28} />
        </span>
      </div>
    </Link>
  );
};

export default LinkButton;