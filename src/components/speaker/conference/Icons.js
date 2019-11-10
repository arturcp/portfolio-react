import React from "react";
import ReactDom from "react-dom";

import Location from "./Location";
import Website from "./Website";
import Tickets from "./Tickets";

class Icons extends React.Component {
  render() {
    const conference = this.props.conference,
        tickets = conference.status === "pending" ? <Tickets tickets={conference.icons.tickets} /> : null;

    return (
      <section className="icons-container">
        <Location location={conference.icons.location} />
        <Website website={conference.icons.website} />
        {tickets}
      </section>
    )
  }
}

export default Icons;
