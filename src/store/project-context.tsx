import { createContext } from 'react';
import * as Images from '../../public/assets/images/';

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
    src: Images.photoGallery,
    alt: 'picture of Portfolio project',
    link: {
      github: 'https://github.com/urlun0404/portfolio-next',
      demo: '/',
    },
    details: {
      query: 'portfolio',
    },
  },
  {
    name: 'photo-gallery',
    caption: 'Photo Gallery Website',
    src: Images.photoGallery,
    alt: 'picture of Photo Gallery Website project',
    link: {
      github: 'https://github.com/urlun0404/photo-gallery-react',
      demo: '#',
    },
    details: {
      query: 'photo-gallery',
    },
  },
  {
    name: 'to-do-list',
    caption: 'To Do List',
    src: Images.toToListJs,
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
