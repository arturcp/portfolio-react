import React from "react";
import ReactDOM from "react-dom";

import './assets/stylesheets/application.scss'

import SplitLayout from './components/SplitLayout';

const Container = () => {
  return(
    <div className="container-1">
      <SplitLayout />
    </div>
  );
};

ReactDOM.render(<Container />, document.getElementById("index"));
