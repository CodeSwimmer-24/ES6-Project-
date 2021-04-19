import React from "react";
import "./IAmNeyx.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
function IAmNiyx() {
  return (
    <div className="niyx">
      <div className="neyx__container">
        <div className="neyx__containerRight">
          {/* https://img.freepik.com/free-vector/chat-concept-illustration_114360-129.jpg?size=338&ext=jpg */}
          <img src="https://servixer.com/wp-content/uploads/2020/07/Email-marketing-strategy-05-700x544-1.png" />
        </div>
        <div className="neyx__containerleft">
          <h1>
            Hi, I'm NeyX,<span> Skilled Administrative</span>
            <span> Support Professional</span>
          </h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.{" "}
          </p>
          <Link to="/about" className="neyx__button">
            <Button>Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IAmNiyx;
