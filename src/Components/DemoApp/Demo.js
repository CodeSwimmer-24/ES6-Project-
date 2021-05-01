import React from "react";
import "./Demo.css";
import Checkout from "./Checkout";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Demo() {
  return (
    <Router>
      <div className="demo">
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Demo;
