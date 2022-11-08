import { createContext } from 'react';
import * as Images from '../../public/assets/images/';

export interface ProjectsType {
  name: string,
  caption: string,
  src: any,
  alt: string,
  link: {
    github: string,
    demo: string,
  },
  detail: {
    path: string,
  },
}

const PROJECTS = [
  {
    name: '',
    caption: '',
    src: '/assets/images',
    alt: 'picture of project',
    link: {
      github: '',
      demo: '',
    },
    detail: {
      path: '',
    },
  },
  {
    name: 'photo-collection',
    caption: 'Photo-Collection Website',
    src: '/assets/images',
    alt: 'picture of Photo Collection Website project',
    link: {
      github: '',
      demo: '',
    },
    detail: {
      path: '',
    },
  },
  {
    name: 'hawaii',
    caption: 'Hawaii',
    src: Images.hawaii,
    alt: 'picture of Hawaii project',
    link: {
      github: 'https://github.com/urlun0404/hawaii/',
      demo: 'https://hawaii-project-urlun0404.netlify.app/',
    },
    detail: {
      path: '/hawauu',
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
