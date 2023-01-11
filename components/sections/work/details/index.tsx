import HighlightWorkDetailSection from './highlight.section';
import LTRWorkDetailSection from './ltr.section';
import RTLWorkDetailSection from './rtl.section';
import { WorkDetailSectionProps } from './utils';

const WorkDetailSection = ({ content }: WorkDetailSectionProps) => {
  switch (content.align) {
    case 'highlight':
      return <HighlightWorkDetailSection content={content} />;
    case 'rtl':
      return <RTLWorkDetailSection content={content} />;
    case 'ltr':
    default:
      return <LTRWorkDetailSection content={content} />;
  }
};

export default WorkDetailSection;
