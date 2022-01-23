import React from "react";
import ReactDOM from "react-dom";

class Avatar extends React.Component {
  render () {
    return(
      <div className="profile">
        <img src={`images/profile/${this.props.type}.jpg`} alt={this.props.subtitle} data-profile={this.props.type} data-avatar-trigger={"back-" + this.props.direction} />
      </div>
    )
  }
}

export default Avatar;
