import { createContext } from 'react';
import { images } from '../../public/assets';

export interface ProjectsType {
  name: string;
  caption: string;
  src: any;
  alt: string;
  link: {
    github: string;
    demo: string;
  };
  details: {
    query: string;
  };
}

const PROJECTS = [
  {
    name: 'portfolio',
    caption: 'Portfolio',
    src: images.portfolioNext,
    alt: 'picture of Portfolio project',
    link: {
      github: 'https://github.com/urlun0404/portfolio-next',
      demo: 'https://portfolio-next-jet.vercel.app/',
    },
    details: {
      query: 'portfolio',
    },
  },
  {
    name: 'photo-gallery',
    caption: 'Photo Gallery Website',
    src: images.photoGallery,
    alt: 'picture of Photo Gallery Website project',
    link: {
      github: 'https://github.com/urlun0404/photo-gallery-react',
      demo: 'https://photo-gallery-react-gamma.vercel.app/',
    },
    details: {
      query: 'photo-gallery',
    },
  },
  {
    name: 'to-do-list',
    caption: 'To Do List',
    src: images.toToListJs,
    alt: 'picture of Hawaii project',
    link: {
      github: 'https://github.com/urlun0404/todolist',
      demo: 'https://todolist-project-urlun0404.netlify.app/',
    },
    details: {
      query: 'hawaii',
    },
  },
];

interface Props {
  children: React.ReactNode;
}

export const ProjectsContext = createContext(PROJECTS);

export default function ProjectsProvider(props: Props) {
  return (
    <ProjectsContext.Provider value={PROJECTS}>
      {props.children}
    </ProjectsContext.Provider>
  );
}
