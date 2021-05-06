import React from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./QuoteFooter.css";
import { Button } from "@material-ui/core";
function QuoteFooter() {
  return (
    <div className="quote__footer">
      <img src="https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg?width=700&crop=2:1" />
      <h1>Are you ready to work with us ?</h1>

      <div className="quote__btn">
        <Button className="quote__btn">
          <Link to="/contact" className="quote__contactbtn">
            Contact Us <DoubleArrowIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default QuoteFooter;
