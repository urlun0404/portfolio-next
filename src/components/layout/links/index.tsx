import * as s from './styles';
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

export default function Links() {
  return (
    <>
      <s.Link
        href="mailto:urlun0404@gmail.com?subject=Feedback_&body=Message"
        target="_blank"
        title="Shoot me an email from your email client"
      >
        <AiFillMail />
      </s.Link>
      <s.Link
        href="https://www.linkedin.com/in/urlun0404"
        target="_blank"
        title="Linkedin"
      >
        <AiFillLinkedin />
      </s.Link>
      <s.Link
        href="https://github.com/urlun0404"
        target="_blank"
        title="GitHub"
      >
        <AiFillGithub />
      </s.Link>
      <s.Link
        href="https://twitter.com/urlun0404"
        target="_blank"
        title="Twitter"
      >
        <AiFillTwitterCircle />
      </s.Link>
    </>
  );
}
