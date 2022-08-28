import React, { Component } from "react";
import Aux from "../../../HOC/Aux";
import Button from "../../UI/Buttons/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[Order Summary] did update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (index) => {
        return (
          <li key={index}>
            {index}: {this.props.ingredients[index]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredient:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout</p>
        <h4>
          Total price :{" "}
          <span style={{ color: "#944317" }}>
            ${this.props.pricing.toFixed(2)}
          </span>
        </h4>

        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#944317",
            cursor: "pointer",
          }}
          onClick={this.props.cancel}
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
          onClick={this.props.continue}
        >
          CONTINUE
        </button>
      </Aux>
    );
  }
}

export default OrderSummary;
