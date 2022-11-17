import * as s from './styles';
import Image from 'next/image';
import { FiGithub, FiLink } from 'react-icons/fi';
import type * as T from 'store/project-context/types';

interface Props extends T.Project {}

export default function Project(props: Props) {
  return (
    <s.Project>
      <s.FigContainer>
        <Image
          key={props.name}
          src={props.src}
          alt={props.alt}
          width={0}
          height={0}
        />
        <s.DemoLinkContainer id="demo">
          <s.DemoLink
            className="demo-link"
            title="Source Code"
            href={props.link.github}
            target="_blank"
          >
            <FiGithub />
          </s.DemoLink>
          <s.DemoLink
            className="demo-link"
            title="Demo Website"
            href={props.link.demo}
            target="_blank"
          >
            <FiLink />
          </s.DemoLink>
        </s.DemoLinkContainer>
      </s.FigContainer>
      <s.FigCaption className="caption">{props.name}</s.FigCaption>
      <s.MoreInfoLink
        href={{
          pathname: `projects/${props.details.query}`,
        }}
      >
        More Info
      </s.MoreInfoLink>
    </s.Project>
  );
}
