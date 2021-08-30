import React from "react";

export default () => {
  return (
    <>
      <div className="about">
        <h3 className="about__title">
          A foundation built for scale and forsight
        </h3>
        <p className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
          tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.
        </p>
      </div>
      <div className="intro">
        <div className="intro__container">
          <button className="play-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
              <polygon
                class="play-btn__svg"
                points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
              />
              <path
                class="play-btn__svg"
                d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"
              />
            </svg>
          </button>
          <p className="play-btn__desc">WATCH VIDEO</p>
          <h2 className="intro__title">Unlock the potential</h2>
          <p className="intro__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
            tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.
          </p>
        </div>
      </div>
    </>
  );
};
