import React from "react";
import ReactDOM from "react-dom";

import Collapsible from "./developer/Collapsible";

class PageLeft extends React.Component {
  render () {
    return(
      <div className="page page-left">
        <div className="page-inner">
          <Collapsible title="Artur" defaultChecked="checked">
            teste
          </Collapsible>
        </div>
      </div>
    )
  }
}

export default PageLeft;
