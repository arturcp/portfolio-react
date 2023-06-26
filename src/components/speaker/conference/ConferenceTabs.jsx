/* eslint-disable react/prop-types */
import { Suspense, lazy } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Conference from "../Conference";

import 'react-tabs/style/react-tabs.css';

const Polaroids = lazy(() => import("./Polaroids"));
const Slides = lazy(() => import("./Slides"));
const Promo = lazy(() => import("./Promo"));

export default function ConferenceTabs({ conference, collapsibleId }) {
  const bindGallery = () => {
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      GLightbox({});
    }, 1000);
  };

  return(
    <Tabs onSelect={index => bindGallery(index)}>
      <TabList>
        <Tab>Description</Tab>
        {conference.video && <Tab>Video</Tab>}
        {conference.photos && conference.photos.length > 0 && <Tab>Photos</Tab>}
        {conference.promo && <Tab>Promo</Tab>}
        {conference.slides && <Tab>Slides</Tab>}
      </TabList>

      <TabPanel>
        <Conference conference={conference} key={collapsibleId} />
      </TabPanel>

      {conference.video && (
        <TabPanel>
          <Suspense fallback={<div>Loading...</div>}>
            <iframe className="talk-video" src={conference.video} frameBorder="0" allowFullScreen></iframe>
          </Suspense>
        </TabPanel>
      )}
      {conference.photos && conference.photos.length > 0 && (
        <TabPanel forceRender={false}>
          <Suspense fallback={<div>Loading...</div>}>
            <Polaroids conference={conference} />
          </Suspense>
        </TabPanel>
      )}
      {conference.promo && (
        <TabPanel>
          <Suspense fallback={<div>Loading...</div>}>
            <Promo conference={conference} />
          </Suspense>
        </TabPanel>
      )}
      {conference.slides && (
        <TabPanel forceRender={false}>
          <Suspense fallback={<div>Loading...</div>}>
            <Slides conference={conference} collapsibleId={collapsibleId} />
          </Suspense>
        </TabPanel>
      )}
    </Tabs>
  )
}
