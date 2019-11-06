import React from "react";
import ReactDom from "react-dom";

class Icon extends React.Component {
  image() {
    const extension = this.props.name === "Location" ? "svg" : "png",
          fileName = this.props.name.toLowerCase();

    return require(`../../../assets/images/conferences/icons/${fileName}.${extension}`);
  }

  render() {
    return (
      <section className="conference-icon">
        <a href={this.props.link} target="_blank">
          <img src={this.image()} />
        </a>
        <br />
        {this.props.name}
      </section>
    )
  }
}

export default Icon;
