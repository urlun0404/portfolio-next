import * as s from './styles';
import Skill from './skill';
import SKILLS from 'constants/skills';

export default function Skills() {
  return (
    <s.Skills id="skills">
      <s.Title>skills</s.Title>
      <s.Container>
        {SKILLS.map((skill) => (
          <Skill key={skill.caption} {...skill} />
        ))}
      </s.Container>
    </s.Skills>
  );
}
