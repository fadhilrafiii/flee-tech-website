import { useRouter } from 'next/router';

import WorkCard from 'components/work-card';

import { WorkType } from 'shared/types/work';

import SpaceImage from 'public/images/space.jpg';

const WORKS: WorkType[] = [
  {
    image: SpaceImage,
    title: 'Al-Hadi Boarding School',
    subtitle: 'academic system web application',
    href: '/',
  },
  {
    image: SpaceImage,
    title: 'instant web template',
    subtitle: 'websites for various industry',
    href: '/',
  },
  {
    image: SpaceImage,
    title: 'Jinx Board',
    subtitle: 'geothermal superapp dashboard',
    href: '/',
  },
  {
    image: SpaceImage,
    title: 'Mentor - mencari tutor',
    subtitle: 'mobile app development',
    href: '/',
  },
];

const WorkSection = () => {
  const router = useRouter();

  return (
    <section
      id="work"
      className="flex lg:flex-wrap flex-col lg:flex-row justify-center gap-12 xl:gap-20 px-6 py-12 md:p-20"
    >
      {WORKS.map((work: WorkType) => (
        <div
          key={work.title}
          className="basis-[calc(50%-24px)] xl:basis-[calc(50%-40px)] flex-shrink max-w-[575px]"
        >
          <WorkCard
            title={work.title}
            subtitle={work.subtitle}
            image={SpaceImage}
            href={work.href}
            onClick={() => router.push(work.href)}
          />
        </div>
      ))}
    </section>
  );
};

export default WorkSection;
