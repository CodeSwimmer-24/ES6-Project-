import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <article className="Post" onClick={props.clicked}>
          <h1>{props.title}</h1>
          <div className="Info">
            <div className="Author">{props.author}</div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Post;
