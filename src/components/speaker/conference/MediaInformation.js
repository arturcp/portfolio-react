import React from "react";
import ReactDom from "react-dom";

class MediaInformation extends React.Component {
  photoIcon() {
    if (this.props.photos) {
      return(<i className="fa fa-camera" aria-hidden="true"></i>);
    } else {
      return null;
    }
  }

  videoIcon() {
    if (this.props.video) {
      return(<i className="fa fa-video-camera" aria-hidden="true"></i>);
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className="media-inside">
        {this.photoIcon()}
        {this.videoIcon()}
			</div>
    )
  }
}

export default MediaInformation;
