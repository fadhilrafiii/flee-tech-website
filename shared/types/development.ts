import { StaticImageData } from 'next/image';

import { IconProps } from 'components/icons/utils';

export interface DevelopmentKeyPoint {
  Icon: string;
  text: string;
}

export interface Development {
  title: string;
  desc: string;
  href: string;
  banner?: StaticImageData;
  Icon?: React.FC<IconProps>;
  headerText?: string;
  keyPoints?: DevelopmentKeyPoint[];
  footerText?: string;
}
