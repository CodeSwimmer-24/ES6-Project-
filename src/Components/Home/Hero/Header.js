import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Header.css";

export default () => {
  return (
    <div className="hero__container">
      <div className="hero__text">
        <h1>
          When it comes to <span>trading</span> meet NeyX the only solution.
        </h1>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          architecto.
        </h3>
        <div className="hero__button">
          <Link to="/beta" className="hero__joinUs">
            <Button>Join Beta</Button>
          </Link>
          <Link to="/about" className="hero__viewMore">
            <Button>View More</Button>
          </Link>
        </div>
      </div>
      <div className="hero__image">
        <img src="https://exeleonmagazine.com/wp-content/uploads/2020/02/isometric-business-people-meeting_23-2148289514.jpg" />
      </div>
    </div>
  );
};
