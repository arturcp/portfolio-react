import React from "react";
import ReactDOM from "react-dom";

import './assets/stylesheets/application.scss'
import icon from './assets/images/HotZone.jpg'

const Index = () => {
  return(
    <div>
      <div>Hello React!</div>
      <img src={icon} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
