import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Buttons/Button";
import "./CheckoutSummary.css";

function CheckoutSummary(props) {
  return (
    <div className="checkoutSummary">
      <h1>We hope it's tasty </h1>
      <div style={{ width: "80%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked> CANCLE</Button>
      <Button clicked> SUCCESS</Button>
    </div>
  );
}

export default CheckoutSummary;
