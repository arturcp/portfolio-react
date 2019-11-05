import React from "react";
import ReactDOM from "react-dom";

import IntroSideLeft from "./IntroSideLeft";
import IntroSideRight from "./IntroSideRight";

class Intro extends React.Component {
  render () {
    return(
      <div className="intro">
        <IntroSideLeft />
        <IntroSideRight />
      </div>
    )
  }
}

export default Intro;
