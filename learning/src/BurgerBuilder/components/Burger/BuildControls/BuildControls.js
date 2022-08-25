import React from "react";
import "./BuildControl.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

function BuildControls(props) {
  return (
    <div className="BuildControl">
      <p>Current Price: {props.pricing.toFixed(2)} </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemove(ctrl.type)}
            disabled={props.disableBtn[ctrl.type]}
          />
        );
      })}
      <button disabled={!props.orderBtn} onClick={props.onShow}>
        ORDER NOW
      </button>
    </div>
  );
}

export default BuildControls;
