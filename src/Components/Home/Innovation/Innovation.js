import React from "react";
import "./Innovation.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
function Innovation() {
  return (
    <div className="innovation">
      <div className="immovation__image">
        <img
          src="https://www.esa.int/var/esa/storage/images/about_us/business_with_esa/19716975-3-eng-GB/Business_with_ESA_pillars.jpg"
          alt="innovation"
        />
        <h1>Come on, let me show a clip of the future in the next Side</h1>
        <h2>Throughout the Country</h2>
      </div>
      <div className="innovation__cards">
        <div className="innovation__card">
          <CheckCircleOutlinedIcon />
          <h2>Organized and Efficient</h2>
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
          <CheckCircleOutlinedIcon />
          <h2>Organized and Efficient</h2>
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
          <CheckCircleOutlinedIcon />
          <h2>Organized and Efficient</h2>
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
}

export default Innovation;
