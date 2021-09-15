import styled from "styled-components";

export const Input = styled.input`
  display: block;
  padding: 0.3em 1em;
  border: 2px solid #5f5f5f;
  border-radius: 3px;
  margin: 0.3em auto 0.7em;
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

export const Label = styled.label`
  color: #5f5f5f;
  font-size: 1.1em;
  font-weight: bolder;
`;
