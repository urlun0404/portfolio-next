import * as s from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLink } from 'react-icons/fi';
import { ProjectsType } from 'store/project-context';

interface Props extends ProjectsType {}

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
      <s.FigCaption>{'Capation'}</s.FigCaption>
      <s.MoreInfoLink>
        <Link href={`/${props.caption}`}>More Info</Link>
      </s.MoreInfoLink>
    </s.Project>
  );
}
