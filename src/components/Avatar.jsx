/* eslint-disable react/prop-types */
export default function Avatar({ direction, subtitle, type }) {
  return(
    <div className="profile">
      <img src={`images/profile/${type}.jpg`} alt={subtitle} data-profile={type} data-avatar-trigger={`back-${direction}`} />
    </div>
  )
}
