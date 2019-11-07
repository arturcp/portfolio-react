import React from "react";
import ReactDom from "react-dom";

import Icon from "./Icon";

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.location = props.location;
  }

  render() {
    if (this.location) {
      return <Icon url={this.location.url} name="Location" />
    } else {
      return null;
    }
  }
}

export default Location;
