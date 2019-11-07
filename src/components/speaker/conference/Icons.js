import React from "react";
import ReactDom from "react-dom";

import Location from "./Location";
import Website from "./Website";
import Tickets from "./Tickets";

class Icons extends React.Component {
  render() {
    let conference = this.props.conference;
    
    return (
      <section className="icons-container">
        <Location location={conference.icons.location} />
        <Website website={conference.icons.website} />
        <Tickets tickets={conference.icons.tickets} />
      </section>
    )
  }
}

export default Icons;
