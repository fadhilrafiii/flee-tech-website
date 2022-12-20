import Image from 'next/image';
import Link from 'next/link';

import ArrowRightFilledIcon from 'components/icons/arrow-right-filled';

import styles from './home.module.scss';

import DummyWorkImg from 'public/images/dummy-work-bg.jpg';

interface OurWork {
  title: string;
  body: string;
  href: string;
}

const WORKS: OurWork[] = [
  {
    title: 'lorem ipsum dolor sit amet',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    href: '/',
  },
  {
    title: 'lorem ipsum dolor sit amet',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    href: '/',
  },
  {
    title: 'lorem ipsum dolor sit amet',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    href: '/',
  },
];

const OurWorks = () => {
  return (
    <section
      id="our-work"
      className="py-12 md:py-20 px-8 lg:px-16 flex flex-col items-center justify-center"
    >
      <div className="text-center text-sm sm:text-xl uppercase text-primary tracking-[2px] sm:tracking-[6px] px-6 mb-3">
        work / review
      </div>
      <h2 className="text-primary text-4xl md:text-6xl mb-4 text-center capitalize">
        Lorem Ipsum
      </h2>
      <p className="text-base text-primary text-center mb-9">
        Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since
        the 1500s
      </p>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full max-w-[1440px]">
        {WORKS.map((work: OurWork, idx: number) => (
          <div
            key={idx}
            className={
              'flex-grow flex flex-col items-start basis-[calc(33.333333%-2rem)] lg:basis-[calc(33.333333%-3rem)] flex-shrink-0 relative sm:min-h-[360px] min-w-[320px] max-w-[430px] aspect-[22/25] cursor-pointer ' +
              styles.workCard
            }
          >
            <Link href={work.href} className="p-6 h-full">
              <div
                className={
                  'absolute top-6 right-6 opacity-0 transition-all ' +
                  styles.linkButton
                }
              >
                <ArrowRightFilledIcon size={28} />
              </div>
              <Image
                src={DummyWorkImg}
                alt={work.title}
                className="absolute inset-0 object-cover -z-10 w-full"
                placeholder="blur"
              />
              <h3 className="text-[40px] text-white capitalize mb-3 max-w-[360px]">
                {work.title}
              </h3>
              <p className="text-white !leading-normal max-w-[264px]">
                {work.body}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
