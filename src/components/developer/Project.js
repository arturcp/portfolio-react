import React from "react";
import ReactDom from "react-dom";

import {parameterize} from '../Utils'

class Project extends React.Component {
  projectUrl() {
      let image = require(`../../assets/images/projects/url.png`),
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
    let image = require(`../../assets/images/projects/github.png`),
        project = this.props.project;

    return(
      <a href={project.github} target="_blank">
        <img src={image} className="thumbnail" />
      </a>
    )
  }

  render() {
    let project = this.props.project;

    return(
      <section className="project-card">
				<h3 className="project-card__title">{project.name}</h3>
				<hr />
				<p className="project-card__urls">
          {this.projectUrl()}
          {this.github()}
				</p>

        {project.description.paragraphs.map((paragraph, paragraphIndex) => {
          return <p key={`paragraph-${parameterize(project.name)}-${paragraphIndex}`} dangerouslySetInnerHTML={{__html: paragraph}}></p>
        })}
			</section>
    )
  }
}

export default Project;
