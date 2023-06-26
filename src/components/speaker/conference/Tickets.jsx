/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function Tickets({ tickets }) {
  return (
    <>
      {tickets && <Icon url={tickets.url} name="Tickets" />}
    </>
  )
}
