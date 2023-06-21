import About from './developer/About';
import Languages from './developer/Languages';
import Projects from './developer/Projects';
import Skills from './developer/Skills';
import TeachingExperiences from './developer/TeachingExperiences';
import WorkingExperiences from './developer/WorkingExperiences';
import WritingSkills from './developer/WritingSkills';

export default function PageLeft() {
  return(
    <div className="page page-left">
      <div className="page-inner">
        <About />
        <Skills />
        <Projects />
        <WorkingExperiences />
        <WritingSkills />
        <TeachingExperiences />
        <Languages />
      </div>
    </div>
  )
}
