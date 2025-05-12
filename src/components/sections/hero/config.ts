import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    'I am a developer with a passion for discord bots and web development'
};

export { hero };
