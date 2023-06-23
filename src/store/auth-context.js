import React from "react";

const AuthContext = React.createContext({
  isSignedIn: false,
});

export default AuthContext;
