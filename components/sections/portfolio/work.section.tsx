import WorkCard from 'components/work-card';

import { WORKS } from 'shared/constants/works';
import { Work } from 'shared/types/work';

const WorkSection = () => {
  return (
    <section
      id="work"
      className="flex lg:flex-wrap flex-col lg:flex-row justify-center gap-12 xl:gap-20 px-6 py-12 md:p-20"
    >
      {WORKS.map((work: Work) => (
        <div
          key={work.title}
          className="basis-[calc(50%-24px)] xl:basis-[calc(50%-40px)] flex-shrink max-w-[575px]"
        >
          <WorkCard work={work} />
        </div>
      ))}
    </section>
  );
};

export default WorkSection;
