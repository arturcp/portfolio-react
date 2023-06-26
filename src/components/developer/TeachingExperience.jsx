/* eslint-disable react/prop-types */
import { parameterize, writeParagraphs } from '../Utils'

export default function TeachingExperience({ experience }) {
  const contents = () => {
    return(
      <ul>
        {experience.description.contents.map((content, index) =>
          <li key={`${parameterize(experience.title)}-${index}`}>{content}</li>
        )}
      </ul>
    )
  }

  return(
    <section className="teaching-course">
      <h3><i className="fa fa-star"></i>{experience.title}</h3>
      <h4>{experience.date}</h4>
      {writeParagraphs(experience.title, experience.description.paragraphs)}
      {experience.description.contents && experience.description.contents.length > 0 && contents()}
    </section>
  )
}
