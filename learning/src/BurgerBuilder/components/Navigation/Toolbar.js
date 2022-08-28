import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import "./Toolbar.css";

function Toolbar() {
  return (
    <header className="Toolbar">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;
