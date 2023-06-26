import Collapsible from '../Collapsible';
import FlagIcon from '../FlagIcon.jsx'

import { parameterize } from '../Utils'
import languages from '../data/languages.json';

export default function Languages() {
  return(
    <Collapsible id="languages" title="Languages">
      <section className="wrap-for-tooltip">
        {languages.map((language) =>
          <span className="tooltip" data-tip={`${language.name} - ${language.level}`} key={parameterize(language.name)}>
            <FlagIcon code={language.flag} className="flag--spaced" />
          </span>
        )}
      </section>
    </Collapsible>
  )
}
