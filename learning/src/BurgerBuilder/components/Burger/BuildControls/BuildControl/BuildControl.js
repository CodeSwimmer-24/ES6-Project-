import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <div style={{ display: "flex" }}>
      <button
        className="Button"
        onClick={props.remove}
        disabled={props.disabled}
        style={{ background: "#d9a875", color: "red" }}
      >
        Less
      </button>
      <button
        className="Button"
        onClick={props.added}
        style={{ background: "#d9a875", color: "green" }}
      >
        More
      </button>
    </div>
  </div>
);

export default BuildControl;
