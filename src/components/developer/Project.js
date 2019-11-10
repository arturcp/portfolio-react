import React from "react";
import ReactDom from "react-dom";

import {parameterize, writeParagraphs} from '../Utils'

class Project extends React.Component {
  projectUrl() {
      const image = require(`../../assets/images/projects/url.png`),
          project = this.props.project;

      if (project.url) {
        return(
          <a href={project.url} target="_blank">
            <img src={image} className="thumbnail" />
          </a>
        )
      } else {
        return null;
      }
  }

  github() {
    const image = require(`../../assets/images/projects/github.png`),
        project = this.props.project;

    return(
      <a href={project.github} target="_blank">
        <img src={image} className="thumbnail" />
      </a>
    )
  }

  render() {
    const project = this.props.project;

    return(
      <section className="project-card">
				<h3 className="project-card__title">{project.name}</h3>
				<hr />
				<p className="project-card__urls">
          {this.projectUrl()}
          {this.github()}
				</p>

        {writeParagraphs(project.name, project.description.paragraphs)}
			</section>
    )
  }
}

export default Project;
