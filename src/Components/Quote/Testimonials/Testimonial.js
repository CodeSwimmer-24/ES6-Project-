import React from "react";
import styled from "styled-components";
import "./Testimonial.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
// Components
import HeroSlider, { Slide, SideNav } from "hero-slider";

// Assets
// import salta from "../VerticalSlider/backgrounds/Salta - Argentina.jpg";
// import scharbeutz from "../VerticalSlider/backgrounds/Scharbeutz - Germany.jpg";
// import selvaDiValGardena from "../VerticalSlider/backgrounds/Selva Di Val Gardena - Italy.jpg";
// import seoraksanMountains from "../VerticalSlider/backgrounds/Seoraksan Mountains - South Korea.jpg";

const Wrapper = styled.div`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #eaeff9;
    text-align: center;
    H2,
    H3 {
      margin: 0 36px;
    }
  }
`;
function Testimonial() {
  return (
    <div className="testimonail">
      <h1>Testimonials</h1>
      <p>What People Says About Us</p>

      <HeroSlider
        // slidingAnimation="top_to_bottom"
        // orientation="horizontal"
        // initialSlide={1}
        style={{
          color: "#292f45",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 4000,
          height: "70vmin",
          transitionTimingFunction: "ease-in-out !important",
          transitionProperty: "transform !important ",
        }}
      >
        <Slide
          background={{
            backgroundColor: "  #eaeff9",
          }}
        >
          <Wrapper>
            <div className="testimonial__container">
              <FormatQuoteIcon />
              <p>
                Lorem Ipsum ist ein einfacher Demo-Text für die Print- und
                Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der
                Standard Demo-Text "Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam.
              </p>
              <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/75/755f87b22d0cf6f2dacd7e259d4b0023f17d8571_full.jpg" />
              <h2>Kevin C. Lang</h2>
              <p>CEO, XYZ Corporation</p>
            </div>
          </Wrapper>
        </Slide>

        <Slide
          background={{
            backgroundColor: "  #eaeff9",
          }}
        >
          <Wrapper>
            <div className="testimonial__container">
              <FormatQuoteIcon />
              <p>
                Lorem Ipsum ist ein einfacher Demo-Text für die Print- und
                Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der
                Standard Demo-Text "Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam.
              </p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhGV_A-JjlH49zimzKwWwx771HhAEnsOyRMqqy00hnVIRa6cgMzHmtjYjLn2Am2z_xFs&usqp=CAU" />
              <h2>Elon Musk</h2>
              <p>CEO, XYZ Corporation</p>
            </div>
          </Wrapper>
        </Slide>

        <Slide
          background={{
            backgroundColor: "  #eaeff9",
          }}
        >
          <Wrapper>
            <div className="testimonial__container">
              <FormatQuoteIcon />
              <p>
                Lorem Ipsum ist ein einfacher Demo-Text für die Print- und
                Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der
                Standard Demo-Text "Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam.
              </p>
              <img src="https://i1.sndcdn.com/avatars-000469688319-4bp07i-t500x500.jpg" />
              <h2>Bill Gates</h2>
              <p>CEO, XYZ Corporation</p>
            </div>
          </Wrapper>
        </Slide>

        <Slide
          background={{
            backgroundColor: " #eaeff9",
          }}
        >
          <Wrapper>
            <div className="testimonial__container">
              <FormatQuoteIcon />
              <p>
                Lorem Ipsum ist ein einfacher Demo-Text für die Print- und
                Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der
                Standard Demo-Text "Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam.
              </p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhGV_A-JjlH49zimzKwWwx771HhAEnsOyRMqqy00hnVIRa6cgMzHmtjYjLn2Am2z_xFs&usqp=CAU" />
              <h2>Chelsea G. Goodrich</h2>
              <p>CEO, XYZ Corporation</p>
            </div>
          </Wrapper>
        </Slide>
      </HeroSlider>
    </div>
  );
}

export default Testimonial;
