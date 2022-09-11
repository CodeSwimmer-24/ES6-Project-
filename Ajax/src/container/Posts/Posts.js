import React from "react";
import { Link, Route } from "react-router-dom";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";

class Posts extends React.Component {
  state = {
    posts: [],
  };

  postClick = (id) => {
    this.setState({ selectedPostId: id });
    // this.props.history.push({ pathName: "/" + id });
  };

  componentDidMount() {
    console.log(this.props);
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPost });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ error: true });
      });
  }
  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>Something went wrong!</p>
    );

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={"/post/" + post.id} key={post.id}>
            <Post
              title={post.title}
              key={post.id}
              author={post.author}
              clicked={() => this.postClick(post.id)}
            />
          </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path="/post/:id" component={FullPost} />
      </div>
    );
  }
}

export default Posts;
