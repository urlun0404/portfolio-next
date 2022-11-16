import * as s from './styles';
import Project from './project';
import { ProjectsContext } from 'store/project-context';
import { useContext, useState, useRef, useEffect } from 'react';

export default function Projects() {
  const projectsCtx = useContext(ProjectsContext);
  const [isInView, setIsInView] = useState(false);
  const observedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (observedRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          } else {
            setIsInView(false);
          }
        },
        {
          threshold: 0.2,
          rootMargin: '-5px',
        },
      );

      observer.observe(observedRef.current);
    }
  }, [observedRef]);

  return (
    <s.Projects
      id="projects"
      ref={observedRef}
      className={isInView ? '' : 'hidden'}
    >
      <s.Title>Projects</s.Title>
      <s.Container id="project-container">
        {projectsCtx.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </s.Container>
    </s.Projects>
  );
}
