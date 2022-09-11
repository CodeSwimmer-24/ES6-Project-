import React, { Component } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NewPost from "../../components/NewPost/NewPost";
import asyncComponent from "../../HOC/asyncComponent";
import Posts from "../Posts/Posts";
// import NewPost from "../../components/NewPost/NewPost";

const AsyncNewPost = asyncComponent(() => {
  return import("../../components/NewPost/NewPost");
});
export default class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/" component={Posts} />
          {/* <Redirect from="/" to="/post" /> */}
          {/* <Route path="/post/:id" component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}
