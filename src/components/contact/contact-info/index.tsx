import * as s from './styles';
import Image from 'next/image';
import Links from 'components/layout/links';
import { person1 } from '../../../../public/assets/images';

export default function ContactInfo() {
  return (
    <s.Info id="info">
      <s.Brief>
        <Image src={person1} alt="picture of the author" />
        <p>You-Lun, Lin (Lauren, Lin)</p>
        <p>Web Developer</p>
        <p>
          This is You Lun &rsquo; s personal website. Please feel free to
          message me 😊
        </p>
      </s.Brief>
      <s.ContactLinks>
        <p>歡迎點選以下連結或者填寫表單與我聯絡💬</p>
        <s.LinksContainer>
          <Links />
        </s.LinksContainer>
      </s.ContactLinks>
    </s.Info>
  );
}
