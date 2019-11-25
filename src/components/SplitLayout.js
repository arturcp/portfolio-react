import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import Intro from "./Intro";

import {bindEvents} from "./EventBinder";

const PageLeft = lazy(() => import("./PageLeft.js"));
const PageRight = lazy(() => import("./PageRight.js"));

class SplitLayout extends React.Component {
  componentDidMount() {
    require('../vendor/javascripts/cbpSplitLayout.js');
    bindEvents();
  }

  render () {
    return(
      <div id="splitlayout" className="splitlayout scheme-1">
        <Intro />
        <Suspense fallback={<div>Loading...</div>}>
          <PageLeft />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <PageRight />
        </Suspense>

        <a href="#" className="back back-right" title="back to intro">&rarr;</a>
        <a href="#" className="back back-left" title="back to intro">&larr;</a>
      </div>
    )
  }
}

export default SplitLayout;
