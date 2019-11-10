import React from "react";
import ReactDOM from "react-dom";

class Collapsible extends React.Component {
  render() {
    const id = `collapsible-${this.props.id}`

    return(
      <div className="wrap-collabsible">
      	<input id={id} className="toggle" type="checkbox" defaultChecked={this.props.defaultChecked} />
			  <label htmlFor={id} className="lbl-toggle">{this.props.title}</label>
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
