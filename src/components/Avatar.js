import React from "react";
import ReactDOM from "react-dom";

class Avatar extends React.Component {
  image() {
    const profileImage = require(`../assets/images/profile/${this.props.type}.jpg`);
    return profileImage;
  }

  render () {
    return(
      <div className="profile">
        <img src={this.image()} alt={this.props.subtitle} data-profile={this.props.type} data-avatar-trigger={"back-" + this.props.direction} />
      </div>
    )
  }
}

export default Avatar;
