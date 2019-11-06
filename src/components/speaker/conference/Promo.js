import React from "react";
import ReactDom from "react-dom";

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
          <img src={promoImage} className={`promo-image glightbox ${this.promo.class}`} alt={this.promo.alt} />
        </section>
      )
    } else {
      return null;
    }
  }
}

export default Promo;
