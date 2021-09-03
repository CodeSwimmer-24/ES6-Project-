import styled from "styled-components";

const media = {
  desktop: "@media (max-width: 960px)",
  tablet: "@media (max-width: 760px)",
  mobile: "@media (max-width: 420px)",
};

export const Header = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  background: rgb(158, 23, 221)
    url("https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/a97371da-o-saas-heroshot_10000000lh1fi0ot000028.png")
    0 0 / cover no-repeat;
`;

export const HeaderContent = styled.div`
  position: absolute;
  top: 25vh;
  margin-left: 10vw;
  width: 35vw;
  color: #fff;
  letter-spacing: 1px;

  ${media.desktop} {
    position: relative;
    width: 85vw;
    margin: auto;
    left: 0;
    right: 0;
    top: 15vh;
  }

  h1 {
    font-size: 3em;
    padding: 5px 5px;

    ${media.desktop} {
      font-size: 2.5em;
    }

    ${media.tablet} {
      font-size: 2em;
    }
  }

  p {
    font-size: 1em;
    margin-top: 1.2em;
    line-height: 1.3em;

    ${media.tablet} {
      font-size: 0.8em;
    }
  }

  button {
    width: 10em;
    background-color: orangered;
    color: #fff;
    margin: 1.5em 0.7em;

    :hover {
      background-color: orangered;
      transform: scale(1.1);
    }

    :active {
      transform: scale(0.9);
    }
  }

  .close{
    background-color: transparent;
    color: blue;
    margin: -2em auto 0;

    :hover {
      background-color: transparent;
      transform: scale(1.1);
    }

    :active {
      transform: scale(0.9);
    }
  }
`;

export const HeaderVideo = styled.div`
  position: absolute;
  top: 20vh;
  right: 5vw;
  width: 460px;
  height: 360px;

  ${media.desktop} {
    position: relative;
    width: 85vw;
    height: 340px;
    margin: 1.5em auto 0;
    left: 0;
    right: 0;
  }

  ${media.mobile} {
    margin-top: 0em;
    height: 280px;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
