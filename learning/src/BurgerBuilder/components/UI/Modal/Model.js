import React, { Component } from "react";
import "./Model.css";
import Aux from "../../../HOC/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Model extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      return true;
    }
  }
  componentDidMount() {
    console.log("[Model] Will Mount");
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className="Modal">{this.props.children}</div>
      </Aux>
    );
  }
}

export default Model;
