/* eslint-disable react/prop-types */
import { parameterize } from '../../Utils'

export default function Promo({ conference }) {
  const { promo } = conference;
  return (
    <>
      {promo && promo.image && (
        <section className="text-center glightbox">
          <img src={`images/conferences/${conference.folder}/${promo.image}`} className={`promo-image ${parameterize(conference.name)}`} alt={promo.alt} />
        </section>
      )}
    </>
  )
}
