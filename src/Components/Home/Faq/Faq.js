import React from "react";
import "./Faq.css";
export default () => {
  return (
    <div className="faq__container">
      <h1 className="faq__heading">FAQ's</h1>
      <div className="faqs">
        <div className="faq">
          <h2 className="faq__title">Is the installation to hectic ?</h2>
          <p className="faq__desc">
            The installation is kept as simple as possible, so that you’ll be at
            ease to work with us.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">
            Will the maintenance be our responsibility?
          </h2>
          <p className="faq__desc">
            No, the whole maintenance of chatbot would be taken care by NeyX.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">
            Will the privacy be a concern for the customers?
          </h2>
          <p className="faq__desc">
            No, the security would be kept high with an agreement.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">
            Will the integration required, affect our system?
          </h2>
          <p className="faq__desc">
            Absolutely not, it would be kept light in weight and easy to use,
            just like any other library.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">
            What all data would be required from us?
          </h2>
          <p className="faq__desc">
            The data requirements are pretty straight forward, the product data,
            prices and some more details would be required.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">Will our data be secure?</h2>
          <p className="faq__desc">Yes, it would be absolutely secure.</p>
        </div>
        <div className="faq">
          <h2 className="faq__title">
            How much is this negotiation effective ?
          </h2>
          <p className="faq__desc">
            It basically depends on how much is the person able to negotiate, it
            doesn’t follow a specific pattern.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">
            Will it create some loss for the seller ?
          </h2>
          <p className="faq__desc">
            No, it won’t create any selling loss for the seller.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">How will it benefit our company ?</h2>
          <p className="faq__desc">
            Its main agenda is to increase the sales of the company and
            interaction with customer. It helps in knowing it’s customers
            better.
          </p>
        </div>
        <div className="faq">
          <h2 className="faq__title">
            Can it cause any loss to the potential buyer ?
          </h2>
          <p className="faq__desc">
            No, the suitability of prices is in the hands of the buyer so it can
            never cause any harm to the buyer.
          </p>
        </div>
      </div>
      <div className="faq__image__container">
        <img
          className="faq__image"
          src="https://img2.helpnetsecurity.com/posts/airdroid.png"
        />
      </div>
    </div>
  );
};
