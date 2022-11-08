import * as s from './styles';
import Project from './project';
import { ProjectsContext } from 'store/project-context';
import { useContext } from 'react';

export default function Projects() {
  const projectsCtx = useContext(ProjectsContext);

  return (
    <s.Projects id="projects">
      <s.Title>Projects</s.Title>
      <s.Container>
        {projectsCtx.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </s.Container>
    </s.Projects>
  );
}
