/* eslint-disable react/prop-types */
export default function MediaInformation({ photos, video }) {
  return(
    <div className="media-inside">
      {photos && <i className="fa fa-camera" aria-hidden="true"></i>}
      {video && <i className="fa fa-video-camera" aria-hidden="true"></i>}
    </div>
  )
}
