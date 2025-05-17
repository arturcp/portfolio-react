import Collapsible from '../Collapsible';
import Project from './Project';
import { parameterize, inGroupsOf } from '../Utils'

import projects from '../data/projects.json';

export default function Projects() {
  const projectsFromGroup = (group) => {
    return group.map((project) =>
      <div className="pure-u-1-1 pure-u-md-1-2" key={`project-${parameterize(project ? project.name : "undefined")}`}>
        {project && <Project project={project} />}
      </div>
    );
  }

  const socialProjects = inGroupsOf(projects.social, 2).map((projectsGroup, groupIndex) =>
    <div className="pure-g" key={`social-project-line-${groupIndex}`}>
      {projectsFromGroup(projectsGroup)}
    </div>
  );

  const openSourceProjects = inGroupsOf(projects.openSource, 2).map((projectsGroup, groupIndex) =>
    <div className="pure-g" key={`open-source-project-line-${groupIndex}`}>
      {projectsFromGroup(projectsGroup)}
    </div>
  );

  const generalProjects = inGroupsOf(projects.general, 2).map((projectsGroup, groupIndex) =>
    <div className="pure-g" key={`general-project-line-${groupIndex}`}>
      {projectsFromGroup(projectsGroup)}
    </div>
  );

  return(
    <div>
      <Collapsible id="social-projects" title="Social projects">
        {socialProjects}
      </Collapsible>

      <Collapsible id="open-source-projects" title="Open source projects">
        {openSourceProjects}
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
