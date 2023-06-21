/* eslint-disable react/prop-types */
export default function Polaroids({ conference }) {
  return(
    <ul className="polaroids large-block-grid-4 small-block-grid-2">
      {conference.photos.map((photo, index) => {
        const image = `images/conferences/${conference.folder}/${photo.url}`;

        return(
          <li key={`conference-${conference.name}-photo-${index}`}>
            <a href={image} title={photo.title} className="glightbox">
              <img src={image} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
