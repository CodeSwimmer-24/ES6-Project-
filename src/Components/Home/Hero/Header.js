import React from "react";
import "./Header.css";
import styled from "styled-components";
import HeroSlider, {
  Slide,
  SideNav,
  ButtonsNav,
  OverlayContainer,
} from "hero-slider";
// import { H2, H3 } from "components/UI/Text";
const StyledOverlayContainer = styled(OverlayContainer)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.02);
   
    back
    text-align: center;
    H1 {
      color: #292f45;
      font-size: 60px;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
    }
    H3 {
      margin: 0 36px;
      font-weight: 600;
      font-size: 20px;
      font-family: "Roboto", sans-serif;
    }
  }
`;
function Header() {
  return (
    <div>
      <HeroSlider
        // slidingAnimation="fade"
        // orientation="horizontal"
        // initialSlide={1}
        style={{
          backgroundColor: "#000",
          color: "#252e39",
          fontWeight: "900",
          marginTop: "-80px",
          position: "relative",
          fontSize: "22px",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 5000,
          height: "100vmin",
          transitionTimingFunction: "ease-in-out !important",
          transitionProperty: "transform !important ",
        }}
      >
        <StyledOverlayContainer>
          <h1>NiyX Chat Booth</h1>
          <h3>
            Slides&apos; and masks&apos; background blend mode set to luminosity
          </h3>
          <h3>Slides&apos; shouldRenderMask prop set to true</h3>
        </StyledOverlayContainer>

        <Slide
          shouldRenderMask
          navDescription="Rocky Waterfall"
          background={{
            // backgroundColor: "#2D7791",
            backgroundBlendMode: "luminosity",
            maskBackgroundBlendMode: "luminosity",
            backgroundImage:
              "https://99chats.com/wp-content/uploads/2020/01/online-chat.png",
          }}
        />

        <Slide
          shouldRenderMask
          navDescription="Palau - Pacific Ocean"
          background={{
            // backgroundColor: "#8A8A8A",
            backgroundBlendMode: "luminosity",
            maskBackgroundBlendMode: "luminosity",
            backgroundImage:
              "https://specials-images.forbesimg.com/imageserve/602962a5211c1ba898c7f6a6/960x0.jpg?fit=scale",
          }}
        />

        <Slide
          shouldRenderMask
          navDescription="Quepos - Costa Rica"
          background={{
            // backgroundColor: "#EA2329",
            backgroundBlendMode: "luminosity",
            maskBackgroundBlendMode: "luminosity",
            backgroundImage:
              "https://isoupdate.com/wp-content/uploads/2016/03/business-05.jpg",
          }}
        />

        <Slide
          shouldRenderMask
          navDescription="Mountain View"
          background={{
            // backgroundColor: "#292f45",
            backgroundBlendMode: "luminosity",
            maskBackgroundBlendMode: "luminosity",
            backgroundImage:
              "https://www.acquisition-international.com/wp-content/uploads/2020/03/How-to-Grow-Your-Business.jpg",
          }}
        />

        <ButtonsNav />
        <SideNav
          position={{
            top: "0",
            right: "0",
          }}
        />
      </HeroSlider>
    </div>
  );
}

export default Header;
