import Image from 'next/image';

import { Work } from 'shared/types/work';
import { getTitleCase } from 'shared/utils/string';

interface LandingProps {
  work: Work;
}

const Landing = ({ work }: LandingProps) => {
  return (
    <section
      id={'landing-' + work.title}
      className="h-[85vh] max-h-[840px] w-full relative bg-black-80 flex items-center justify-start"
    >
      <Image
        src={work.banner}
        alt={work.title}
        fill
        quality={100}
        className="absolute inset-0 -z-10 object-cover"
        priority
        placeholder="blur"
      />
      <div className="w-full px-5 md:px-20 lg:px-40 mt-14">
        <h1 className="!leading-snug text-3xl md:text-5xl lg:text-6xl text-white mb-6">
          {work.title}
        </h1>
        <h3 className="!leading-snug text-white-75 text-[18px] md:text-2xl lg:text-3xl font-secondary">
          {getTitleCase(work.subtitle)}
        </h3>
      </div>
    </section>
  );
};

export default Landing;
