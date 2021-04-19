import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IAmNiyx from "./Hero/IAmNiyx";
import Solution from "./Solution/Solution";
import Innovation from "./Innovation/Innovation";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";
import Header from "./Hero/Header";
import Navbar from "./Nav/Navbar";
function home() {
  return (
    <div>
      <Navbar />
      <Header />
      <IAmNiyx />
      <Solution />
      <Innovation />
      <Faq />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default home;
