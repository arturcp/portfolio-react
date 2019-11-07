import React from "react";
import ReactDOM from "react-dom";

import Intro from "./Intro";
import PageLeft from "./PageLeft.js";
import PageRight from "./PageRight.js";

import {bindEvents} from './EventBinder'

class SplitLayout extends React.Component {
  componentDidMount() {
    require('../vendor/javascripts/cbpSplitLayout.js');
    bindEvents();
  }

  render () {
    return(
      <div id="splitlayout" className="splitlayout scheme-1">
        <Intro />
        <PageLeft />
        <PageRight />

        <a href="#" className="back back-right" title="back to intro">&rarr;</a>
        <a href="#" className="back back-left" title="back to intro">&larr;</a>
      </div>
    )
  }
}

export default SplitLayout;
