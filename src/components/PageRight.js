import React from "react";
import ReactDOM from "react-dom";

import SocialMedia from "./SocialMedia";
import Biography from "./speaker/Biography";
import NextConferences from "./speaker/NextConferences";

class PageRight extends React.Component {
  render () {
    return(
      <div className="page page-right">
        <div className="page-inner">
          <SocialMedia />
          <Biography />
          <NextConferences />
        </div>
      </div>
    )
  }
}

export default PageRight;
