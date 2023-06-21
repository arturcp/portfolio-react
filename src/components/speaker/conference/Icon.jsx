/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
export default function Icon({ name, url }) {
  return (
    <section className="conference-icon">
      <a href={url} target="_blank">
        <img src={`images/conferences/icons/${name.toLowerCase()}.png`} />
      </a>
      <br />
      {name}
    </section>
  )
}
