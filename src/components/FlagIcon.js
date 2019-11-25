import React from "react";
import ReactDOM from "react-dom";

class FlagIcon extends React.Component {
  render () {
    const classes = `flag-icon flag-icon-${this.props.code} ${this.props.className}`;

    return(
      <span className={classes}></span>
    )
  }
}

export default FlagIcon;
