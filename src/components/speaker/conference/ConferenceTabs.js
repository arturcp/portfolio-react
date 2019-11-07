import React from "react";
import ReactDom from "react-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Conference from "../Conference";
import Polaroids from "./Polaroids";
import Promo from "./Promo";

import {bindGallery} from '../../EventBinder'

class ConferenceTabs extends React.Component {
  photosTab() {
    if (this.props.conference.photos && this.props.conference.photos.length > 0) {
      return(<Tab>Photos</Tab>)
    } else {
      return null;
    }
  }

  promoTab() {
    if (this.props.conference.promo) {
      return(<Tab>Promo</Tab>)
    } else {
      return null;
    }
  }

  videoTab() {
    if (this.props.conference.video) {
      return(<Tab>Video</Tab>)
    } else {
      return null;
    }
  }

  iframeVideo() {
    if (this.props.conference.video) {
      return(
        <TabPanel>
          <iframe className="talk-video" src={this.props.conference.video} frameBorder="0" allowFullScreen></iframe>
        </TabPanel>
      );
    } else {
      return null;
    }
  }

  photos() {
    if (this.props.conference.photos && this.props.conference.photos.length > 0) {
      return(
        <TabPanel forceRender={true}>
          <Polaroids conference={this.props.conference} />
        </TabPanel>
      );
    } else {
      return null;
    }
  }

  promo() {
    if (this.props.conference.promo) {
      return(
        <TabPanel>
          <Promo conference={this.props.conference} />
        </TabPanel>
      );
    } else {
      return null;
    }
  }

  render() {
    let conference = this.props.conference;

    return(
      <Tabs onSelect={index => bindGallery()}>
        <TabList>
          <Tab>Conference</Tab>
          {this.videoTab()}
          {this.photosTab()}
          {this.promoTab()}
        </TabList>

        <TabPanel>
          <Conference conference={conference} key={this.props.collapsibleId} />
        </TabPanel>
        {this.iframeVideo()}
        {this.photos()}
        {this.promo()}
      </Tabs>
    )
  }
}

export default ConferenceTabs;
