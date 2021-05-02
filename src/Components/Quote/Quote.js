import React from "react";
import "./Quote.css";
import Form from "./Form/Form";
import Solution from "./Solution/Solution";
function Quote() {
  return (
    <div className="quote">
      <div className="quote__container">
        <img src="https://www.ntaskmanager.com/wp-content/uploads/2019/05/teamwork-quote.png" />
        <h1>GET INSURED AND FEEL SECRUED</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="form">
        <Form />
        <Solution />
      </div>
    </div>
  );
}

export default Quote;
