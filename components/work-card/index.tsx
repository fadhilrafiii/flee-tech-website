import Image from 'next/image';

import { WorkCardType } from 'shared/types/work';

const WorkCard = ({ image, title, subtitle, onClick }: WorkCardType) => {
  return (
    <div
      className="overflow-hidden drop-shadow-xl rounded-[10px] bg-white w-full max-w-[575px] min-w-[280px] mx-auto h-full"
      role="button"
      onClick={onClick}
    >
      <div className="aspect-[23/16] w-full bg-white shadow-inner relative">
        <Image
          src={image}
          alt={title}
          sizes="(max-width: 767px) 33vw, 80vw"
          fill
          placeholder="blur"
        />
      </div>
      <div className="px-4 md:pl-6 md:pr-12 xl:pr-16 pt-6 pb-[50px] bg-white">
        <h4 className="text-2xl xs:text-3xl md:text-4xl xl:text-[40px] capitalize mb-1">
          {title}
        </h4>
        <p className="!leading-[2.4] uppercase tracking-wide md:tracking-wider xl:tracking-widest text-[10px] xs:text-xs md:text-base xl:text-[18px] text-darker-grey">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
