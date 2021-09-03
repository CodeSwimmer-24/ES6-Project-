import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="hero__container">
        <div className="hero__text">
          <h1>
            When it comes to<span> trading</span>
          </h1>
          <h1>meet NeyX the only solution.</h1>
          <h3>
            My name is fahad mahmood and i am creating this whole user
            interface.
          </h3>
          <div className="hero__button">
            <Link to="/beta" className="hero__joinUs">
              <Button>Join Beta</Button>
            </Link>
            <Link to="" className="hero__viewMore">
              <Button>View More</Button>
            </Link>
          </div>
        </div>
        <div className="hero__image">
          <img src="https://exeleonmagazine.com/wp-content/uploads/2020/02/isometric-business-people-meeting_23-2148289514.jpg" />
        </div>
        <div className="hero__button"></div>
      </div>
    </>
  );
}

export default Header;
