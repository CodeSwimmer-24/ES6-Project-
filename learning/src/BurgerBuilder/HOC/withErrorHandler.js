import React, { Component } from "react";
import Model from "../components/UI/Modal/Model";
import Aux from "./Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    errorHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Model modelClosed={this.errorHandler} show={this.state.error}>
            {this.state.error ? (
              <div style={{ display: "none" }}>{this.state.error.message}</div>
            ) : null}
          </Model>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
