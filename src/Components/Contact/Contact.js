import React from "react";
import "./Contact.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
function Contact() {
  return (
    <div className="contact">
      <div className="contact__header"></div>
      <div className="contact__heading">
        <h1>Contact</h1>
      </div>
      <div className="contact__details">
        <div className="contact__phoneIcon">
          <PhoneIphoneIcon />
          <p>123-456-789</p>
        </div>
        <div className="contact__peragraph">
          <p>
            Got any questions mate ?
            <br />
            Contact us today.
          </p>
        </div>
        <div className="contact__emailIcon">
          <DraftsIcon />
          <p>info.gmail.com</p>
        </div>
      </div>
      <div className="contact-body">
        <div className="contact__form">
          <form>
            <h1>
              Leave Me a Message <span>and I'll Get Back to You:</span>
            </h1>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="" required="required" />
              <span>E-Mail</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Subject</span>
            </div>
            <div className="inputBox">
              <textarea type="email" name="" required="required" />
              <span>Type your message...</span>
            </div>
          </form>
          <Button className="submit__button">Submit</Button>
        </div>
        <div className="contact__image">
          <img src="https://idfi.ge/public/upload/Covid/chatbot1.png" />
        </div>
      </div>
      <div className="contact__footer">
        <div className="contact__footerContainer">
          <h1>Meet Me on Social Media</h1>
          <div className="contact__icons">
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
