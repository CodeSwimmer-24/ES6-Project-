import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideBar.css";
import Aux from "../../../HOC/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

function SideBar(props) {
  return (
    <Aux>
      <div className="Sidebar">
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default SideBar;
