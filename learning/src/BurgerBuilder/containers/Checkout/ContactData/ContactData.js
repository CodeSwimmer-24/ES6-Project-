import React, { Component } from "react";
import Button from "../../../components/UI/Buttons/Button";
import "./ContactData.css";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postNo: "",
    },
  };
  render() {
    return (
      <div className="contact">
        <h4>Enter Your contact details</h4>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postNo" placeholder="POST No" />
          <Button btnType="success">ORDER</Button>
        </form>
      </div>
    );
  }
}
