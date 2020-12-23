import React from "react";
import ReactDOM from "react-dom";

class Skill extends React.Component {
  image() {
    return require(`../../assets/images/skills/${this.props.image}`);
  }

  render() {
    let extraClass = this.props.extraClass ? this.props.extraClass : ''

    return(
      <span className="tooltip" data-tip={this.props.name}>
        <img src={this.image()} className={`skill-icon ${extraClass}`} />
      </span>
    )
  }
}

export default Skill;
