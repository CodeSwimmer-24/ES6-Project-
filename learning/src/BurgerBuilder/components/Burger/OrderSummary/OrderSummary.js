import React from "react";
import Aux from "../../../HOC/Aux";
import Button from "../../UI/Buttons/Button";

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((index) => {
    return (
      <li key={index}>
        {index}: {props.ingredients[index]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <h4>
        Total price :{" "}
        <span style={{ color: "#944317" }}>${props.pricing.toFixed(2)}</span>
      </h4>

      <button
        style={{
          background: "transparent",
          border: "none",
          color: "#944317",
          cursor: "pointer",
        }}
        onClick={props.cancel}
      >
        CANCEL
      </button>
      <button
        style={{
          background: "transparent",
          border: "none",
          color: "#5c9210",
          cursor: "pointer",
        }}
        onClick={props.continue}
      >
        CONTINUE
      </button>
    </Aux>
  );
}

export default OrderSummary;
