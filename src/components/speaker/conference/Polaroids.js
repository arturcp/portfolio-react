import React from "react";
import ReactDom from "react-dom";

class Polaroids extends React.Component {
  render() {
    return(
      <ul className="polaroids large-block-grid-4 small-block-grid-2">
        {this.props.conference.photos.map((photo, index) => {
          const image = require(`../../../assets/images/conferences/${this.props.conference.folder}/${photo.url}`);

          return(
            <li key={`conference-${this.props.conference.name}-photo-${index}`}>
              <a href={image} title={photo.title}>
                <img src={image} className="glightbox" />
              </a>
            </li>
          )
        })}
			</ul>
    )
  }
}

export default Polaroids;
