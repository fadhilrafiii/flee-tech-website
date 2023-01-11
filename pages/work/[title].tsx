import Head from 'next/head';
import { useMemo } from 'react';

import { GetStaticPropsContext } from 'next';

import OurWorks from 'components/sections/home/our-work.section';
import Landing from 'components/sections/work/landing.section';

import { WORKS } from 'shared/constants/works';
import { Work, WorkDetail } from 'shared/types/work';
import { getURLParamsString } from 'shared/utils/string';
import WorkDetailSection from 'components/sections/work/details';
import Link from 'next/link';

interface WorkDetailProps {
  work: Work;
}

const WorkDetail = ({ work }: WorkDetailProps) => {
  const anotherWorks = useMemo(
    () => WORKS.filter((w: Work) => w.title !== work.title),
    [work.title],
  );

  return (
    <div>
      <Head>
        <title>{work.title}</title>
        <meta
          name="description"
          content={'Project created by Flee Tech Industry ' + work.desc}
        />
        <meta property="og:title" content={work.title} />
        <meta property="og:description" content={work.desc} />
      </Head>
      <div>
        <Landing work={work} />
        <div className='overflow-hidden divide-y divide-grey border border-grey'>
          {work.details && work.details.map((detail: WorkDetail, idx: number) => (
            <WorkDetailSection key={idx} content={detail} />
          ))}
          <div className='flex flex-wrap justify-evenly px-5 py-6 sm:p-36 gap-y-8'>
            <div className='basis-1/2 flex-grow sm:min-w-[384px] text-left sm:text-center'>
              <div className='text-grey mb-2 text-[18px]'>Client</div>
              <div className='text-darker-grey font-medium text-[18px]'>{work.client}</div>
            </div>
            <div className='basis-1/2 flex-grow sm:min-w-[384px] text-left sm:text-center'>
              <div className='text-grey mb-2 text-[18px]'>URL</div>
              {work.url ? (
                <Link href={work.url} className='text-primary font-medium hover:underline text-[18px]'>{work.url}</Link>
              ) : <div className='text-primary font-medium text-[18px]'>{work.url}</div>}
            </div>
          </div>
          <OurWorks inWorkPage works={anotherWorks} />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  const works = WORKS.map((work: Work) => ({
    params: { title: work.title },
  }));
  return {
    paths: works,
    fallback: 'blocking',
  };
};

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  const work = WORKS.find(
    (work: Work) => getURLParamsString(work.title) === ctx?.params?.title,
  );

  return {
    props: {
      work,
    },
  };
};

export default WorkDetail;
