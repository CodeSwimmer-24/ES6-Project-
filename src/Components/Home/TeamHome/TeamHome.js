import React from "react";
import "./TeamHome.css";

export default () => {
  return (
    <div className="team">
      <h1 className="team__title">Meet our leadership team.</h1>
      <div className="profiles">
        <div
          className="profile"
          onClick={() => window.open("/team", "_blank")}
        >
          <img className="profile__photo" src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3 className="profile__name">Annel Bhusri</h3>
          <p className="profile__post">Co-Founder, Co-CEO</p>
        </div>
        <div
          className="profile"
          onClick={() => window.open("/team", "_blank")}
        >
          <img className="profile__photo" src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3 className="profile__name">Annel Bhusri</h3>
          <p className="profile__post">Co-Founder, Co-CEO</p>
        </div>
        <div
          className="profile"
          onClick={() => window.open("/team", "_blank")}
        >
          <img className="profile__photo" src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3 className="profile__name">Annel Bhusri</h3>
          <p className="profile__post">Co-Founder, Co-CEO</p>
        </div>
        <div
          className="profile"
          onClick={() => window.open("/team", "_blank")}
        >
          <img className="profile__photo" src="https://indiahikes.com/wp-content/uploads/2020/11/Nik-Passport-Size-Photo.jpg" />

          <h3 className="profile__name">Annel Bhusri</h3>
          <p className="profile__post">Co-Founder, Co-CEO</p>
        </div>
      </div>
    </div>
  );
};
