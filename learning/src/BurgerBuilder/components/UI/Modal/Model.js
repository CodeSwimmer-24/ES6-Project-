import React from "react";
import "./Model.css";
import Aux from "../../../HOC/Aux";
import Backdrop from "../Backdrop/Backdrop";

function Model(props) {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className="Modal">{props.children}</div>
    </Aux>
  );
}

export default Model;
