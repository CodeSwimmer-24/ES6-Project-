import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button className="Button" onClick={props.clicked}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
