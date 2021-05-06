import React from "react";
import "./Innovation.css";
import image from "./Images/image4.jpeg";
function Innovation() {
  return (
    <div className="innovation">
      <div className="innovation__heading">
        <h1>Powering Customer Innovation</h1>
      </div>
      <div className="immovation__image">
        <img src={image} />
      </div>
    </div>
  );
}
export default Innovation;
