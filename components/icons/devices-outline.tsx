import { IconProps } from './utils';

const DevicesOutlineIcon = ({ size = 24, color = '#fff' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.1875 52.4375H52.4375V2.5625H14.375V15.6875"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M2.5625 15.6875H26.1875V52.4375H2.5625V15.6875Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M13.0625 44.5625H15.6875M32.75 44.5625H35.375"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DevicesOutlineIcon;
