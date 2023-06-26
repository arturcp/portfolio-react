/* eslint-disable react/prop-types */
import Calendar from './conference/Calendar';
import Icons from './conference/Icons';
import Promo from './conference/Promo';
import FlagIcon from '../FlagIcon.jsx'

import { writeParagraphs } from '../Utils'

export default function Conference({ conference }) {
  const promo = () => {
    return(<Promo conference={conference} />);
  }

  const location = () => {
    return(
      <div className="information-group">
        {conference.flag && (<FlagIcon code={conference.flag} size="lg" />)}
        {conference.city} - {conference.country}
      </div>
    )
  }

  const language = () => {
    const codes = {
      'English': 'us',
      'Italian': 'it',
      'Portuguese': 'br'
    }

    return (
      <div className="information-group">
        <FlagIcon code={codes[conference.language]} size="lg" />
        Language: {conference.language}
      </div>
    )
  }

  return (
    <div className="pure-g">
      <Calendar month={conference.date.month} day={conference.date.day} weekDay={conference.date.weekDay} />

      <div className="pure-u-sm-1-1 pure-u-md-4-5 pure-u-lg-4-5">
        <p className="conference-name">
          {conference.name}
        </p>

        <p className="talk-title">
          {conference.talk}
        </p>

        {conference.city && conference.country && location()}
        {conference.language && language()}

        {writeParagraphs(conference.name, conference.paragraphs)}

        {conference.status === 'pending' && promo()}
        <Icons conference={conference} />
      </div>
    </div>
  )
}
