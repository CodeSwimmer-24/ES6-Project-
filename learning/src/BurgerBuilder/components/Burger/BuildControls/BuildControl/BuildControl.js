import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Button">Less</button>
    <button className="Button">More</button>
  </div>
);

export default BuildControl;
