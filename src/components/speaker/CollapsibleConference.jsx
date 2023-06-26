/* eslint-disable react/prop-types */
import MediaInformation from "./conference/MediaInformation";
import ConferenceTabs from "./conference/ConferenceTabs";
import { parameterize } from '../Utils'

export default function CollapsibleConference({ conference }) {
  const collapsibleId = `collapsible-${parameterize(conference.name)}`;

  return(
    <div className="wrap-collabsible">
      <MediaInformation photos={conference.photos && conference.photos.length > 0} video={conference.video} />

      <input id={collapsibleId} className="toggle" type="checkbox" />
      <label htmlFor={collapsibleId} className="lbl-toggle">{conference.name}</label>

      <div className="collapsible-content">
        <div className="content-inner">
          <ConferenceTabs conference={conference} collapsibleId={collapsibleId} />
        </div>
      </div>
    </div>
  )
}
