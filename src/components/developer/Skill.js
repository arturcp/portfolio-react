import React from "react";

class Skill extends React.Component {
  render() {
    const extraClass = this.props.extraClass ? this.props.extraClass : ''
    const image = `images/skills/${this.props.image}`;

    return(
      <span className="tooltip" data-tip={this.props.name}>
        <img src={image} className={`skill-icon ${extraClass}`} />
      </span>
    )
  }
}

export default Skill;
