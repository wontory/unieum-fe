import { useEffect } from "react";

import { Provider, createStore } from "jotai";

import { Outlet } from "react-router-dom";
import TagManager from "react-gtm-module";

import { ThemeProvider } from "@mui/material";

import Layout from "./components/UI/Layout";
import theme from "./styles/theme";

const store = createStore();

const App = () => {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-PDVKXCT",
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
