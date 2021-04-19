import React from "react";
import "./Service.css";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import GetAppIcon from "@material-ui/icons/GetApp";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import CheckIcon from "@material-ui/icons/Check";
import LaptopMacOutlinedIcon from "@material-ui/icons/LaptopMacOutlined";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { Button } from "@material-ui/core";
function Service() {
  return (
    <div className="service">
      <div className="service__header"></div>
      <div className="service__heading">
        <h1>Service & Pricing</h1>
      </div>
      <div className="service__lines">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you
        </p>
      </div>
      <div className="service__cardheading">
        <h1>Services I Offer</h1>
        <p>
          {" "}
          I'm a paragraph. Click here to add your own text and edit me. Let your
        </p>
      </div>
      <div className="service__cards">
        <div className="service__card">
          <CheckIcon />
          <h3>We are introducing NeyX</h3>
          <p>
            one bot to solve all of thes It is going to revolutionize online
            shopping experience and make it even more affordable and fun
          </p>
        </div>
        <div className="service__card">
          <ChatOutlinedIcon />
          <h3>NeyX, bargain master</h3>
          <p>
            A smart bot, can negotiate. Bargain with the customer to satisfy
            both buyer and seller A smart bot, can negotiate. Bargain with the
            customer to satisfy both buyer and seller
          </p>
        </div>
        <div className="service__card">
          <GetAppIcon />
          <h3>NeyX, Easy Installation</h3>
          <p>
            It can be easily installed in every e-commerce websites, apps and
            let your customer bargain with you and reduce a huge load of human
            resource.
          </p>
        </div>
        <div className="service__card">
          <LaptopMacOutlinedIcon />
          <h3>NeyX, safe and fun</h3>
          <p>
            It will provide customised price tag for each individual customer
            according to their preference and respects every user’s privacy.
          </p>
        </div>
        <div className="service__card">
          <WebAssetOutlinedIcon />
          <h3>NeyX, new era of shopping</h3>
          <p>
            It is going to revolutionize online shopping experience and make it
            even more affordable and fun, say goodbye to old boring fixed price
            system.
          </p>
        </div>
        <div className="service__card">
          <LibraryAddCheckOutlinedIcon />
          <h3>NeyX, bargain master</h3>
          <p>
            A smart bot, can negotiate. Bargain with the customer to satisfy
            both buyer and seller A smart bot, can negotiate.
          </p>
        </div>
      </div>
      <div className="service__plan-card">
        <h1>Plan to choose</h1>
        <p>
          {" "}
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story.
        </p>
        <div className="plan__card-container">
          <div className="pricing__card">
            <FaFire className="pricing__icons" />
            <h1>Basic Plan</h1>
            <h2>15 Hours a Month</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <h4>250$ per month</h4>
          </div>
          <div className="pricing__card">
            <FaFire className="pricing__icons" />
            <h1>Basic Plan</h1>
            <h2>15 Hours a Month</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <h4>250$ per month</h4>
          </div>
          <div className="pricing__card">
            <FaFire className="pricing__icons" />
            <h1>Basic Plan</h1>
            <h2>15 Hours a Month</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <h4>250$ per month</h4>
          </div>
        </div>
      </div>
      <div className="service__image">
        <img src="https://www.esa.int/var/esa/storage/images/about_us/business_with_esa/19716975-3-eng-GB/Business_with_ESA_pillars.jpg" />
        <div className="service__planHeading">
          <h1>Plan</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        <div className="containerBox">
          <div className="contsinerRight">
            <h2>One Click Trading</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about yo
            </p>
          </div>
          <div className="pricing__card">
            <FaFire className="pricing__icons" />
            <h1>Basic Plan</h1>
            <h2>15 Hours a Month</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <Button>Get a Quote</Button>
          </div>
        </div>
        <div className="containerBox">
          <div className="pricing__card">
            <BsXDiamondFill className="pricing__icons" />
            <h1>Advanced Plan</h1>
            <h2>30 Hours a Month</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <Button>Get a Quote</Button>
          </div>
          <div className="contsinerRight">
            <h2>One Click Trading</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about yo
            </p>
          </div>
        </div>
        <div className="containerBox">
          <div className="contsinerRight">
            <h2>One Click Trading</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about yo
            </p>
          </div>
          <div className="pricing__card">
            <GiCrystalize className="pricing__icons" />
            <h1>Custom Plan</h1>
            <h2>Suitable for Your Needs</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <Button>Get a Quote</Button>
          </div>
        </div>
        <div className="service__pricingButton">
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  );
}

export default Service;
{
  /* <div className="service__plan">
<div className="service__planHeading">
  <h1>Plan</h1>
  <p>
    I'm a paragraph. Click here to add your own text and edit me. Let
    your users get to know you.
  </p>
</div>
<div className="containerBox">
  <div className="contsinerRight">
    <h2>One Click Trading</h2>
    <p>
      I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font. I’m a great place for you to
      tell a story and let your users know a little more about yo
    </p>
  </div>
  <div className="pricing__card">
    <FaFire className="pricing__icons" />
    <h1>Basic Plan</h1>
    <h2>15 Hours a Month</h2>
    <p>
      I'm a paragraph. Click here to add your own text and edit me. I’m
      a great place for you to tell a story and let your users know a
      little more about you.
    </p>
    <h4>250$ per month</h4>
  </div>
</div>
<div className="containerBox">
  <div className="pricing__card">
    <BsXDiamondFill className="pricing__icons" />
    <h1>Advanced Plan</h1>
    <h2>30 Hours a Month</h2>
    <p>
      I'm a paragraph. Click here to add your own text and edit me. I’m
      a great place for you to tell a story and let your users know a
      little more about you.
    </p>
    <h4>250$ per month</h4>
  </div>
  <div className="contsinerRight">
    <h2>One Click Trading</h2>
    <p>
      I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font. I’m a great place for you to
      tell a story and let your users know a little more about yo
    </p>
  </div>
</div>
<div className="containerBox">
  <div className="contsinerRight">
    <h2>One Click Trading</h2>
    <p>
      I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font. I’m a great place for you to
      tell a story and let your users know a little more about yo
    </p>
  </div>
  <div className="pricing__card">
    <GiCrystalize className="pricing__icons" />
    <h1>Custom Plan</h1>
    <h2>Suitable for Your Needs</h2>
    <p>
      I'm a paragraph. Click here to add your own text and edit me. I’m
      a great place for you to tell a story and let your users know a
      little more about you.
    </p>
    <h4>250$ per month</h4>
  </div>
</div>
<div className="service__pricingButton">
  <Button>Contact us</Button>
</div>
</div> */
}
