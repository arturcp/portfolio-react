import React from "react";
import ReactDOM from "react-dom";

import IntroSide from "./IntroSide";

class Intro extends React.Component {
  render () {
    return(
      <div className="intro">
        <IntroSide type="developer" subtitle="Developer / Writer" direction="left" />
        <IntroSide type="speaker" subtitle="Speaker" direction="right" />
      </div>
    )
  }
}

export default Intro;
