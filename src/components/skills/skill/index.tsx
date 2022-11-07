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
    <s.Skill>
      <s.FigContainer>
        {props.images.map((img) => (
          <Image
            key={img.alt}
            src={img.src}
            alt={img.alt}
            width={0}
            height={0}
          />
        ))}
      </s.FigContainer>
      <s.FigCaption>{props.caption}</s.FigCaption>
    </s.Skill>
  );
}
