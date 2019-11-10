import React from "react";
import ReactDom from "react-dom";

import Calendar from "./conference/Calendar";
import Icons from "./conference/Icons";
import Promo from "./conference/Promo";

import FlagIcon from '../FlagIcon.js'

class Conference extends React.Component {
  promo() {
    if (this.props.conference.status === "pending") {
      return(<Promo conference={this.props.conference} />);
    } else {
      return null;
    }
  }

  location() {
    const conference = this.props.conference

    if (conference.city && conference.country) {
      let flag = "";
      if (conference.flag) {
        flag = <FlagIcon code={conference.flag} size="lg" />;
      }

      return(
        <div className="information-group">
          {flag}
          {conference.city} - {conference.country}
        </div>
      )
    } else {
      return null;
    }
  }

  language() {
    const conference = this.props.conference;

    if (conference.language) {
      const codes = {
        "English": "us",
        "Italian": "it",
        "Portuguese": "br"
      }

      return (
        <div className="information-group">
          <FlagIcon code={codes[conference.language]} size="lg" />
          Language: {conference.language}
        </div>
      )
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
          <p className="conference-name">
            {conference.name}
          </p>

          <p className="talk-title">
            {conference.talk}
          </p>

          {this.location()}
          {this.language()}

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
