import React from "react";
import { About, Intro, IntroContent, PlayButton } from "./Intro.style";

export default () => {
  return (
    <>
      <About>
        <h3> A foundation built for scale and forsight</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
          tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.
        </p>
      </About>
      <Intro>
        <IntroContent>
          <PlayButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
              <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
              <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
            </svg>
          </PlayButton>
          <h6>WATCH VIDEO</h6>
          <h2>Unlock the potential</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
            tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.
          </p>
        </IntroContent>
      </Intro>
    </>
  );
};
