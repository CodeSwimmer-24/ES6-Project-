import React, { Component } from "react";
import "./FullPost.css";
import axios from "../../axios";

export default class FullPost extends Component {
  state = {
    loadedPosts: null,
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.props.loadedPosts ||
        (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)
      ) {
        axios
          .get(`/posts/${this.props.id}`)
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
    axios.delete(`/posts/${this.props.id}`).then((res) => {
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
