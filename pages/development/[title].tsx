import Head from 'next/head';
import Image from 'next/image';

import { GetStaticPropsContext } from 'next';

import AnimationOutlineIcon from 'components/icons/animation-outline';
import CombineOutlineIcon from 'components/icons/combine-outline';
import CompareArrowsOutlineIcon from 'components/icons/compare-arrows-outline';
import CopyOutlineIcon from 'components/icons/copy-outline';
import GadgetOutlineIcon from 'components/icons/gadget-outline';
import HandsOutlineIcon from 'components/icons/hands-outline';
import OneHandOutlineIcon from 'components/icons/one-hand-outline';
import ShapesOutlineIcon from 'components/icons/shapes-outline';
import StorefrontOutlineIcon from 'components/icons/storefront-outline';
import OurWorks from 'components/sections/home/our-work.section';
import ContactUsSection from 'components/sections/shared/contact-us.section';

import { DEVELOPMENTS } from 'shared/constants/developments';
import { Development, DevelopmentKeyPoint } from 'shared/types/development';
import { getTitleCase } from 'shared/utils/string';

interface DevelopmentKPIconProps {
  name: string;
}

const DevelopmentKPIcon = ({ name }: DevelopmentKPIconProps) => {
  switch (name) {
    case 'HandsOutlineIcon':
      return <HandsOutlineIcon size={81} color="#333333" />;
    case 'ShapesOutlineIcon':
      return <ShapesOutlineIcon size={81} color="#333333" />;
    case 'OneHandOutlineIcon':
      return <OneHandOutlineIcon size={81} color="#333333" />;
    case 'GadgetOutlineIcon':
      return <GadgetOutlineIcon size={81} color="#333333" />;
    case 'CombineOutlineIcon':
      return <CombineOutlineIcon size={81} color="#333333" />;
    case 'CopyOutlineIcon':
      return <CopyOutlineIcon size={81} color="#333333" />;
    case 'AnimationOutlineIcon':
      return <AnimationOutlineIcon size={81} color="#333333" />;
    case 'CompareArrowsOutlineIcon':
      return <CompareArrowsOutlineIcon size={81} color="#333333" />;
    case 'StorefrontOutlineIcon':
      return <StorefrontOutlineIcon size={81} color="#333333" />;
    default:
      return <HandsOutlineIcon size={81} color="#333333" />;
  }
};

interface DevelopmentDetailProps {
  development: Development;
}

const DevelopmentDetail = ({ development }: DevelopmentDetailProps) => {
  return (
    <div>
      <Head>
        <title>{`${getTitleCase(
          development.title,
        )} | Flee Tech Industry`}</title>
        <meta
          name="description"
          content={
            'Flee Tech Industry Development | ' +
            development.title +
            ' | ' +
            development.desc
          }
        />
        <meta
          property="og:title"
          content={`${development.title} | Flee Tech Industry`}
        />
        <meta
          property="og:description"
          content={
            'Flee Tech Industry Development | ' +
            development.title +
            ' | ' +
            development.desc
          }
        />
      </Head>
      <div className="border-y-2 border-grey divide-y-2 divide-grey">
        <section
          id={'landing-' + development.title}
          className="h-[85vh] max-h-[840px] w-full relative bg-black-80 flex items-center justify-start"
        >
          {development.banner && (
            <Image
              src={development.banner}
              alt={development.title}
              fill
              className="absolute inset-0 -z-10 object-cover"
              placeholder="blur"
            />
          )}
          <div className="w-full px-5 md:px-20 lg:px-40 mt-14">
            <h1 className="capitalize !leading-snug text-3xl md:text-5xl lg:text-6xl text-white mb-6">
              {development.title}
            </h1>
            <h3 className="!leading-snug text-white-75 text-[18px] md:text-2xl lg:text-3xl font-secondary capitalize">
              {development.desc}
            </h3>
          </div>
        </section>
        <section
          id={`${development.title}-key-point`}
          className="pt-16 md:pt-20 lg:pt-24 xl:pt-36 px-8 lg:px-24 xl:px-36"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-darker-grey">
            {development.headerText}
          </p>
          <div className="flex  flex-wrap justify-center py-8 md:py-16 lg:py-20 xl:py-28 gap-y-10 md:gap-y-6 gap-6 lg:gap-10">
            {development.keyPoints &&
              development.keyPoints.map(
                (kp: DevelopmentKeyPoint, idx: number) => (
                  <div
                    key={idx}
                    className="min-w-full md:min-w-[320px] border-2 border-grey rounded-[10px] py-7 px-6 basis-[calc(33.3333%-(30px))]"
                  >
                    <div className={'mb-6 md:mb-10 kp-dev-icon'}>
                      <DevelopmentKPIcon name={kp.Icon} />
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl text-darker-grey capitalize font-medium">
                      {kp.text}
                    </p>
                  </div>
                ),
              )}
          </div>
          {development.footerText && (
            <p className="text-xl md:text-2xl lg:text-3xl text-darker-grey pt-28 pb-36 border-t-2 border-grey">
              {development.footerText}
            </p>
          )}
        </section>
        <OurWorks />
        <ContactUsSection />
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  const paths = DEVELOPMENTS.map((dev: Development) => ({
    params: { title: dev.href },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  const development = DEVELOPMENTS.find(
    (dev: Development) => dev.href === '/development/' + ctx?.params?.title,
  );

  return {
    props: {
      development,
    },
  };
};

export default DevelopmentDetail;
