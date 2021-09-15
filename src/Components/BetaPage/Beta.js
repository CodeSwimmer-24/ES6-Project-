import React from "react";
import Header from "./Components/Header";
import Roadmap from "../Home/Roadmap/Roadmap";
import Solution from "../Home/Solution/Solution";
import Display from "../About/Display";
import AboutFooter from "../About/AboutFooter";
// import Features from "./Components/Features";
// import Intro from "./Components/Intro";
// import Stats from "./Components/Stats";

export default () => {
  return (
    <>
      <Header />
      <hr />
      <Roadmap />
      <Solution />
      {/* <Display />
      <AboutFooter /> */}
      {/* <Features /> */}
      {/* <Intro /> */}
      {/* <Stats /> */}
    </>
  );
};
