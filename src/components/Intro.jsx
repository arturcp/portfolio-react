import IntroSide from './IntroSide';

export default function Intro() {
  return(
    <div className="intro">
      <IntroSide type="developer" subtitle="Developer / Writer" direction="left" />
      <IntroSide type="speaker" subtitle="Speaker" direction="right" />
    </div>
  )
}
