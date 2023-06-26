/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function Website({ website }) {
  return (
    <>
      {website && <Icon url={website.url} name="Website" />}
    </>
  )
}
