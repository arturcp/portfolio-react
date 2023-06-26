import Biography from './speaker/Biography';
import NextConferences from './speaker/NextConferences';
import PastConferences from './speaker/PastConferences';
import SocialMedia from './SocialMedia';

export default function PageRight() {
  return(
    <div className="page page-right">
      <div className="page-inner">
        <SocialMedia />
        <Biography />
        <NextConferences />
        <hr />
        <PastConferences />
      </div>
    </div>
  )
}
