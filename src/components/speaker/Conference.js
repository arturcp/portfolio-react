import React from "react";
import ReactDom from "react-dom";

import Calendar from "./conference/Calendar";
import Icon from "./conference/Icon";
import Promo from "./conference/Promo";
import Location from "./conference/Location";
import Website from "./conference/Website";
import Tickets from "./conference/Tickets";

class Conference extends React.Component {
  render() {
    let conference = this.props.conference;

    return (
      <div className="pure-g">
        <Calendar month={conference.date.month} day={conference.date.day} weekDay={conference.date.weekDay} />

        <div className="pure-u-sm-1-1 pure-u-md-3-5 pure-u-lg-4-5">
          <p className="first-paragraph">
            {conference.name}
          </p>

          <p className="first-paragraph">
            {conference.talk}
          </p>

          {conference.paragraphs.map((paragraph, paragraphIndex) => {
            return <p key={`paragraph-${conference-name}-${paragraphIndex}`}>{paragraph}</p>
          })}

          <Promo conference={conference} />

          <section className="icons-container">
            <Location location={conference.icons.location} />
            <Website website={conference.icons.website} />
            <Tickets tickets={conference.icons.tickets} />
          </section>
        </div>
      </div>
    )
  }
}

export default Conference;
