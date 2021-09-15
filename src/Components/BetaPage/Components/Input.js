import React from "react";
import { Input, Label } from "./Input.style";

export default (props) => {
  return (
    <div>
      <Label>{props.label}</Label>
      <Input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        autoComplete="off"
      />
    </div>
  );
};
