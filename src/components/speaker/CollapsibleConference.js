import React from "react";
import ReactDom from "react-dom";

import MediaInformation from "./conference/MediaInformation";
import Conference from "./Conference";
import Polaroids from "./conference/Polaroids";
import ConferenceTabs from "./conference/ConferenceTabs";
import {parameterize} from '../Utils'

class CollapsibleConference extends React.Component {
  collapsibleId() {
    return `collapsible-${parameterize(this.props.conference.name)}`
  }

  render() {
    const conference = this.props.conference;

    return(
      <div className="wrap-collabsible">
        <MediaInformation photos={conference.photos && conference.photos.length > 0} video={conference.video} />

        <input id={this.collapsibleId()} className="toggle" type="checkbox" />
        <label htmlFor={this.collapsibleId()} className="lbl-toggle">{conference.name}</label>

        <div className="collapsible-content">
          <div className="content-inner">
            <ConferenceTabs conference={conference} collapsibleId={this.collapsibleId()} />
          </div>
        </div>
      </div>
    )
  }
}

export default CollapsibleConference;
