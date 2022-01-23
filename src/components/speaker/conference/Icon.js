import React from "react";
import ReactDom from "react-dom";

class Icon extends React.Component {
  render() {
    return (
      <section className="conference-icon">
        <a href={this.props.url} target="_blank">
          <img src={`images/conferences/icons/${this.props.name.toLowerCase()}.png`} />
        </a>
        <br />
        {this.props.name}
      </section>
    )
  }
}

export default Icon;
