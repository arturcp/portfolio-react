import React from "react";
import ReactDom from "react-dom";

import {parameterize} from '../../Utils'

class Promo extends React.Component {
  constructor(props) {
    super(props);

    this.promo = props.conference.promo;
  }

  render() {
    if (this.promo) {
      let promoImage = require(`../../../assets/images/conferences/${this.promo.image}`);

      return (
        <section className="text-center">
          <img src={promoImage} className={`promo-image glightbox ${parameterize(this.props.conference.name)}`} alt={this.promo.alt} />
        </section>
      )
    } else {
      return null;
    }
  }
}

export default Promo;
