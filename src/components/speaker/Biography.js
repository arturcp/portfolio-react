import React from "react";
import ReactDOM from "react-dom";

class Biography extends React.Component {
  render () {
    return(
      <section>
        <h2>Speaker bio</h2>

        <p>
          Artur is a developer, a speaker, and a writer. He has 8 years of
          experience with Ruby on Rails and 5 with C#. He worked in the largest
          magazine publisher in Brazil, building high-performance websites
          like Exame.com, with 90 million page views per month and 6 million
          unique visitors. In 2004 he won the 3rd place in the Brazilian stage
          of Microsoft Imagine Cup.
        </p>

        <p>
          He is currently working at Youse, a startup that aims to change the
          insurance market with a strong focus on innovation and technology.
        </p>
      </section>
    )
  }
}

export default Biography;
