import { IconProps } from './utils';

const LinkedinOutlineIcon = ({ size = 24, color = '#fff' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8337 13.3184V17.6316H15.3335V13.6066C15.3335 12.5962 14.9718 11.9067 14.0665 11.9067C13.3758 11.9067 12.964 12.3711 12.7832 12.8214C12.7178 12.9824 12.7003 13.2064 12.7003 13.4304V17.6316H10.199C10.199 17.6316 10.2328 10.8159 10.199 10.1101H12.7003V11.1752L12.684 11.1997H12.7003V11.1764C13.0328 10.6631 13.6255 9.93274 14.9543 9.93274C16.5993 9.93274 17.8337 11.0084 17.8337 13.3184ZM7.58216 6.48291C6.72699 6.48291 6.16699 7.04524 6.16699 7.78258C6.16699 8.50591 6.71066 9.08341 7.54949 9.08341H7.56583C8.43849 9.08341 8.98099 8.50474 8.98099 7.78258C8.96466 7.04524 8.43849 6.48291 7.58216 6.48291ZM6.31516 17.6316H8.81649V10.1101H6.31516V17.6316Z"
        fill={color}
      />
      <path
        d="M5.00016 2.66683C4.38132 2.66683 3.78783 2.91266 3.35025 3.35025C2.91266 3.78783 2.66683 4.38132 2.66683 5.00016V19.0002C2.66683 19.619 2.91266 20.2125 3.35025 20.6501C3.78783 21.0877 4.38132 21.3335 5.00016 21.3335H19.0002C19.619 21.3335 20.2125 21.0877 20.6501 20.6501C21.0877 20.2125 21.3335 19.619 21.3335 19.0002V5.00016C21.3335 4.38132 21.0877 3.78783 20.6501 3.35025C20.2125 2.91266 19.619 2.66683 19.0002 2.66683H5.00016ZM5.00016 0.333496H19.0002C20.2378 0.333496 21.4248 0.825161 22.3 1.70033C23.1752 2.5755 23.6668 3.76249 23.6668 5.00016V19.0002C23.6668 20.2378 23.1752 21.4248 22.3 22.3C21.4248 23.1752 20.2378 23.6668 19.0002 23.6668H5.00016C3.76249 23.6668 2.5755 23.1752 1.70033 22.3C0.825161 21.4248 0.333496 20.2378 0.333496 19.0002V5.00016C0.333496 3.76249 0.825161 2.5755 1.70033 1.70033C2.5755 0.825161 3.76249 0.333496 5.00016 0.333496V0.333496Z"
        fill={color}
      />
    </svg>
  );
};

export default LinkedinOutlineIcon;
