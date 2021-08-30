import React from "react";
import Features from "./Components/Features";
import BetaHeader from "./Components/BetaHeader";
import BetaIntro from "./Components/BetaIntro";
import BetaStats from "./Components/BetaStats";
import "./Beta.css";

export default () => {
  return (
    <>
      <BetaHeader />
      <Features />
      <BetaIntro />
      <BetaStats />
    </>
  );
};
