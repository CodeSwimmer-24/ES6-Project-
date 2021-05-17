import React from "react";
import "./TeamHome.css";
import { Link } from "react-router-dom";
function TeamHome() {
  return (
    <div className="team">
      <h1>Meet our leadership team.</h1>
      <div className="team__container">
        <td
          className="team__profiles"
          onClick={() => window.open("/team", "_blank")}
        >
          <img src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3>Annel Bhusri</h3>
          <p>Co-Founder, Co-CEO</p>
        </td>
        <td
          className="team__profiles"
          onClick={() => window.open("/team", "_blank")}
        >
          <img src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3>Annel Bhusri</h3>
          <p>Co-Founder, Co-CEO</p>
        </td>
        <td
          className="team__profiles"
          onClick={() => window.open("/team", "_blank")}
        >
          <img src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3>Annel Bhusri</h3>
          <p>Co-Founder, Co-CEO</p>
        </td>
        <td
          className="team__profiles"
          onClick={() => window.open("/team", "_blank")}
        >
          <img src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3>Annel Bhusri</h3>
          <p>Co-Founder, Co-CEO</p>
        </td>
      </div>
    </div>
  );
}

export default TeamHome;
