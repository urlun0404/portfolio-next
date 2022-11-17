import { createContext } from 'react';
import PROJECTS from 'constants/project';

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
