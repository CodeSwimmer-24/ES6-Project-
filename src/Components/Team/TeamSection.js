import React, { useState } from "react";
import "./TeamSection.css";
import CancelIcon from "@material-ui/icons/Cancel";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
function Team({ name, post, image, work, summary, gif }) {
  const [state, setState] = useState(true);
  return (
    <div className="team">
      {state.visible ? (
        <div className="team__secondSection">
          <img src={image} />
          <div className="team__summary">
            <CancelIcon
              className="cancle__btn"
              onClick={() => {
                setState({ visible: !state.visible });
              }}
            />
            <p className="summary__discription">{summary}</p>
            <div className="team__socialMedia">
              <a href="###">
                <FacebookIcon className="team__facebook" />
              </a>
              <a href="###">
                <TwitterIcon className="team__tweetwe" />
              </a>
              <a href="###">
                <InstagramIcon className="team__instagram" />
              </a>
              <a href="###">
                <GitHubIcon className="team__github" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="team__mainSection">
          {" "}
          <img
            src={image}
            
            onClick={() => {
              setState({ visible: !state.visible });
            }}
          />{" "}
          <h1>{name}</h1>
          <h3>{post}</h3>
          <h4>{work}</h4>
        </div>
      )}
    </div>
  );
}

export default Team;
