import React from "react";
import ReactDOM from "react-dom";

import Collapsible from "../Collapsible";
import FlagIcon from '../FlagIcon.js'

import {parameterize} from '../Utils'
import languages from "../data/languages.json";

class Languages extends React.Component {
  languageBlock(language) {
    return (
      <span className="tooltip" data-tip={`${language.name} - ${language.level}`} key={parameterize(language.name)}>
        <FlagIcon code={language.flag} className="flag--spaced" />
      </span>
    )
  }

  spokenLanguages() {
    return languages.map((language, index) => {
      return this.languageBlock(language);
    });
  }

  render () {
    return(
      <Collapsible id="languages" title="Languages">
        <section className="wrap-for-tooltip">
				   {this.spokenLanguages()}
				</section>
      </Collapsible>
    )
  }
}

export default Languages;
