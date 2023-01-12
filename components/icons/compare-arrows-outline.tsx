import { IconProps } from './utils';

const CompareArrowsOutlineIcon = ({ size = 24, color = '#fff' }: IconProps) => {
  return (
    <svg
      width={(81 / 57) * size}
      height={size}
      viewBox="0 0 81 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6923 36.7497H0.652344V44.7497H28.6923V56.7497L44.6523 40.7497L28.6923 24.7497V36.7497ZM52.6123 32.7497V20.7497H80.6523V12.7497H52.6123V0.749695L36.6523 16.7497L52.6123 32.7497Z"
        fill={color}
      />
    </svg>
  );
};

export default CompareArrowsOutlineIcon;
