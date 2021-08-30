import React from "react";
import { cardTitle, cardIcon } from "../Css/CardTitle.style";

export default (props) => {
  return (
    <div className="feature">
      {/* <img className="feature__icon" src={props.icon} alt="Icon" /> */}
      {/* <h3 className="feature__title"></h3> */}
      <cardIcon>
        <img src={props.icon} alt="Icon" />
      </cardIcon>
      <cardTitle>{props.title}</cardTitle>
      <p className="feature__description">{props.description}</p>
    </div>
  );
};
