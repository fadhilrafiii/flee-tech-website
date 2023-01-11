import { WorkDetailSectionProps } from './utils';

import styles from './work-details.module.scss';

const HighlightWorkDetailSection = ({ content }: WorkDetailSectionProps) => {
  return (
    <section id={content.content.title} className="flex flex-wrap">
      <h4
        style={{ backgroundColor: content.highlightedColor }}
        className={
          'basis-1/2 flex-grow py-16 md:py-36 px-12 md:px-32 flex items-center justify-start text-white text-xl sm:text-3xl md:text-4xl !leading-snug capitalize ' +
          styles.highlightSection
        }
      >
        {content.content.title}
      </h4>
      <div
        className={
          'basis-1/2 flex-grow py-16 md:py-36 px-12 md:px-32 flex items-center justify-start font-medium text-darker-grey text-base sm:text-[18px] !leading-snug ' +
          styles.highlightSection
        }
      >
        {content.content.paragraph}
      </div>
    </section>
  );
};

export default HighlightWorkDetailSection;
