import React from "react";
import Navbar from "./Nav/Navbar";
import Header from "./Hero/Header";
import IAmNiyx from "./Hero/IAmNiyx";
import Solution from "./Solution/Solution";
import Innovation from "./Innovation/Innovation";
import Faq from "./Faq/Faq";
import TeamHome from "./TeamHome/TeamHome";
import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";

export default () => {
  return (
    <div>
      <Navbar />
      <Header />
      <IAmNiyx />
      <Solution />
      <Innovation />
      <Faq />
      <TeamHome />
      <Footer />
      <Footer2 />
    </div>
  );
};
