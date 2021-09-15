import React from "react";
import "./Innovation.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
export default () => {
  return (
    <div className="innovation">
      <div className="innovation__image">
        <h1>Come on, let me show a clip of the future in the next Side</h1>
        <h2>Throughout the Country</h2>
      </div>
      <div className="innovation__cards">
        <div className="innovation__card">
          <div className="title">
            <CheckCircleOutlinedIcon />
            <h2>Organized and Efficient</h2>
          </div>
          <p>
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services.״{" "}
          </p>
          <div className="card__footer">
            <h3>Jen B.</h3>
            <p>Milestone</p>
          </div>
        </div>
        <div className="innovation__card">
          <div className="title">
            <CheckCircleOutlinedIcon />
            <h2>Organized and Efficient</h2>
          </div>
          <p>
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services.״{" "}
          </p>
          <div className="card__footer">
            <h3>Jen B.</h3>
            <p>Milestone</p>
          </div>
        </div>
        <div className="innovation__card">
          <div className="title">
            <CheckCircleOutlinedIcon />
            <h2>Organized and Efficient</h2>
          </div>
          <p>
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services.״{" "}
          </p>
          <div className="card__footer">
            <h3>Jen B.</h3>
            <p>Milestone</p>
          </div>
        </div>
      </div>
    </div>
  );
};
