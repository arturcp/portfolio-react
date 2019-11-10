import React from "react";
import ReactDOM from "react-dom";

class Skill extends React.Component {
  image() {
    return require(`../../assets/images/skills/${this.props.image}`);
  }

  render() {
    return(
      <span className="tooltip" data-tip={this.props.name}>
        <img src={this.image()} className="skill-icon" />
      </span>
    )
  }
}

export default Skill;
