import React from "react";
import ReactDom from "react-dom";

class Icon extends React.Component {
  image() {
    const fileName = this.props.name.toLowerCase();

    return require(`../../../assets/images/conferences/icons/${fileName}.png`);
  }

  render() {
    return (
      <section className="conference-icon">
        <a href={this.props.url} target="_blank">
          <img src={this.image()} />
        </a>
        <br />
        {this.props.name}
      </section>
    )
  }
}

export default Icon;
