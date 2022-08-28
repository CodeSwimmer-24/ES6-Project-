import React, { useState } from "react";
import styled from "styled-components";
import Aux from "../../HOC/Aux";
import Toolbar from "../Navigation/Toolbar";

const Main = styled.main`
  margin-top: 16px;
`;

const Layout = (props) => {
  const [show, setShow] = useState(true);

  const sidebarCloseHandler = () => {
    setShow(false);
  };

  return (
    <Aux>
      <Toolbar />
      {/* <SideBar open={show} closed={sidebarCloseHandler} /> */}
      <div>Tools,sidebar,Backdrop</div>
      <Main>{props.children}</Main>
    </Aux>
  );
};

export default Layout;
