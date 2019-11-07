import React from "react";
import ReactDom from "react-dom";

import MediaInformation from "./conference/MediaInformation";
import Conference from "./Conference";
import Polaroids from "./conference/Polaroids";
import {parameterize} from '../Utils'

class CollapsibleConference extends React.Component {
  collapsibleId() {
    return `collapsible-${parameterize(this.props.conference.name)}`
  }

  iframeVideo() {
    if (this.props.conference.video) {
      return(<iframe className="talk-video" src={this.props.conference.video} frameBorder="0" allowFullScreen></iframe>);
    } else {
      return null;
    }
  }

  photos() {
    if (this.props.conference.photos && this.props.conference.photos.length > 0) {
      return(<Polaroids conference={this.props.conference} />);
    } else {
      return null;
    }
  }

  render() {
    let conference = this.props.conference;

    return(
      <div className="wrap-collabsible">
        <MediaInformation photos="true" video="true" />

        <input id={this.collapsibleId()} className="toggle" type="checkbox" />
        <label htmlFor={this.collapsibleId()} className="lbl-toggle">{conference.name}</label>

        <div className="collapsible-content">
          <div className="content-inner">
						<h3>{conference.name}</h3>
            <Conference conference={conference} key={this.collapsibleId()} />

            {this.iframeVideo()}
            {this.photos()}
          </div>
        </div>
      </div>
    )
  }
}

export default CollapsibleConference;
