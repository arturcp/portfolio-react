import React from "react";
import ReactDom from "react-dom";

class Slides extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "//speakerdeck.com/assets/embed.js";
    script.classList.add("speakerdeck-embed");
    script.setAttribute("data-id", this.props.conference.slides.deckId);
    script.setAttribute("data-ratio", "1.77777777777778");
    script.async = true;

    const container = document.querySelector(`#${this.props.collapsibleId}-slides`)
    container.appendChild(script);
  }

  render() {
    return(
      <section>
        <div className="embeded-slides" id={`${this.props.collapsibleId}-slides`}></div>
      </section>
    );
  }
}

export default Slides;
