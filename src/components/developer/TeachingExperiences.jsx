import Collapsible from "../Collapsible";
import TeachingExperience from "./TeachingExperience";
import teachingExperiences from '../data/teaching-experiences.json';

export default function TeachingExperiences() {
  const experiences = teachingExperiences.map((experience, index) =>
    <TeachingExperience experience={experience} key={`teaching-experience-${index}`} />
  );

  return(
    <Collapsible id="teaching-experience" title="Teaching Experiences" defaultChecked={false}>
      {experiences}
    </Collapsible>
  )
}
