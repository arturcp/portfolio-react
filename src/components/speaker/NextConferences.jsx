import Conference from './Conference';
import conferences from '../data/conferences.json';

export default function NextConferences() {
  const pendingConferences = conferences.filter((conference) => conference.status === 'pending');

  const conferencesList = pendingConferences.map((conference, index) =>
    <Conference conference={conference} key={`conference-${index}`} />
  );

  return(
    <section className="event">
      {conferencesList.length > 0 && (
        <>
          <div>
            <br />
            <h2>Next events</h2>
          </div>
          {conferencesList}
        </>
      )}
    </section>
  )
}
