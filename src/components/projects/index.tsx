import * as s from './styles';
import Project from './project';
import { ProjectsContext } from 'store/project-context';
import { useContext, useRef, useMemo } from 'react';
import useInView from 'hooks/use-in-view';

const options = {
  threshold: 0.2,
  rootMargin: '-5px',
};

export default function Projects() {
  const projectsCtx = useContext(ProjectsContext);
  const observedRef = useRef<HTMLElement>(null);
  const { isInView } = useInView(
    useMemo(() => {
      return {
        observedRef,
        options: options,
      };
    }, [observedRef]),
  );

  return (
    <s.Projects
      id="projects"
      ref={observedRef}
      className={isInView ? '' : 'hidden'}
    >
      <s.Title>Projects</s.Title>
      <s.Container id="project-container">
        {Object.values(projectsCtx).map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </s.Container>
    </s.Projects>
  );
}
