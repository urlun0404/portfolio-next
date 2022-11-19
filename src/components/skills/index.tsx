import * as s from './styles';
import Skill from './skill';
import SKILLS from 'constants/skills';
import { useRef } from 'react';
import useInView from 'hooks/use-in-view';

export default function Skills() {
  const observedRef = useRef<HTMLElement>(null);
  const { isInView } = useInView({
    observedRef,
    options: {
      threshold: 0.3,
    },
  });

  return (
    <s.Skills
      id="skills"
      ref={observedRef}
      className={isInView ? '' : 'hidden'}
    >
      <s.Title>skills</s.Title>
      <s.Container>
        {SKILLS.map((skill) => (
          <Skill key={skill.caption} {...skill} />
        ))}
      </s.Container>
    </s.Skills>
  );
}
