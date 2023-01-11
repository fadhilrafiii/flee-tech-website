import { StaticImageData } from 'next/image';

export interface TechnologyLink {
  name: string;
  href: string;
}

export interface TechnologyDetail {
  image: StaticImageData | string;
  description: string;
}

export interface Technology {
  name: string;
  subtitle: string;
  details: TechnologyDetail[];
}
