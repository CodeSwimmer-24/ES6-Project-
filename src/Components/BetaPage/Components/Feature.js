import React from "react";
import { Feature } from "./Features.style";

export default (props) => {
  return (
    <Feature className={props.class}>
      <img src={props.icon} alt="Icon" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Feature>
  );
};
