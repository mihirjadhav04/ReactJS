import React from 'react'
import "../App.css"

function Button(props) {
  return (
    <button type={props.type} className="form-button" onClick={props.action}>{props.buttonText}</button>
  )
}

export default Button;