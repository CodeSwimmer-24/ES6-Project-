import React, { Component } from "react";
import Layout from "./BurgerBuilder/components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./BurgerBuilder/containers/Checkout/Checkout";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/">
                <BurgerBuilder />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
