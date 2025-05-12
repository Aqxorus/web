import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    // todo: use proper thumbnail pics
    thumbnail: '/images/skills/web-development.jpg',
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  },
  {
    name: 'Backend Development',
    thumbnail: '/images/skills/djs.svg',
    description:
      'Backend Development involves building the server-side logic and database management for web applications. It includes creating APIs, handling user authentication, and managing data storage to ensure that the application runs smoothly and securely.'
  }
];

export { trimLen, skills };
