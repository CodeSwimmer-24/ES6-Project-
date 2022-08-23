import React from "react";
import Aux from "../../HOC/Aux";

const layout = (props) => {
  return (
    <Aux>
      <div>Tools,sidebar,Backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};
export default layout;
