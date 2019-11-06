import React from "react";
import ReactDOM from "react-dom";

import SplitLayout from './components/SplitLayout';
import GLightbox from 'glightbox'

import './assets/stylesheets/application.scss'
import icon from './assets/images/HotZone.jpg'

const Container = () => {
  return(
    <div className="container-1">
      <SplitLayout />
      <img src={icon} />
    </div>
  );
};

ReactDOM.render(<Container />, document.getElementById("index"));
