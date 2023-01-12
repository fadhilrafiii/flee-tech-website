import { useRouter } from 'next/router';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

interface ShareSocialMediaProps {
  shareMessage?: string;
  title?: string;
}

const ShareSocialMedia = ({
  shareMessage = '',
  title = 'Flee Tech Industry',
}: ShareSocialMediaProps) => {
  const { asPath: pathname } = useRouter();

  const DEFAULT_SHARE_MESSAGE =
    'See other information about Flee Tech at ' +
    process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="flex justify-center gap-8">
      <FacebookShareButton
        url={process.env.NEXT_PUBLIC_BASE_URL + pathname}
        quote={shareMessage + ' ' + DEFAULT_SHARE_MESSAGE}
        hashtag="#FleeTechIndustry"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={process.env.NEXT_PUBLIC_BASE_URL + pathname}
        title={title}
        hashtags={['FleeTechIndustry']}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={process.env.NEXT_PUBLIC_BASE_URL + pathname}
        title={title}
        source={process.env.NEXT_PUBLIC_BASE_URL}
        summary={shareMessage + ' ' + DEFAULT_SHARE_MESSAGE}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={process.env.NEXT_PUBLIC_BASE_URL + pathname}
        title={shareMessage}
        separator=" - "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareSocialMedia;
