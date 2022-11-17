import * as s from './styles';
import Image from 'next/image';
import { ProjectsContext } from 'store/project-context';
import { useContext } from 'react';
import type { ProjectsKeys } from 'constants/project';

interface Props {
  project: ProjectsKeys;
}

export default function ProjectDetails(props: Props) {
  const projectsCtx = useContext(ProjectsContext);
  const project = projectsCtx[props.project];

  return (
    <s.ProjectDetails>
      <s.Header>
        <s.HeaderTitleGroup>
          <h2>{project.caption}</h2>
          <h5>{project.details.skills.join(' / ')}</h5>
        </s.HeaderTitleGroup>
        <s.ImageContainer>
          <s.ImageOverlap />
          <Image src={project.src} alt={project.alt} width={0} height={0} />
        </s.ImageContainer>
      </s.Header>
      <s.Details>
        <h5>PROJECT</h5>
        <h4>Overview</h4>
        <ul>
          {project.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <s.LinkGroup>
          <s.DemoLink href={project.link.demo}>DEMO</s.DemoLink>
          <s.DemoLink href={project.link.github}>CODE</s.DemoLink>
          <s.BackLink href="/#projects">back</s.BackLink>
        </s.LinkGroup>
      </s.Details>
    </s.ProjectDetails>
  );
}
