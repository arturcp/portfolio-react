import React from "react";
import ReactDOM from "react-dom";

import About from "./developer/About";
import Skills from "./developer/Skills";
import Projects from "./developer/Projects";
import WorkingExperiences from "./developer/WorkingExperiences";
import TeachingExperiences from "./developer/TeachingExperiences";
import WritingSkills from "./developer/WritingSkills";
import Languages from "./developer/Languages";

class PageLeft extends React.Component {
  render () {
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
}

export default PageLeft;
