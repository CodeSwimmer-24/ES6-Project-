import React from "react";
import "./BackDrop.css";

function Backdrop(props) {
  return (
    <>
      {props.show ? (
        <div className="Backdrop" onClick={props.clicked}></div>
      ) : null}
    </>
  );
}

export default Backdrop;
