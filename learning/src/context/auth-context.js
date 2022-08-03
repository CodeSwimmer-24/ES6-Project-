import React from "React";

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});

export default authContext;
