import React from "react";
import ReactDom from "react-dom";

import Icon from "./Icon";

class Website extends React.Component {
  constructor(props) {
    super(props);

    this.website = props.website;
  }

  render() {
    if (this.website) {
      return <Icon url={this.website.url} name="Website" />
    } else {
      return null;
    }
  }
}

export default Website;
