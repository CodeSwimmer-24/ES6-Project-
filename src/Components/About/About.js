import React from "react";
import "./About.css";
import Display from "./Display";
import AboutFooter from "./AboutFooter"

export default () => {
  return (
    <div className="contact">
      <div className="contact__header"></div>
      <div className="contact__heading">
        <h1>About Us</h1>
      </div>
      <div className="header__headding">
        <h1>Sell more with Bargainator</h1>
        <h2>
          Bargainator offers a whole new shopping experience for your customers'
          while giving you the tools needed to grow your business. Hire
          Bagainator and let him do the work for you!
        </h2>
      </div>
      {/* <div className="header__subHedding">
        <h1>Engage with customer during their shopping journey</h1>
        <h2>Here's how Bargainator works for you:</h2>
      </div> */}
      <Display />
      <div className="about__toolsForGroth">
        <div className="tools__left">
          <h1>Tools for Growth</h1>
          <h3>
            Bargainator offers shoppers a one-of-the-kind customer experience.
            For merchants, it's all about the tools to grow your business!
          </h3>
        </div>
        <div className="tools__right">
          <img src="https://www.orangescrum.com/blog/wp-content/uploads/2019/02/What-Managers-searching-from-Project-Management-Tools.png" />
        </div>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,197.3C840,213,960,235,1080,213.3C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      {/* <div className="about__setUp">
        <div className="setup__left">
          <h2>SET UP CAMPAIGN</h2>
          <h1>
            Set up your campaigns with ease in just a few clicks, on selected
            products or collections.
          </h1>
          <p>
            Once your campaigns are running, use the stats provided within the
            Bargainator dashboard to do A/B testing, conversion rate
            optimization and watch your campaigns fuel your growth!
          </p>
          <img src="https://www.serpempire.com/content/serp.png" />
        </div>
        <div className="setup__right">
          <h2>CHAT TAKEOVER</h2>
          <h1>The most popular feature with our merchants!</h1>
          <p>
            Take over Bargainator at any time during any chat in progress, and
            interact with shoppers in real time. Gain valuable insights into
            your customers' and give them a whole new level of shopping
            experience. Bargainator understands that time is money! Save some by
            simply asking Bargainator to notify you when any new sessions are
            underway.
          </p>
          <img src="https://botsociety.io/blog/wp-content/uploads/2018/03/florence-chatbot.png" />
        </div>
      </div> */}
      {/* <div className="about__growList">
        <div className="list__details">
          <h2>GROW YOUR LIST</h2>
          <h1>Intrusive pop-ups are a thing of the past.</h1>
          <p>
            Shoppers do not want this kind of interaction anymore when browsing
            online. Bargainator is the perfect replacement for pop-ups and
            allows you to collect more emails with a non-intrusive and discreet
            widget.
          </p>
        </div>
        <div className="list__image">
          <img src="https://servixer.com/wp-content/uploads/2020/07/Email-marketing-strategy-05-700x544-1.png" />
        </div>
      </div> */}
      {/* <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,197.3C840,213,960,235,1080,213.3C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
      <div className="about__natural-leads">
        <h2>NURTURE YOUR LEADS</h2>
        <h1>
          Statistics show that only 3% of your visitors are ready to buy now!
          47% of shoppers would purchase at another time, while the last 50%
          will not.
        </h1>
        <p>
          Don't miss out on potential sales and use Bargainators automated
          remarketing features to keep potential clients in the loop, ready for
          future conversions
        </p>
        <img src="https://miro.medium.com/max/920/1*Ws3f125W8LHiWlZO0pap9w.jpeg" />
      </div>
      {/* <div className="about__lastSection">
        <div className="section__left">
          <div className="section__top">
            <h1>VOLUME DISCOUNT</h1>
            <p>
              Set different discounts as per the quantity of items added to the
              shopper's cart. Offer better discounts for high volume purchases.
            </p>
          </div>
          <div className="section__bottom">
            <h1>TEMPLATE EDITOR</h1>
            <p>
              All automated retargeting emails can be fully customized using our
              simple email template editor.
            </p>
          </div>
        </div>
        <div className="section__right">
          <div className="section__top">
            <h1>SLICK LOOK</h1>
            <p>
              Bargainator Chatbot widget is fully customizable to match your
              brand's vibe and integrates seamlessly to your store.
            </p>
          </div>
          <div className="section__bottom">
            <h1>PREMIUM CUSTOMER SERVICE</h1>
            <p>
              We can be reached in a single click directly from the app
              dashboard. We are always here to help. Our client's success is our
              top priority! Don't take our word for it, see our reviews!
            </p>
          </div>
        </div>
      </div> */}
      <AboutFooter />
    </div>
  );
};
