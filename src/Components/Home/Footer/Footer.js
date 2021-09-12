import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";
export default () => {
  return (
    <footer className="footer__container">
      <div className="footer__part part--one">
        <h2 className="part__title">About Us</h2>
        <Link className="footer__link" to="/about">
          Blog
        </Link>
        <Link className="footer__link" to="/about">
          Demo
        </Link>
        <Link className="footer__link" to="/about">
          Customers
        </Link>
        <Link className="footer__link" to="/about">
          Investors
        </Link>
        <Link className="footer__link" to="/about">
          Term of Service
        </Link>
      </div>
      <div className="footer__part part--two">
        <h2 className="part__title">Contact Us</h2>
        <Link className="footer__link" to="/job" target="_blank">
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
        </Link>
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
    </footer>
  );
};
