import { useState, useLayoutEffect } from "react";

import AuthContext from "./store/auth-context";

import { Outlet } from "react-router-dom";

import { userApi } from "./apis/userApi";
import { authApi } from "./apis/authApi";

import Layout from "./components/ui/layout/Layout";

const App = () => {
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
      <Layout>
        <Outlet />
      </Layout>
    </AuthContext.Provider>
  );
};

export default App;
