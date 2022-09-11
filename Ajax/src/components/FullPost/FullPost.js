import React, { Component } from "react";
import "./FullPost.css";
import axios from "../../axios";

export default class FullPost extends Component {
  state = {
    loadedPosts: null,
  };
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.props.loadedPosts ||
        (this.state.loadedPosts &&
          this.state.loadedPosts.match.params.id != this.props.match.params.id)
      ) {
        axios
          .get(`/posts/${this.props.match.params.id}`)
          .then((response) => {
            this.setState({ loadedPosts: response.data });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  deletePostMethod = () => {
    axios
      .delete(`/posts/${this.props.match.params.match.params.id}`)
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    let post = <p>Please select a Post!</p>;
    if (this.props.id) {
      post = <p>loading...!</p>;
    }
    if (this.state.loadedPosts) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPosts.title}</h1>
          <p>{this.state.loadedPosts.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={() => this.deletePostMethod()}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}
