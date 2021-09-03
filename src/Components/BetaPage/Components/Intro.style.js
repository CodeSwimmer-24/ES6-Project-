import styled from "styled-components";

const media = {
  desktop: "@media (max-width: 960px)",
  tablet: "@media (max-width: 660px)",
  mobile: "@media (max-width: 510px)",
};

export const About = styled.div`
  max-width: 950px;
  display: flex;
  margin: auto;
  justify-content: space-around;
  padding: 10px;
  top: -70px;
  position: relative;
  color: darkblue;

  ${media.desktop} {
    top: 0;
    margin: 5em auto 3em;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  ${media.mobile} {
    max-width: 360px;
  }

  h3 {
    width: 320px;
    font-size: 1.5em;

    ${media.mobile} {
      width: fit-content;
    }
  }

  p {
    width: 450px;
    font-size: 1em;

    ${media.desktop} {
      margin-top: 2em;
      margin-bottom: 0;
    }

    ${media.mobile} {
      max-width: 280px;
      width: fit-content;
    }
  }
`;

export const Intro = styled.div`
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bCJh250pmuy8wYv9BP9VmVu5MEUpgUU5zAD5Nr1-i7zRvRYw3A_ZznEBVzfT7oWJSnY&usqp=CAU")
    0 / cover;
  height: 400px;
  display: flex;
`;

export const IntroContent = styled.div`
  margin: auto;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: darkblue;

  h6 {
    letter-spacing: 3px;
    font-size: 0.8em;
    margin-bottom: 3em;
  }

  h2 {
    margin-bottom: 0.7em;
    font-size: 2.5em;

    ${media.mobile} {
      font-size: 1.8em;
      margin: auto 0.7em 0.7em;
    }
  }

  p {
    ${media.tablet} {
      margin: auto 1.2em;
    }

    ${media.mobile} {
      font-size: 0.9em;
    }
  }
`;

export const PlayButton = styled.button`
  height: 7em;
  width: 7em;
  border: none;
  margin-bottom: 2em;
  border-radius: 50%;
  background: darkblue;

  polygon,
  path {
    transition: 1s;
    opacity: 0.5;
    fill: rgb(0, 183, 283);
  }

  path {
    fill: darkblue;
  }
`;
