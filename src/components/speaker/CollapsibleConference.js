import React from "react";
import ReactDom from "react-dom";

import MediaInformation from "./conference/MediaInformation";
import Conference from "./Conference";
import {parameterize} from '../Utils'

class CollapsibleConference extends React.Component {
  collapsibleId() {
    return `collapsible-${parameterize(this.props.conference.name)}`
  }

  render() {
    let conference = this.props.conference;

    return(
      <div className="wrap-collabsible">
        <MediaInformation photos="true" video="true" />

        <input id={this.collapsibleId()} className="toggle" type="checkbox" />
        <label htmlFor={this.collapsibleId()} className="lbl-toggle">{conference.name}</label>

        <div className="collapsible-content">
          <Conference conference={conference} key={this.collapsibleId()} />
        </div>
      </div>
    )
  }
}

export default CollapsibleConference;
