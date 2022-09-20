import React from "react";
import "./Input.css";

function Input(props) {
  let inputElement = null;

  if (props.inputType == "input") {
    inputElement = <input className="inputElement" />;
  } else if (props.inputType == "textarea") {
    inputElement = <textarea className="inputElement" />;
  } else {
    inputElement = <input className="inputElement" />;
  }

  return (
    <div className="input">
      <label className="label">{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;
