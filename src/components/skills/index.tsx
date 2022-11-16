import * as s from './styles';
import Skill from './skill';
import SKILLS from 'constants/skills';
import { useState, useEffect, useRef } from 'react';

export default function Skills() {
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
          threshold: 0.3,
        },
      );

      observer.observe(observedRef.current);
    }
  }, [observedRef]);

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
