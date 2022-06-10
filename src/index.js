import React from "react";
import ReactDOM from "react-dom/client";

import './assets/stylesheets/application.scss'

import SplitLayout from './components/SplitLayout';

const Container = () => {
  return(
    <div className="container-1">
      <SplitLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('index'));

root.render(
  <Container />
);
