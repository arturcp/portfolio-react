import React, { Suspense, lazy } from "react";
import ReactDom from "react-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Conference from "../Conference";
import Promo from "./Promo";
import Slides from "./Slides";

import {bindGallery} from "../../EventBinder"

const Polaroids = lazy(() => import("./Polaroids"));

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

  slidesTab() {
    if (this.props.conference.slides) {
      return(<Tab>Slides</Tab>)
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
        <TabPanel forceRender={false}>
          <Suspense fallback={<div>Loading...</div>}>
            <Polaroids conference={this.props.conference} />
          </Suspense>
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

  slide() {
    if (this.props.conference.slides) {
      return(
        <TabPanel forceRender={false}>
          <Slides conference={this.props.conference} collapsibleId={this.props.collapsibleId} />
        </TabPanel>
      );
    } else {
      return null;
    }
  }

  render() {
    const conference = this.props.conference;

    return(
      <Tabs onSelect={index => bindGallery(index)}>
        <TabList>
          <Tab>Description</Tab>
          {this.videoTab()}
          {this.photosTab()}
          {this.promoTab()}
          {this.slidesTab()}
        </TabList>

        <TabPanel>
          <Conference conference={conference} key={this.props.collapsibleId} />
        </TabPanel>

        {this.iframeVideo()}
        {this.photos()}
        {this.promo()}
        {this.slide()}
      </Tabs>
    )
  }
}

export default ConferenceTabs;
