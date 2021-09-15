import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";
export default () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__part part--one">
          <h2 className="part__title">Quick Links</h2>
          <Link className="footer__link" to="/">
            Home
          </Link>
          <Link className="footer__link" to="/about">
            About
          </Link>
          <Link className="footer__link" to="/beta">
            Join Beta
          </Link>
          <Link className="footer__link" to="/team">
            Our Team
          </Link>
          <Link className="footer__link" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="footer__part part--two">
          <h2 className="part__title">Reach Us</h2>
          {/* <Link className="footer__link" to="/job" target="_blank">
          Job
        </Link>
        <Link className="footer__link" to="/about">
          Support
        </Link>
        <Link className="footer__link" to="/about">
          Verify
        </Link>
        <Link className="footer__link" to="/about">
          certificate
        </Link>
        <Link className="footer__link" to="/about">
          Sponsorship
        </Link> */}
          <div>
            <h4>
              <i className="fa fa-phone"></i> : +91-99999 99999
            </h4>
          </div>
          <div>
            <h4>
              <i className="fa fa-envelope"></i> : info@neyx.in
            </h4>
          </div>
          <div>
            <h4>
              <i className="fa fa-map-marker"></i> : Kolkata, WB, IN
            </h4>
          </div>
        </div>
        <div className="footer__part part--three">
          <div className="subscribeUs">
            <h2 className="part__title">Subscribe Us</h2>
            <form className="subscribeUs__form">
              <input
                className="subscribeUs__input"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="subscribeUs__submit"
                type="submit"
                value="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div class="socialLinks">
            <h2 className="part__title">Social Media</h2>
            <div className="socialLink__container">
              <a className="socialLink" href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a className="socialLink" href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a className="socialLink" href="/">
                <i class="fab fa-instagram"></i>
              </a>
              <a className="socialLink" href="/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
