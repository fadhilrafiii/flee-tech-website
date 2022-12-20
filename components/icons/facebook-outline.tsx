import { IconProps } from './utils';

const FacebookOutlineIcon = ({ size = 24, color = '#fff' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.8125 12C23.8125 9.66371 23.1197 7.37989 21.8217 5.43733C20.5238 3.49478 18.6789 1.98074 16.5205 1.08668C14.362 0.192618 11.9869 -0.0413087 9.6955 0.414479C7.4041 0.870267 5.29931 1.9953 3.64731 3.64731C1.9953 5.29931 0.870267 7.4041 0.414479 9.6955C-0.0413087 11.9869 0.192618 14.362 1.08668 16.5205C1.98074 18.6789 3.49478 20.5238 5.43733 21.8217C7.37989 23.1197 9.66371 23.8125 12 23.8125C15.132 23.8096 18.1349 22.5641 20.3495 20.3495C22.5641 18.1349 23.8096 15.132 23.8125 12ZM13.3125 21.0891V15.0625H15.5C15.8481 15.0625 16.1819 14.9242 16.4281 14.6781C16.6742 14.4319 16.8125 14.0981 16.8125 13.75C16.8125 13.4019 16.6742 13.0681 16.4281 12.8219C16.1819 12.5758 15.8481 12.4375 15.5 12.4375H13.3125V10.25C13.3125 9.90191 13.4508 9.56807 13.6969 9.32193C13.9431 9.07578 14.2769 8.9375 14.625 8.9375H16.375C16.7231 8.9375 17.0569 8.79922 17.3031 8.55308C17.5492 8.30694 17.6875 7.9731 17.6875 7.625C17.6875 7.27691 17.5492 6.94307 17.3031 6.69693C17.0569 6.45079 16.7231 6.31251 16.375 6.3125H14.625C13.5807 6.3125 12.5792 6.72735 11.8408 7.46577C11.1023 8.2042 10.6875 9.20571 10.6875 10.25V12.4375H8.5C8.15191 12.4375 7.81807 12.5758 7.57193 12.8219C7.32579 13.0681 7.1875 13.4019 7.1875 13.75C7.1875 14.0981 7.32579 14.4319 7.57193 14.6781C7.81807 14.9242 8.15191 15.0625 8.5 15.0625H10.6875V21.0891C8.38855 20.7572 6.3006 19.5669 4.84387 17.7577C3.38714 15.9485 2.66975 13.6547 2.83609 11.3379C3.00243 9.02104 4.04015 6.85322 5.7404 5.27066C7.44065 3.68811 9.67722 2.8083 12 2.8083C14.3228 2.8083 16.5594 3.68811 18.2596 5.27066C19.9599 6.85322 20.9976 9.02104 21.1639 11.3379C21.3303 13.6547 20.6129 15.9485 19.1561 17.7577C17.6994 19.5669 15.6115 20.7572 13.3125 21.0891Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookOutlineIcon;
