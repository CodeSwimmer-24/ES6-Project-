import styled from "styled-components";

const media = {
  desktop: "@media (max-width: 1024px)",
  tablet: "@media (max-width: 920px)",
  tabletSmall: "@media (max-width: 768px)",
  mobile: "@media (max-width: 425px)",
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 80vw;
  margin-top: 2em;
  border-radius: 1em;
  background-color: #fff;
  font-family: "Roboto", sans-serif;

  ${media.desktop} {
    width: 90vw;
  }

  ${media.tabletSmall} {
    width: fit-content;
    flex-direction: column-reverse;
    height: fit-content;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 2em;
  margin: 0 2em auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;

  ${media.tablet} {
    padding: 1em;
  }

  ${media.smallTablet} {
    margin: auto;
  }

  .betaSignUpBtn {
    margin: 2em auto;
    width: 15em;
  }

  .betaSignUpBtn--close {
    margin: -1.2em;
    background-color: transparent;
    color: blue;

    :hover {
      background-color: transparent;
      color: blue;
    }
  }
`;

export const SubContainer = styled.div`
  :first-child {
    width: 40%;

    ${media.tablet} {
      width: 50%;
    }

    ${media.tabletSmall} {
      width: 100%;
    }
  }

  :last-child {
    height: 100%;
    width: 60%;
    background-color: #7046ff;
    color: #fff;
    border-radius: 0 1em 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;

    ${media.tablet} {
      width: 50%;
    }

    ${media.tabletSmall} {
      width: 100%;
      border-radius: 1em 1em 0 0;
    }

    div {
      margin: auto;

      h2 {
        font-size: 2.5em;
        max-width: 12em;

        ${media.tablet} {
          font-size: 1.7em;
          max-width: 20em;
        }
      }

      p {
        max-width: 25em;
      }
    }
  }
`;

export const Button = styled.button`
  height: 2.5em;
  width: 18em;
  border: 0;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  margin-right: 2em;
  display: flex;

  ${media.tabletSmall} {
    height: 0em;
  }

  img {
    height: 6em;

    ${media.mobile} {
      position: absolute;
      top: 1.5em;
      right: 1em;
    }
  }

  h1 {
    align-self: center;
    color: #000;
    font-size: 1.7em;
    font-weight: bolder;
    text-align: left;

    ${media.tabletSmall} {
      display: none;
    }
  }
`;
