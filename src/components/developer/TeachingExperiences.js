import React from "react";
import ReactDOM from "react-dom";

import Collapsible from "../Collapsible";
import TeachingExperience from "./TeachingExperience";
import teachingExperiences from '../data/teaching-experiences.json';

class TeachingExperiences extends React.Component {
  render() {
    const experiences = teachingExperiences.map((experience, index) =>
      <TeachingExperience experience={experience} key={`teaching-experience-${index}`} />
    );

    return(
      <Collapsible id="teaching-experience" title="Teaching Experiences" defaultChecked={false}>
        {experiences}
      </Collapsible>
    )
  }
}

export default TeachingExperiences;
