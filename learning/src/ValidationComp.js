import React from "react";

function ValidationComp(props) {
  return <div>{props.text > 5 ? "Text is too long" : "Text is too short"}</div>;
}

export default ValidationComp;
