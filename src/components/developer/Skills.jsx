import Collapsible from '../Collapsible';
import Skill from './Skill';
import skills from '../data/skills.json';

export default function Skills() {
  return(
    <Collapsible id="skills" title="Skills">
      <p>&nbsp;</p>
      {skills.map((skill, index) =>
        <Skill name={skill.name} image={skill.image} key={`skill-${index}`} extraClass={skill.extraClass} />
      )}

      <p>&nbsp;</p>
    </Collapsible>
  )
}
