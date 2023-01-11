import Head from 'next/head';

import { GetStaticPropsContext } from 'next';

import { TECHNOLOGIES, TECHNOLOGY_LINKS } from 'shared/constants/technologies';
import { Technology, TechnologyDetail, TechnologyLink } from 'shared/types/technology';
import Image from 'next/image';
import OurServices from 'components/sections/shared/our-services.section';
import ContactUsSection from 'components/sections/shared/contact-us.section';

interface TechnologyDetailProps {
  technology: Technology;
}

const TechnologyDetail = ({ technology }: TechnologyDetailProps) => {
  return (
    <div>
      <Head>
        <title>{`${technology.name} | Flee Tech Industry`}</title>
        <meta
          name="description"
          content={
            'Technology used by Flee Tech Industry | ' +
            technology.name +
            ' | ' +
            technology.subtitle
          }
        />
        <meta property="og:title" content={`${technology.name} | Flee Tech Industry`} />
        <meta
          property="og:description"
          content={
            'Technology used by Flee Tech Industry | ' +
            technology.name +
            ' | ' +
            technology.subtitle
          }
        />
      </Head>
      <div className="pt-[72px] md:pt-[104px] overflow-hidden">
        <div className="md:divide-y divide-y-grey border-2 border-grey">
          <section
            id={`${technology.name}-head`}
            className="md:min-h-[72vh] flex flex-col justify-center py-12 md:py-20 lg:py-32 pb-0 px-5 sm:px-8 md:px-24 lg:px-36"
          >
            <h1 className="text-darker-grey text-4xl md:text-6xl !leading-snug mb-[10px] md:mb-6 capitalize">
              {technology.name}
            </h1>
            <p className="text-grey text-[18px] md:text-3xl capitalize">
              {technology.subtitle}
            </p>
          </section>
          {technology.details.map((detail: TechnologyDetail, idx: number) => (
            <section
              key={idx}
              id={`${technology.name}-body-${idx}`}
              className="flex flex-wrap min-w-full sm:min-w-[400px] justify-evenly items-start pt-7 pb-12 md:py-20 lg:py-32 px-5 sm:px-8 md:px-24 lg:px-36 -mx-2 sm:-mx-4 md:-mx-12 xl:-mx-16 gap-y-6 md:gap-y-12"
            >
              <div className='basis-1/2 flex-grow px-2 sm:px-4 md:px-12 xl:px-16'>
                <div className='rounded-[20px] overflow-hidden drop-shadow-xl '>
                  <Image
                    src={detail.image}
                    alt={technology.name}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className='max-w-full'
                    priority
                  />
                </div>
              </div>
              <div className='basis-1/2 flex-grow min-w-full sm:min-w-[400px] px-2 sm:px-4 md:px-12 xl:px-16'>
                <p className='text-[18px] text-justify font-medium text-darker-grey !leading-normal'>{detail.description}</p>
              </div>
            </section>
          ))}
        </div>
        <OurServices />
        <div className='border-b-2 border-grey'>
        <ContactUsSection />

        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  const paths = TECHNOLOGY_LINKS.map((tech: TechnologyLink) => ({
    params: {
      title: tech.name,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  const technology = TECHNOLOGIES.find(
    (tech: Technology) => tech.name === ctx?.params?.title,
  );

  return {
    props: {
      technology,
    },
  };
};

export default TechnologyDetail;
