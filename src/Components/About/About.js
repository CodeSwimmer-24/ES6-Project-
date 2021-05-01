import React from "react";
import { Button } from "@material-ui/core";
import "./About.css";
function About() {
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
      <div className="about__container">
        <div className="about__container1">
          <div className="about__container-Left">
            <h2>GREETINGS & ANNOUNCEMENTS</h2>
            <h1>Who said shopping online had to be lonely?</h1>
            <p>
              Making customers feel welcome as soon as they arrive at your store
              is a great way to start their experience. Bargainator will greet
              every customer onto your site just as they would in store!
            </p>
            <p>
              Once you have shoppers attention, make sure they know of any
              ongoing promotions, keep them in the loop with the latest brand
              news, or invite them to read your blog.
            </p>
            <h4>
              Engaging with customers early on their arrival will help reduce
              bounce rates and increase life-time value.
            </h4>
          </div>
          <div className="about__conatiner-Right">
            <img src="https://www.shift4shop.com/2015/images/shopping-cart-software/why-shopping-cart.png" />
          </div>
        </div>
        <div className="about__container2">
          <div className="about__conatiner-Right2">
            <img src="https://getbargainator.com/img/features/BG-FP-IMG4.png" />
          </div>
          <div className="about__container-Left2">
            <h2>BARGAIN FOR DISCOUNT</h2>
            <h1>
              Bargainator is the world's first negotiation chatbot made for
              eCommerce.
            </h1>
            <p>
              This unique feature brings offering discounts to a whole new level
              of engagement. Instead of offering discounts for no reason let
              your customers "work" for them. Bargainator is the world's first
              negotiation chatbot made for eCommerce
            </p>
          </div>
        </div>
        <div className="about__container3">
          <div className="about__container-right3">
            <img src="https://previews.123rf.com/images/yupiramos/yupiramos1903/yupiramos190318552/124265895-webpage-template-with-ecommerce-icons-vector-illustration-design.jpg " />
          </div>
          <div className="about__container-left3">
            <h1>CONVERT</h1>
            <p>
              Once Bargainator engage with your shopper in a negotiation chat,
              he has reached an amazing{" "}
              <span>conversion level of up to 8.75%</span> on customers stores
              just like yours.
            </p>
          </div>
        </div>
        <div className="about__container4">
          <div className="about__container-Left4">
            <h2>NOT? RETARGET</h2>
            <h1>
              From the moment a visitor arrives at your store, Bargainator only
              goal is to make sales for you...
            </h1>
            <p>
              and he never quits! if he doesn't succeed the first-time around,
              Bargainator will retarget shoppers using an automated sequence to
              convert lost sales.
            </p>
          </div>
          <div className="about__conatiner-Right4">
            <img src="https://getbargainator.com/img/features/BARGAINATOR-MADE-DEAL.png" />
          </div>
        </div>
      </div>
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
      <div className="about__setUp">
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
      </div>
      <div className="about__growList">
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
      <div className="about__lastSection">
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
      </div>
      <div className="about__footer">
        <h1>HIRE BARGAINATOR AND START GROWING WITH EASE!</h1>
        <h3>
          The intelligent sales assistant chatbot of the future. Using state of
          the art AI technology, Bargainator will begin generating extra revenue
          in minutes. Simply enable our pre-built interaction tools and campaign
          template and away you go!
        </h3>
        <Button>Get A Quote from NiyX</Button>
      </div>
    </div>
  );
}

export default About;
