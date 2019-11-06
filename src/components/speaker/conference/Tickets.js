import React from "react";
import ReactDom from "react-dom";

import Icon from "./Icon";

class Tickets extends React.Component {
  constructor(props) {
    super(props);

    this.tickets = props.tickets;
  }

  render() {
    if (this.tickets) {
      return <Icon link={this.tickets.link} name="Tickets" />
    } else {
      return null;
    }
  }
}

export default Tickets;
