import React from "react";
import { AuthContext } from "../../App";

const login = (props) => (
  <AuthContext.Consumer>
    {(authContext) => {
      return (
        <button onClick={authContext.toogleAuth}>
          {authContext.isAuth ? "Logout" : "Login"}
        </button>
      );
    }}
  </AuthContext.Consumer>
);

export default login;
