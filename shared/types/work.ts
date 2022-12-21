import { StaticImageData } from 'next/image';

export interface WorkCardType {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  href: string;
}
