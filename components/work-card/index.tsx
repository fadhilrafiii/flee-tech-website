import Image from 'next/image';
import Link from 'next/link';

import { Work } from 'shared/types/work';
import { getURLParamsString } from 'shared/utils/string';

import styles from './work-card.module.scss';

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Link
      href={`/work/${getURLParamsString(work.title)}`}
      className={
        'block verflow-hidden rounded-[10px] bg-white w-full max-w-[575px] min-w-[280px] mx-auto h-full ' +
        styles.cardBoxShadow
      }
    >
      <div className="aspect-[4/3] max-h-[398px] w-full bg-white shadow-inner relative">
        <Image
          src={work.image}
          alt={work.title}
          sizes="(max-width: 767px) 90vw, 50vw"
          fill
          placeholder="blur"
        />
      </div>
      <div className="px-4 md:pl-6 md:pr-12 xl:pr-16 pt-6 pb-[50px] bg-white">
        <h4 className="text-2xl xs:text-3xl md:text-4xl xl:text-[40px] capitalize mb-1">
          {work.title}
        </h4>
        <p className="!leading-[2.4] uppercase tracking-wide md:tracking-wider xl:tracking-widest text-[10px] xs:text-xs md:text-base xl:text-[18px] text-darker-grey">
          {work.subtitle}
        </p>
      </div>
    </Link>
  );
};

export default WorkCard;
