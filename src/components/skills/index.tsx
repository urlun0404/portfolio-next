import * as s from './styles';
import Skill from './skill';

const SKILLS = [
  {
    caption: 'HTML',
    images: [{ src: '/assets/icons/icons8-html5-480x480.svg', alt: 'html5' }],
  },
  {
    caption: 'CSS',
    images: [{ src: '/assets/icons/icons8-css3-480x480.svg', alt: 'css3' }],
  },
  {
    caption: 'JavaScript',
    images: [
      { src: '/assets/icons/icons8-javascript-480x480.svg', alt: 'javascript' },
    ],
  },
  {
    caption: 'React/Redux',
    images: [
      { src: '/assets/icons/icons8-react-480x480.svg', alt: 'react' },
      { src: '/assets/icons/icons8-redux-480x480.svg', alt: 'redux' },
    ],
  },
  {
    caption: 'Next.js',
    images: [{ src: '/assets/icons/next-js-480x480.svg', alt: 'next.js' }],
  },
  {
    caption: 'Bundler',
    images: [
      { src: '/assets/icons/icons8-webpack-480x480.svg', alt: 'webpack' },
      { src: '/assets/icons/vite-480x480.svg', alt: 'vite' },
    ],
  },
  {
    caption: 'Git',
    images: [{ src: '/assets/icons/icons8-git-480x480.svg', alt: 'git' }],
  },
];

export default function Skills() {
  return (
    <s.Skills id="skills">
      <s.Title>skills</s.Title>
      <s.Container>
        {SKILLS.map((skill) => (
          <Skill
            key={skill.caption}
            caption={skill.caption}
            images={skill.images}
          />
        ))}
      </s.Container>
    </s.Skills>
  );
}
