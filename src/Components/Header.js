import { Button } from "@material-ui/core";
import React from "react";
import "./Header.css";
import logo from "./Images/logo.svg";
import video from "./Videos/video-2.mp4";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header__container">
      <video src={video} autoPlay loop muted />
      <center>
        <div className="headerContainer__body">
          <img className="header__logo" src={logo} />
          <h1>Because the Future is in our Hand</h1>
          <p>
            Artificial intelligence (AI), the ability of a digital computer or
            computer-controlled robot to perform tasks commonly associated with
            intelligent beings.
          </p>
        </div>
        <Link to="/about" className="btn__link"> 
          <Button className="btn1">Know More</Button>
        </Link>
          <Button className="btn2">Free Trail</Button>
      
      </center>
    </div>
  );
}

export default Header;
