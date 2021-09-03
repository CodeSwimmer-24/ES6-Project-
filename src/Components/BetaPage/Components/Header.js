import { Button } from "@material-ui/core";
import { React, useState } from "react";
import {
  Header,
  HeaderContent,
  HeaderVideo,
  FormContainer,
} from "./Header.style";
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

        <Button onClick={() => setButtonPopup(true)}>Sign Up</Button>
        <FormContainer id="signUpForm">
          <Form trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </FormContainer>
      </HeaderContent>
      <HeaderVideo>
        <img
          src="https://resources.construx.com/wp-content/uploads/2016/08/video-placeholder-brain-bites.png"
          alt=""
        />
      </HeaderVideo>
    </Header>
  );
};
