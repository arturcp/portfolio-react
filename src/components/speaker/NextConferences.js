import React from "react";
import ReactDOM from "react-dom";

import Conference from "./Conference";
import data from '../data/conferences.json';

class NextConferences extends React.Component {
  render () {
    const items = data.conferences.map((conference, index) =>
      <Conference conference={conference} key={`conference-${index}`}/>
    );

    return(
      <section className="event">
				<h2>Next events</h2>

        {items}
			</section>
    )
  }
}

export default NextConferences;
