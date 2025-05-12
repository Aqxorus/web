import { Contact } from '@/types/contact';
import { SiGithub, SiDiscord } from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'REDACTED',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/Aqxorus',
      Icon: SiGithub
    },
    {
      name: 'Discord',
      href: 'https://discord.com/users/598624275083034654',
      Icon: SiDiscord
    }
  ]
};

export { contact };
