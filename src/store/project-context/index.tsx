import { createContext } from 'react';
import PROJECTS from 'constants/project';

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
