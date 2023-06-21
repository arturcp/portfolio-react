/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { writeParagraphs } from '../Utils'

export default function Project({ project }) {
  return(
    <section className="project-card">
      <h3 className="project-card__title">{project.name}</h3>
      <hr />
      <p className="project-card__urls">
        {project.url && (
          <a href={project.url} target="_blank">
            <img src={"images/projects/url.png"} className="thumbnail" />
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank">
            <img src="images/projects/github.png" className="thumbnail" />
          </a>
        )}
      </p>

      {writeParagraphs(project.name, project.description.paragraphs)}
      {project.preview && <img src={`images/projects/preview/${project.preview}`} className="project-preview" />}
    </section>
  )
}
