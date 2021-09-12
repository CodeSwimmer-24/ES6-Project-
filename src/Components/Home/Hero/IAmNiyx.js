import React from "react";
import "./IAmNeyx.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
export default () => {
  return (
    <div className="neyx__container">
      <div className="neyx__container--left">
        <img src="https://servixer.com/wp-content/uploads/2020/07/Email-marketing-strategy-05-700x544-1.png" />
      </div>
      <div className="neyx__container--right">
        <h1>
          Hi, I'm NeyX,
          <span> Skilled Administrative and Support Professional</span>
        </h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.{" "}
        </p>
        <Link to="/about" className="neyx__button">
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  );
};
