/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { parameterize, writeParagraphs } from '../Utils'

export default function WorkingExperience({ experience }) {
  const links = () => {
    return experience.urls.map((site) =>
      <a href={site.url} target="_blank" key={parameterize(site.text)}>{site.text}</a>
    ).reduce((prev, curr) => [prev, " | ", curr]);
  }

  return(
    <section id={parameterize(experience.company)} className="work-experience">
      <h3>
        <img src={`images/companies/${experience.image}`} className="company-logo"/> {experience.company}
      </h3>

      {writeParagraphs(experience.company, experience.description.paragraphs)}

      <p>
        <b>Role</b>: {experience.role}
      </p>

      <p>
        <b>Period</b>: {experience.period}
      </p>

      {links()}
    </section>
  )
}
