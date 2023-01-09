import Image from 'next/image';

import { WorkDetailSectionProps } from './utils';

const RTLWorkDetailSection = ({ content }: WorkDetailSectionProps) => {
  return (
    <section id={content.content.title} className="flex flex-wrap">
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
      <div className="lg:min-w-[426px]">
        <h2 className="text-darker-grey mb-5 !leading-snug text-4xl">
          {content.content.title}
        </h2>
        {content.content.paragraph && <p>{content.content.paragraph}</p>}
      </div>
    </section>
  );
};

export default RTLWorkDetailSection;
