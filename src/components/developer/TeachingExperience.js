import React from "react";
import ReactDOM from "react-dom";

import {parameterize, writeParagraphs} from '../Utils'

class TeachingExperience extends React.Component {
  contents() {
    const experience = this.props.experience;

    if (experience.description.contents && experience.description.contents.length > 0) {
      const contentList = experience.description.contents.map((content, index) => {
        return(<li key={`${parameterize(experience.title)}-${index}`}>{content}</li>)
      });

      return(<ul>{contentList}</ul>)
    } else {
      return null;
    }
  }

  render() {
    const experience = this.props.experience;

    return(
      <section className="teaching-course">
        <h3><i className="fa fa-star"></i>{experience.title}</h3>
        <h4>{experience.date}</h4>
        {writeParagraphs(experience.title, experience.description.paragraphs)}
        {this.contents()}
      </section>
    )
  }
}

export default TeachingExperience;
