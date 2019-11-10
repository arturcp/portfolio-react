import React from "react";
import ReactDOM from "react-dom";

import Collapsible from "../Collapsible";
import Skill from "./Skill";
import data from '../data/skills.json';

class Skills extends React.Component {
  render() {
    const skills = data.map((skill, index) =>
      <Skill name={skill.name} image={skill.image} key={`skill-${index}`} />
    );

    return(
      <Collapsible id="skills" title="Skills">
        <p>&nbsp;</p>
        {skills}

  			<p>&nbsp;</p>
      </Collapsible>
    )
  }
}

export default Skills;
