import { Link } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>About US</h2>
          <Link className="link" to="/about">
            Blog
          </Link>
          <Link className="link" to="/about">
            Demo
          </Link>
          <Link className="link" to="/about">
            Customers
          </Link>
          <Link className="link" to="/about">
            Investors
          </Link>
          <Link className="link" to="/about">
            Term of Service
          </Link>
        </div>
        <div className="footer-heading footer-2">
          <h2>Contact US</h2>
          <Link className="link" to="/about">
            Job
          </Link>
          <Link className="link" to="/about">
            Support
          </Link>
          <Link className="link" to="/about">
            Verify
          </Link>
          <Link className="link" to="/about">
            certificate
          </Link>
          <Link className="link" to="/about">
            Sponsorship
          </Link>
        </div>
        <div className="footer-heading footer-3">
          <h2>Social Media</h2>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-email-form">
          <h2>Subscribe to our newsLetter</h2>
          <input type="email" placeholder="Enter your email..." />
          <button type="submit" value="submit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
