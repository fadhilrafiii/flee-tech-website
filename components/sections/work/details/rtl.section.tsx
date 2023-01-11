import Image from 'next/image';

import { WorkDetailSectionProps } from './utils';

const RTLWorkDetailSection = ({ content }: WorkDetailSectionProps) => {
  return (
    <section
      id={content.content.title}
      className="flex flex-wrap-reverse items-center justify-between py-12 px-5 sm:p-20 xl:p-36 gap-y-6 sm:gap-y-12"
    >
      <div className="basis-5/12 min-w-[200px] flex-shrink flex-grow md:pr-8 lg:px-10">
        <h2 className="text-darker-grey mb-3 md:mb-5 !leading-snug text-3xl sm:text-4xl capitalize">
          {content.content.title}
        </h2>
        {content.content.paragraph && (
          <p className="text-[18px] font-medium text-darker-grey">
            {content.content.paragraph}
          </p>
        )}
      </div>
      {content.image && (
        <div className="basis-7/12 lg:pl-10 xl:pl-16 flex-grow">
          <Image
            src={content.image.src}
            alt={content.content.title || ''}
            className="sm:min-w-[353.5px]"
            placeholder="blur"
            sizes="(max-width: 480px) 100vw, 50vw"
          />
        </div>
      )}
    </section>
  );
};

export default RTLWorkDetailSection;
