import ReactDOM from "react-dom/client";

import { CookiesProvider } from "react-cookie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import App from "./App.jsx";
import Transfer from "./pages/Transfer";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";

import "./styles/main.css";
import { PrivacyPolicy } from "./pages/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Transfer /> },
      { path: "my", element: <MyPage /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "404", element: <NotFound /> },
      { path: "quiz/:id", element: <Quiz /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </CookiesProvider>
);
