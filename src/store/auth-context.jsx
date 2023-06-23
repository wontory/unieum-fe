import React, { useState, useLayoutEffect } from "react";

import { userApi } from "../apis/userApi";
import { authApi } from "../apis/authApi";

const AuthContext = React.createContext({
  isSignedIn: false,
});

export const AuthContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useLayoutEffect(() => {
    if (isSignedIn === false) {
      userApi
        .getIsSignedIn()
        .then((res) => {
          setIsSignedIn(true);
        })
        .catch((err) => {
          setIsSignedIn(false);
        });
    }
  }, []);

  const handleSignOut = async () => {
    try {
      const res = await authApi.postSignOut();
      if (!!res.data.data.id) setIsSignedIn(false);
    } catch (err) {}
    setIsSignedIn(false);
    location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: isSignedIn,
        onSignOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
