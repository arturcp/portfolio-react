import React from "react";
import ReactDOM from "react-dom";

import Avatar from "./Avatar";

class IntroSideLeft extends React.Component {
  reverseDirection() {
    return this.props.direction === 'left' ? 'right' : 'left';
  }

  render () {
    return(
      <div className={"side side-" + this.props.direction}>
        <div className="intro-content">
          <Avatar type={this.props.type} subtitle={this.props.subtitle} direction={this.reverseDirection()} />
          <h1>
            <span>Artur Caliendo Prado </span>
            <span>{this.props.subtitle}</span>
          </h1>
        </div>
        <div className="overlay"></div>
      </div>
    )
  }
}

export default IntroSideLeft;
