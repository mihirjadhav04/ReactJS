import React from 'react'
import "../App.css"

function Button(props) {
  return (
    <button className="form-button">{props.buttonText}</button>
  )
}

export default Button;