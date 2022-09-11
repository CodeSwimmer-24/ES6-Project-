import axios from "../../axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    submitted: "",
  };

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    axios.post(`/posts`, post).then((res) => {
      console.log(res);
      this.setState({ submitted: true });
      this.props.history.push("/");
    });
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/" />;
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
        />
        <label>Content</label>
        <textarea
          name="content"
          rows="4"
          value={this.state.content}
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
        />
        <label>Author</label>
        <input
          name="author"
          rows="4"
          value={this.state.author}
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
        />
        <button onClick={this.postDataHandler}>Add post</button>
      </div>
    );
  }
}
