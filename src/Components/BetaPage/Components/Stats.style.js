import styled from "styled-components";

const media = {
  mobile: "@media (min-width: 450px)",
};

export const Stats = styled.div`
  margin: 2.5em 1.5em;
  color: darkblue;

  h1 {
    font-size: 1.8em;
    text-align: center;
  }

  p {
    text-align: center;
    max-width: 920px;
    margin: 1.5em auto 0;
  }

  .listFeature {
    box-shadow: unset;
    margin: 0 auto;

    ${media.mobile} {
      display: block;
      padding: 0.5em;
    }

    img,
    h3 {
      ${media.mobile} {
        display: inline-block;
        margin: 0;
      }
    }

    img {
      ${media.mobile} {
        position: relative;
        top: 1.5em;
      }
    }

    h3 {
      ${media.mobile} {
        margin: 0 1em 2em;
      }
    }
    p {
      max-width: 360px;
      margin: auto;
    }
  }
`;
