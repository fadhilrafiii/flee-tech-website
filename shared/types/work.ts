import { StaticImageData } from 'next/image';

export interface WorkType {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  href: string;
}

export interface WorkCardType extends WorkType {
  onClick: () => void;
}
