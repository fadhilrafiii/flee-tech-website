import Image from 'next/image';

import { WorkDetailSectionProps } from './utils';

const LTRWorkDetailSection = ({ content }: WorkDetailSectionProps) => {
  return (
    <section
      id={content.content.title}
      className="flex flex-wrap items-center justify-between py-12 px-5 md:p-36 -mx-4 md:-mx-16 gap-y-6 sm:gap-y-8 "
    >
      <div className="flex-grow basis-7/12 px-4 md:px-16 md:min-w-[450px]">
        <div
          className={`overflow-hidden relative aspect-[${content.image.aspectRatio}]`}
        >
          <Image
            src={content.image.src}
            alt={content.content.title}
            placeholder="blur"
            fill
            sizes="(max-width: 480px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="px-4 md:px-16 basis-5/12 flex-shrink flex-grow">
        <h2 className="text-darker-grey mb-3 md:mb-5 !leading-snug text-3xl sm:text-4xl">
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
