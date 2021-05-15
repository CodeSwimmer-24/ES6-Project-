import React, { useState } from "react";
import "./Team.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";
import TeamMember from "./TeamMember";

function Team() {
  const [state, setState] = useState(false);
  const buttonText = state.visible ? " - read Less" : " + read More";

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="team">
      <div className="team__header"></div>
      <div className="team__heading">
        <h1>Our Team</h1>
      </div>
      <div className="team__subheading">
        <h1>We’re More Than A Digital Marketing Agency</h1>
        <p>
          A growth-minded, dynamic marketing team native to the digital
          landscape, specializing in identifying growth opportunities and
          producing data-driven inbound strategies.
        </p>
        <h2>We want to hear about your project or marketing goals.</h2>
      </div>
      <div className="team__carousel">
        <Carousel breakPoints={breakPoints}>
          <Item className="team__profileImage">
            <img src="https://ulconstruction.com.au/wp-content/uploads/2020/10/tm8.jpg" />
          </Item>
          <Item>
            <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm3.jpg" />
          </Item>
          <Item>
            <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm6.jpg" />
          </Item>
          <Item>
            <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg" />
          </Item>
          <Item>
            <img src="http://www.media-accountants.com/wp-content/uploads/2015/01/team-member-04.jpg" />
          </Item>
          <Item>
            <img src="https://aipf.in/wp-content/uploads/2019/05/tm7.jpg" />
          </Item>
          <Item>
            <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg" />
          </Item>
          <Item>
            <img src="https://diviteamplugin.divi-professional.com/wp-content/uploads/2017/08/team5.jpg" />
          </Item>
          <Item>
            <img src="https://www.johnpetersroofing.com/wp-content/uploads/2021/03/team-member-441x441-1.jpg" />
          </Item>
          <Item>
            <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm1.jpg" />
          </Item>
        </Carousel>
      </div>
      <Link to="" className="work-with-us">
        <button>Work With us</button>
      </Link>
      <div className="team__story">
        <h1>Our Story </h1>
        <p>
          We're a Black-owned, full-service digital marketing agency. We started
          in 2010 as a local SEO and video marketing company, and we thought we
          were headed to the promised land with that business model. By 2013, we
          realized that the industry was changing. It was taking more and more
          effort to win online, and we were trying everything, using every tool,
          and still coming up short with our clients.
        </p>
        <p>We knew we needed to pivot.</p>
        {state.visible ? (
          <div className="team__hideStory">
            <p>
              While researching, we discovered HubSpot and were convinced they
              were the solution to our problem of being an agency in an evolving
              digital landscape. During a conversation with HubSpot, we were
              told, "No. You aren't a good fit to be a HubSpot Partner." Turns
              out HubSpot REALLY knows their buyer persona, and we had a lot of
              growing to do. Thankfully, when we went to an exclusive party at
              Inbound in 2015, we ran into the salesperson who told us "No."
              After two years of hard work and commitment, our co-founder
              Darrell had the opportunity to go up to him and say, "Hey, by the
              way, Yokel Local is a HubSpot Partner now." This story is even
              referenced in the book Inbound Organization by Dan Tyre and Todd
            </p>
            <h6>
              <i>
                This story is even referenced in the book Inbound Organization
                by Dan Tyre and Todd Hockenberry.
              </i>
            </h6>
          </div>
        ) : (
          <p></p>
        )}
        <button
          className="show-hide"
          onClick={() => {
            setState({ visible: !state.visible });
          }}
        >
          {buttonText}
        </button>
      </div>
      <div className="team__banner">
        <div className="banner__left">
          <img src="https://moving2canada.com/wp-content/uploads/2019/12/HR_social.jpg" />
        </div>
        <div className="banner__right">
          <h3>Our Mission</h3>
          <h1>
            As an ROI-focused inbound marketing agency, we help businesses grow
            through online education, training, collaboration, and execution.
          </h1>
          <p>We experience success through the success of our clients.</p>
        </div>
      </div>
      <div className="team__journey">
        <div className="team__line"></div>
        <div className="team__journey-text">
          <h1>On our journey to becoming a HubSpot Agency Partner,</h1>
          <p>
            we learned that it's not about the tactics but the strategy. And
            that's made all the difference.
          </p>
          <p>
            We help business owners, executives, and marketing leaders who need
            a team of experts to carry out their marketing vision or develop a
            winning growth strategy. Our goal is to be the relief valve by
            employing a data-driven strategy that enhances your customer journey
            and increases conversions.
          </p>
          <button>Work With Us</button>
        </div>
      </div>
      <TeamMember />
      <div className="team__courceValue">
        <h1>Our Core Values</h1>
        <p>
          Our principles are the core of Yokel Local. They help drive every
          decision we make and every interaction we have with our clients.
        </p>
      </div>
      <div className="team__courceValue-cards">
        <div className="cards__top">
          <div className="card__right">
            <h1>INGENUITY</h1>
            <h2>
              We look for clever and creative solutions by always asking, "Why
              is that?"
            </h2>
          </div>
          <div className="card__left">
            <h1>PASSION</h1>
            <h2>We're fired up to serve our clients.</h2>
          </div>
        </div>
        <div className="cards__bottom">
          <div className="card__left">
            <h1>TRANSPA</h1>
            <h2>We don't hide the secret sauce.</h2>
          </div>
          <div className="card__right">
            <h1>PURPOSE</h1>
            <h2>Nothing we do is random, but we leave room for inspiration.</h2>
          </div>
        </div>
      </div>
      <div className="team__culture">
        <div className="culture__left">
          <h1>Our Culture</h1>
          <p>
            We're a close-knit team of enthusiastic marketers, strategists,
            creators, and educators. Think you'll fit in just fine?
          </p>
          <h3>join our team</h3>
        </div>
        <div className="culture__right">
          <img src="https://media.glassdoor.com/l/1469777/hr-team-group-fr-office.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Team;
