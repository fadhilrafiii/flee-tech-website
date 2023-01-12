import { StaticImageData } from 'next/image';

export interface InsightContentImage {
  type: 'image';
  content: StaticImageData | string;
}

export interface InsightContentParagraph {
  type: 'paragraph';
  content: string;
}

export type InsightContent = InsightContentImage | InsightContentParagraph;

export interface InsightDetail {
  title?: string;
  contents?: InsightContent[];
}

export interface Insight {
  title: string;
  subtitle?: string;
  date?: string;
  image: StaticImageData | string;
  imageUrl?: string;
  details?: InsightDetail[];
}
