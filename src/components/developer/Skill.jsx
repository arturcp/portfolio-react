/* eslint-disable react/prop-types */
export default function Skill({ extraClass, image, name }) {
  return(
    <span className="tooltip" data-tip={name}>
      <img src={`images/skills/${image}`} className={`skill-icon ${extraClass || ''}`} />
    </span>
  )
}
