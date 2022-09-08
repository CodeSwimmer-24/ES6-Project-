import React, { Component } from "react";
import "./Model.css";
import Aux from "../../../HOC/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Model extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.show !== this.props.show) {
    //   return true;
    // }
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  componentDidMount() {
    console.log("[Model] Will Mount");
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transparent: this.props.show
              ? "transparentY(0)"
              : "transparentY(0)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Model;
