import React from "react";
import ReactDOM from "react-dom";

import Collapsible from "../Collapsible";
import SocialMedia from "../SocialMedia";

class About extends React.Component {
  render() {
    return(
      <Collapsible id="about" title="About" defaultChecked="checked">
        <SocialMedia />
        <p>
          13 years eating, breathing and dreaming code. The first five years were dedicated to C# .Net,
          and then I shifted my career to Ruby on Rails and have been flying on it since then. It's been an amazing ride.
        </p>
      </Collapsible>
    )
  }
}

export default About;
