import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Team from "./Components/Team";
import Cards from "./Components/Cards";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
       
          <Route path="/team">
          <Navbar />
            <Team />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
         
          <Route path="/">
            <Navbar />
            <Header />
          </Route>
          
        </Switch>
      </Router>
          <Router>
            <Switch>
              <Route>
          
          <Cards />

              </Route>
            </Switch>
          </Router>
      
    </div>
  );
}

export default App;
