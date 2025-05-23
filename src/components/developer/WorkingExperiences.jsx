/* eslint-disable react/jsx-no-target-blank */
import Collapsible from '../Collapsible';
import WorkingExperience from './WorkingExperience';
import workingExperiences from '../data/working-experiences.json';

export default function WorkingExperiences() {
  const experiences = workingExperiences.map((experience, index) =>
    <WorkingExperience experience={experience} key={`experience-${index}`} />
  );

  return(
    <Collapsible id="working-experience" title="Working Experiences" defaultChecked={false}>
      <p>
        <i>To see the complete list of companies and roles check my
          <a href="https://www.facebook.com/artur.caliendoprado" target="_blank"> Linkedin</a>
        </i>
      </p>

      {experiences}
    </Collapsible>
  )
}
