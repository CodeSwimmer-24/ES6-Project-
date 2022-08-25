import React from "react";
import "./Model.css";

function Model(props) {
  return <div className="Modal">{props.children}</div>;
}

export default Model;
