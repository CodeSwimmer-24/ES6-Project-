import React from "react";
import "./BurgerItems.css";
import PropTypes from "prop-type";

function BurgerItems(props) {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className="BreadBottom"></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="Meat"></div>;
      break;
    case "cheese":
      ingredient = <div className="Cheese"></div>;
      break;
    case "salad":
      ingredient = <div className="Salad"></div>;
      break;
    case "bacon":
      ingredient = <div className="Bacon"></div>;
      break;
  }
  return ingredient;
}

BurgerItems.prototype = {
  type: PropTypes.toString.isRequired,
};

export default BurgerItems;
