import React from "react";
import ReactDOM from "react-dom";

class SocialMedia extends React.Component {
  render () {
    return(
      <section className="social-media">
				<a href="https://medium.com/@artur.prado" className="fa fa-medium" target="_blank"></a>
				<a href="https://twitter.com/artur_caliendo" className="fa fa-twitter" target="_blank"></a>
				<a href="https://www.facebook.com/artur.caliendoprado" className="fa fa-facebook" target="_blank"></a>
				<a href="https://www.linkedin.com/in/artur-caliendo-prado-3a99ab102/" className="fa fa-linkedin" target="_blank"></a>
				<a href="https://github.com/arturcp" className="fa fa-github-alt" target="_blank"></a>
			</section>
    )
  }
}

export default SocialMedia;
