import { Contact } from '@/types/contact';
import { SiGithub, SiDiscord } from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'jjktd7@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/Aqxorus',
      Icon: SiGithub
    },
    {
      name: 'Discord',
      href: 'https://discord.com',
      Icon: SiDiscord
    }
  ]
};

export { contact };
