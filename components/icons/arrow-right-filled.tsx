import { IconProps } from "./utils";

const ArrowRightFilledIcon = ({ size = 24, color = "#fff" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9916 19.675L19.6749 15.9917C19.9346 15.7319 20.0645 15.4014 20.0645 15C20.0645 14.5986 19.9346 14.2681 19.6749 14.0083L15.9562 10.2896C15.6964 10.0299 15.372 9.90566 14.9829 9.917C14.5929 9.92927 14.268 10.0653 14.0083 10.325C13.7485 10.5847 13.6187 10.9153 13.6187 11.3167C13.6187 11.7181 13.7485 12.0486 14.0083 12.3083L15.2833 13.5833H10.7145C10.3131 13.5833 9.98256 13.7189 9.72284 13.9899C9.46311 14.2619 9.33325 14.5986 9.33325 15C9.33325 15.4014 9.46925 15.7376 9.74125 16.0087C10.0123 16.2807 10.3485 16.4167 10.7499 16.4167H15.2833L13.9728 17.7271C13.7131 17.9868 13.5889 18.3117 13.6003 18.7017C13.6125 19.0909 13.7485 19.4153 14.0083 19.675C14.268 19.9347 14.5985 20.0646 14.9999 20.0646C15.4013 20.0646 15.7319 19.9347 15.9916 19.675ZM14.9999 29.1667C13.0402 29.1667 11.1985 28.7946 9.47492 28.0503C7.75131 27.3071 6.252 26.2979 4.977 25.0229C3.702 23.7479 2.69286 22.2486 1.94959 20.525C1.20536 18.8014 0.833252 16.9597 0.833252 15C0.833252 13.0403 1.20536 11.1986 1.94959 9.475C2.69286 7.75138 3.702 6.25208 4.977 4.97708C6.252 3.70208 7.75131 2.69247 9.47492 1.94824C11.1985 1.20497 13.0402 0.833328 14.9999 0.833328C16.9596 0.833328 18.8013 1.20497 20.5249 1.94824C22.2485 2.69247 23.7478 3.70208 25.0228 4.97708C26.2978 6.25208 27.307 7.75138 28.0503 9.475C28.7945 11.1986 29.1666 13.0403 29.1666 15C29.1666 16.9597 28.7945 18.8014 28.0503 20.525C27.307 22.2486 26.2978 23.7479 25.0228 25.0229C23.7478 26.2979 22.2485 27.3071 20.5249 28.0503C18.8013 28.7946 16.9596 29.1667 14.9999 29.1667Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRightFilledIcon;