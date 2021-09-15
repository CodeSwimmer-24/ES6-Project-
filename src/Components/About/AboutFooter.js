import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./About.css";

export default () => {
  return (
    <div className="about__footer">
      <h1>HIRE BARGAINATOR AND START GROWING WITH EASE!</h1>
      <h3>
        The intelligent sales assistant chatbot of the future. Using state of
        the art AI technology, Bargainator will begin generating extra revenue
        in minutes. Simply enable our pre-built interaction tools and campaign
        template and away you go!
      </h3>
      <Link to="/contact">
        <Button className="getInTouch">Get in touch</Button>
      </Link>
    </div>
  );
};
