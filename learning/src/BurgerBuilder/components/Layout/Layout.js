import React from "react";
import styled from "styled-components";
import Aux from "../../HOC/Aux";

const Main = styled.main`
  margin-top: 16px;
`;

const layout = (props) => {
  return (
    <Aux>
      <div>Tools,sidebar,Backdrop</div>
      <Main>{props.children}</Main>
    </Aux>
  );
};
export default layout;