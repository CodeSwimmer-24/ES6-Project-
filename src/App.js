import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Footer2 from "./Components/Home/Footer/Footer2";
import Service from "./Components/Servicess/Service";
import Demo from "./Components/DemoApp/Demo";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Nav/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Quote from "./Components/Quote/Quote";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/quote">
            <Navbar />
            <Quote />
            <Footer />
            <Footer2 />
          </Route>
          <Route path="/service">
            <Navbar />
            <Service />
            <Footer />
            <Footer2 />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
            <Footer />
            <Footer2 />
          </Route>
          <Route path="/team">
            <Navbar />
            <Team />
            {/* <Footer2 /> */}
          </Route>
          <Route path="/demo">
            <Navbar />
            <Demo />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
            <Footer />
            <Footer2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
