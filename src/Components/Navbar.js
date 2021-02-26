import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.svg";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobleMenu = () => setClick(false);

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

  window.addEventListener('resize', showButton);


  window.addEventListener('resize',showButton);
  return (
    <div className="navbar">
      <navbar >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} className="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="menu__item">
            <ul className={click ? 'nav-menu active' : 'nav-menu' }>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobleMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/about" className="nav-links" onClick={closeMobleMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Team" className="nav-links" onClick={closeMobleMenu}>
                  Team
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/Contact" className="nav-links" onClick={closeMobleMenu}>
                Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;
