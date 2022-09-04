import axios from "../../axios";
import React, { Component } from "react";

export default class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "",
  };

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    axios.post(`/posts`, post).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="NewPost">
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
