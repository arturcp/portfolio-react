import React from "react";

class Polaroids extends React.Component {
  render() {
    return(
      <ul className="polaroids large-block-grid-4 small-block-grid-2">
        {this.props.conference.photos.map((photo, index) => {
          const image = `images/conferences/${this.props.conference.folder}/${photo.url}`;

          return(
            <li key={`conference-${this.props.conference.name}-photo-${index}`}>
              <a href={image} title={photo.title} className="glightbox">
                <img src={image} />
              </a>
            </li>
          )
        })}
			</ul>
    )
  }
}

export default Polaroids;
