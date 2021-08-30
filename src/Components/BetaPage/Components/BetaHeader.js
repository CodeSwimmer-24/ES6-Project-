import React from "react";

export default () => {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__tagline">Success starts with a great product</h1>
        <p className="header__description">
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
          Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
          posuere nibh lobortis et.
        </p>
      </div>
      <div className="header__image">
        <img
          className="header__img"
          src="https://resources.construx.com/wp-content/uploads/2016/08/video-placeholder-brain-bites.png"
          alt=""
        />
      </div>
    </div>
  );
};
