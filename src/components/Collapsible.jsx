/* eslint-disable react/prop-types */
export default function Collapsible({ id, title, defaultChecked, children }) {
  const inputId = `collapsible-${id}`

  return(
    <div className="wrap-collabsible">
      <input id={inputId} className="toggle" type="checkbox" defaultChecked={defaultChecked} />
      <label htmlFor={inputId} className="lbl-toggle">{title}</label>
      <div className="collapsible-content">
        <div className="content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}
