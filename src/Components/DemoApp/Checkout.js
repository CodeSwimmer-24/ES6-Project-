import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div>
      {/* <h1>{product_id}</h1> */}
      {/* <img src={image} /> */}
      <h1>Hello</h1>
      <h1>Apple</h1>
    </div>
  );
}

export default Checkout;
