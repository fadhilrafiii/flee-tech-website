import ArrowRightFilled from "./icons/arrow-right";
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
        className={`${className} flex mb-4 items-center justify-between max-w-[320px]`}
      >
        <span className="font-bold text-white text-2xl">{children}</span>
        <span className="flex items-center">
          <ArrowRightFilled size={28} />
        </span>
      </div>
    </Link>
  );
};

export default LinkButton;
