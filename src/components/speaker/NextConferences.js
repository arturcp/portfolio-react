import React from "react";
import ReactDOM from "react-dom";

import Conference from "./Conference";
import conferences from '../data/conferences.json';

class NextConferences extends React.Component {
  pendingConferences() {
    return conferences.filter((conference) =>
      conference.status === "pending"
    );
  }

  render () {
    const conferences = this.pendingConferences().map((conference, index) =>
      <Conference conference={conference} key={`conference-${index}`} />
    );

    return(
      <section className="event">
        <br />
        <h2>Next events</h2>

        {conferences}
			</section>
    )
  }
}

export default NextConferences;
