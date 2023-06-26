/* eslint-disable react/prop-types */
import Avatar from './Avatar';

export default function IntroSide({ direction, subtitle, type }) {
  const reverseDirection = direction === 'left' ? 'right' : 'left';

  return(
    <div className={`side side-${direction}`}>
      <div className="intro-content">
        <Avatar type={type} subtitle={subtitle} direction={reverseDirection} />
        <h1>
          <span>Artur Caliendo Prado </span>
          <span>{subtitle}</span>
        </h1>
      </div>
      <div className="overlay"></div>
    </div>
  )
}
