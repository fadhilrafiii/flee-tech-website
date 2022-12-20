import { IconProps } from './utils';

const WebCodeOutlineIcon = ({ size = 24, color = '#fff' }: IconProps) => {
  return (
    <svg
      width={(67 / 64) * size}
      height={size}
      viewBox="0 0 67 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.8959 19.8541L30.4584 24.4166L21.3334 33.5416L30.4584 42.6666L25.8959 47.2291L12.2084 33.5416L25.8959 19.8541ZM41.1043 47.2291L36.5418 42.6666L45.6668 33.5416L36.5418 24.4166L41.1043 19.8541L54.7918 33.5416L41.1043 47.2291ZM60.8751 0.083252H6.12508C4.51168 0.083252 2.96436 0.724172 1.82352 1.86502C0.682669 3.00586 0.041748 4.55318 0.041748 6.16658V54.8332C0.041748 56.4466 0.682669 57.994 1.82352 59.1348C2.96436 60.2757 4.51168 60.9166 6.12508 60.9166H60.8751C62.4885 60.9166 64.0358 60.2757 65.1767 59.1348C66.3175 57.994 66.9584 56.4466 66.9584 54.8332V6.16658C66.9584 4.55318 66.3175 3.00586 65.1767 1.86502C64.0358 0.724172 62.4885 0.083252 60.8751 0.083252ZM60.8751 54.8332H6.12508V12.2499H60.8751V54.8332Z"
        fill={color}
      />
    </svg>
  );
};

export default WebCodeOutlineIcon;