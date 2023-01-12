import { FC } from 'react';

import ChemicalOutlineIcon from 'components/icons/chemical-outline';
import SearchDocumentOutlineIcon from 'components/icons/search-document-outline';
import StackOutlineIcon from 'components/icons/stack-outline';
import { IconProps } from 'components/icons/utils';

import { Colors } from 'shared/constants/colors';

import styles from './shared-section.module.scss';

interface OurValue {
  Icon: FC<IconProps>;
  label: string;
  title: string;
  body: string;
}

const VALUES: OurValue[] = [
  {
    Icon: ChemicalOutlineIcon,
    label: 'connection',
    title: 'Dedicated Team',
    body: 'Convenient and cost-effective solution for business who want to outsource certain tasks',
  },
  {
    Icon: SearchDocumentOutlineIcon,
    label: 'Communication',
    title: 'Direct Communication',
    body: 'Clear, open, and honest communication is the foundation of successful relationship and successful business',
  },
  {
    Icon: StackOutlineIcon,
    label: 'Expertise',
    title: 'Crafted To Fit',
    body: 'Creating tailored solutions for businesses based on company unique and challenges and goals in order to provide high quality and effective results',
  },
];

interface OurValuesProps {
  forAboutPage?: boolean;
}

const OurValues = ({ forAboutPage = false }: OurValuesProps) => {
  return (
    <section id="our-value" className="divide-y divide-grey">
      <div className="flex flex-col justify-center items-center py-10 sm:py-32 px-8">
        <div className="text-sm sm:text-base tracking-[3px] md:tracking-[6.5px] text-dark-grey uppercase text-center mb-6">
          {forAboutPage
            ? 'Good product comes from good people'
            : 'Greeting, we are flee tech'}
        </div>
        {forAboutPage ? (
          <h2
            style={{ lineHeight: 1.33 }}
            className="capitalize font-medium text-3xl xs:text-4xl md:text-6xl text-primary text-center max-w-[642px]"
          >
            We more then just building software
          </h2>
        ) : (
          <h2
            style={{ lineHeight: 1.33 }}
            className="capitalize font-medium text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-primary max-w-[1082px] text-center"
          >
            We prioritize delivering results over the software itself, and
            approach development with a focus on quality, design, and meeting
            the needs of your business
          </h2>
        )}
      </div>
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-grey">
        {VALUES.map(({ Icon, ...value }: OurValue, idx: number) => (
          <div
            key={idx}
            className="py-10 px-6 sm:p-12 md:p-8 lg:p-12 xl:p-16 basis-1/3"
          >
            <div className={'mb-10 sm:mb-16 ' + styles.valueIcon}>
              <Icon size={80} color={Colors.Primary} />
            </div>
            <div className="tracking-[4px] lg:tracking-[6px] text-grey text-sm sm:text-lg lg:text-xl uppercase mb-4">
              {value.label}
            </div>
            <h3 className="font-medium text-3xl lg:text-4xl text-primary capitalize mb-6 !leading-snug">
              {value.title}
            </h3>
            <p className="text-sm sm:text-base text-black">{value.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
