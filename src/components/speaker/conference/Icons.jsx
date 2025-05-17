/* eslint-disable react/prop-types */
import Location from './Location';
import Website from './Website';
import Tickets from './Tickets';

export default function Icons({ conference }) {
  return (
    <section className="icons-container">
      <Location location={conference.icons.location} />
      <Website website={conference.icons.website} />
      {conference.status === "pending" && <Tickets tickets={conference.icons.tickets} />}
    </section>
  )
}
