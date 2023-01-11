import { StaticImageData } from 'next/image';

export interface WorkDetailImage {
  aspectRatio: string;
  src: string | StaticImageData;
}

export interface WorkDetailContent {
  title?: string;
  paragraph?: string;
}
export interface WorkDetail {
  align?: string;
  highlightedColor?: string;
  image?: WorkDetailImage;
  content: WorkDetailContent;
}

export interface Work {
  image: StaticImageData | string;
  banner: StaticImageData | string;
  title: string;
  subtitle: string;
  href?: string;
  desc?: string;
  details?: WorkDetail[];
  client?: string;
  url?: string;
}
