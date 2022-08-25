import React from "react";
import Aux from "../../../HOC/Aux";

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
    </Aux>
  );
}

export default OrderSummary;
