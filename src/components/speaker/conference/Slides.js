import React from "react";
import ReactDom from "react-dom";

class Slides extends React.Component {
  render() {
    return(
      <section>
        <b>Language:</b> <span>{this.props.conference.slides.language}</span>
        <div className="embeded-slides">
          <script async className="speakerdeck-embed" data-id={this.props.conference.slides.deckId} data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
        </div>
      </section>
    );
  }
}

export default Slides;
