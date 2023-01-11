import { Technology, TechnologyLink } from 'shared/types/technology';

import DjangoImg from 'public/images/django.jpg';
import GolangImg from 'public/images/golang.jpg';
import KafkaImg from 'public/images/kafka.jpg';
import LaravelImg from 'public/images/laravel.jpg';
import MongoDBImg from 'public/images/mongodb.jpg';
import NextImg from 'public/images/nextjs.jpg';
import NodeJsImg from 'public/images/nodejs.jpg';
import PostgreSQLImg from 'public/images/postgresql.jpg';
import ReactImg from 'public/images/reactjs.jpg';
import RedisImg from 'public/images/redis.jpg';

export const TECHNOLOGY_LINKS: TechnologyLink[] = [
  {
    name: 'ReactJS',
    href: '/technology/ReactJS',
  },
  {
    name: 'NextJS',
    href: '/technology/NextJS',
  },
  {
    name: 'NodeJS',
    href: '/technology/NodeJS',
  },
  {
    name: 'GoLang',
    href: '/technology/GoLang',
  },
  {
    name: 'Laravel',
    href: '/technology/Laravel',
  },
  {
    name: 'Kafka',
    href: '/technology/Kafka',
  },
  {
    name: 'MongoDB',
    href: '/technology/MongoDB',
  },
  {
    name: 'Redis',
    href: '/technology/Redis',
  },
  {
    name: 'Django',
    href: '/technology/Django',
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'ReactJS',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: ReactImg,
        description:
          'React is a JavaScript library that is designed to help developers build fast and stable applications. It is maintained by Facebook and a community of developers, and is often used for building single-page or mobile applications that need to handle rapidly changing data. One of the key benefits of using React is that it can help improve developer productivity and application stability.',
      },
    ],
  },
  {
    name: 'NextJS',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: NextImg,
        description:
          'Next.js is the ultimate tool for building lightning-fast, server-rendered React applications. With automatic code splitting, optimized performance, and easy deployment to any platform, Next.js makes it easy to create amazing user experiences that load and perform seamlessly. Whether you are building a small marketing site or a large e-commerce platform, Next.js has you covered with its comprehensive feature set and active community of developers.',
      },
    ],
  },
  {
    name: 'NextJS',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: NextImg,
        description: '',
      },
    ],
  },
  {
    name: 'NextJS',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: NextImg,
        description: '',
      },
    ],
  },
  {
    name: 'NodeJS',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: NodeJsImg,
        description:
          "Node.js is a runtime environment that allows you to run JavaScript outside of a web browser. It is open-source and works on any platform. With Node.js, developers can use JavaScript to create command line tools and execute server-side scripts, generating dynamic content for web pages before they are sent to the user's browser.",
      },
    ],
  },
  {
    name: 'Django',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: DjangoImg,
        description:
          "Django is a great tool for creating modern web applications. It's easy to use and has powerful features that help you build and deploy feature-rich applications quickly. Django is suitable for developers of all levels and helps you create fast, reliable, and easy-to-maintain web applications",
      },
    ],
  },
  {
    name: 'GoLang',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: GolangImg,
        description:
          'Go is a good language for building fast and reliable systems. It has a simple syntax, strong typing, and supports concurrency. Developers use Go to create efficient applications that can handle a lot of work, such as distributed systems and high-traffic web applications',
      },
    ],
  },
  {
    name: 'Laravel',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: LaravelImg,
        description:
          'Laravel is a PHP framework for building modern web applications. It has a powerful ORM, a templating engine, and a command-line interface that make it easy to build and maintain applications. Laravel also follows the MVC architectural pattern, which helps developers organize their code',
      },
    ],
  },
  {
    name: 'MongoDB',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: MongoDBImg,
        description:
          'MongoDB is the ultimate database for modern cloud-based applications. It can handle a lot of data and traffic and is flexible and easy to scale. MongoDB is suitable for a range of applications, including content management systems and data analytics platforms',
      },
    ],
  },
  {
    name: 'Kafka',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: KafkaImg,
        description:
          'Kafka is the ultimate event streaming platform for building real-time data pipelines and applications. With its fast, scalable, and durable design, Kafka makes it easy to process and analyze large volumes of data in real-time, making it suitable for use cases such as real-time analytics, fraud detection, and real-time messaging',
      },
    ],
  },
  {
    name: 'Redis',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: RedisImg,
        description:
          'Redis is a fast and flexible in-memory data store that is good for building high-performance applications. It can store and access data quickly and is suitable for use cases like caching, real-time analytics, and messaging. Redis has a lot of features and a strong community of developers that can help you build great applications',
      },
    ],
  },
  {
    name: 'PostgreSQL',
    subtitle:
      'Create impressive web applications using the top frontend technology available',
    details: [
      {
        image: PostgreSQLImg,
        description:
          'PostgreSQL is the ultimate object-relational database management system for building enterprise-level applications. It has a lot of features, supports many data types, and has advanced indexing and replication capabilities. You can use PostgreSQL to build scalable and reliable systems that can handle a lot of work',
      },
    ],
  },
];
