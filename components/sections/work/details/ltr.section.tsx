import Image from 'next/image';

import { WorkDetailSectionProps } from './utils';

const LTRWorkDetailSection = ({ content }: WorkDetailSectionProps) => {
  return (
    <section
      id={content.content.title}
      className="flex flex-wrap items-center justify-between py-12 px-5 sm:p-20 xl:p-36 gap-y-6 sm:gap-y-12"
    >
      {content.image && (
        <div className="basis-7/12 lg:pr-10 xl:pr-16 flex-grow">
          <Image
            src={content.image.src}
            alt={content.content.title || ''}
            className="sm:min-w-[353.5px]"
            placeholder="blur"
            sizes="(max-width: 480px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="basis-5/12 min-w-[200px] flex-shrink flex-grow md:pl-8 lg:px-10">
        <h2 className="text-darker-grey mb-3 md:mb-5 !leading-snug text-3xl sm:text-4xl capitalize">
          {content.content.title}
        </h2>
        {content.content.paragraph && (
          <p className="text-[18px] font-medium text-darker-grey">
            {content.content.paragraph}
          </p>
        )}
      </div>
    </section>
  );
};

export default LTRWorkDetailSection;
