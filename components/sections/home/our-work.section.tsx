import Image from 'next/image';

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
      className="py-12 md:py-20 px-8 lg:px-16 flex flex-col items-center"
    >
      <div className="text-center text-sm sm:text-xl uppercase text-primary tracking-[2px] sm:tracking-[6px] px-6 mb-3">
        work / review
      </div>
      <h2 className="text-primary text-4xl sm:text-6xl mb-4 text-center capitalize">
        Lorem Ipsum
      </h2>
      <p className="text-base text-primary text-center mb-9">
        Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since
        the 1500s
      </p>
      <div className="flex flex-wrap justify-evenly gap-8 lg:gap-12 w-full">
        {WORKS.map((work: OurWork, idx: number) => (
          <div
            key={idx}
            className={
              'flex-grow flex flex-col items-start basis-1/3 p-6 flex-shrink-0 relative sm:min-h-[360px] min-w-[320px] max-w-[400px] aspect-[22/25] ' +
              styles.workCard
            }
          >
            <Image
              src={DummyWorkImg}
              alt={work.title}
              className="absolute inset-0 object-cover -z-10"
              placeholder="blur"
            />
            <h3 className="text-[40px] text-white capitalize mb-3">
              {work.title}
            </h3>
            <p className="text-white !leading-normal max-w-[264px]">
              {work.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;