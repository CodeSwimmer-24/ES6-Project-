import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  //  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobleMenu = () => setClick(false);

  //  const onClickActive = () => {
  //   setActive(!click);
  // };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h2>
            Ney <i>X</i>
          </h2>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <li className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu "}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-links"
              activeClassName="main-nav-active"
              onClick={closeMobleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-links "
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/service"
              className="nav-links "
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              Service & Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/demo"
              className="nav-links "
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              Demo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links "
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
