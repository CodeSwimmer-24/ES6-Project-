import styled from "styled-components";

export const Input = styled.input`
  display: block;
  padding: 0.1em 1em;
  border: none;
  border-bottom: 1.5px solid #000;
  margin-right: 1em;
  margin-bottom: 1.5em;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1em;

  :focus {
    outline: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }
`;
