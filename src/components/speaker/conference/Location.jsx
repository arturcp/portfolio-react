/* eslint-disable react/prop-types */
import Icon from './Icon';

export default function Location({ location }) {
  return (
    <>
      {location && <Icon url={location.url} name="Location" />}
    </>
  )
}
