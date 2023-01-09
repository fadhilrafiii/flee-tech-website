import LTRWorkDetailSection from './ltr.section';
import RTLWorkDetailSection from './rtl.section';
import { WorkDetailSectionProps } from './utils';

const WorkDetailSection = ({ content }: WorkDetailSectionProps) => {
  switch (content.align) {
    case 'right':
      return <RTLWorkDetailSection content={content} />;
    case 'left':
    default:
      return <LTRWorkDetailSection content={content} />;
  }
};

export default WorkDetailSection;
