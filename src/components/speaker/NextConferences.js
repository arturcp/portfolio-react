import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./conference/Calendar";
import Icon from "./conference/Icon";
import Promo from "./conference/Promo";
import Location from "./conference/Location";
import Website from "./conference/Website";
import Tickets from "./conference/Tickets";

import data from '../data/conferences.json';

class NextConferences extends React.Component {
  constructor(props) {
    super(props);
  }

  buildConference(conference, index) {
    return (
      <div className="pure-g" key={`conference-${index}`}>
        <Calendar month={conference.date.month} day={conference.date.day} weekDay={conference.date.weekDay} />

        <div className="pure-u-sm-1-1 pure-u-md-3-5 pure-u-lg-4-5">
          <p className="first-paragraph">
            {conference.name}
          </p>

          <p className="first-paragraph">
            {conference.talk}
          </p>

          {conference.paragraphs.map((paragraph, paragraphIndex) => {
            return <p key={`paragraph-${index}-${paragraphIndex}`}>{paragraph}</p>
          })}

          <Promo conference={conference} />
          <Location location={conference.icons.location} />
          <Website website={conference.icons.website} />
          <Tickets tickets={conference.icons.tickets} />
        </div>
      </div>
    )
  }

  render () {
    const items = data.conferences.map((conference, _index) =>
      this.buildConference(conference)
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
