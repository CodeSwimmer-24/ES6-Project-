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
      <div className="teamMember__line3">
        <div className="profile3">
          <img src="https://static.wixstatic.com/media/6b4b47_0afd71d28dc24a58a93c0d68254fe71f~mv2.jpg/v1/fill/w_640,h_956,fp_0.50_0.50,q_90/6b4b47_0afd71d28dc24a58a93c0d68254fe71f~mv2.jpg" />
          <h2>Bree Schmidt</h2>
          <p>SEO & WEB ANALYTICS </p>
        </div>
        <div className="profile3">
          <img src="https://www.ofih.com.my/wp-content/uploads/2018/01/img-team-member-career-03.jpg" />
          <h2>Bree Schmidt</h2>
          <p>CONTENT STRATEGIST</p>
        </div>
        <div className="profile3">
          <img src="https://davidemphotography.com/wp-content/uploads/2019/08/Mens-Fashion-Influencer-Photoshoot-in-Seattle-4.jpg" />
          <h2>EDITORIAL MANAGER</h2>
          <p>HEAD OF DEVELOPMENT</p>
        </div>
        <div className="profile3">
          <img src="https://nextluxury.com/wp-content/uploads/Scarves-Fashion-Accessories-For-Men.jpg" />
          <h2>Bree Schmidt</h2>
          <p>EDITORIAL MANAGER</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
