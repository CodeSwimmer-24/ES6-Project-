import styled from "styled-components";

const media = {
  desktop: "@media(max-width:960px)",
  tablet: "@media(max-width:810px)",
  mobile: "@media(max-width:410px)",
};

export const FeatureBox = styled.div`
  max-width: 950px;
  height: 310px;
  display: flex;
  margin: auto;
  position: relative;
  /* top: -120px; */
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid #5d6b8f;

  ${media.desktop} {
    top: 0;
    height: max-content;
    margin: 2em;
    border: unset;
  }

  ${media.tablet} {
    flex-direction: column;
  }

  ${media.mobile} {
    margin: 1em 0;
  }
`;

export const Feature = styled.div`
  margin: 1em;
  padding: 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  ${media.desktop} {
    box-shadow: 1px 3px 20px #d1d1d1;
    border-radius: 15px;
    padding: 0.7em 1.5em 1em;
  }

  ${media.tablet} {
    border: unset;
  }

  ${media.mobile} {
    width: 75vw;
    margin: 1.5em auto;
  }

  img {
    width: 3em;
    height: 3em;
    margin-top: 2em;
  }

  h3 {
    margin: 1em auto;
    font-weight: 600;
    color: #0e2c79;
  }

  p {
    color: #555;
    font-weight: 300;
  }
`;
