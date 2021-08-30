import React from "react";

export default (props) => {
  return (
    <div className={`priceBox__${props.num}`}>
      <h6 className="priceBox__packageName">{props.packagename}</h6>
      <img
        src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
        alt="Price Icon"
        className="priceBox__icon"
      />
      <h2 className="priceBox__price">{props.price}</h2>
    </div>
  );
};
