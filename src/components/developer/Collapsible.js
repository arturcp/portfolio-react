import React from "react";
import ReactDOM from "react-dom";

class Collapsible extends React.Component {
  render() {
    return(
      <div className="wrap-collabsible">
      	<input id="collapsible-about" className="toggle" type="checkbox" defaultChecked />
			  <label htmlFor="collapsible-about" className="lbl-toggle">{this.props.title}</label>
			  <div className="collapsible-content">
			    <div className="content-inner">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Collapsible;
