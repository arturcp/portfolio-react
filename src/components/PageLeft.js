import React from "react";
import ReactDOM from "react-dom";

import About from "./developer/About";
import Skills from "./developer/Skills";
import Projects from "./developer/Projects";
import WorkingExperiences from "./developer/WorkingExperiences";
import WritingSkills from "./developer/WritingSkills";

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
        </div>
      </div>
    )
  }
}

export default PageLeft;
