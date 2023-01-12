import Head from 'next/head';
import Image from 'next/image';

import { GetStaticPropsContext } from 'next';

import ContactForm from 'components/sections/contact/contact-form.section';

import { INSIGHTS, INSIGHTS_CAROUSEL_LIST } from 'shared/constants/insights';
import { Insight, InsightContent, InsightDetail } from 'shared/types/insight';
import React from 'react';
import ShareSocialMedia from 'components/share';

interface InsightDetailProps {
  insight: Insight;
}

const InsightDetail = ({ insight }: InsightDetailProps) => {
  return (
    <div>
      <Head>
        <title>{`${insight.title} | Flee Tech Industry`}</title>
        <meta
          name="description"
          content={
            'Insight by Flee Tech Industry | ' +
            insight.title +
            ' | ' +
            insight.subtitle
          }
        />
        <meta
          property="og:title"
          content={`${insight.title} | Flee Tech Industry`}
        />
        <meta property='og:image' content={insight.imageUrl} />
        <meta
          property="og:description"
          content={
            'Insight by Flee Tech Industry | ' +
            insight.title +
            ' | ' +
            insight.subtitle
          }
        />
      </Head>
      <div className="pt-[72px] md:pt-[104px]">
        <div className="flex flex-col lg:flex-row items-start relative border-grey border-y-2 md:py-8 min-h-screen divide-y-2 divide-grey lg:divide-y-0">
          <div className="basis-2/3 flex-grow py-12 px-5 md:px-12 lg:pl-12 xl:pl-16 lg:pr-8 xl:pr-12 border-r-2 border-grey">
            <div>
            <h1 className="text-darker-grey text-2xl md:text-3xl lg:text-[40px] xl:text-5xl !leading-snug mb-[6px] md:mb-[10px]">
              {insight.title}
            </h1>
            <p className="text-xs md:text-base lg:text-xl xl:text-2xl text-grey !leading-snug mb-4">
              {insight.subtitle}
            </p>
            <div className="text-right text-[10px] lg:text-xs xl:text-sm text-grey mb-3">
              {insight.date}
            </div>
            <Image
              src={insight.image}
              alt={insight.title}
              placeholder="blur"
              sizes="(max-width: 1023px) 100vw, 67vw"
              className='mb-6 md:mb-11'
            />
            {insight.details && insight.details.map((detail: InsightDetail, key: number) =>  (
              <section key={`${insight.title}-${key + 1}`} id={`${insight.title}-${key + 1}`}>
                {detail.title && <h4 className='text-xl lg:text-2xl xl:text-3xl text-darker-grey mb-[6px] md:mb-[10px] capitalize'>{detail.title}</h4>}
                {detail.contents?.map((content: InsightContent, keyContent: number) => (
                  <React.Fragment key={keyContent}>
                    {content.type === 'paragraph' ? (
                      <p className='mb-6 md:mb-11 font-medium text-xs md:text-[18px] text-justify !leading-normal'>{content.content}</p>
                    ) : (
                      <Image
                        src={content.content}
                        alt={insight.title}
                        placeholder="blur"
                        sizes="(max-width: 1023px) 100vw, 67vw"
                        className='mb-6 md:mb-11 mx-auto w-full sm:w-[80%]'
                      />
                    )}
                  </React.Fragment>
                ))}
              </section>
            ))}
            <div className='border-t border-grey flex flex-col gap-y-8 py-10 px-6'>
              <h5 className='capitalize text-darker-grey text-center text-2xl'>share this insight</h5>
              <ShareSocialMedia shareMessage={`Work together with Flee Tech for ${insight.title}`} />
            </div>
            </div>
          </div>
          <div className="basis-1/3 px-5 md:px-12 w-full lg:w-auto lg:sticky flex-grow top-7 right-0 bottom-0 py-12 md:pt-20 lg:py-12 lg:px-8 xl:px-12 ">
            <h3 className="text-darker-grey text-3xl !ledaing-snug mb-[6px] md:mb-[10px] text-center capitalize">
              let us help growing your business
            </h3>
            <p className="text-[18px] text-grey !leading-snug text-center mb-5">
              It’s amazing how technology can accelerate the business. Get in
              touch below{' '}
            </p>
            <ContactForm isInInsightPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  const insights = INSIGHTS_CAROUSEL_LIST.map((ins: Insight) => ({
    params: {
      title: ins.title,
    },
  }));

  return {
    paths: insights,
    fallback: 'blocking',
  };
};

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  const insight = INSIGHTS.find(
    (ins: Insight) => ins.title === ctx?.params?.title,
  );

  return {
    props: {
      insight,
    },
  };
};

export default InsightDetail;
