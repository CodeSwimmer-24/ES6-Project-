import React from "react";
import "./TeamMember.css";
function TeamMember() {
  return (
    <div className="teamMember__page">
      <div className="teamMenber__hedding">
        <h1>Meet Our Team </h1>
        <p>
          We’re a growing team of digital marketing experts and thought leaders
          — full of personality minus the ego. We’re the wearer of many hats
          dedicated to helping companies likes yours grow.
        </p>
      </div>
      <div className="teamMember__profiles">
        <div className="teammember__profile1">
          <div className="profile1__image">
            <img src="https://i.pinimg.com/originals/e5/61/8b/e5618bd5e1d89bb9525e852be5fbb1a1.jpg" />
          </div>
          <div className="profile1__text">
            <h1>Stormie Andrews</h1>
            <p>FOUNDER</p>
            <h4>
              Stormie attributes his success in multiple performance-based
              industries on the belief that he was committed to providing
              significantly more value to his employers and customers than
              anyone else in the field
            </h4>
          </div>
        </div>
        <div className="profile2">
          <div className="profile__left">
            <div className="profile1__image2">
              <img src="http://parenthelpline.ca/wp-content/uploads/2018/08/mens-style-tips.jpg" />
            </div>
            <div className="profile1__text2">
              <h1>
                Darrell <i>Evans</i>
              </h1>
              <p>CO-FOUNDER</p>
              <h4>
                Stormie attributes his success in multiple performance-based
                industries on the belief that he was committed to providing
                significantly more value to his employers and customers than
                anyone else in the field
              </h4>
            </div>
          </div>
          <div className="profile__right">
            <div className="profile1__text2">
              <h1>De 'Borah Fortune </h1>
              <p>HEAD OF DEVELOPMENT</p>
              <h4>
                Stormie attributes his success in multiple performance-based
                industries on the belief that he was committed to providing
                significantly more value to his employers and customers than
                anyone else in the field
              </h4>
            </div>
            <div className="profile1__image2">
              <img src="https://i.pinimg.com/474x/0c/14/46/0c144667b3878ee3cb7316e2081f174a--mens-fashion-week-fashion-weeks.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
