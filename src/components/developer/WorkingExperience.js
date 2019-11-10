import React from "react";
import ReactDOM from "react-dom";

import {parameterize, writeParagraphs} from '../Utils'

class WorkingExperience extends React.Component {
  image() {
    return require(`../../assets/images/companies/${this.props.experience.image}`);
  }

  links() {
    const experience = this.props.experience;

    return experience.urls.map((site, index) => {
      return(<a href={site.url} target="_blank" key={parameterize(site.text)}>{site.text}</a>)
    }).reduce((prev, curr) => [prev, " | ", curr]);
  }

  render() {
    const experience = this.props.experience;

    return(
      <section id={parameterize(experience.company)} className="work-experience">
        <h3>
          <img src={this.image()} className="company-logo"/> {experience.company}
        </h3>

        {writeParagraphs(experience.company, experience.description.paragraphs)}

        <p>
          <b>Role</b>: {experience.role}
        </p>

        <p>
          <b>Period</b>: {experience.period}
        </p>

        {this.links()}
      </section>
    )
  }
}

export default WorkingExperience;
