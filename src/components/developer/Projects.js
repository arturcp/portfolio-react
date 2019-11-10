import React from "react";
import ReactDom from "react-dom";

import Collapsible from "../Collapsible";
import Project from "./Project";

import projects from "../data/projects.json";
import {parameterize, inGroupsOf} from "../Utils"

class Projects extends React.Component {
  buildProject(project) {
    if (project) {
      return <Project project={project} />
    } else {
      return null;
    }
  }

  projectsFromGroup(group) {
    return group.map((project, _index) =>
      <div className="pure-u-1-1 pure-u-md-1-2" key={`project-${parameterize(project ? project.name : "undefined")}`}>
        {this.buildProject(project)}
      </div>
    );
  }

  render() {
    const socialProjects = inGroupsOf(projects.social, 2).map((projectsGroup, groupIndex) =>
      <div className="pure-g" key={`social-project-line-${groupIndex}`}>
        {this.projectsFromGroup(projectsGroup)}
      </div>
    );

    const generalProjects = inGroupsOf(projects.general, 2).map((projectsGroup, groupIndex) =>
      <div className="pure-g" key={`general-project-line-${groupIndex}`}>
        {this.projectsFromGroup(projectsGroup)}
      </div>
    );

    return(
      <div>
        <Collapsible id="social-projects" title="Social projects">
          {socialProjects}
        </Collapsible>

        <Collapsible id="general-projects" title="General projects">
          <p>
            Some of my best work are live on the Internet and most of them are public on my Github. Here are some of my favorites:
          </p>

          {generalProjects}
        </Collapsible>
      </div>
    )
  }
}

export default Projects;
