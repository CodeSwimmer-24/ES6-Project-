import { React, useState } from "react";
import Input from "./Input";
import { Form } from "./Form.style";
import { Button } from "@material-ui/core";

export default (props) => {
  if (document.getElementById("signUpForm") != null) {
    document.getElementById("signUpForm").style.display = props.trigger
      ? "flex"
      : "none";
  }
  return props.trigger ? (
    <Form>
      <h2>Sign Up</h2>
      <Input name="name" label="Name" type="text" />
      <Input name="email" label="Email Address" type="email" />
      <Input name="number" label="Number" type="number" />
      <Button>Sign Up</Button>
      <Button className="close" onClick={() => props.setTrigger(false)}>
        Close
      </Button>
    </Form>
  ) : (
    ""
  );
};
