import React from "react";
import ReactDOM from "react-dom";

import CollapsibleConference from "./CollapsibleConference";
import conferences from '../data/conferences.json';

class PastConferences extends React.Component {
  pastConferences() {
    return conferences.filter((conference) =>
      conference.status === "done"
    );
  }

  render () {
    const conferences = this.pastConferences().map((conference, index) =>
      <CollapsibleConference conference={conference} key={`conference-${index}`}/>
    );

    return(
      <section className="past-event">
        <h2>Talks</h2>
        <p>You will find a video and/or pictures for the talks inside each one of the conferences below.</p>
        <p>Some of the conferences do not record the presentations, but I will put a link to the video whenever I have one.</p>

        {conferences}
      </section>
    );
  }
}

export default PastConferences;
