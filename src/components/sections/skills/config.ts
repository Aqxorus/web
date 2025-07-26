import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web',
    thumbnail: '/images/skills/web-development.png',
    description: `Web development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.`
  },
  {
    name: 'Backend',
    thumbnail: '/images/skills/backend-development.png',
    description:
      'Backend Development involves the logic, database, and other operations that are built behind the scenes to run the web servers efficiently.'
  }
];

export { trimLen, skills };
