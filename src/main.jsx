import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import My from "./pages/My.jsx";
import GenerateComplete from "./pages/GenerateComplete.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/my", element: <My /> },
      { path: "/quiz/:id" },
      { path: "/privacy", element: <PrivacyPolicy /> },
      // test
      { path: "/test1", element: <GenerateComplete /> },
      // 404
      { path: "/*" },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
