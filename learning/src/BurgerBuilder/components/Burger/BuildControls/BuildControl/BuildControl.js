import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Button" onClick={props.remove} disabled={props.disabled}>
      Less
    </button>
    <button className="Button" onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
