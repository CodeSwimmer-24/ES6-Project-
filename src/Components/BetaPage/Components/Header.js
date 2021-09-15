import { Button } from "@material-ui/core";
import { React, useState } from "react";
import {
  Header,
  HeaderContent,
  HeaderVideo,
  FormContainer,
} from "./Header.style";
import HeaderImage from "../../../img/betaHeader.jpg";
import Form from "./Form";

export default () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Header>
      <HeaderContent>
        <h1>Success starts with a great product</h1>
        <p>
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
          Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
          posuere nibh lobortis et.
        </p>

        <Button onClick={() => setButtonPopup(true)}>Sign me Up</Button>
        <FormContainer id="signUpForm">
          <Form trigger={buttonPopup} setTrigger={setButtonPopup} />
        </FormContainer>
      </HeaderContent>
      <HeaderVideo>
        <img
          src={HeaderImage}
          alt=""
        />
      </HeaderVideo>
    </Header>
  );
};
