import ReactDOM from "react-dom/client";

import { CookiesProvider } from "react-cookie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import App from "./App.jsx";
import Transfer from "./pages/Transfer";

import "./styles/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Transfer /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </CookiesProvider>
);
