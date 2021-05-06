import React from "react";
import "./Customer.css";
import PeopleIcon from "@material-ui/icons/People";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SecurityIcon from "@material-ui/icons/Security";
function Customer() {
  return (
    <div className="customer__container">
      <img src="https://blogs.constantcontact.com/wp-content/uploads/2016/12/Artboard-1.png" />
      <div className="box__containers">
        <div className="box__container">
          <PeopleIcon />
          <h1>500 K</h1>
          <h4>Satisfied Clients</h4>
        </div>
        <div className="box__container">
          <AttachMoneyIcon />
          <h1>550 K</h1>
          <h4>Insurance</h4>
        </div>
        <div className="box__container">
          <PersonOutlineIcon />
          <h1>150 K</h1>
          <h4>Repeat Client</h4>
        </div>
        <div className="box__container">
          <SecurityIcon />
          <h1>100 %</h1>
          <h4>Safe & Secure</h4>
        </div>
      </div>
    </div>
  );
}

export default Customer;
