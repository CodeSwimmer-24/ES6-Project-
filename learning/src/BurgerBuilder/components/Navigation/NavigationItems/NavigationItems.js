import React from "react";
import "./Navigations.css";

function NavigationItems(props) {
  return (
    <ul className="NavigationItems">
      <li className="NavigationItem">
        <a className="links" href="/">
          Burger Builder
        </a>
        <a className="links" href="/">
          Checkout
        </a>
      </li>
    </ul>
  );
}

export default NavigationItems;
