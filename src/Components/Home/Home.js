import React from "react";
import IAmNiyx from "./Hero/IAmNiyx";
import Solution from "./Solution/Solution";
import Innovation from "./Innovation/Innovation";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";
import Header from "./Hero/Header";
import Navbar from "./Nav/Navbar";
import TeamHome from "./TeamHome/TeamHome";
function home() {
  return (
    // Kya hua kuch kaam nahi kr raha kaha chale gai app ??
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
}

export default home;
