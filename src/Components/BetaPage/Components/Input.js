import React from "react";
import {Input} from "./Input.style";

export default (props) => {
  return (
    <div>
      <Input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.label}
        value={props.value}
        autoComplete="off"
      />
    </div>
  );
};
