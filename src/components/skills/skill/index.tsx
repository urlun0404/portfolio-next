import * as s from './styles';
import Image from 'next/image';

interface Props {
  caption: string;
  images: Array<{
    src: any;
    alt: string;
  }>;
}

export default function Skill(props: Props) {
  return (
    <s.Skill className="skill">
      {props.images.map((img) => (
        <s.FigContainer key={img.alt}>
          <Image src={img.src} alt={img.alt} width={0} height={0} />
        </s.FigContainer>
      ))}
    </s.Skill>
  );
}
