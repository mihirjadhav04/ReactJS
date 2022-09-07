import React from 'react'
import "../App.css"

function Button(props) {
  return (
    <button className="form-button" onClick={props.action}>{props.buttonText}</button>
  )
}

export default Button;