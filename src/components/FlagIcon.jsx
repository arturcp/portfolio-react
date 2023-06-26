/* eslint-disable react/prop-types */
export default function FlagIcon({ code, className }) {
  const classes = `flag-icon flag-icon-${code} ${className}`;

  return(
    <span className={classes}></span>
  )
}
