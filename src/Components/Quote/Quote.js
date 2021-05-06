import React, { useEffect } from "react";
import "./Quote.css";
import Form from "./Form/Form";
import Solution from "./Solution/Solution";
import Customer from "./Customer/Customer";
import Testimonial from "./Testimonials/Testimonial";
import QuoteFooter from "./Footer/QuoteFooter";
import Aos from "aos";
import "aos/dist/aos.css";
function Quote() {
  useEffect(() => {
    Aos.init({ dusration: 50000 });
  }, []);
  return (
    <div className="quote">
      <div className="quote__container">
        <img src="https://cdn2.techhq.com/wp-content/uploads/2020/10/shutterstock_1518160778-861x484.png" />
        <h1>GET INSURED AND FEEL SECRUED</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="form">
        <Form />
      </div>
      <div data-aos="fade-up" className="solution">
        <Solution />
      </div>
      <div data-aos="fade-down" className="costomer">
        <Customer />
      </div>
      <div data-aos="fade-up" className="testimonial">
        <Testimonial />
      </div>
      <div data-aos="fade-up" className="footer__quote">
        <QuoteFooter />
      </div>
    </div>
  );
}

export default Quote;
