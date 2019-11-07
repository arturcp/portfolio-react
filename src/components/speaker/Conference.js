import React from "react";
import ReactDom from "react-dom";

import Calendar from "./conference/Calendar";
import Icons from "./conference/Icons";
import Promo from "./conference/Promo";

class Conference extends React.Component {
  promo() {
    if (this.props.conference.status === "pending") {
      return(<Promo conference={this.props.conference} />);
    } else {
      return null;
    }
  }

  render() {
    let conference = this.props.conference;

    return (
      <div className="pure-g">
        <Calendar month={conference.date.month} day={conference.date.day} weekDay={conference.date.weekDay} />

        <div className="pure-u-sm-1-1 pure-u-md-4-5 pure-u-lg-4-5">
          <p className="first-paragraph">
            {conference.name}
          </p>

          <p className="first-paragraph">
            {conference.talk}
          </p>

          {conference.paragraphs.map((paragraph, paragraphIndex) => {
            return <p key={`paragraph-${conference-name}-${paragraphIndex}`} dangerouslySetInnerHTML={{__html: paragraph}}></p>
          })}

          {this.promo()}
          <Icons conference={conference} />
        </div>
      </div>
    )
  }
}

export default Conference;
